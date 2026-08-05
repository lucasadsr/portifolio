/**
 * Formata datas no formato AAAA-MM-DD para DD/MM/AAAA (PT) ou MM/DD/AAAA (EN)
 */
export function formatDate(dateString: string, locale: 'pt' | 'en' = 'pt'): string {
  if (!dateString) return ''

  const parts = dateString.split('-')
  if (parts.length === 3) {
    const [year, month, day] = parts
    if (locale === 'en') {
      return `${month}/${day}/${year}`
    }
    return `${day}/${month}/${year}`
  }

  return dateString.replace(/-/g, '/')
}
