const SITE_URL = 'https://regional.rubykaigi.org'
const BASE_PATH = '/kansai09'
const DEFAULT_TITLE = '関西Ruby会議09'
const DEFAULT_DESCRIPTION = '関西Ruby会議は、関西で定期的に開催しているRubyプログラミング言語に関するカンファレンスです。Rubyに関する知見・技術を共有し、またRubyistの交流の場として、皆様に楽しんでいただけるカンファレンスを目指しています。'
const DEFAULT_OG_IMAGE = `${SITE_URL}${BASE_PATH}/ogp.png`

const normalizeRoutePath = (path) => {
  const routePath = path || '/'
  const withLeadingSlash = routePath.startsWith('/') ? routePath : `/${routePath}`
  const withoutBasePath = withLeadingSlash.startsWith(`${BASE_PATH}/`)
    ? withLeadingSlash.slice(BASE_PATH.length)
    : withLeadingSlash

  if (withoutBasePath === '/' || withoutBasePath === '') {
    return '/'
  }

  return `${withoutBasePath.replace(/\/+$/, '')}/`
}

export const usePageSeo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_OG_IMAGE,
} = {}) => {
  const route = useRoute()
  const pagePath = normalizeRoutePath(path ?? route.path)
  const pageUrl = `${SITE_URL}${BASE_PATH}${pagePath}`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: pageUrl,
    ogImage: image,
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterTitle: title,
    twitterDescription: description,
    twitterCard: 'summary_large_image',
    twitterImage: image,
  })

  useHead({
    link: [
      { rel: 'canonical', href: pageUrl },
    ],
  })
}
