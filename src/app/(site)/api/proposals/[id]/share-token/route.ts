import config from '@payload-config'
import { getPayload } from 'payload'

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: req.headers })

  if (!user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  const proposal = await payload.findByID({
    collection: 'proposals',
    id: Number(id),
    overrideAccess: true,
  })

  // Reuse existing token if still valid
  if (proposal.shareToken && proposal.shareTokenExpiry && new Date(proposal.shareTokenExpiry) > new Date()) {
    return Response.json({ token: proposal.shareToken, expiry: proposal.shareTokenExpiry })
  }

  // Generate new token — two UUIDs concatenated for length/security
  const token = crypto.randomUUID().replace(/-/g, '') + crypto.randomUUID().replace(/-/g, '')

  const expiry = new Date()
  expiry.setDate(expiry.getDate() + 7)
  const expiryISO = expiry.toISOString()

  await payload.update({
    collection: 'proposals',
    id: Number(id),
    data: { shareToken: token, shareTokenExpiry: expiryISO },
    overrideAccess: true,
  })

  return Response.json({ token, expiry: expiryISO })
}
