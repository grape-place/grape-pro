import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { logo, navigation } from '../../content/site'
import Icon from '../ui/Icon'

const contactForm = { id: 'kbbGJr', emoji: { text: '👋', animation: 'wave' } }

declare global {
  interface Window {
    Tally?: { openPopup: (id: string, options: { emoji: typeof contactForm.emoji }) => void }
  }
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuToggle.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  function handleContact(event: MouseEvent<HTMLButtonElement>) {
    setMenuOpen(false)

    // The widget copies the page's query string when it creates the popup.
    if (!window.location.search) return

    event.stopPropagation()
    if (!window.Tally) return

    const { href, pathname, hash } = window.location
    const state = window.history.state
    window.history.replaceState(state, '', pathname + hash)
    try {
      window.Tally.openPopup(contactForm.id, { emoji: contactForm.emoji })
    } finally {
      window.history.replaceState(state, '', href)
    }
  }

  return <header className="site-header container">
    <a className="brand" href="#top" aria-label="Grape home"><img src={logo} alt="Grape" width="2172" height="724" /></a>
    <button ref={menuToggle} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
    <nav id="main-navigation" className={`main-navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
      {navigation.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
      <button
        type="button"
        data-tally-open={contactForm.id}
        data-tally-emoji-text={contactForm.emoji.text}
        data-tally-emoji-animation={contactForm.emoji.animation}
        onClick={handleContact}
      >
        Contact <span aria-hidden="true">↗</span>
      </button>
    </nav>
  </header>
}
