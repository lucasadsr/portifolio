'use client'

import { Form } from '@/components/form'
import { useLanguage } from '@/providers/LanguageContext'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 space-y-10">
      <div className="space-y-2 text-center max-w-xl mx-auto">
        <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">
          {t.contact.sectionBadge}
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          {t.contact.sectionTitle}
        </h2>
        <p className="text-zinc-400 text-base">
          {t.contact.sectionDescription}
        </p>
      </div>

      <Form />
    </section>
  )
}
