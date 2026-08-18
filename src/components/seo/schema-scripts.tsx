import type { SchemaOrgData } from '@/lib/seo/types'

interface SchemaScriptsProps {
  schemas: SchemaOrgData[]
}

export function SchemaScripts({ schemas }: SchemaScriptsProps) {
  if (!schemas || schemas.length === 0) return null

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${schema.type}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema.data) }}
        />
      ))}
    </>
  )
}
