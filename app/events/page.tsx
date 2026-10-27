import { EventCard, eventGroups, PageIntro, PageShell } from '@/components/site-header'

export default function EventsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Mark your calendar"
        title="Events"
        description="The events we run, the competitions we attend, and the ones we're still deciding on."
      />
      <div className="mx-auto flex max-w-3xl flex-col gap-14 px-6 pb-16 lg:px-0">
        {eventGroups.map((group) => {
          const headingId = `group-${group.heading.toLowerCase().replace(/\s+/g, '-')}`
          return (
            <section key={group.heading} aria-labelledby={headingId}>
              <h2 id={headingId} className="text-3xl font-black tracking-[-0.04em] text-[#101510]">{group.heading}</h2>
              <p className="mt-2 text-[#4a554b]">{group.description}</p>
              <ul className="mt-6 grid gap-4">
                {group.events.map((event) => <EventCard key={event.title} event={event} />)}
              </ul>
            </section>
          )
        })}
      </div>
    </PageShell>
  )
}
