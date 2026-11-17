// NoWebRadar mark: a rounded tile with a radar sweep and a "no website" slash.
export default function Logo({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" rx="9" style={{ fill: 'var(--accent)' }} />
      <circle cx="16" cy="16" r="10" fill="none" strokeWidth="1.6" style={{ stroke: 'var(--accent-ink)', opacity: 0.45 }} />
      <circle cx="16" cy="16" r="5" fill="none" strokeWidth="1.6" style={{ stroke: 'var(--accent-ink)', opacity: 0.45 }} />
      <path d="M16 16 L16 6 A10 10 0 0 1 23.07 8.93 Z" style={{ fill: 'var(--accent-ink)', opacity: 0.35 }} />
      <circle cx="16" cy="16" r="2.4" style={{ fill: 'var(--accent-ink)' }} />
      <line x1="9" y1="24" x2="24" y2="9" strokeWidth="2.4" strokeLinecap="round" style={{ stroke: 'var(--accent-ink)' }} />
    </svg>
  )
}
