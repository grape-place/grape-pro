import { logo } from '../../content/site'

export default function Footer() {
  return <footer className="site-footer container">
    <div className="footer-main">
      <div><a className="brand footer-brand" href="#top" aria-label="Grape home"><img src={logo} alt="Grape" width="2172" height="724" loading="lazy" /></a><p className="footer-tagline">Meet . Connect . Grow</p></div>
      <a className="back-to-top" href="#top">
        Back to top
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 20V4M6 10l6-6 6 6" />
        </svg>
      </a>
    </div>
    <div className="footer-bottom"><span>Grape</span><span className="social-pending" aria-disabled="true" title="LinkedIn link coming soon"><span className="linkedin-mark" aria-hidden="true">in</span> LinkedIn <span className="pending-label">Coming soon</span></span></div>
  </footer>
}
