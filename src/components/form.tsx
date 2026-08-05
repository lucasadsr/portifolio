'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { motion } from 'motion/react'
import { Send } from 'lucide-react'
import { useLanguage } from '@/providers/LanguageContext'

export function Form() {
  const { t, language } = useLanguage()

  const messageSchema = z.object({
    name: z.string().min(3, {
      message:
        language === 'en'
          ? 'Your name must contain at least 3 characters.'
          : 'Seu nome deve conter pelo menos 3 caracteres.',
    }),
    message: z.string().min(10, {
      message:
        language === 'en'
          ? 'Your message must contain at least 10 characters.'
          : 'Sua mensagem deve conter pelo menos 10 caracteres.',
    }),
  })

  type MessageInputs = z.infer<typeof messageSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MessageInputs>({
    resolver: zodResolver(messageSchema),
  })

  function sendMessage(data: MessageInputs) {
    const { name, message } = data
    const fullMessage =
      language === 'en'
        ? `Hello, I'm ${name}. \n \n ${message}`
        : `Olá, sou ${name}. \n \n ${message}`

    window.open(
      `https://api.whatsapp.com/send?phone=+5581985660761&text=${encodeURIComponent(
        fullMessage,
      )}`,
      '_blank',
    )
  }

  return (
    <form
      onSubmit={handleSubmit(sendMessage)}
      className="mx-auto max-w-lg w-full p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 shadow-2xl shadow-black/40 space-y-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="space-y-2"
      >
        <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
          {t.contact.form.nameLabel}
        </label>
        <input
          id="name"
          type="text"
          placeholder={t.contact.form.namePlaceholder}
          className="w-full bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder:text-zinc-500 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm"
          {...register('name')}
        />
        {errors.name && (
          <p className="text-rose-400 text-xs font-medium mt-1">
            {errors.name.message}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="space-y-2"
      >
        <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
          {t.contact.form.messageLabel}
        </label>
        <textarea
          id="message"
          placeholder={t.contact.form.messagePlaceholder}
          rows={5}
          className="w-full bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder:text-zinc-500 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm resize-none"
          {...register('message')}
        />
        {errors.message && (
          <p className="text-rose-400 text-xs font-medium mt-1">
            {errors.message.message}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={18} />
          {isSubmitting ? t.contact.form.submittingButton : t.contact.form.submitButton}
        </button>
      </motion.div>
    </form>
  )
}
