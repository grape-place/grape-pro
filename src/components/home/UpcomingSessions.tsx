import { sessions } from '../../content/site'
import Icon from '../ui/Icon'

export default function UpcomingSessions() {
  return <section id="sessions" className="section sessions-section container" aria-labelledby="sessions-heading">
    <div className="section-heading flex flex-wrap items-end justify-between gap-4">
      <h2 id="sessions-heading">Upcoming sessions in 2027</h2>
      <span className="format-note"><Icon name="video" /> Online sessions</span>
    </div>
    <p className="section-description">Proposed themes below. Dates and times are to be confirmed.</p>
    <ul className="session-list">
      {sessions.map((session, index) => <li className="session-row" key={session.theme}>
        <span className="session-icon"><Icon name={session.icon} /></span>
        <div className="session-title"><span className="session-number">0{index + 1}</span><h3>{session.theme}</h3></div>
        <div className="session-date"><span className="mobile-label">Date</span><span>TBA <span className="session-year">/ 2027</span></span></div>
        <span className="session-format">Online</span>
        <span className="session-status">Coming soon</span>
      </li>)}
    </ul>
    <p className="schedule-note">Themes are provisional. Registration details will follow once sessions are confirmed.</p>
  </section>
}
