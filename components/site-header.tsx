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
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold" aria-label="Main navigation">
          {links.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-[#1b5e3c]">{link.label}</a>)}
        </nav>
      </div>
    </header>
  )
} 

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d5dfd2] px-6 py-7 lg:px-8">
      <div className="mx-auto flex max-w-6xl justify-between gap-4 text-sm text-[#607064]">
        <p>Paly Math Club · <a href="https://paly.net/about-us/campus-map" target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-4 hover:text-[#1b5e3c] hover:underline">Room 855</a></p>
        <a href="mailto:palymathclub@gmail.com" className="font-semibold hover:text-[#1b5e3c]">palymathclub@gmail.com</a>
      </div>
    </footer>
  )
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
];
