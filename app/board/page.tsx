import { BoardCards, PageIntro, PageShell } from '@/components/site-header'

export default function BoardPage() {
  return <PageShell><PageIntro eyebrow="The people behind the problems" title="Meet the board." description="We are students who believe math is more than answers. It is a language for seeing the world differently." /><section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8"><BoardCards /></section></PageShell>
}
