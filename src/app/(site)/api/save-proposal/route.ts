import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const payload = await getPayload({ config })
    const { user } = await payload.auth({ headers: req.headers })

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await req.json()
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const monthlyProposalCount = await payload.count({
      collection: 'proposals',
      where: {
        proposalDate: {
          like: `${year}-${month}-`,
        },
      },
    })
    const nextNum = monthlyProposalCount.totalDocs + 13
    const proposalNumber = `HT-${year}/${month}-${String(nextNum).padStart(3, '0')}`

    const proposal = await payload.create({
      collection: 'proposals',
      data: {
        ...data,
        proposalNumber,
      },
    })

    return NextResponse.json({ success: true, id: proposal.id, proposalNumber })
  } catch (error) {
    console.error('Error saving proposal:', error)
    return NextResponse.json({ error: 'Teklif kaydedilemedi.' }, { status: 500 })
  }
}
