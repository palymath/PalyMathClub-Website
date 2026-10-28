import { Camera, Mail, MessageCircle, PlayCircle } from 'lucide-react'

const links = [
  { label: 'home', href: '/' },
  { label: 'events', href: '/events' },
  { label: 'upcoming meetings', href: '/meetings' },
  { label: 'leadership', href: '/board' },
  { label: 'archives', href: '/archives' },
  { label: 'collaborate', href: '/collaborate' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-[#d5dfd2] bg-[#f7f8f4]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 font-bold tracking-tight" aria-label="Paly Math Club home">
            <img src="/images/logo.webp" alt="" width={36} height={36} className="size-9 rounded-xl object-cover shadow-[0_4px_0_#b7d9b2]" />
            <span className="text-base sm:text-lg">Paly Math Club</span>
          </a>
          <div className="flex items-center gap-3 text-[#607064]" aria-label="Social links">
            <a href="https://instagram.com/palymathclub" target="_blank" rel="noopener noreferrer" aria-label="Instagram @palymathclub" className="transition-colors hover:text-[#1b5e3c]"><Camera className="size-4" /></a>
            <a href="https://discord.gg/QAbURZY" target="_blank" rel="noopener noreferrer" aria-label="Join our Discord server" className="transition-colors hover:text-[#1b5e3c]"><MessageCircle className="size-4" /></a>
            <a href="https://youtube.com/@palymathclub" target="_blank" rel="noopener noreferrer" aria-label="YouTube @palymathclub" className="transition-colors hover:text-[#1b5e3c]"><PlayCircle className="size-4" /></a>
            <a href="mailto:palymathclub@gmail.com" aria-label="Email the math club" className="transition-colors hover:text-[#1b5e3c]"><Mail className="size-4" /></a>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 pl-12 text-sm font-semibold" aria-label="Main navigation">
          {links.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-[#1b5e3c]">{link.label}</a>)}
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return <footer className="border-t border-[#d5dfd2] px-6 py-7 lg:px-8"><div className="mx-auto flex max-w-6xl justify-between gap-4 text-sm text-[#607064]"><p>Paly Math Club · <a href="https://paly.net/about-us/campus-map" target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-4 hover:text-[#1b5e3c] hover:underline">Room 855</a></p><a href="mailto:palymathclub@gmail.com" className="font-semibold hover:text-[#1b5e3c]">palymathclub@gmail.com</a></div></footer>
}

export type ClubEvent = { 
  title: string; 
  abbr?: string; 
  url?: string; 
  location?: string; 
  when: string; 
  role?: string; 
  image?: string;
  bannerImage?: string;
}

export const eventGroups: { heading: string; description: string; events: ClubEvent[] }[] = [
  {
    heading: 'Events we run',
    description: 'Programs our club organizes for the community.',
    events: [
      { 
        title: 'Palo Alto Girls Math Tournament', 
        abbr: 'PAGMT', 
        url: 'https://pagmt.com', 
        when: 'May', 
        role: 'We organize', 
        image: '/images/pagmt.png',
        bannerImage: '/images/pagmttalk.jpg'
      },
      { 
        title: 'Palo Alto Middle School Math Camp', 
        abbr: 'PAMS', 
        url: 'https://pams.vercel.app', 
        when: 'Summer', 
        role: 'We co-organize', 
        image: '/images/pamslogo.webp',
        bannerImage: '/images/pams.png'
      },
      { title: 'Greene Middle School Math Club', url: 'https://greene.pausd.org/school-life/clubs', when: 'Yearlong', role: 'We organize' },
      { title: 'Annual Team Math Contest', abbr: 'ATM', location: 'At Paly', when: 'Winter & Spring', role: 'We organize' },
    ],
  },
  {
    heading: 'Competitions we attend',
    description: 'Tournaments and contests on our calendar this year.',
    events: [
      { title: 'American Mathematics Competitions', abbr: 'AMC 10/12', url: 'https://maa.org/student-programs/amc', when: 'November' },
      { title: 'Berkeley Math Tournament', abbr: 'BMT', url: 'https://berkeley.mt', when: 'November' },
      { title: 'Bay Area Mathematical Olympiad', abbr: 'BAMO', url: 'https://bamo.org', when: 'February' },
      { title: 'Stanford Math Tournament', abbr: 'SMT', url: 'https://stanfordmathtournament.org', when: 'April' },
    ],
  },
  {
    heading: 'To be decided',
    description: 'Competitions we may attend this year.',
    events: [
      { title: 'Caltech Math Meet', abbr: 'CMM', url: 'https://caltechmathmeet.org', when: 'January' },
      { title: 'Carnegie Mellon Informatics and Mathematics Competition', abbr: 'CMIMC', url: 'https://cmimc.com', when: 'March' },
      { title: 'Los Angeles Math Tournament', abbr: 'LAMT', url: 'https://lamt.net', when: 'May' },
    ],
  },
]

export const board = [
  { initials: 'IC', name: 'Inhoo Chang', role: 'Co-President' },
  { initials: 'KC', name: 'Krittika Chandra', role: 'Co-President' },
  { initials: 'MK', name: 'Meghana Konduri', role: 'Vice President' },
  { initials: 'OV', name: 'Oscar Varodayan', role: 'Vice President' },
  { initials: 'BC', name: 'Brian Chung', role: 'Competition Manager' },
  { initials: 'SS', name: 'Sayan Singh', role: 'Treasurer' },
  { initials: 'AX', name: 'Albert Xu', role: 'Activity Manager' },
  { initials: 'BR', name: 'Beinan Ren', role: 'PR Manager' },
]

export function EventCard({ event }: { event: ClubEvent }) {
  const content = (
    <div className="flex flex-col gap-5 p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {event.abbr && <span className="rounded-md bg-[#dcebd7] px-2 py-0.5 text-xs font-bold tracking-wider text-[#1b5e3c]">{event.abbr}</span>}
            {event.role && <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1b5e3c]">{event.role}</span>}
          </div>
          <h3 className="mt-2 text-xl font-bold text-[#101510] text-balance sm:text-2xl">{event.title}</h3>
          
          {event.image && (
            <div className="mt-3">
              <img 
                src={event.image} 
                alt="" 
                className="h-14 w-auto rounded-lg object-contain" 
              />
            </div>
          )}

          {event.url ? (
            <p className="mt-2 break-all text-sm text-[#607064] group-hover:text-[#1b5e3c] group-hover:underline">
              {event.url.replace(/^https?:\/\//, '')}
              <span className="sr-only"> (opens in a new tab)</span>
            </p>
          ) : (
            event.location && <p className="mt-1 text-sm text-[#607064]">{event.location}</p>
          )}
        </div>
        <span className="shrink-0 self-start rounded-full bg-[#1b5e3c] px-4 py-1.5 text-sm font-bold text-white sm:self-center">{event.when}</span>
      </div>

      {event.bannerImage && (
        <div className="w-full overflow-hidden rounded-xl bg-[#e6eee2]">
          <img
            src={event.bannerImage}
            alt={event.title}
            className="h-auto w-full object-cover"
          />
        </div>
      )}
    </div>
  )

  const cardClass = "group block rounded-2xl border border-[#cbd8c8] bg-white transition-colors hover:border-[#1b5e3c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b5e3c]"

  return (
    <li>
      {event.url ? (
        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass}
        >
          {content}
        </a>
      ) : (
        <div className={cardClass}>{content}</div>
      )}
    </li>
  )
}

export function BoardCards() {
  return <div className="grid gap-3 sm:grid-cols-3">{board.map((person) => <div key={person.name} className="rounded-2xl border border-[#cbd8c8] bg-white p-5"><div className="mb-10 flex size-12 items-center justify-center rounded-full bg-[#dcebd7] font-bold text-[#1b5e3c]">{person.initials}</div><p className="font-bold">{person.name}</p><p className="mt-1 text-sm text-[#607064]">{person.role}</p></div>)}</div>
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-[#f7f8f4] text-[#101510]"><SiteHeader />{children}<SiteFooter /></main>
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="mx-auto max-w-6xl px-6 pb-12 pt-16 lg:px-8"><p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#1b5e3c]">{eyebrow}</p><h1 className="text-5xl font-black tracking-[-0.06em] sm:text-6xl">{title}</h1><p className="mt-5 max-w-xl text-lg leading-relaxed text-[#4a554b]">{description}</p></div>
}
