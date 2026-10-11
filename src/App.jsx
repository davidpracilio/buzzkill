import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Features from './components/Features.jsx'
import Demo from './components/Demo.jsx'
import Pricing from './components/Pricing.jsx'
import './App.css'

const THEMES = ['light', 'dark', 'contrast']

function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  if (THEMES.includes(saved)) return saved
  if (window.matchMedia('(prefers-contrast: more)').matches) return 'contrast'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const nextTheme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length]

  return (
    <div id="top" className="page">
      <Header
        nextTheme={nextTheme}
        onToggleTheme={() => setTheme(nextTheme)}
      />

      <main>
        <section className="hero">
          <span className="badge">Demo site</span>
          <h1>
            Mute the noise.
            <br />
            Keep the signal.
          </h1>
          <p>
            Buzzkill is a made-up app that silences the notifications you don't need, so you can
            get on with the things you do.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#demo">
              Try the demo
            </a>
            <a className="btn btn-ghost" href="#features">
              See features
            </a>
          </div>
        </section>

        <Features />
        <Demo />
        <Pricing />
      </main>

      <footer className="footer">
        <p>Buzzkill — a demo site built with React and Vite.</p>
      </footer>
    </div>
  )
}

export default App
