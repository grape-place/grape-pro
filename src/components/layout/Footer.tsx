import { logo } from '../../content/site'
import LinkedInLink from '../ui/LinkedInLink'

export default function Footer() {
  return <footer className="site-footer container">
    <div className="footer-main">
      <div className="footer-identity">
        <a className="brand footer-brand" href="#top" aria-label="Grape home">
          <img src={logo} alt="Grape" width="2172" height="724" loading="lazy" />
        </a>
        <div className="footer-brand-details">
          <p className="footer-tagline">Meet . Connect . Grow</p>
          <LinkedInLink href="https://www.linkedin.com/company/grape-connect" name="Grape" />
        </div>
      </div>
      <a className="back-to-top" href="#top">
        Back to top
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 20V4M6 10l6-6 6 6" />
        </svg>
      </a>
    </div>
    <p className="footer-bottom">Made with ❤️ in Australia 🦘🐨🇦🇺</p>
  </footer>
}
