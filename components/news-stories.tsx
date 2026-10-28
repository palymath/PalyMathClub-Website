import { ArrowUpRight } from 'lucide-react'

const stories = [
  {
    title: 'Berkeley Math Tournament adds up to a big win for Math Club',
    date: 'Nov 19, 2024',
    href: 'https://palyvoice.com/179845/news/berkeley-math-tournament-adds-up-to-a-big-win-for-math-club',
  },
  {
    title: 'Math Club places third in the Bay Area Math Olympiad',
    date: 'May 3, 2023',
    href: 'https://thecampanile.org/28652/uncategorized/math-club-places-third-in-the-bay-area-math-olympiad/',
  },
  {
    title: "Palo Alto High School's second annual Team Math Contest attracts dozens of students",
    date: 'May 9, 2018',
    href: 'https://palyvoice.com/140998/news/palo-alto-high-schools-second-annual-team-math-contest-attracts-dozens-of-students',
  },
  {
    title: 'Viking math team places in national competition',
    date: 'Mar 20, 2018',
    href: 'https://palyvoice.com/139138/news/viking-math-team-places-in-national-competition',
  },
]

export function NewsStories() {
  return (
    <section aria-labelledby="stories-heading" className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-t border-[#d6e2d1] pt-12">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#1b5e3c]">In the news</p>
          <h2 id="stories-heading" className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Stories
          </h2>
        </div>
        <p className="text-sm text-[#4a554b]">Coverage from The Paly Voice and The Campanile</p>
      </div>

      {/* Main container split into 12 columns on large screens */}
      <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-12 lg:gap-10">
        
        {/* Left side: 2x2 grid for the 4 stories */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
          {stories.map((story) => (
            <li key={story.href}>
              <a
                href={story.href.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-[1.5rem] border border-[#d6e2d1] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#b7d9b2]"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.15em] text-[#1b5e3c]">
                    <span>{story.date ?? 'The Paly Voice'}</span>
                    <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-[-0.02em] text-balance">{story.title}</h3>
                </div>
                <span className="mt-6 inline-block text-sm font-bold underline decoration-[#8ac47c] decoration-2 underline-offset-4">
                  Read the story<span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Squarish image matching your hero section styling */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#e6eee2] p-4 shadow-[12px_12px_0_#b7d9b2] sm:p-6 lg:col-span-5 lg:sticky lg:top-8">
          <img
            src="/images/bmt.png" // Adjust path if needed (e.g. /bmt.png)
            alt="Paly Math Club at Berkeley Math Tournament"
            className="aspect-square w-full rounded-[1.5rem] bg-white object-cover"
          />
        </div>

      </div>
    </section>
  )
}
