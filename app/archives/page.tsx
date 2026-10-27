
import { PageIntro, PageShell } from '@/components/site-header'

const archiveItems = [
  '2026-27 Semester 1 TST',
  '2026 Spring ATM Guts Round',
  '2026 Spring ATM Team Round',
  '2025-26 Semester 2 TST',
  '2025 Estimathon',
  '2025 Winter ATM',
  '2025-26 Semester 1 TST',
  '2025 Integration Bee',
  '2024-25 Semester 2 TST',
  '2024-25 Semester 1 TST',
]

export default function ArchivesPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Past problems, lasting ideas"
        title="Archives"
        description="A collection of problems from our Team Selection Tests (TSTs) for competition teams, Annual Team Math contests (ATMS), and other events. Problems are either written by club members or compiled from public sources."
      />

      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-8">
        <div className="divide-y divide-[#d5dfd2] border-y border-[#d5dfd2]">
          {archiveItems.map((item, index) => (
            <a
              href={`/${item}.pdf`}
              key={item}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-6 py-5 font-semibold hover:text-[#1b5e3c]"
            >
              <span>
                <span className="mr-4 text-sm text-[#8aa08b]">
                  0{index + 1}
                </span>
                {item}
              </span>
              <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
