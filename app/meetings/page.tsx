import type { Metadata } from 'next'
import { Clock } from 'lucide-react'
import { PageIntro, PageShell } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Upcoming Meetings | Paly Math Club',
  description: 'See what is coming up next at Paly Math Club meetings.',
}

const meetings = [
  { month: 'OCT', day: '28', weekday: 'Wednesday', time: 'After school', type: 'Practice', title: 'Berkeley Math Tournament Practice: Power Round' },
  { month: 'OCT', day: '29', weekday: 'Thursday', time: 'Lunch time', type: 'Lecture', title: 'Why is e everywhere?' },
]

export default function MeetingsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="This week"
        title="Upcoming Meetings"
        description="We meet Wednesdays after school and Thursdays at lunch. Here are our upcoming meetings."
      />
      <section className="px-6 pb-16 lg:px-8" aria-label="Upcoming meetings">
        <ol className="mx-auto grid max-w-3xl gap-4">
          {meetings.map((meeting) => (
            <li key={meeting.title} className="flex items-center gap-5 rounded-2xl border border-[#cbd8c8] bg-white p-5 sm:p-6">
              <time
                dateTime={`2026-10-${meeting.day}`}
                className="flex size-20 shrink-0 flex-col items-center justify-center rounded-xl bg-[#1b5e3c] text-white shadow-[0_4px_0_#b7d9b2]"
              >
                <span className="text-xs font-bold tracking-[0.2em]">{meeting.month}</span>
                <span className="text-3xl font-black leading-none">{meeting.day}</span>
              </time>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1b5e3c]">{meeting.type}</p>
                <h2 className="mt-1 text-xl font-bold text-[#101510] sm:text-2xl">{meeting.title}</h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-[#4a554b]">
                  <Clock className="size-4" aria-hidden="true" />
                  {meeting.weekday} · {meeting.time}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  )
}
