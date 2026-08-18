import config from '@payload-config'
import { headers as getHeaders } from 'next/headers'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

interface RouteContext {
  params: Promise<{ id: string }>
}

export async function GET(_req: Request, { params }: RouteContext) {
  try {
    const payload = await getPayload({ config })
    const headers = await getHeaders()
    const { user } = await payload.auth({ headers })

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const proposal = await payload.findByID({ collection: 'proposals', id: Number(id) })

    return NextResponse.json(proposal)
  } catch {
    return NextResponse.json({ error: 'Teklif bulunamadı.' }, { status: 404 })
  }
}

export async function PATCH(req: Request, { params }: RouteContext) {
  try {
    const payload = await getPayload({ config })
    const headers = await getHeaders()
    const { user } = await payload.auth({ headers })

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const data = await req.json()
    const proposal = await payload.update({
      collection: 'proposals',
      id: Number(id),
      data,
    })

    return NextResponse.json({ success: true, proposal })
  } catch {
    return NextResponse.json({ error: 'Teklif güncellenemedi.' }, { status: 500 })
  }
}

export async function DELETE(_req: Request, { params }: RouteContext) {
  try {
    const payload = await getPayload({ config })
    const headers = await getHeaders()
    const { user } = await payload.auth({ headers })

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params

    await payload.delete({
      collection: 'proposals',
      id: Number(id),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Teklif silinemedi.' }, { status: 500 })
  }
}
