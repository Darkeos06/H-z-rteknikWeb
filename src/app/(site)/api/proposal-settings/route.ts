import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'
import type { SiteSetting } from '@/payload-types'

export async function GET() {
  try {
    const payload = await getPayload({ config })

    const [settings, monthlyProposalCount] = await Promise.all([
      payload.findGlobal({ slug: 'site-settings', depth: 1 }),
      payload.count({
        collection: 'proposals',
        where: {
          proposalDate: {
            like: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(
              2,
              '0',
            )}-`,
          },
        },
      }),
    ])

    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const nextNum = monthlyProposalCount.totalDocs + 13
    const suggestedNumber = `HT-${year}/${month}-${String(nextNum).padStart(3, '0')}`

    const typedSettings = settings as SiteSetting
    const d = typedSettings.proposalDefaults || {}

    let logoUrl: string | null = null
    const logo = typedSettings.logo
    if (logo && typeof logo === 'object' && 'url' in logo) {
      logoUrl = (logo as { url?: string }).url ?? null
    }

    const contactPhone = [typedSettings.contact?.phone, typedSettings.contact?.secondaryPhone]
      .filter(Boolean)
      .join(' / ')

    return NextResponse.json({
      suggestedNumber,
      logoUrl,
      companyName: d.companyName || typedSettings.companyName || '',
      companySubtitle:
        d.companySubtitle ||
        typedSettings.company_description ||
        'Elektrik - Elektronik - Otomasyon - Mekanik - Isıtma - Soğutma',
      companyAddress: d.companyAddress || typedSettings.contact?.address || '',
      companyPhone: d.companyPhone || contactPhone || '',
      companyEmail: d.companyEmail || typedSettings.contact?.email || '',
      companyTaxOffice: d.companyTaxOffice || '',
      companyTaxNumber: d.companyTaxNumber || '',
      validity: d.validity || '10 GÜN',
      payment: d.payment || 'Nakit / EFT / Havale',
      paymentMethod: d.paymentMethod || 'Peşin / EFT / Havale',
      bankName: d.bankName || '',
      bankAccount: d.bankAccount || '',
      generalTerms:
        d.generalTerms ||
        'Fiyata %20 KDV dahil değildir.\nProforma fatura bilgi amaçlıdır, resmi belge yerine geçmez.\nFiyata malzeme, nakliye ve işçilik dahildir.',
      warrantyTerms:
        d.warrantyTerms ||
        'Doğal afet ve mücbir sebepler hariç malzemelerimiz 2 yıl HIZIR TEKNİK garantisi altındadır.\nDoğal afet ve mücbir sebepler hariç işçiliğimiz 2 yıl HIZIR TEKNİK garantisi altındadır.\nMalzeme tedariği müşteriye ait olan işlerde, işin yapım esnasında veya tesliminden sonra malzemeden kaynaklı çıkabilecek sorunlarda servis ve onarım ücreti alınır.',
      contractorName: d.contractorName || typedSettings.companyName || 'HIZIR TEKNİK',
    })
  } catch (error) {
    console.error('Error fetching proposal settings:', error)
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const payload = await getPayload({ config })
    const body = (await request.json()) as Partial<NonNullable<SiteSetting['proposalDefaults']>>

    const currentSettings = (await payload.findGlobal({
      slug: 'site-settings',
      depth: 0,
    })) as SiteSetting

    const currentDefaults = currentSettings.proposalDefaults || {}

    const updatedSettings = (await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        proposalDefaults: {
          ...currentDefaults,
          companyName: body.companyName ?? currentDefaults.companyName ?? '',
          companySubtitle: body.companySubtitle ?? currentDefaults.companySubtitle ?? '',
          companyAddress: body.companyAddress ?? currentDefaults.companyAddress ?? '',
          companyPhone: body.companyPhone ?? currentDefaults.companyPhone ?? '',
          companyEmail: body.companyEmail ?? currentDefaults.companyEmail ?? '',
          companyTaxOffice: body.companyTaxOffice ?? currentDefaults.companyTaxOffice ?? '',
          companyTaxNumber: body.companyTaxNumber ?? currentDefaults.companyTaxNumber ?? '',
          validity: body.validity ?? currentDefaults.validity ?? '',
          payment: body.payment ?? currentDefaults.payment ?? '',
          paymentMethod: body.paymentMethod ?? currentDefaults.paymentMethod ?? '',
          bankName: body.bankName ?? currentDefaults.bankName ?? '',
          bankAccount: body.bankAccount ?? currentDefaults.bankAccount ?? '',
          generalTerms: body.generalTerms ?? currentDefaults.generalTerms ?? '',
          warrantyTerms: body.warrantyTerms ?? currentDefaults.warrantyTerms ?? '',
          contractorName: body.contractorName ?? currentDefaults.contractorName ?? '',
        },
      },
    })) as SiteSetting

    return NextResponse.json({
      success: true,
      proposalDefaults: updatedSettings.proposalDefaults,
    })
  } catch (error) {
    console.error('Error updating proposal settings:', error)
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 })
  }
}
