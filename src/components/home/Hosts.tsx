import { hosts } from '../../content/site'

export default function Hosts() {
  return <section id="hosts" className="section hosts-section container" aria-labelledby="hosts-heading">
    <div className="section-heading"><h2 id="hosts-heading">Your Hosts</h2></div>
    <div className="hosts-grid grid md:grid-cols-2">
      {hosts.map(host => <article key={host.name} className="host-profile">
        <div className="host-photo"><img src={host.image} alt={host.name} width="900" height="823" loading="lazy" decoding="async" /></div>
        <div className="host-details">
          <h3>{host.name}</h3>
          <p>{host.role}</p>
          <a className="host-linkedin" href={host.linkedin} aria-label={`${host.name} on LinkedIn`}>
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <rect width="24" height="24" rx="3" fill="currentColor" />
              <path fill="white" d="M7.2 9.6H4.3v9.2h2.9V9.6ZM5.8 5a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3ZM19.7 13.5c0-2.6-.6-4.1-3.4-4.1-1.3 0-2.2.7-2.6 1.4V9.6h-2.8v9.2h2.9v-4.5c0-1.2.2-2.4 1.7-2.4s1.4 1.4 1.4 2.4v4.5h2.8v-5.3Z" />
            </svg>
          </a>
        </div>
      </article>)}
    </div>
  </section>
}
