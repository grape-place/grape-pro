import type { CSSProperties } from 'react'

const paths = {
  arrow: <><path d="M4 12h16M14 6l6 6-6 6" /></>,
  rocket: <><path d="M14 5c3-2 6-2 6-2s0 3-2 6l-7 7-5-5 8-6Z" /><path d="m12 6-6 1-3 5 5 1m9-1-1 6-5 3-1-5M6 16l-3 5 5-3" /><circle cx="15.5" cy="7.5" r="1.5" /></>,
  chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" /><rect x="9" y="9" width="6" height="6" rx="1" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a21 21 0 0 0 18 0m-9 0v3" /></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
  people: <><circle cx="9" cy="7" r="4" /><path d="M2 21v-2a7 7 0 0 1 14 0v2M17 3a4 4 0 0 1 0 8m2 4a5 5 0 0 1 3 5v1" /></>,
  network: <><circle cx="5" cy="12" r="3" /><circle cx="19" cy="5" r="3" /><circle cx="19" cy="19" r="3" /><path d="m8 10 8-4m-8 8 8 4" /></>,
  video: <><rect x="2" y="5" width="14" height="14" rx="3" /><path d="m16 9 6-4v14l-6-4" /></>,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
}

export type IconName = keyof typeof paths

export default function Icon({ name, className, style }: { name: IconName; className?: string; style?: CSSProperties }) {
  return <svg className={className} style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}
