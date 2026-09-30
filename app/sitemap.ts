import type { MetadataRoute } from 'next'

const base = 'https://bh.zuerich'
const locales = ['en', 'fr', 'it', 'de'] as const
const pages = ['', 'about', 'services', 'network', 'contact'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) => {
    const suffix = page ? `/${page}` : ''
    const languages = Object.fromEntries(
      locales.map((locale) => [
        locale,
        `${base}/${locale}${suffix}`,
      ])
    )

    return locales.map((locale) => ({
      url: `${base}/${locale}${suffix}`,
      alternates: { languages },
    }))
  })
}
