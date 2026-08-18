# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A full-stack TypeScript application for Hızır Teknik, a service company website built with Next.js 15 and Payload CMS v3. The site features dynamic content management, blog functionality, services catalog, project portfolio, and multi-sitemap SEO optimization.

**Tech Stack**: Next.js 15+, Payload CMS v3, TypeScript, PostgreSQL, Tailwind CSS, Shadcn UI, Framer Motion, S3 Storage

## Development Commands

```bash
# Development (NOTE: Server already running at http://localhost:3000)
pnpm dev              # Start development server
pnpm devsafe          # Clean .next and start dev server

# Build and Production
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint

# Payload CMS
pnpm generate:types   # Generate TypeScript types from Payload collections
pnpm generate:importmap # Generate import map for Payload admin
pnpm payload          # Run Payload CLI commands
```

## Architecture Overview

### Application Structure

The project uses Next.js 15 App Router with two distinct route groups:
- **`app/(site)`**: Public-facing website with dynamic pages, blog, services, and projects
- **`app/(payload)`**: Admin panel and API routes for Payload CMS

### Key Architectural Patterns

**Payload CMS Collections** (`src/collections/`):
- Collections define the data structure (Pages, Posts, Services, Projects, etc.)
- Each collection is configured in `payload.config.ts:95-107`
- Collections use **blocks** for flexible content layouts
- Turkish language support via `@payloadcms/translations/languages/tr`

**Block-Based Content System** (`src/collections/blocks/`):
- Blocks are reusable content components (Hero, FAQ, Gallery, CTA, etc.)
- Home-specific blocks (HomeHeroBlock, HomeServicesCarouselBlock, etc.)
- Page-specific blocks (PageHeroBlock, PageCTABlock, etc.)
- All blocks are TypeScript definitions consumed by Payload admin

**Component Rendering** (`src/components/`):
- `render-blocks.tsx`: Maps Payload blocks to React components
- `blocks/`: React components that render Payload block data
- `sections/`: Shared section components
- `base/`: Core layout components (Header, Footer)
- `ui/`: Shadcn UI components

**Data Flow**:
1. Content is created in Payload admin (blocks-based)
2. Data stored in PostgreSQL with generated types (`payload-types.ts`)
3. Media files stored in S3 (configured in `payload.config.ts:390-404`)
4. Frontend fetches data via Payload's built-in API
5. `render-blocks.tsx` dynamically renders blocks based on content

### Important Files

- **`src/payload.config.ts`**: Main Payload configuration with all collections, plugins (SEO, Form Builder), S3 storage, PostgreSQL adapter, and Turkish translations
- **`src/payload-types.ts`**: Auto-generated TypeScript types (run `pnpm generate:types`)
- **`src/collections/SiteSettings.ts`**: Global site settings collection
- **`src/lib/getURL.ts`**: Server/client URL utility
- **`src/lib/revalidate.ts`**: Next.js revalidation logic for content updates

### SEO and Sitemaps

Custom sitemap generation for different content types:
- `app/(site)/(sitemap)/pages-sitemap.xml/route.ts`
- `app/(site)/(sitemap)/services-sitemap.xml/route.ts`
- `app/(site)/(sitemap)/blog-sitemap.xml/route.ts`
- And others for service categories, blog categories, and locations

Sitemap configuration in `next-sitemap.config.cjs` with `postbuild` script.

### TypeScript Configuration

- Absolute imports with `@/` prefix (mapped to `src/`)
- `@payload-config` alias for `src/payload.config.ts`
- `strict: false` and `strictNullChecks: false` (consider enabling gradually)
- Generated types from Payload must be committed

## Code Style Guidelines

**From `.windsurfrules`**:

1. **Naming Conventions**:
   - Use kebab-case for component files: `hero-section.tsx`
   - Use PascalCase for collection files: `BlogPosts.ts`
   - Use camelCase for utility files: `formatDateTime.ts`

2. **TypeScript**:
   - Use interfaces over types
   - Leverage generated types from `payload-types.ts`
   - Define explicit return types for functions
   - Use absolute imports with `@/` prefix

3. **React Patterns**:
   - Prefer React Server Components
   - Use `"export const"` for components
   - Proper client/server component separation
   - Functional and declarative programming patterns

4. **Payload CMS**:
   - Follow Payload v3 collection structure
   - Implement access control in collections
   - Use hooks for data manipulation (e.g., `revalidateCollection`)
   - Block-based content structure for flexible layouts

5. **Styling**:
   - Tailwind CSS for styling
   - Shadcn UI components (document new installations)
   - Framer Motion for animations with typed variants

## Important Notes

- **Type Generation**: Always run `pnpm generate:types` after modifying Payload collections
- **Database**: Uses PostgreSQL (not MongoDB as in `.env.example`)
- **Environment Variables**: Required - `POSTGRES_URL`, `PAYLOAD_SECRET`, S3 credentials, `RESEND_API_KEY`
- **Revalidation**: Collections use `afterChange` hooks to revalidate Next.js cache
- **Live Preview**: Configured with breakpoints for mobile, tablet, desktop
- **Admin Branding**: Custom logo/icon in `components/payload/AdminLogo` and `AdminIcon`
- **Form Builder**: Turkish translations for all form field types
- **NO TESTS**: Project currently has no test files
