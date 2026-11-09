import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import UpcomingSessions from '../components/home/UpcomingSessions'
import HowItWorks from '../components/home/HowItWorks'
import Hosts from '../components/home/Hosts'
import ClosingCallToAction from '../components/home/ClosingCallToAction'
import ContactDialog from '../components/ui/ContactDialog'

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false)
  return <div id="top" className="site-shell">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header onContact={() => setContactOpen(true)} />
    <main id="main-content">
      <Hero />
      <UpcomingSessions />
      <HowItWorks />
      <Hosts />
      <ClosingCallToAction />
    </main>
    <Footer />
    <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
  </div>
}
