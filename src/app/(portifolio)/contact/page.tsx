import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'Contato',
  }
}

export default function Contact() {
  return (
    <div>
      <p>Entre em contato co</p>
      <form></form>
    </div>
  )
}
