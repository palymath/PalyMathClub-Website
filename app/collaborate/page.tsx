import { ArrowUpRight, FileText, Heart, Mail } from 'lucide-react'
import { PageIntro, PageShell } from '@/components/site-header'

const EMAIL = 'palymathclub@gmail.com'

export const metadata = {
  title: 'Collaborate · Paly Math Club',
  description: 'Contact, donate to, or sponsor the Paly Math Club.',
}

export default function CollaboratePage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Work with us"
        title="Collaborate"
        description="Want to join, partner on an event, donate, or sponsor? We would love to hear from you."
      />
      <section className="mx-auto flex max-w-3xl flex-col gap-6 px-6 pb-24 lg:px-8">
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-4 rounded-2xl border border-[#cbd8c8] bg-white p-6 font-bold transition-colors hover:border-[#1b5e3c]"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#dcebd7] text-[#1b5e3c]">
            <Mail aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-normal text-[#607064]">Email the club</span>
            {EMAIL}
          </span>
        </a>

        <article className="rounded-2xl border border-[#cbd8c8] bg-white p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#dcebd7] text-[#1b5e3c]">
              <Heart aria-hidden="true" />
            </span>
            <h2 className="text-2xl font-black tracking-tight">Donate</h2>
          </div>
          <p className="mt-4 leading-relaxed text-[#4a5a4e]">
Your donation helps us run club meetings, fund events like the Palo Alto Girls Math Tournament, and cover
  competition fees.
          </p>
          <a
            href="https://paypal.com/paypalme/palymathclub"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1b5e3c] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#154a2f]"
          >
            Donate via PayPal
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </article>

        <article className="rounded-2xl border border-[#cbd8c8] bg-white p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#dcebd7] text-[#1b5e3c]">
              <FileText aria-hidden="true" />
            </span>
            <h2 className="text-2xl font-black tracking-tight">Sponsor us</h2>
          </div>
          <p className="mt-4 leading-relaxed text-[#4a5a4e]">
            Interested in sponsoring us or any of our events? Email us at{' '}
            <a href={`mailto:${EMAIL}?subject=Sponsorship`} className="font-semibold text-[#1b5e3c] underline underline-offset-4">
              {EMAIL}
            </a>{' '}
            and take a look at our sponsorship prospectus for tiers and benefits.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://docs.google.com/document/d/1sHNiuYAT6bZW0HEfU57I9IBTZ0LwaSeXCG44nvKf9hg/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1b5e3c] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#154a2f]"
            >
              View prospectus
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Sponsorship`}
              className="inline-flex items-center gap-2 rounded-full border border-[#1b5e3c] px-5 py-3 text-sm font-bold text-[#1b5e3c] transition-colors hover:bg-[#dcebd7]"
            >
              Email about sponsoring
            </a>
          </div>
        </article>
      </section>
    </PageShell>
  )
}
