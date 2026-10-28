import { BoardCards, PageIntro, PageShell } from '@/components/site-header'

export default function BoardPage() {
  return (
    <PageShell>
      <PageIntro 
        eyebrow="About us" 
        title="Meet the board." 
        description="We are the students elected to run Paly Math Club for the 2026-2027 season. PAUSD students: feel free to reach out to us via internal PAUSD email." 
      />
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <BoardCards />

        {/* PAGMT Banner Image */}
        <figure className="mt-16 overflow-hidden rounded-[2rem] bg-[#e6eee2] p-4 shadow-[12px_12px_0_#b7d9b2] sm:p-6">
          <img
            src="/images/pagmtteam.JPG"
            alt="Organizers and volunteers at the Palo Alto Girls Math Tournament (PAGMT)"
            className="aspect-[3/1] w-full rounded-[1.5rem] object-cover sm:aspect-[4/1]"
          />
          <figcaption className="mt-4 text-center text-sm font-medium text-[#4a554b]">
            Organizers and volunteers at the Palo Alto Girls Math Tournament (PAGMT)
          </figcaption>
        </figure>
      </section>
    </PageShell>
  )
}
