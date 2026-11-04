import { hosts } from '../../content/site'

export default function Hosts() {
  return <section id="hosts" className="section hosts-section container" aria-labelledby="hosts-heading">
    <div className="section-heading"><h2 id="hosts-heading">Your Hosts</h2></div>
    <div className="hosts-grid grid md:grid-cols-2">
      {hosts.map(host => <article key={host.name} className="host-profile">
        <div className="host-photo"><img src={host.image} alt={host.name} width="900" height="823" loading="lazy" decoding="async" /></div>
        <div className="host-details"><h3>{host.name}</h3><p>{host.role}</p></div>
      </article>)}
    </div>
  </section>
}
