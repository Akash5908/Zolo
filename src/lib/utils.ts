type ClassValue = string | number | boolean | null | undefined | ClassValue[]

/**
 * Combines class names — lightweight alternative to clsx for our needs.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ')
}

/**
 * Format seconds → "mm:ss" or "hh:mm:ss"
 */
export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  const pad = (n: number) => String(n).padStart(2, '0')
  if (h > 0) return `${pad(h)}:${pad(m)}:${pad(s)}`
  return `${pad(m)}:${pad(s)}`
}

/**
 * Format a meeting ID with dashes: 123456789 → 123-456-789
 */
export function formatMeetingId(id: string): string {
  return id.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3')
}

/**
 * Generate a random avatar colour from a display name (deterministic)
 */
export function nameToColor(name: string): string {
  const colors = [
    '#2D8CFF', '#00D4AA', '#FF6B6B', '#FFB020',
    '#A855F7', '#EC4899', '#14B8A6', '#F97316',
  ]
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return colors[Math.abs(hash) % colors.length]
}

/**
 * Get initials from a display name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase()
}

/**
 * Truncate a string with ellipsis
 */
export function truncate(str: string, maxLength: number): string {
  return str.length > maxLength ? str.slice(0, maxLength) + '…' : str
}

/**
 * Delay — useful in tests and animations
 */
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
