import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import UpcomingSessions from '../components/home/UpcomingSessions'
import HowItWorks from '../components/home/HowItWorks'
import Hosts from '../components/home/Hosts'
import ClosingCallToAction from '../components/home/ClosingCallToAction'

export default function HomePage() {
  return <div id="top" className="site-shell">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header />
    <main id="main-content">
      <Hero />
      <UpcomingSessions />
      <HowItWorks />
      <Hosts />
      <ClosingCallToAction />
    </main>
    <Footer />
  </div>
}
