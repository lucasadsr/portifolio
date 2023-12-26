'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { motion } from 'framer-motion'

const messageSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Seu nome deve conter pelo menos 3 caracteres.' }),
  message: z
    .string()
    .min(10, { message: 'Sua mensagem deve conter pelo menos 10 caracteres.' }),
})

type messageInputs = z.infer<typeof messageSchema>

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<messageInputs>({
    resolver: zodResolver(messageSchema),
  })

  function sendMessage(data: messageInputs) {
    const { name, message } = data

    const fullMessage = `Olá, sou ${name}. \n \n ${message}`

    window.open(
      `https://api.whatsapp.com/send?phone=+5581985660761&text=${fullMessage}`,
      '_blank',
    )
  }

  return (
    <form
      onSubmit={handleSubmit(sendMessage)}
      className="mx-auto mt-4 p-8 flex flex-col items-center w-[440px] gap-6 rounded-lg"
    >
      <motion.div
        className=" w-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <label className="flex flex-col gap-2">
          Nome:{' '}
          <input
            type="text"
            placeholder="Seu nome"
            required
            className="bg-transparent p-1 border-b-2 border-zinc-600 outline-none focus:border-green-600 transition-all"
            {...register('name')}
          />
          {errors.name ? (
            <p className="text-red-600">{errors.name.message}</p>
          ) : (
            ''
          )}
        </label>
      </motion.div>

      <motion.div
        className=" w-full"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <label className="flex flex-col gap-2 w-full">
          Mensagem:{' '}
          <textarea
            placeholder="Sua mensagem"
            rows={6}
            required
            {...register('message')}
            className="bg-transparent p-1 border-b-2 border-zinc-600 outline-none focus:border-green-600 transition-all"
          />
          {errors.message ? (
            <p className="text-red-600">{errors.message.message}</p>
          ) : (
            ''
          )}
        </label>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <button
          disabled={isSubmitting}
          className="font-semibold flex items-center gap-2 bg-green-700 py-2 px-4 rounded-md hover:bg-green-600 transition-all"
        >
          Enviar mensagem
        </button>
      </motion.div>
    </form>
  )
}
