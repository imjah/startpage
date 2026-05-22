export function getDirectThumbnail(url: string): string {
  try {
    const parsed = new URL(url)
    const host = parsed.searchParams.get('host')
    if (host) {
      parsed.searchParams.delete('host')
      const params = parsed.searchParams.toString()
      return `https://${host}${parsed.pathname}${params ? '?' + params : ''}`
    }
  } catch {}
  return url
}
