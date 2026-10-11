const THEME_BUTTONS = {
  light: { icon: '☀️', label: 'light' },
  dark: { icon: '🌙', label: 'dark' },
  contrast: { icon: '◐', label: 'high contrast' },
}

function Header({ nextTheme, onToggleTheme }) {
  const next = THEME_BUTTONS[nextTheme]

  return (
    <header className="header">
      <a className="brand" href="#top">
        <img src="/favicon.svg" width="28" height="28" alt="" />
        Buzzkill
      </a>
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#demo">Demo</a>
        <a href="#pricing">Pricing</a>
      </nav>
      <button
        type="button"
        className="btn btn-ghost"
        onClick={onToggleTheme}
        aria-label={`Switch to ${next.label} theme`}
      >
        {next.icon}
      </button>
    </header>
  )
}

export default Header
