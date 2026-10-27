import { PageIntro, PageShell } from '@/components/site-header'

const archiveItems = ['2024 Green Invitational results', '2023 Pi Night photo journal', '2023 Proofs & Puzzles notes', '2022 Winter Problem Set']

export default function ArchivesPage() {
  return <PageShell><PageIntro eyebrow="Past problems, lasting ideas" title="Archives" description="A small collection of club memories, challenge sets, and notes from years of thinking together." /><section className="mx-auto max-w-3xl px-6 pb-24 lg:px-8"><div className="divide-y divide-[#d5dfd2] border-y border-[#d5dfd2]">{archiveItems.map((item, index) => <a href="#" key={item} className="flex items-center justify-between gap-6 py-5 font-semibold hover:text-[#1b5e3c]"><span><span className="mr-4 text-sm text-[#8aa08b]">0{index + 1}</span>{item}</span><span aria-hidden="true">→</span></a>)}</div></section></PageShell>
}
