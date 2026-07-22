import { ExperienceItem } from '@/types/experience'

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Engenheiro de Software (Front-end)',
    company: 'Ativos Precatórios',
    type: 'Tempo integral',
    location: 'Recife, PE • Presencial',
    period: 'Jan de 2025 — Presente',
    description:
      'Desenvolvimento da plataforma Celer, um ecossistema completo para gestão e negociação estratégica de precatórios. Atuação focada em alta performance, UI/UX intuitiva e arquitetura front-end escalável.',
    highlights: [
      'Desenvolvimento de interfaces modernas e responsivas com Next.js, Tailwind CSS e TypeScript',
      'Gerenciamento de estado e consumo de APIs assíncronas com TanStack Query e Zustand',
      'Validação de dados com Zod e padronização visual utilizando componentes Shadcn UI',
      'Colaboração contínua em equipe ágil para entrega de funcionalidades de alto impacto',
    ],
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
      'Zustand',
      'Zod',
      'Shadcn UI',
    ],
  },
  {
    id: 'exp-2',
    role: 'Engenheiro de Software',
    company: 'Grupo Ser Educacional',
    type: 'Estágio',
    location: 'Recife, PE • Presencial',
    period: 'Mar de 2024 — Jan de 2025',
    description:
      'Desenvolvimento de ecossistemas web e mobile voltados para impacto social e automação de processos operacionais, combinando atuação técnica e liderança de time.',
    highlights: [
      'Desenvolvimento do aplicativo mobile Bem Família (+500 downloads e nota 5/5 na loja)',
      'Implementação do web app Sinal Vermelho (solução de combate à violência contra a mulher)',
      'Construção de dashboards administrativos em Next.js, automatizando rotinas manuais',
      'Liderança técnica de 4 desenvolvedores, organizando sprints e alinhando boas práticas de código',
    ],
    skills: [
      'React',
      'Next.js',
      'React Native',
      'Expo',
      'TypeScript',
      'Tailwind CSS',
      'Liderança de Equipe',
    ],
  },
]
