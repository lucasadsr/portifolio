---
name: frontend-design
description: Guia de diretrizes, boas práticas e padrões de design frontend para construção de interfaces modernas, altamente estéticas, responsivas, acessíveis e performáticas no Next.js com Tailwind CSS v4 e Motion. Use sempre que for criar ou alterar componentes visuais, layout, estilos, animações, tipografia ou UI/UX.
---

# Frontend Design Skill

Este guia define os padrões visuais, arquiteturais e de experiência do usuário (UI/UX) para o desenvolvimento de interfaces no projeto.

---

## 🎨 1. Estética e Sistema Visual

### Paleta de Cores e Temas
- **Cores Dinâmicas & Contrastantes:** Evite cores puras genéricas (`#ff0000`, `blue`, `#000`). Utilize variáveis de cor CSS / utilitários Tailwind com gradientes e tons harmônicos.
- **Glassmorphism e Efeitos Especiais:**
  - Telas e cards com fundo semi-transparente + `backdrop-blur-md` + bordas sutis (`border border-white/10` ou `border-slate-800`).
  - Gradientes suaves para backgrounds, títulos e botões em destaque (`bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500`).
  - Sombreados e glows direcionais (`shadow-lg shadow-purple-500/10`).

### Tipografia
- Hierarquia tipográfica clara e legível.
- **Títulos:** Pesos em destaque (`font-bold`, `font-extrabold`), suporte a gradiente em texto (`bg-clip-text text-transparent`).
- **Corpo de texto:** Contraste adequado (`text-slate-300` / `text-slate-400` em modo escuro), altura de linha confortável (`leading-relaxed`).

---

## ⚡ 2. Animações e Micro-interações (Motion)

- **Feedback Interativo Instantâneo:** Todos os elementos clicáveis ou interativos devem responder a hover, focus e active.
  - Exemplo: `hover:scale-105 transition-all duration-300 ease-out active:scale-95`.
- **Animações de Entrada (Entry animations):**
  - Utilizar a biblioteca `motion` (`import { motion } from 'motion/react'`) para fade-in, slide-up e stagger em listas.
  - Exemplo com Motion:
    ```tsx
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {content}
    </motion.div>
    ```
- **Fluidez:** Animações devem ser rápidas e sutis (entre 150ms e 400ms). Evite animações lentas ou excessivas que atrapalhem a usabilidade.

---

## 📱 3. Responsividade e Layout Grid

- **Mobile-First Design:** Desenvolva pensando primeiro no dispositivo móvel e expanda progressivamente (`sm:`, `md:`, `lg:`, `xl:`).
- **Layouts Flexíveis:**
  - Utilize `CSS Grid` (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`) para galerias de projetos e listas de cards.
  - Utilize `Flexbox` para alinhamentos internos, barras de navegação e cabeçalhos.
- **Áreas de Toque Adequadas:** Alvos de clique em dispositivos móbile devem ter no mínimo `44x44px`.

---

## ♿ 4. Acessibilidade (a11y) e Semântica HTML

- **Elementos Semânticos:** Sempre prefira tags semânticas adequadas em vez de apenas `<div>`:
  - `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- **Navegação por Teclado:**
  - Garanta estados visíveis de foco (`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500`).
- **Acessibilidade para Leitores de Tela:**
  - Adicione `aria-label` para botões que possuem apenas ícones.
  - Adicione atributos `alt` informativos em imagens.

---

## 🚀 5. Performance e Otimização de Recursos

- **Next.js `<Image />` Component:**
  - Sempre utilize `next/image` para carregamento otimizado de imagens.
  - Configure `width`, `height`, ou `fill` com `sizes` adequados.
- **Evitar Layout Shifts (CLS):**
  - Defina dimensões explícitas ou skeletons/placeholders visualmente harmoniosos durante o carregamento de dados.

---

## 🛠️ 6. Padrão de Estruturação de Componentes

Ao criar ou modificar componentes de UI (`src/components/`):

1. **Tipagem Explicita:**
   - Propriedades e contratos bem tipados com TypeScript (`interface ComponentProps`).
2. **Ícones:**
   - Utilize a biblioteca `lucide-react` para consistência nos ícones.
3. **Modularidade:**
   - Mantenha componentes focados e coesos. Se um componente ultrapassar ~200 linhas, divida-o em subcomponentes ou hooks customizados.
