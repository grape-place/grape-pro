export const logo = '/images/logos/small-g-grape-logo.png'

// Show the event rows and session buttons when booking is ready.
export const showSessionRows = false

export const navigation = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Upcoming sessions', href: '#sessions' },
  { label: 'Your Hosts', href: '#hosts' },
]

// Provisional themes supplied in the brief. Dates, times and links are unconfirmed.
export const sessions = [
  { theme: 'Startups & Entrepreneurship', icon: 'rocket' },
  { theme: 'AI in Work and Business', icon: 'chip' },
  { theme: 'Career Transitions & Redundancy', icon: 'briefcase' },
  { theme: 'The Future of Healthcare', icon: 'heart' },
  { theme: 'Cross-Industry Connections I', icon: 'people' },
  { theme: 'Cross-Industry Connections II', icon: 'network' },
] as const

export const hosts = [
  {
    name: 'Beth Croft',
    role: 'Founder - Endorsr',
    image: '/images/hosts/beth-professional.jpg',
    linkedin: 'https://www.linkedin.com/in/beth-croft-b57baa113/',
  },
  {
    name: 'Manoj Vadavat',
    role: 'Process Improvement Specialist - Star Variance',
    image: '/images/hosts/manoj-professional.jpg',
    linkedin: 'https://www.linkedin.com/in/manojvadavat/',
  },
]
