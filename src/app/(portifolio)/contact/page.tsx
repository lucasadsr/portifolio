import { Form } from '@/components/form'
import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'Contato',
  }
}

export default function Contact() {
  return (
    <div className="mt-12">
      <p className="text-6xl text-green-400 font-semibold">
        Me mande uma mensagem!
      </p>

      <Form />
    </div>
  )
}
