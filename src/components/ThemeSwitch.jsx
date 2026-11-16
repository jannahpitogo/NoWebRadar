// Light/dark switch. "On" means dark mode.
export default function ThemeSwitch({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      className="theme-switch"
      onClick={onToggle}
    >
      <span className="theme-switch-label">{isDark ? 'Dark' : 'Light'}</span>
      <span className="theme-switch-track" aria-hidden="true">
        <span className="theme-switch-knob" />
      </span>
    </button>
  )
}
