import { Form } from '@/components/form'
import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'Contato',
  }
}

export default function Contact() {
  return (
    <section id="contact" className="mt-12 pt-24">
      <p className="text-4xl text-green-400 font-semibold text-center">
        Vamos construir algo juntos?
      </p>

      <Form />
    </section>
  )
}
