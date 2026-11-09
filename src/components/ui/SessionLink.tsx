import { showSessionRows } from '../../content/site'
import Icon from './Icon'

export default function SessionLink() {
  if (!showSessionRows) return null

  return <a className="button" href="#sessions">Explore upcoming sessions <Icon name="arrow" /></a>
}
