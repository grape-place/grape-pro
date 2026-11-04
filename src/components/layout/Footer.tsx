import { logo, navigation } from '../../content/site'

export default function Footer({ onContact }: { onContact: () => void }) {
  return <footer className="site-footer container">
    <div className="footer-main">
      <div><a className="brand footer-brand" href="#top" aria-label="Grape home"><img src={logo} alt="Grape" width="2202" height="714" loading="lazy" /></a><p className="footer-tagline">Meet . Connect . Grow</p></div>
      <nav className="footer-navigation" aria-label="Footer navigation">
        {navigation.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        <button type="button" onClick={onContact}>Contact</button>
      </nav>
    </div>
    <div className="footer-bottom"><span>Grape</span><span className="social-pending" aria-disabled="true" title="LinkedIn link coming soon"><span className="linkedin-mark" aria-hidden="true">in</span> LinkedIn <span className="pending-label">Coming soon</span></span></div>
  </footer>
}
