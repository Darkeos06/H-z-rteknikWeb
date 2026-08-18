# Payload CMS Seed Utilities

This module provides utility functions to easily create records for each collection in the Hızır Teknik CMS. Instead of hardcoded example data, you can use these functions to build your own seed data programmatically.

## Installation

No installation needed - the utilities are part of your project.

## Usage

### Basic Example

```typescript
import {
  getPayloadInstance,
  createAuthor,
  createServiceCategory,
  createService,
  createPost,
  createPage,
} from './seed'

const customSeed = async () => {
  const payload = await getPayloadInstance()

  // Create an author
  const author = await createAuthor(payload, {
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    title: 'Teknik Uzman',
    bio: 'Experienced technical expert with 10 years in the field',
    status: 'active',
    featured: true,
  })

  console.log('Created author:', author.id)
}

customSeed()
```

## Available Utilities

### Helper Functions

#### `getPayloadInstance()`
Returns a Payload instance for database operations.

```typescript
const payload = await getPayloadInstance()
```

#### `createRichText(children: any[])`
Creates a complete Lexical rich text structure.

```typescript
const richText = createRichText([
  createRichTextParagraph('This is a paragraph'),
  createRichTextHeading('This is a heading', 'h2'),
])
```

#### `createRichTextParagraph(text: string)`
Creates a paragraph node for rich text.

#### `createRichTextHeading(text: string, tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')`
Creates a heading node for rich text.

#### `createRichTextList(items: string[], listType?: 'bullet' | 'number')`
Creates a list node for rich text.

```typescript
const list = createRichTextList(
  ['Item 1', 'Item 2', 'Item 3'],
  'bullet'
)
```

---

### Author Functions

#### `createAuthor(payload: Payload, data: AuthorData)`

Creates an author record.

**Parameters:**
```typescript
interface AuthorData {
  name: string              // Required
  email: string             // Required (must be unique)
  title?: string            // Job title
  bio?: string              // Biography text
  status?: 'active' | 'inactive'
  featured?: boolean
  social?: {
    linkedin?: string
    twitter?: string
    instagram?: string
  }
}
```

**Example:**
```typescript
const author = await createAuthor(payload, {
  name: 'Mehmet Demir',
  email: 'mehmet@example.com',
  title: 'Proje Yöneticisi',
  bio: '15 yıllık deneyim',
  status: 'active',
  featured: true,
  social: {
    linkedin: 'https://linkedin.com/in/mehmetdemir',
  },
})
```

---

### Category Functions

#### `createPostCategory(payload: Payload, data: PostCategoryData)`

Creates a blog post category.

**Parameters:**
```typescript
interface PostCategoryData {
  title: string
  description: string
  featured_image?: number | string  // Media ID
}
```

**Example:**
```typescript
const category = await createPostCategory(payload, {
  title: 'Elektrik Sistemleri',
  description: 'Elektrik tesisatı hakkında bilgiler',
})
```

#### `createServiceCategory(payload: Payload, data: ServiceCategoryData)`

Creates a service category.

**Parameters:**
```typescript
interface ServiceCategoryData {
  title: string
  description: string
  icon?: string              // Icon identifier
  content?: string           // Rich text content
  featured_image?: number | string
}
```

**Example:**
```typescript
const serviceCategory = await createServiceCategory(payload, {
  title: 'Elektrik Tesisat',
  description: 'Elektrik tesisatı hizmetleri',
  icon: 'elektrik-tesisat',
  content: 'Profesyonel elektrik tesisat hizmetleri sunuyoruz.',
})
```

---

### Service Functions

#### `createService(payload: Payload, data: ServiceData)`

Creates a service record with blocks.

**Parameters:**
```typescript
interface ServiceData {
  title: string
  icon?: string              // See Services.ts for valid icon values (84+ options)
  description: string
  featured?: boolean
  related_category?: number  // Category ID
  featured_image?: number    // Media ID
  blocks?: ServiceDescriptionBlock[]
  meta?: {
    title?: string
    description?: string
  }
}

interface ServiceDescriptionBlock {
  title: string
  description: string
  features: string[]
}
```

**Valid Icon Values:**
See `/src/collections/Services.ts` lines 114-281 for the complete list of 84+ available icon values. Common examples include:
- `'elektrik-ariza-onarimi'`
- `'kombi-montaj-tamir-ve-bakimi'`
- `'klima-montaj-sokum-ve-bakimi'`
- `'su-kacagi-tespiti-ve-tamiri'`
- `'tikaniklik-acma-hizmeti'`

**Example:**
```typescript
const service = await createService(payload, {
  title: 'Elektrik Arıza Onarımı',
  icon: 'elektrik-ariza-onarimi',
  description: '7/24 elektrik arıza onarım hizmeti',
  featured: true,
  related_category: categoryId,
  blocks: [
    {
      title: 'Hizmet Detayları',
      description: 'Profesyonel ekibimizle hızlı çözüm',
      features: [
        '7/24 Acil Servis',
        'Hızlı Müdahale',
        'Uygun Fiyat',
      ],
    },
  ],
  meta: {
    title: 'Elektrik Arıza Onarımı | Hızır Teknik',
    description: 'Profesyonel elektrik arıza onarım hizmeti',
  },
})
```

---

### Blog Post Functions

#### `createPost(payload: Payload, data: PostData)`

Creates a blog post with rich text content.

**Parameters:**
```typescript
interface PostData {
  title: string
  description: string
  content: any[]             // Rich text children nodes
  author?: number | string   // Author ID
  post_category?: number | string
  related_service_category?: number | string
  featured_image?: number | string
  meta?: {
    title?: string
    description?: string
  }
}
```

**Example:**
```typescript
const post = await createPost(payload, {
  title: 'Elektrik Arızalarında Nelere Dikkat Edilmeli?',
  description: 'Elektrik arızalarında dikkat edilmesi gerekenler',
  content: [
    createRichTextHeading('Giriş', 'h2'),
    createRichTextParagraph('Elektrik arızaları ciddi sorunlara yol açabilir...'),
    createRichTextHeading('Önemli Noktalar', 'h2'),
    createRichTextList([
      'Profesyonel yardım alın',
      'Sigortayı kontrol edin',
      'Kendiniz müdahale etmeyin',
    ], 'number'),
  ],
  author: authorId,
  post_category: postCategoryId,
  meta: {
    title: 'Elektrik Arızalarında Nelere Dikkat Edilmeli? | Blog',
    description: 'Elektrik arızalarında dikkat edilecek önemli noktalar',
  },
})
```

---

### Page Functions

#### `createPage(payload: Payload, data: PageData)`

Creates a page with blocks.

**Parameters:**
```typescript
interface PageData {
  title: string
  description?: string
  blocks: any[]              // Array of block objects
  meta?: {
    title?: string
    description?: string
  }
}
```

**Block Creation Functions:**

##### `createHomeHeroBlock(data: HomeHeroBlock)`
```typescript
interface HomeHeroBlock {
  headingRotation: string[]
  subHeading?: string
  description?: string
  featuredServices?: (number | string)[]
}
```

##### `createServicesCarouselBlock(data: ServicesCarouselBlock)`
```typescript
interface ServicesCarouselBlock {
  subtitle?: string
  title?: string
}
```

##### `createPageHeroBlock(data: PageHeroBlock)`
```typescript
interface PageHeroBlock {
  title: string
  description?: string
}
```

##### `createRichTextBlock(data: RichTextBlock)`
```typescript
interface RichTextBlock {
  content: any[]  // Rich text children
}
```

**Example:**
```typescript
const homePage = await createPage(payload, {
  title: 'Ana Sayfa',
  description: 'Hızır Teknik ana sayfa',
  blocks: [
    createHomeHeroBlock({
      headingRotation: [
        'Profesyonel Teknik Hizmetler',
        'Güvenilir Tamirat Çözümleri',
      ],
      subHeading: 'Size en iyi hizmeti sunuyoruz',
      description: 'Elektrik, tesisat ve daha fazlası...',
    }),
    createServicesCarouselBlock({
      title: 'Hizmetlerimiz',
      subtitle: 'Size en uygun hizmeti bulun',
    }),
  ],
  meta: {
    title: 'Hızır Teknik | Ana Sayfa',
    description: 'Profesyonel teknik hizmetler',
  },
})

const aboutPage = await createPage(payload, {
  title: 'Hakkımızda',
  description: 'Hızır Teknik hakkında',
  blocks: [
    createPageHeroBlock({
      title: 'Hakkımızda',
      description: 'Biz kimiz?',
    }),
    createRichTextBlock({
      content: [
        createRichTextHeading('Misyonumuz', 'h2'),
        createRichTextParagraph('Müşteri memnuniyeti odaklı hizmet...'),
        createRichTextHeading('Vizyonumuz', 'h2'),
        createRichTextParagraph('Sektörde lider olmak...'),
      ],
    }),
  ],
})
```

---

## Complete Example

Here's a complete example that creates a full data set:

```typescript
import {
  getPayloadInstance,
  createAuthor,
  createServiceCategory,
  createService,
  createPostCategory,
  createPost,
  createPage,
  createHomeHeroBlock,
  createServicesCarouselBlock,
  createPageHeroBlock,
  createRichTextBlock,
  createRichTextHeading,
  createRichTextParagraph,
  createRichTextList,
} from './seed'

export const seedDatabase = async () => {
  const payload = await getPayloadInstance()

  payload.logger.info('🌱 Starting custom seed...')

  // 1. Create Author
  const author = await createAuthor(payload, {
    name: 'Ahmet Yılmaz',
    email: 'ahmet@hizirteknik.com',
    title: 'Teknik Uzman',
    bio: '15 yıllık deneyimli teknik uzman',
    status: 'active',
    featured: true,
  })

  // 2. Create Service Category
  const electricCategory = await createServiceCategory(payload, {
    title: 'Elektrik Tesisat',
    description: 'Elektrik tesisatı hizmetleri',
    icon: 'elektrik-tesisat',
    content: 'Profesyonel elektrik tesisat hizmetleri',
  })

  // 3. Create Service
  const service = await createService(payload, {
    title: 'Elektrik Arıza Onarımı',
    icon: 'elektrik-ariza-onarimi',
    description: '7/24 elektrik arıza onarımı',
    featured: true,
    related_category: electricCategory.id,
    blocks: [
      {
        title: 'Hizmet Detayları',
        description: 'Hızlı ve güvenli çözüm',
        features: ['7/24 Hizmet', 'Hızlı Müdahale', 'Uygun Fiyat'],
      },
    ],
  })

  // 4. Create Post Category
  const postCategory = await createPostCategory(payload, {
    title: 'Elektrik Sistemleri',
    description: 'Elektrik sistemleri hakkında yazılar',
  })

  // 5. Create Blog Post
  const post = await createPost(payload, {
    title: 'Elektrik Güvenliği İpuçları',
    description: 'Evde elektrik güvenliği için önemli ipuçları',
    content: [
      createRichTextHeading('Giriş', 'h2'),
      createRichTextParagraph('Elektrik güvenliği hayati önem taşır...'),
      createRichTextHeading('İpuçları', 'h2'),
      createRichTextList([
        'Sigortaları düzenli kontrol edin',
        'Profesyonel yardım alın',
        'Eski kabloları yenileyin',
      ], 'number'),
    ],
    author: author.id,
    post_category: postCategory.id,
    related_service_category: electricCategory.id,
  })

  // 6. Create Home Page
  const homePage = await createPage(payload, {
    title: 'Ana Sayfa',
    description: 'Hızır Teknik ana sayfa',
    blocks: [
      createHomeHeroBlock({
        headingRotation: ['Profesyonel Teknik Hizmetler'],
        subHeading: 'Size en iyi hizmeti sunuyoruz',
        description: 'Elektrik, tesisat ve daha fazlası',
      }),
      createServicesCarouselBlock({
        title: 'Hizmetlerimiz',
        subtitle: 'Size en uygun hizmeti bulun',
      }),
    ],
    meta: {
      title: 'Hızır Teknik | Ana Sayfa',
    },
  })

  payload.logger.info('✅ Custom seed completed!')
  payload.logger.info(`Created: Author(${author.id}), Service(${service.id}), Post(${post.id}), Page(${homePage.id})`)
}
```

## Running the Seed Script

### Method 1: Direct Script
```bash
pnpm seed
```

### Method 2: Environment Variable
Add to `.env.local`:
```
PAYLOAD_SEED=true
```

Then run:
```bash
pnpm dev
```

### Method 3: Custom Script
Create a custom seed file and import the utilities:

```typescript
// src/seed/custom-seed.ts
import { seedDatabase } from './index'

seedDatabase()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
```

## Tips

1. **Always get relationships first**: Create authors and categories before creating posts and services
2. **Store IDs**: Save the returned IDs to use in relationships
3. **Use TypeScript**: The utilities are fully typed for autocomplete support
4. **Test incrementally**: Create one record type at a time
5. **Check unique constraints**: Emails must be unique for authors

## TypeScript Support

All utilities have full TypeScript support with interfaces and type definitions. Your IDE will provide autocomplete and type checking.

## Troubleshooting

### "Email must be unique"
Make sure author emails are unique across all records.

### "Related ID not found"
Ensure you create parent records (categories, authors) before creating records that reference them.

### "Invalid block type"
Use the provided block creation functions (`createHomeHeroBlock`, etc.) to ensure correct structure.

## References

- [Payload CMS Local API](https://payloadcms.com/docs/local-api/overview)
- [Payload CMS Collections](https://payloadcms.com/docs/configuration/collections)
- [Project Collections](../collections/)
