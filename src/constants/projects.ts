import { Project } from '@/types/project'

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Pittaya UI kit',
    description: 'Uma biblioteca de interface de usuário totalmente de código aberto para React, baseada em TypeScript e Tailwind CSS. Rápida, componível e pronta para produção.',
    techs: ['Next.Js', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI'],
    image: '/project-images/pittaya.webp',
    repo: 'https://github.com/pittaya-ui/ui-kit',
    deploy: 'https://ui.pittaya.org/',
  },
  {
    id: 2,
    name: 'Agrupe',
    description: 'Aplicação web moderna para gerenciamento colaborativo de eventos em grupos. Permite que usuários criem grupos, gerenciem membros com diferentes permissões, organizem eventos em calendários compartilhados e visualizem eventos próximos.',
    techs: ['Next.Js', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Supabase', 'Vercel Cron Jobs', 'GSAP', 'Zod'],
    image: '/project-images/agrupe.webp',
    deploy: 'https://www.agrupe.app/',
  },
  {
    id: 3,
    name: 'Bewear',
    description: 'Aplicação completa de e-commerce que oferece uma experiência de compra fluida e moderna. A plataforma permite aos usuários navegar por produtos, adicionar itens ao carrinho, realizar pagamentos seguros e gerenciar seus pedidos.',
    techs: ['Next.Js', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL', 'Stripe', 'Tanstack Query'],
    image: '/project-images/bewear.webp',
    repo: 'https://github.com/lucasadsr/bewear',
    deploy: 'https://bewear-rouge.vercel.app/',
  },
  {
    id: 4,
    name: 'WeatherNow',
    description: 'Aplicativo de previsão do tempo moderno e multiplataforma, desenvolvido com Expo e React Native. Oferece atualizações meteorológicas em tempo real, previsões precisas para 5 dias e uma maneira intuitiva de gerenciar suas cidades favoritas. Funciona perfeitamente em iOS, Android e na web.',
    techs: ['Expo', 'React Native', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'OpenWeatherMap API', 'React Native Reanimated'],
    image: '/project-images/weather.webp',
    repo: 'https://github.com/lucasadsr/WeatherNow',
  },
  {
    id: 5,
    name: 'Gopportunities',
    description: 'Uma API RESTful para gerenciamento de vagas de emprego, desenvolvida em Go. Suporta todas as operações CRUD e inclui documentação Swagger gerada automaticamente.',
    techs: ['Go', 'Gin', 'GORM', 'SQLite', 'Swaggo'],
    image: '/project-images/gopportunities.webp',
    repo: 'https://github.com/lucasadsr/gopportunities',
  },
  {
    id: 6,
    name: 'Pittaya Theme',
    description: 'Extensão para VS Code e outras IDEs com o tema Pittaya UI.',
    techs: ['TypeScript', 'ts-node', 'VS Code Extension'],
    image: '/project-images/pittaya-theme.webp',
    repo: 'https://github.com/pittaya-ui/pittaya-theme',
    deploy: 'https://open-vsx.org/extension/pittaya-org/pittaya-theme'
  },
]
