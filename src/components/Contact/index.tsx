import { Form } from '@/components/form'

export function Contact() {
  return (
    <section id="contact" className="py-24 space-y-10">
      <div className="space-y-2 text-center max-w-xl mx-auto">
        <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">
          Contato
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Vamos nos conectar?
        </h2>
        <p className="text-zinc-400 text-base">
          Envie uma mensagem para trocarmos uma ideia sobre tecnologia, desenvolvimento ou networking.
        </p>
      </div>

      <Form />
    </section>
  )
}
