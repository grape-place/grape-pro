import SessionLink from '../ui/SessionLink'

export default function Hero() {
  return <section className="hero" aria-labelledby="hero-heading">
    <div className="hero-wash" aria-hidden="true" />
    <div className="container hero-content">
      <p className="eyebrow">Online professional networking sessions</p>
      <h1 id="hero-heading">Meet. Connect. <em>Grow.</em></h1>
      <p className="hero-intro">A series of online networking sessions that brings professionals together for meaningful, focused conversations.</p>
      <p className="hero-description">Expand your network, exchange ideas and discover new opportunities — in a relaxed, engaging online setting.</p>
      <SessionLink />
    </div>
  </section>
}
