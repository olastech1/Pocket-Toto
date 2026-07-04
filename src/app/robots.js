export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://pocket-toto.com/sitemap.xml',
  };
}
