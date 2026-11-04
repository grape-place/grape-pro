import { useEffect, useRef, useState } from 'react'
import { logo, navigation } from '../../content/site'
import Icon from '../ui/Icon'

export default function Header({ onContact }: { onContact: () => void }) {
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

  return <header className="site-header container">
    <a className="brand" href="#top" aria-label="Grape home"><img src={logo} alt="Grape" width="2202" height="714" /></a>
    <button ref={menuToggle} className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
    <nav id="main-navigation" className={`main-navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
      {navigation.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
      <button type="button" onClick={() => { setMenuOpen(false); onContact() }}>Contact <span aria-hidden="true">↗</span></button>
    </nav>
  </header>
}
