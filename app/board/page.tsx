import { BoardCards, PageIntro, PageShell } from '@/components/site-header'

export default function BoardPage() {
  return <PageShell><PageIntro eyebrow="About us" title="Meet the board." description="We are the students elected to run Paly Math Club for the 2026-2027 season. PAUSD students: feel free to reach out to us via internal PAUSD email." /><section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8"><BoardCards /></section></PageShell>
}
