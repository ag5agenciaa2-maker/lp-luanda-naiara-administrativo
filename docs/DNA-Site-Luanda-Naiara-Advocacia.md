# SITE DNA — LUANDA NAIARA ADVOCACIA

**Nicho:** Advocacia especializada em Direito Administrativo, Concursos Públicos, Nomeação e Posse, Defesa de Servidores Públicos e Cotas Raciais/Heteroidentificação. Atuação presencial em Campo Grande, Zona Oeste do Rio de Janeiro, e online para todo o Brasil.

**Posicionamento:** O site transmite autoridade técnica com humanização. A estética "dark luxury" com acentos dourados e serifas clássicas evoca a solidez institucional de um escritório de alto padrão, enquanto as fotografias reais, depoimentos em marquee e a narrativa pessoal da fundadora criam proxemidade emocional. É um posicionamento de "advogada de confiança da comunidade", não de corporação distante.

**Stack Técnica:** HTML5 + Tailwind CSS (CDN v3.x) + CSS Custom Inline (~500 linhas) | Google Fonts: Playfair Display (400, 500, 600, 700, italics), Inter (300–700) | SVG Sprite Inline (30+ ícones) | Instagram Embed JS | Cookie Banner Custom (LGPD/GDPR) | Sem frameworks JS pesados

**Data de criação:** 2024 (última atualização: 30 de Março de 2026)

---

## 1. IDENTIDADE VISUAL

### 1.1 Tokens de Marca — Tailwind Config Extend + CSS Custom Properties

O projeto não usa `:root` CSS variables tradicionais para o tema visual principal. Em vez disso, sobrescreve o `tailwind.config` inline via `<script>` e usa CSS custom properties apenas no Cookie Banner (`:root` em `cookie-banner.css`).

**Tailwind Config Extend (valores reais):**

| Token Tailwind | Valor Hex | Uso Específico |
|---|---|---|
| `colors.gold.DEFAULT` | `#906c16` | Bordas, ícones, textos de destaque, badges, timeline, botões primários |
| `colors.gold.light` | `#c9a227` | Hover states, gradientes, estrelas de avaliação, textos de ênfase |
| `colors.gold.dark` | `#6b4f10` | Gradientes escuros, hover de scrollbar |
| `colors.gold.muted` | `#b8954a` | — declarado no config, não observado em uso direto no HTML analisado |
| `colors.dark.DEFAULT` | `#1a1a1a` | Fundo hero, fundo CTA, fundo footer, texto principal em fundos claros |
| `colors.dark.light` | `#2d2d2d` | — declarado, uso indireto via Tailwind classes potenciais |
| `colors.dark.softer` | `#3d3d3d` | — declarado, uso indireto |
| `colors.cream.DEFAULT` | `#f8f5f0` | Fundo body, seções about/process/depoimentos/instagram |
| `colors.cream.dark` | `#f0ebe3` | — declarado, uso indireto |
| `colors.cream.light` | `#fdfcfa` | — declarado, uso indireto |

**CSS Custom Properties do Cookie Banner (`cookie-banner.css`):**

| Token CSS | Valor | Onde é usado |
|---|---|---|
| `--ck-accent` | `#906c16` | Botões primários, bordas do modal |
| `--ck-accent-light` | `#c9a227` | Textos em destaque, hover de links |
| `--ck-bg` | `#1a1a1a` | Fundo do banner inferior |
| `--ck-text` | `#ffffff` | Texto base do banner |
| `--ck-muted` | `rgba(255,255,255,0.7)` | Descrições, textos secundários |
| `--ck-border` | `rgba(144, 108, 22, 0.2)` | Borda superior do banner, divisórias |

**Curvas de Easing Globais:**
- Principal (UI geral): `cubic-bezier(0.4, 0, 0.2, 1)` — usado em `.service-card`, `.reveal`, `.btn-premium-primary`, `.btn-premium-secondary`, `.faq-answer`, `.mobile-menu`, `.ck-toggle-slider`
- Entrada suave (modais/banner): `cubic-bezier(0.16, 1, 0.3, 1)` — usado em `#ck-banner` transform e `.ck-modal-content` transform
- Elástico (WhatsApp): `cubic-bezier(0.175, 0.885, 0.32, 1.275)` — usado em `.btn-flutuante-whatsapp`
- Ease padrão: `ease` — usado em `.faq-answer`, `.faq-icon-v`, `.nav-link::after`, transitions diversas

---

### 1.2 Tipografia — Tabela Completa

| Elemento / Classe CSS | Família | Peso | Tamanho Exato | Line-height | Letter-spacing | Transform | Cor |
|---|---|---|---|---|---|---|---|
| `body` | Inter, system-ui, sans-serif | 400 (default) | 16px (browser default) | 1.5 (default) | normal | — | `#1a1a1a` |
| `h1`–`h6` | Playfair Display, Georgia, serif | 500–700 | varia | 1.2–1.3 | normal | — | inherit |
| Hero `h1` | Playfair Display | 500 | `text-4xl`→`7xl` (36px→72px) | `leading-tight` (1.25) | normal | — | white / `#c9a227` |
| Section Titles (`h2`) | Playfair Display | 500 | `text-3xl`→`5xl` (30px→48px) | `leading-tight` | normal | — | `#1a1a1a` / white |
| `.section-tag` | Inter | 600 | `text-sm` (14px) | 1.5 | `tracking-widest` (0.1em) | uppercase | `#906c16` |
| `.nav-link` | Inter | 500 | `text-sm` (14px) | 1.5 | normal | — | white/90 → hover white |
| `.btn-premium-primary` | Inter | 700 | `0.75rem` (12px) | 1.5 | `1.5px` | uppercase | white |
| `.btn-premium-secondary` | Inter | 700 | `0.75rem` (12px) | 1.5 | `1.5px` | uppercase | white |
| `.link-premium` | Inter | 700 | `0.75rem` (12px) | 1.5 | `2px` | uppercase | white |
| Hero Stats Number | Playfair Display | 700 | `text-3xl`→`4xl` (30px→36px) | 1.2 | normal | — | `#c9a227` |
| Hero Stats Label | Inter | 400 | `text-sm` (14px) | 1.5 | normal | — | white/60 |
| Marquee Text | Playfair Display | 400 | `text-lg` (18px) | 1.5 | normal | — | `#1a1a1a`/80 |
| Marquee Divider | — | — | `text-lg` | 1.5 | normal | — | `#906c16` (símbolo ◆) |
| `.pain-highlight` | Playfair Display (via inherit) | 500 | inherit | inherit | normal | — | gradiente `#906c16`→`#6b4f10` com clip de texto |
| Quote/Citação | Playfair Display | 400 (italic) | `text-lg` (18px) | `leading-relaxed` (1.625) | normal | — | `#1a1a1a`/80 |
| Service Card Title | Playfair Display | 600 | `text-xl` (20px) | 1.4 | normal | — | `#1a1a1a` |
| Service Card Body | Inter | 400 | `text-sm` (14px) | `leading-relaxed` (1.625) | normal | — | `#1a1a1a`/70 |
| Service Card CTA | Inter | 700 | `text-sm` (14px) | 1.5 | normal | — | `#906c16` |
| Testimonial Card Text | Inter | 400 (italic) | `text-sm` (14px) | `leading-relaxed` | normal | — | `#1a1a1a`/70 |
| Testimonial Initials | Inter | 700 | `text-xs` (12px) | 1 | normal | — | `#906c16` |
| Testimonial Name | Inter | 600 | `text-sm` (14px) | 1.5 | normal | — | `#1a1a1a` |
| Testimonial Source | Inter | 400 | `text-[10px]` (10px) | 1.5 | `tracking-wider` (0.05em) | uppercase | `#1a1a1a`/40 |
| Footer Column Title | Playfair Display | 600 | `text-lg` (18px) | 1.4 | normal | — | white |
| Footer Links | Inter | 400 | `text-sm` (14px) | 1.5 | normal | — | white/60 → hover `#c9a227` |
| Footer Credits | Inter | 400 | `text-[10px]`→`text-xs` (10px→12px) | 1.5 | normal | — | white/30 |
| Cookie Banner Text | Inter | 400 | `0.875rem` (14px) | 1.6 | normal | — | `var(--ck-muted)` |
| Cookie Banner Strong | Inter | 600 | inherit | inherit | normal | — | `var(--ck-accent-light)` |
| Cookie Modal Title | Playfair Display | 700 | `1.75rem` (28px) | 1.3 | normal | — | `#1a1a1a` |
| Cookie Option Title | Inter | 700 | `1rem` (16px) | 1.5 | normal | — | `#1a1a1a` |
| Cookie Option Desc | Inter | 400 | `0.8125rem` (13px) | 1.5 | normal | — | `#666666` |
| `.ck-btn` | Inter | 700 | `0.75rem` (12px) | 1.5 | `1.5px` | uppercase | white |
| Form Label | Inter | 400 | `text-sm` (14px) | 1.5 | normal | — | white/70 |
| Form Input | Inter | 400 | `text-sm` (14px) | 1.5 | normal | — | white / placeholder white/30 |

---

### 1.3 Sistema de Cores Funcionais — rgba() e Opacidades

| Valor `rgba()` | Uso Específico | Contexto |
|---|---|---|
| `rgba(144, 108, 22, 0.2)` | Borda superior do footer (`.adm-footer-site`), borda do cookie banner, borda do cookie modal | Delimitação sutil em fundos escuros |
| `rgba(144, 108, 22, 0.3)` | Sombra do botão primário (`.btn-premium-primary`), sombra do `.ck-btn-primary` | Elevation dourada |
| `rgba(144, 108, 22, 0.4)` | Sombra hover do botão primário, shadow pulse do WhatsApp | Estados ativos/elevation máxima |
| `rgba(144, 108, 22, 0.5)` | Sombra hover do `.btn-premium-primary` | Elevation hover |
| `rgba(144, 108, 22, 0.1)` | Box-shadow do `.form-input:focus`, fundo do `.ck-modal-footer`, borda do `.ck-modal-content` | Foco e delimitação clara |
| `rgba(144, 108, 22, 0.05)` | Fundo do close button do cookie modal, borda do cookie option | Elementos secundários |
| `rgba(144, 108, 22, 0.08)` | Borda das opções do cookie modal | Separação sutil |
| `rgba(255, 255, 255, 0.15)` | Borda do `.btn-premium-primary` | Botão primário em fundo escuro |
| `rgba(255, 255, 255, 0.1)` | Borda do `.btn-premium-secondary`, borda do form, borda do `.ck-btn-secondary` | Glassmorphism / inputs |
| `rgba(255, 255, 255, 0.04)` | Fundo do `.btn-premium-secondary` | Glassmorphism base |
| `rgba(255, 255, 255, 0.3)` | Shine effect do `.btn-premium-primary::before` | Efeito de reflexo no hover |
| `rgba(255, 255, 255, 0.7)` | Texto secundário footer (`.adm-footer-site`), cor base do cookie banner text | Legibilidade em fundo escuro |
| `rgba(255, 255, 255, 0.6)` | Labels do hero stats, textos de suporte | Hierarquia de informação |
| `rgba(255, 255, 255, 0.5)` | Scroll indicator | Elemento decorativo |
| `rgba(255, 255, 255, 0.3)` | Placeholder dos inputs do formulário | Placeholder padrão |
| `rgba(255, 255, 255, 0.1)` | Borda do cookie modal (`.ck-modal-content`) | Delimitação em fundo claro |
| `rgba(0, 0, 0, 0.15)` | Sombra hover do `.service-card` | Elevation cards claros |
| `rgba(0, 0, 0, 0.3)` | Sombra do WhatsApp flutuante (primeira definição), sombra hover do `.btn-premium-secondary` | Elementos flutuantes |
| `rgba(0, 0, 0, 0.6)` | Overlay do menu mobile (`#menuOverlay`) | Backdrop blur |
| `rgba(0, 0, 0, 0.85)` | Fundo do cookie modal (`#ck-modal`) | Overlay escuro |
| `rgba(37, 211, 102, 0.4)` | Sombra hover do WhatsApp flutuante | Glow verde WhatsApp |
| `rgba(201, 162, 39, 0.6)` | Pulse do WhatsApp (`pulse-whatsapp` 0%) | Animação de pulse dourada |

---

### 1.4 Estilo Geral

A arquitetura visual é construída sobre um princípio de **contraste cromático extremo**: fundos quase pretos (`#1a1a1a`) alternam com fundos off-white/cream (`#f8f5f0`) e branco puro (`#ffffff`), criando ritmo de respiração entre seções. O dourado (`#906c16`→`#c9a227`) funciona como fio condutor único — presente em todas as seções, mas nunca dominante a ponto de tornar o layout brega. A tipografia bifurcada (serif para títulos e voz institucional, sans-serif para corpo e UI) estabelece uma hierarquia clara entre "autoridade clássica" e "acessibilidade moderna". O espaçamento é generoso e assimétrico: padding vertical de `80px` a `128px` (`py-20` a `py-32`), com containers full-bleed (`w-full`) e padding horizontal responsivo (`px-4` → `xl:px-20`). Não há container centralizado com max-width global no body — cada seção controla seu próprio grid. O dark mode não é implementado como alternância de tema, mas como **seções escuras permanentes** (hero, CTA, footer) que funcionam como âncoras visuais no scroll. Não há variáveis de dark mode no `:root` do site principal; o fundo escuro é hardcoded via `bg-[#1a1a1a]` ou `bg-dark` (Tailwind extend).

---

## 2. LAYOUT — SEÇÃO POR SEÇÃO


### SEÇÃO 1 — HEADER / NAVEGAÇÃO

**Estrutura:**
```html
<header id="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <div class="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
    <div class="flex items-center justify-between h-20 lg:h-24">
      <a href="#"> → logo-branca (h-12 lg:h-14)
      <nav class="hidden lg:flex items-center gap-8"> → 4 links .nav-link
      <div class="hidden lg:block"> → CTA WhatsApp inline-flex bg-[#906c16]
      <button id="menuBtn" class="lg:hidden hamburger"> → 3 spans w-6 h-0.5 bg-white
```

**Fundo:**
- Layer 0 — base: transparente inicial (nenhuma classe de fundo no HTML estático)
- Layer 1 — overlay: nenhum
- Layer 2 — conteúdo: z-index 50, position fixed

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Logo | `header img` | left | h-12 lg:h-14 w-auto | — |
| CTA Desktop | `header .lg\:block a` | right | px-6 py-3 | bg-[#906c16], hover:bg-[#c9a227], rounded-lg |
| Hamburger | `#menuBtn` | right (mobile) | w-6 h-0.5 × 3 linhas | gap-1.5, bg-white |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| Nenhuma animação própria — comportamento JS de scroll e transição CSS padrão | — | — | 300ms | ease | scroll / click | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.nav-link` | :hover | — | — | — | `::after` width 0→100% | 0.3s ease |
| CTA Header | :hover | `translateY(-0.5px)` | `shadow-lg` | — | bg muda para `#c9a227` | 0.3s |
| `#menuBtn span` | .active (1ª) | `rotate(45deg) translate(6px,6px)` | — | — | — | 0.3s ease |
| `#menuBtn span` | .active (2ª) | opacity 0 | — | — | — | 0.3s ease |
| `#menuBtn span` | .active (3ª) | `rotate(-45deg) translate(6px,-6px)` | — | — | — | 0.3s ease |

**Diferenciador Visual:**
O header não é apenas fixo — ele possui **dois comportamentos de scroll combinados**: adiciona fundo preto e sombra após 20px de scroll, e se esconde (`translateY(-100%)`) ao rolar para baixo além de 200px, reaparecendo ao rolar para cima. Isso cria uma experiência de "app nativo" rara em sites de advocacia. Prova técnica: `header.style.transform = 'translateY(-100%)'` no JS de scroll.

---

### SEÇÃO 2 — HERO

**Estrutura:**
```html
<section class="relative min-h-screen flex items-center bg-[#1a1a1a] overflow-hidden">
  <div class="absolute inset-0">
    <div class="absolute inset-y-0 right-0 w-full lg:w-[55%] overflow-hidden">
      <img class="animate-ken-burns" fetchpriority="high">
      <div class="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent"></div>
    </div>
    <div class="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/45 to-transparent"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/10 to-[#1a1a1a]/10 lg:hidden"></div>
  </div>
  <div class="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-32 lg:py-0">
    <div class="max-w-4xl mt-12 lg:mt-24">
      <h1> → 3 spans .typewriter-text (último text-[#c9a227])
      <p class="animate-fade-in-up" style="animation-delay: 2.5s;">
      <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style="animation-delay: 3s;">
        <a class="btn-premium-primary">Agendar Consulta</a>
        <a class="link-premium">Nossos Serviços</a>
      </div>
      <div class="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10 animate-fade-in-up" style="animation-delay: 3.5s;">
        → 3 stats (90%, +300, 4.9)
      </div>
    </div>
  </div>
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <a href="#marquee"> → ícone chevron down
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `bg-[#1a1a1a]` sólido na `<section>`
- Layer 1 — imagem: posicionada `absolute inset-y-0 right-0 w-full lg:w-[55%]`, `object-cover object-top`, `animate-ken-burns`
- Layer 2 — gradiente imagem: `bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent` sobre a imagem
- Layer 3 — gradiente global: `bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/45 to-transparent` sobre toda a seção
- Layer 4 — gradiente mobile: `bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/10 to-[#1a1a1a]/10` com `lg:hidden`
- Layer 5 — conteúdo: `relative z-10`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Imagem Hero | `.animate-ken-burns` | absolute right | w-full lg:w-[55%], h-full | object-top, fetchpriority="high" |
| Typewriter lines | `.typewriter-text` | dentro do h1 | block, width:0→100% | overflow:hidden, white-space:nowrap |
| Subtítulo | `p.animate-fade-in-up` | abaixo do h1 | max-w-2xl | opacity:0 inicial, delay 2.5s |
| CTA Primário | `.btn-premium-primary` | left | px-10 py-5 rounded-xl | gradiente 135deg #906c16→#c9a227 |
| CTA Secundário | `.link-premium` | right do grupo | py-2 px-2 ml-4 | underline animado 40px→100% |
| Stats | `.grid-cols-3` | bottom do container | gap-8, mt-16 pt-8 | border-t border-white/10 |
| Scroll Indicator | `.animate-bounce` | absolute bottom-8 | center | ícone SVG chevron |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `typing` | width: 0 | width: 100% | 2.5s | steps(35) | page load | 0s, 0.8s, 1.6s |
| `fadeInUp` | opacity:0, translateY(30px) | opacity:1, translateY(0) | 0.8s | ease-out | page load | 2.5s, 3s, 3.5s |
| `ken-burns` | scale(1.1), opacity:0 | scale(1), opacity:0.8 | 3s | cubic-bezier(0.2,0.8,0.2,1) | page load | 0s |
| `pulse-gold` | box-shadow: 0 0 0 0 rgba(144,108,22,0.4) | box-shadow: 0 0 0 15px rgba(144,108,22,0) | 2s | ease-in-out | — | infinito (não usado no hero diretamente, mas declarado) |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.btn-premium-primary` | :hover | translateY(-5px) | 0 15px 35px rgba(144,108,22,0.5) | — | filter:brightness(1.1), ::before left:-100%→100% | 0.5s cubic-bezier(0.4,0,0.2,1) |
| `.link-premium` | :hover | — | — | — | color:#c9a227, ::after width:40px→100% | 0.3s / 0.4s |
| `.link-premium svg` | :hover (group) | translateX(4px) | — | — | — | 0.3s |

**Diferenciador Visual:**
A hero utiliza **dois gradientes sobrepostos** além da imagem: um gradiente horizontal direcional (`to-r`) que mascara a imagem à direita, e um gradiente vertical (`to-t`) ativo apenas no mobile que garante legibilidade do texto sobre a imagem em telas estreitas. A animação typewriter com steps(35) em três linhas sequenciais cria um efeito de "máquina de escrever" raro em landing pages de serviços jurídicos.

---

### SEÇÃO 3 — MARQUEE / TICKER

**Estrutura:**
```html
<section id="marquee" class="bg-white py-4 border-y border-[#906c16]/10 overflow-hidden">
  <div class="marquee-track whitespace-nowrap">
    <div class="inline-flex items-center gap-8 px-4"> → texto + ◆ (repetido 2×)
    <div class="inline-flex items-center gap-8 px-4"> → duplicado idêntico para loop infinito
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `bg-white`
- Layer 1 — bordas: `border-y border-[#906c16]/10`
- Layer 2 — conteúdo: `overflow-hidden`, track animado

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `marquee` | translateX(0) | translateX(-50%) | 35s | linear | page load | 0s, infinito |

**Diferenciador Visual:**
O marquee é **CSS puro**, sem bibliotecas. A duplicação idêntica do conteúdo dentro do mesmo track permite loop infinito suave. O símbolo `◆` (diamond) atua como separador de marca exclusivo.

---

### SEÇÃO 4 — DOR E SOLUÇÃO

**Estrutura:**
```html
<section id="dor" class="py-20 lg:py-32 bg-white">
  <div class="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div class="reveal order-2 lg:order-1">
        <span class="section-tag ...">Entenda o Cenário</span>
        <h2> → com <span class="pain-highlight">Agora o Estado te ignora?</span>
        <p class="text-lg">...</p>
        <div class="bg-[#f8f5f0] border-l-4 border-[#906c16] p-6 rounded-r-lg">
          <p class="font-serif italic">"Eu passei em 1º lugar..."</p>
        </div>
        <div class="mt-10 bg-gradient-to-br from-[#906c16] to-[#6b4f10] p-8 rounded-2xl text-white">
          → h3 + p + 3 check items
        </div>
      </div>
      <div class="reveal order-1 lg:order-2 relative">
        <img class="w-full h-[600px] lg:h-[750px] object-cover rounded-lg shadow-2xl" loading="lazy">
        <div class="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#906c16] rounded-lg -z-10"></div>
        <div class="absolute -bottom-6 -left-6 lg:left-auto lg:-right-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
          → Floating Card (ícone + texto)
        </div>
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `bg-white`
- Layer 1 — conteúdo: grid 2 colunas com ordem invertida no mobile

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Imagem | `img` | right col | h-[600px] lg:h-[750px] | object-cover, rounded-lg, shadow-2xl |
| Decorative Frame | `absolute -bottom-4 -left-4` | offset da imagem | w-full h-full | border-2 border-[#906c16], rounded-lg, -z-10 |
| Floating Card | `absolute -bottom-6 -left-6 lg:-right-6` | sobrepondo imagem | max-w-xs | bg-white, rounded-lg, shadow-xl |
| Solution Box | `bg-gradient-to-br from-[#906c16] to-[#6b4f10]` | abaixo do texto | p-8, rounded-2xl | gradiente 135deg |
| Quote Box | `bg-[#f8f5f0] border-l-4 border-[#906c16]` | dentro do texto | p-6, rounded-r-lg | borda esquerda grossa |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| Floating Card | (estático) | — | shadow-xl | — | — | — |
| Solution Box check items | (estático) | — | — | — | ícone text-[#c9a227] | — |

**Diferenciador Visual:**
A seção utiliza uma **moldura decorativa offset** (`-bottom-4 -left-4`) com `border-2 border-[#906c16]` e `-z-10` para criar profundidade sem sombra. O card flutuante absoluto quebra o grid e cria sobreposição dinâmica entre imagem e texto.

---

### SEÇÃO 5 — GOLD CONNECTOR LINE

**Estrutura:**
```html
<div class="gold-connector"></div>
```

**Valores CSS:**
```css
.gold-connector {
  width: 2px;
  height: 80px;
  background: linear-gradient(to bottom, #906c16, transparent);
  margin: 0 auto;
}
```

**Diferenciador Visual:**
É um elemento puro de transição arquitetônica — uma linha vertical fina que conecta emocionalmente a seção de dor à seção sobre. A gradiente para transparente cria um efeito de "desvanecimento" suave.

---

### SEÇÃO 6 — SOBRE NÓS

**Estrutura:**
```html
<section id="sobre" class="py-20 lg:py-32 bg-[#f8f5f0]">
  <div class="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div class="reveal relative py-10 lg:py-20">
        <div class="relative">
          <img class="w-full h-[550px] lg:h-[750px] object-cover object-center rounded-lg shadow-2xl" loading="lazy">
          <div class="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#906c16] rounded-lg -z-10"></div>
        </div>
        <div class="absolute -bottom-2 lg:bottom-12 -right-4 lg:right-4 bg-white p-6 rounded-lg shadow-xl max-w-xs z-20">
          <svg class="icon icon-lg text-[#906c16]/30 mb-2"><use href="#icon-quote" /></svg>
          <p class="font-serif italic text-sm">"Transformamos a insegurança jurídica em conquistas reais."</p>
          <p class="text-[#906c16] text-xs font-semibold mt-3 uppercase tracking-wider">Dra. Luanda Naiara</p>
        </div>
      </div>
      <div class="reveal lg:pl-8">
        <span class="section-tag ...">Sobre Nós</span>
        <h2> → <span class="text-[#906c16]">causa</span></h2>
        <div class="space-y-4 text-[#1a1a1a]/70"> → 4 parágrafos + OAB</div>
        <div class="grid grid-cols-2 gap-6 mt-10"> → 4 ícones com texto
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `bg-[#f8f5f0]`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Imagem | `img` | left col | h-[550px] lg:h-[750px] | object-center, shadow-2xl |
| Moldura Offset | `absolute -bottom-6 -right-6` | offset | w-full h-full | border-2 border-[#906c16], -z-10 |
| Quote Box | `absolute -bottom-2 lg:bottom-12 -right-4 lg:right-4` | sobre imagem | max-w-xs, p-6 | bg-white, shadow-xl, z-20 |
| Ícones Grid | `grid-cols-2 gap-6` | abaixo do texto | w-10 h-10 containers | bg-[#906c16]/10, rounded-lg |

**Diferenciador Visual:**
A moldura offset está agora no canto **inferior direito** (espelhada em relação à seção anterior), criando simetria rotacional entre as duas seções de imagem. A quote box usa o ícone de aspas com opacidade reduzida (`text-[#906c16]/30`) como elemento decorativo sem competir com o texto.

---

### SEÇÃO 7 — DOCTOR STORY CONNECTOR / GALERIA INFINITA

**Estrutura:**
```html
<section class="py-16 bg-white overflow-hidden border-b border-[#906c16]/10">
  <div class="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
    <div class="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 reveal">
      <div> → eyebrow + h2 </div>
      <a href="sobre-dra-luanda.html" class="group inline-flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#906c16] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1">
        Ver História Completa → ícone arrow
      </a>
    </div>
    <div class="relative w-full overflow-hidden reveal">
      <div class="marquee-track flex gap-4">
        → 6 imagens (h-[250px] lg:h-[350px] w-auto rounded-xl shadow-md) + 6 duplicadas
      </div>
    </div>
  </div>
</section>
```

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `marquee` | translateX(0) | translateX(-50%) | 35s | linear | page load | 0s, infinito |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| Botão "Ver História" | :hover | translateY(-4px) | shadow-lg→xl | — | bg:#1a1a1a→#906c16 | transition-all |
| Botão seta | :hover (group) | translateX(4px) | — | — | — | transition-transform |

**Diferenciador Visual:**
O mesmo componente `marquee-track` é reutilizado aqui, mas com `display: flex` e `gap-4` ao invés de `whitespace-nowrap`, adaptando-se a imagens em vez de texto. As imagens possuem `w-auto` com altura fixa, criando um carrossel horizontal de aspecto preservado.

---

### SEÇÃO 8 — SERVIÇOS

**Estrutura:**
```html
<section id="servicos" class="py-20 lg:py-32 bg-white">
  <div class="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
    <div class="text-center max-w-3xl mx-auto mb-16 reveal"> → eyebrow + h2 + p </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <!-- Card 1 -->
      <div class="service-card border-t-[3px] border-[#906c16] bg-[#f8f5f0] p-8 rounded-lg reveal relative group" style="transition-delay: 0ms;">
        <a href="..." class="absolute inset-0 z-10" aria-label="..."></a>
        <div class="w-14 h-14 bg-gradient-to-br from-[#906c16]/20 to-[#906c16]/5 rounded-xl flex items-center justify-center mb-6">
          <svg class="icon icon-lg text-[#906c16]"><use href="#icon-file-check" /></svg>
        </div>
        <h3 class="font-serif text-xl font-semibold text-[#1a1a1a] mb-3">Nomeação e Posse</h3>
        <p class="text-[#1a1a1a]/70 text-sm leading-relaxed mb-4">...</p>
        <ul class="space-y-2 mb-8"> → 2 itens com bullet redondo </ul>
        <span class="inline-flex items-center gap-2 text-[#906c16] text-sm font-bold group-hover:translate-x-1 transition-transform">Saiba Mais →</span>
      </div>
      <!-- Card 2 --> transition-delay: 100ms
      <!-- Card 3 --> transition-delay: 200ms
    </div>
    <div class="mt-16 text-center reveal">
      <a href="servicos/index.html" class="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#906c16] text-[#906c16] hover:bg-[#906c16] hover:text-white rounded-xl font-bold transition-all duration-300">
        Ver todos os nossos serviços →
      </a>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `bg-white`
- Layer 1 — cards: `bg-[#f8f5f0]`, `border-t-[3px] border-[#906c16]`

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| Nenhuma animação própria — herda `.reveal` global | opacity:0, translateY(30px) | opacity:1, translateY(0) | 0.6s | cubic-bezier(0.4,0,0.2,1) | scroll (IntersectionObserver) | 0ms, 100ms, 200ms stagger |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.service-card` | :hover | translateY(-8px) | 0 25px 50px -12px rgba(0,0,0,0.15) | — | — | 0.4s cubic-bezier(0.4,0,0.2,1) |
| Card CTA seta | :hover (group) | translateX(4px) | — | — | — | transition-transform |
| Botão "Ver todos" | :hover | — | — | — | bg:#906c16, text:white | 0.3s transition-all |

**Diferenciador Visual:**
Os cards de serviço possuem uma **borda superior dourada de 3px** (`border-t-[3px]`) que funciona como indicador de hierarquia. O link absoluto `inset-0 z-10` torna todo o card clicável, mas o CTA visual permanece interativo por baixo (z-index inferior). O stagger de 100ms entre cards cria uma cascata visual no scroll.

---

### SEÇÃO 9 — LIVRO / EBOOK

**Estrutura:**
```html
<section id="livro" class="py-20 lg:py-32 bg-white">
  <div class="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
    <div class="bg-dark rounded-3xl p-8 lg:p-20 flex flex-col lg:flex-row items-center gap-12 text-white reveal shadow-2xl overflow-hidden relative">
      <div class="absolute -top-20 -right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
      <div class="lg:w-1/3">
        <img src="assets/ebook-caminhos-para-a-posse-dra-luanda-naiara-advogada.webp" class="w-full rounded-xl shadow-2xl transform lg:-rotate-6 hover:rotate-0 transition-transform duration-500" width="400" height="600">
      </div>
      <div class="lg:w-2/3">
        <span class="text-gold text-sm font-semibold uppercase tracking-widest mb-4 inline-block tracking-[0.2em] animate-pulse">Ebook Gratuito</span>
        <h2 class="text-3xl lg:text-5xl font-serif mb-6 leading-tight">Obra: Caminhos <br><span class="text-gold italic">para a Posse</span></h2>
        <p class="text-white/70 text-lg mb-10 leading-relaxed">...</p>
        <a href="..." target="_blank" class="btn-premium-primary inline-flex items-center justify-center gap-3 text-white px-10 py-5 rounded-xl">Baixar Ebook Grátis</a>
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `bg-white` na section externa
- Layer 1 — container: `bg-dark` (`#1a1a1a`), `rounded-3xl`, `shadow-2xl`
- Layer 2 — blur decorativo: duas `div` absolutas com `bg-gold/10` e `/5`, `blur-3xl`, posicionadas nos cantos
- Layer 3 — conteúdo: `relative z-10` implícito pela ordem do DOM

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Container | `.bg-dark.rounded-3xl` | center | p-8 lg:p-20 | overflow-hidden, relative |
| Blur Top-Right | `absolute -top-20 -right-20` | top right | w-64 h-64 | bg-gold/10, blur-3xl, rounded-full |
| Blur Bottom-Left | `absolute -bottom-20 -left-20` | bottom left | w-64 h-64 | bg-gold/5, blur-3xl, rounded-full |
| Imagem Ebook | `img` | left col | w-full | lg:-rotate-6, hover:rotate-0, transition-transform 500ms |
| Badge | `span` | acima do título | inline-block | tracking-[0.2em], animate-pulse |

**Diferenciador Visual:**
A seção é um **card escuro flutuante dentro de uma seção branca**, criando um "spotlight" no meio da página. As manchas de blur dourado (`blur-3xl`) são puramente decorativas e criam atmosfera de "luxo digital". A rotação da imagem do ebook (`-rotate-6`) que se endireita no hover adiciona playfulness controlado.

---

### SEÇÃO 10 — DEPOIMENTOS

**Estrutura:**
```html
<section id="depoimentos" class="py-20 lg:py-32 bg-[#f8f5f0] overflow-hidden">
  <div class="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
    <div class="text-center max-w-3xl mx-auto mb-16 reveal">
      → eyebrow + h2 + Google logo + estrelas ★★★★★ (cor #FBBC04) + "+300 avaliações"
    </div>
    <!-- Marquee Row 1 (left) -->
    <div class="relative w-full overflow-hidden reveal mb-8">
      <div class="marquee-track flex gap-6 py-4">
        → 5 cards de depoimento + 5 duplicados
      </div>
    </div>
    <!-- Marquee Row 2 (right/reverse) -->
    <div class="relative w-full overflow-hidden reveal">
      <div class="marquee-track flex gap-6 py-4" style="animation-direction: reverse;">
        → 5 cards diferentes + 5 duplicados
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `bg-[#f8f5f0]`
- Layer 1 — cards: `bg-white`, `border border-[#906c16]/5`, `rounded-2xl`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Card | `.testimonial-card` | inline flex | w-[350px] sm:w-[450px], p-8 | flex-shrink-0, bg-white, rounded-2xl |
| Estrelas | `text-[#FBBC04]` | dentro do card | — | ★★★★★ (caracteres Unicode) |
| Avatar/Iniciais | `w-10 h-10 bg-[#906c16]/10 rounded-full` | left do autor | 40×40px | text-[#906c16], font-bold text-xs |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `marquee` | translateX(0) | translateX(-50%) | 35s | linear | page load | 0s (row 1), 0s reverse (row 2) |

**Diferenciador Visual:**
São **duas faixas de marquee em direções opostas** (`animation-direction: reverse`), criando um efeito de "corrente" dinâmica. Os cards não usam biblioteca de carrossel — é CSS puro com duplicação de DOM. A cor das estrelas `#FBBC04` é o amarelo exato da marca Google, reforçando a autenticidade das avaliações.

---

### SEÇÃO 11 — PROCESSO / TIMELINE

**Estrutura:**
```html
<section id="processo" class="py-20 lg:py-32 bg-[#f8f5f0]">
  <div class="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
    <div class="text-center max-w-3xl mx-auto mb-16 reveal"> → eyebrow + h2 + p </div>
    <div class="relative max-w-4xl mx-auto">
      <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full timeline-line hidden lg:block"></div>
      <div class="space-y-12 lg:space-y-0">
        <!-- Step 1 -->
        <div class="relative lg:flex items-center justify-between reveal">
          <div class="lg:w-5/12 lg:text-right lg:pr-12 mb-4 lg:mb-0"> → texto </div>
          <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#906c16] rounded-full flex items-center justify-center hidden lg:flex z-10">
            <span class="text-white font-bold">1</span>
          </div>
          <div class="lg:w-5/12 lg:pl-12"> → círculo mobile </div>
        </div>
        <!-- Steps 2-4 --> → alternância de ordem com `lg:order-2` / `lg:order-1`
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `bg-[#f8f5f0]`
- Layer 1 — linha do tempo: `absolute left-1/2 w-0.5 h-full`, gradiente `#906c16`→`#6b4f10`
- Layer 2 — nodes: círculos `w-12 h-12 bg-[#906c16] rounded-full`, z-index 10

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Timeline Line | `.timeline-line` | center absolute | w-0.5, h-full | gradiente to bottom, hidden lg:block |
| Node Desktop | `absolute left-1/2 ... w-12 h-12` | center | 48×48px | bg-[#906c16], rounded-full, z-10 |
| Node Mobile | `lg:hidden mb-4` | left do texto | 48×48px | bg-[#906c16], rounded-full |

**Diferenciador Visual:**
A timeline é **bidirecional**: no desktop, o texto alterna entre esquerda e direita (`lg:order-2` / `lg:order-1`) em torno de uma linha central contínua. No mobile, a linha desaparece (`hidden lg:block`) e os nodes ficam alinhados à esquerda do texto, adaptando a arquitetura sem quebrar a hierarquia.

---

### SEÇÃO 12 — INSTAGRAM FEED

**Estrutura:**
```html
<section class="py-20 lg:py-32 bg-[#f8f5f0]">
  <div class="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
    <div class="text-center max-w-3xl mx-auto mb-16 reveal"> → eyebrow + h2 + p </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
      <!-- Posts 1-3 -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <blockquote class="instagram-media" data-instgrm-permalink="..." data-instgrm-version="14" style="width:100%;"></blockquote>
      </div>
      <!-- Posts 4-5 (centralizados) -->
      <div class="hidden md:flex md:col-span-2 lg:col-span-3 flex-col md:flex-row justify-center gap-6">
        <div class="... w-full md:max-w-[340px]"> ... </div>
        <div class="... w-full md:max-w-[340px]"> ... </div>
      </div>
    </div>
    <div class="mt-16 text-center reveal">
      <a href="https://www.instagram.com/luandanaiaraadv/" target="_blank" class="inline-flex items-center gap-3 bg-[#906c16] hover:bg-[#c9a227] text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <svg>...</svg> Seguir no Instagram
      </a>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `bg-[#f8f5f0]`
- Layer 1 — cards de embed: `bg-white`, `rounded-2xl`, `shadow-lg`

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| Card Instagram | :hover | — | shadow-lg→shadow-2xl | — | — | 0.3s transition-shadow |
| Botão Seguir | :hover | translateY(-4px) | shadow-xl | — | bg:#906c16→#c9a227 | 0.3s transition-all |

**Diferenciador Visual:**
A grade dos embeds Instagram não é uniforme — os **dois últimos posts são centralizados** (`justify-center`) e ocupam `max-w-[340px]` cada, criando uma composição assimétrica de 3+2 que quebra a monotonia do grid perfeito.

---

### SEÇÃO 13 — INFORMAÇÕES DA EMPRESA COM MAPA

**Estrutura:**
```html
<section class="py-20 lg:py-32 bg-white">
  <div class="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
    <div class="text-center max-w-3xl mx-auto mb-16 reveal"> → eyebrow + h2 + p </div>
    <div class="grid lg:grid-cols-3 gap-8 reveal">
      <div class="space-y-6">
        <!-- Card Endereço -->
        <div class="bg-[#f8f5f0] p-6 rounded-xl"> → ícone + texto + botão "Traçar Rota" </div>
        <!-- Card Horário -->
        <div class="bg-[#f8f5f0] p-6 rounded-xl"> → ícone + texto </div>
        <!-- Card Contato -->
        <div class="bg-[#f8f5f0] p-6 rounded-xl"> → ícone + WhatsApp + Instagram inline </div>
      </div>
      <div class="lg:col-span-2 reveal" style="transition-delay: 100ms;">
        <div class="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?..." width="100%" height="100%" style="border:0; min-height:400px;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `bg-white`
- Layer 1 — info cards: `bg-[#f8f5f0]`, `rounded-xl`
- Layer 2 — mapa: iframe do Google Maps com `rounded-2xl`, `shadow-lg`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Info Card | `bg-[#f8f5f0] p-6 rounded-xl` | left col | — | space-y-6 entre cards |
| Map Container | `lg:col-span-2` | right | h-full, min-h-[400px] | rounded-2xl, overflow-hidden, shadow-lg |
| Botão Traçar Rota | `inline-flex ... bg-[#906c16]` | dentro do card endereço | px-5 py-2.5 | hover:bg-[#c9a227], rounded-lg |
| Instagram Inline | `flex items-center gap-2 pt-4 border-t border-[#1a1a1a]/10` | dentro do card contato | — | text-xs uppercase tracking-widest |

**Diferenciador Visual:**
O card de contato inclui uma **mini-linha de separação com o Instagram** (`border-t border-[#1a1a1a]/10 pt-4`) que funciona como um "footer" dentro do card, unificando WhatsApp e redes sociais sem sair do container.

---

### SEÇÃO 14 — CTA FINAL / FORMULÁRIO

**Estrutura:**
```html
<section id="contato" class="relative py-24 lg:py-32 bg-[#1a1a1a] overflow-hidden">
  <div class="absolute inset-y-0 left-0 w-full lg:w-1/2 z-0">
    <img src="assets/dra-luanda-naiara-advogada-concurso-publico-campo-grande-rj (5).webp" class="w-full h-full object-cover object-top opacity-20 lg:opacity-40" loading="lazy">
    <div class="absolute inset-0 bg-gradient-to-l from-[#1a1a1a] via-[#1a1a1a]/80 to-[#1a1a1a]/60"></div>
  </div>
  <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#906c16]/5 rounded-full blur-3xl"></div>
  <div class="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div class="reveal">
        <div class="inline-flex items-center gap-2 bg-[#906c16]/20 border border-[#906c16]/30 rounded-full px-4 py-2 mb-8">
          <svg class="icon icon-sm text-[#c9a227]"><use href="#icon-award" /></svg>
          <span class="text-[#c9a227] text-sm font-medium uppercase tracking-wider">Consulta Inicial Gratuita</span>
        </div>
        <h2 class="text-4xl lg:text-5xl xl:text-6xl font-serif font-medium text-white leading-tight mb-6"> → <span class="text-[#c9a227]">conquistar</span></h2>
        <p class="text-white/70 text-lg lg:text-xl max-w-2xl mb-10">...</p>
        <div class="flex flex-wrap gap-8 text-white/60 text-sm"> → 3 checks </div>
      </div>
      <div class="reveal" style="transition-delay: 200ms;">
        <form id="contactForm" class="bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-10 rounded-2xl shadow-2xl">
          <h3 class="font-serif text-2xl text-white mb-6">Agende sua consulta</h3>
          <div class="space-y-4">
            <div><label>...</label><input type="text" name="nome" required class="form-input w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm"></div>
            <div class="grid md:grid-cols-2 gap-4"> → tel + email </div>
            <div><select name="assunto" required class="form-input ... bg-[#2a2a2a] ... appearance-none cursor-pointer" style="background-image: url('data:image/svg+xml,...chevron...'); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1.25rem;"> → 7 opções </select></div>
            <div><textarea name="mensagem" rows="3" class="form-input ... resize-none"></textarea></div>
            <button type="submit" class="w-full bg-[#906c16] hover:bg-[#c9a227] text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 mt-4">
              <svg class="icon w-5 h-5"><use href="#icon-message-circle" /></svg> Iniciar Análise Gratuita
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `bg-[#1a1a1a]`
- Layer 1 — imagem de fundo: `absolute inset-y-0 left-0 w-full lg:w-1/2`, `opacity-20 lg:opacity-40`, `object-top`
- Layer 2 — gradiente sobre imagem: `bg-gradient-to-l from-[#1a1a1a] via-[#1a1a1a]/80 to-[#1a1a1a]/60`
- Layer 3 — blur decorativo: `absolute bottom-0 right-0 w-96 h-96 bg-[#906c16]/5 rounded-full blur-3xl`
- Layer 4 — conteúdo: `relative z-10`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Badge Consulta | `inline-flex ... bg-[#906c16]/20 border border-[#906c16]/30 rounded-full` | acima do título | px-4 py-2 | text-[#c9a227], uppercase tracking-wider |
| Formulário | `bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-10 rounded-2xl shadow-2xl` | right col | w-full | glassmorphism |
| Input | `.form-input` | dentro do form | w-full, px-4 py-3.5 | bg-white/5, border-white/10, rounded-xl |
| Select | `form-input ... appearance-none` | dentro do form | w-full | bg-[#2a2a2a], seta SVG inline como background-image |
| Botão Submit | `w-full bg-[#906c16]` | bottom do form | py-4 | hover:bg-[#c9a227], hover:-translate-y-1 |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.form-input` | :focus | — | 0 0 0 3px rgba(144,108,22,0.1) | border-color:#906c16 | outline:none | 0.3s |
| Botão Submit | :hover | translateY(-4px) | shadow-2xl | — | bg:#906c16→#c9a227 | 0.3s transition-all |

**Diferenciador Visual:**
O formulário utiliza **glassmorphism real** (`bg-white/5 backdrop-blur-md border-white/10`) sobre uma imagem escura, criando profundidade de camada. O select customizado não usa biblioteca — a seta é um SVG codificado em base64 diretamente no atributo `style` do elemento. O badge "Consulta Inicial Gratuita" é um `rounded-full` com fundo semitransparente dourado, funcionando como um "chip" de confiança.

---

### SEÇÃO 15 — RODAPÉ

**Estrutura:**
```html
<footer class="adm-footer-site relative pt-20 pb-10 bg-[#1a1a1a] overflow-hidden">
  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#906c16]/50 to-transparent"></div>
  <div class="w-full px-4 sm:px-6 lg:px-12 xl:px-20 adm-footer-main">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
      <!-- Col 1: Marca -->
      <div class="space-y-6"> → logo + descrição + ícones sociais (Instagram, LinkedIn, Facebook) </div>
      <!-- Col 2: Links Rápidos -->
      <div class="adm-footer-nav-col"> → h4 com underline dourado + 4 links com bullet animado </div>
      <!-- Col 3: Especialidades -->
      <div class="adm-footer-spec-col"> → h4 + 5 links </div>
      <!-- Col 4: Contato -->
      <div class="space-y-6"> → h4 + 3 itens (Empresa Google, Endereço Maps, WhatsApp) </div>
    </div>
    <!-- Bottom Credits -->
    <div class="mt-20 pt-8 border-t border-white/5 space-y-2">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-white/30 text-[10px] md:text-xs"> → © 2026 + link Google Business </p>
        <span class="text-white/30 text-[10px] md:text-xs">Desenvolvido por <a href="https://www.ag5agencia.com.br" class="text-[#906c16] hover:text-[#c9a227]">AG5 Agência</a></span>
      </div>
      <div class="text-center md:text-left">
        <p class="text-white/20 text-[10px]"><span itemprop="dateModified">Última atualização: 30 de Março de 2026</span> | <span itemprop="datePublished">Publicado em: 2024</span></p>
      </div>
      <div class="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
        <a href="#" id="shared-ck-prefs-link" class="text-white/30 hover:text-white text-[10px] md:text-xs transition-colors flex items-center gap-2 group">
          <span class="inline-flex items-center w-[28px] h-[14px] bg-white/5 rounded-full p-[2px] border border-white/10 relative">
            <span class="text-[6px] text-green-400/50 ml-0.5 mt-[-1px]">✓</span>
            <span class="text-[6px] text-red-400/50 ml-auto mr-0.5 mt-[-1px]">✕</span>
            <span class="absolute left-[15px] w-[10px] h-[10px] bg-[#906c16] rounded-full shadow-sm group-hover:bg-[#c9a227] transition-colors"></span>
          </span>
          Cookie
        </a>
        <span class="text-white/10 text-[10px] md:text-xs">|</span>
        <a href="termos-e-condicoes.html" class="...">Termos de Uso</a>
        <span class="text-white/10">|</span>
        <a href="politica-de-privacidade.html" class="...">Política de Privacidade</a>
      </div>
    </div>
  </div>
</footer>
```

**Fundo:**
- Layer 0 — base: `bg-[#1a1a1a]`
- Layer 1 — linha decorativa top: `h-1 bg-gradient-to-r from-transparent via-[#906c16]/50 to-transparent`
- Layer 2 — conteúdo: z-index 10 implícito

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Footer Container | `.adm-footer-site` | bottom | height: 555px (desktop) | bg-[#1a1a1a], border-top rgba(144,108,22,0.2) |
| Footer Main | `.adm-footer-main` | center | max-width: 1280px, mx-auto | padding: 35px 1.5rem 30px |
| Nav Column | `.adm-footer-nav-col` | col 2 | width: auto, margin-left: 57px | — |
| Spec Column | `.adm-footer-spec-col` | col 3 | width: auto, margin-left: 29px | — |
| Column Title | `h4.font-serif` | topo da coluna | inline-block | underline dourado 8px×0.5px absoluto em -bottom-2 |
| Social Icon | `w-10 h-10 rounded-full border border-white/10` | row | 40×40px | hover:bg-[#906c16], hover:border-[#906c16] |
| Cookie Toggle Visual | `w-[28px] h-[14px] bg-white/5 rounded-full` | inline | 28×14px | border-white/10, bola interna 10px bg-[#906c16] |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| Nenhuma animação própria — transições CSS padrão | — | — | 0.3s | ease | hover | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| Footer Links | :hover | — | — | — | color: white/60→#c9a227, bullet bg:[#906c16]/30→#906c16 | transition-colors |
| Social Icons | :hover | — | — | border-white/10→#906c16 | bg:transparent→#906c16, text:white/70→white | transition-all 0.3s |
| Cookie Toggle Ball | :hover (group) | — | — | — | bg:#906c16→#c9a227 | transition-colors |

**Diferenciador Visual:**
O rodapé tem **altura fixa de 555px no desktop** (`height: 555px` em `.adm-footer-site`), um valor altamente específico que cria um "bloco" arquitetônico sólido. As colunas 2 e 3 possuem margens esquerdas fixas (`57px` e `29px`) que criam um desalinhamento proposital em relação às colunas 1 e 4. O link de cookies não é texto simples — inclui uma **representação visual de toggle switch** (28×14px) construída com divs e spans, não com input checkbox.

---

### SEÇÃO 16 — WHATSAPP FLUTUANTE

**Estrutura:**
```html
<a href="https://wa.me/5521972542096?text=..." target="_blank" class="btn-flutuante-whatsapp" role="button" aria-label="Falar pelo WhatsApp">
  <svg viewBox="0 0 16 16" width="32" height="32" fill="currentColor">...</svg>
</a>
```

**Valores CSS (definição final que sobrescreve a primeira):**
```css
.btn-flutuante-whatsapp {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  color: #FFF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: pulse-whatsapp 2s infinite;
}
.btn-flutuante-whatsapp:hover {
  transform: scale(1.1) rotate(5deg);
  color: #FFF;
  animation: none;
  box-shadow: 0px 8px 25px rgba(37, 211, 102, 0.4);
}
```

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `pulse-whatsapp` | box-shadow: 0 0 0 0 rgba(201,162,39,0.6) | box-shadow: 0 0 0 20px rgba(201,162,39,0) | 2s | ease | page load | infinito |

**Diferenciador Visual:**
O botão WhatsApp possui **dois comportamentos de animação conflitantes que se alternam**: um pulse dourado contínuo (`animation: pulse-whatsapp 2s infinite`) quando inativo, e uma rotação elástica (`rotate(5deg)`) com escala no hover, que simultaneamente desativa o pulse (`animation: none`). Isso cria um feedback visual de "estado ativo" versus "estado de espera".

---

## 3. COMPONENTES REUTILIZÁVEIS

### 3.1 Botão Premium Primário

```css
/* ─── BOTÃO PREMIUM PRIMÁRIO ─── */
.btn-premium-primary {
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #906c16 0%, #c9a227 100%);
  box-shadow: 0 4px 20px rgba(144, 108, 22, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 0.75rem;
  font-weight: 700;
}
.btn-premium-primary:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(144, 108, 22, 0.5);
  filter: brightness(1.1);
}
.btn-premium-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: 0.8s;
}
.btn-premium-primary:hover::before {
  left: 100%;
}
```

### 3.2 Botão Premium Secundário (Glassmorphism)

```css
/* ─── BOTÃO PREMIUM SECUNDÁRIO ─── */
.btn-premium-secondary {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 0.75rem;
  font-weight: 700;
}
.btn-premium-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
```

### 3.3 Link Premium (Underline Animado)

```css
/* ─── LINK PREMIUM ─── */
.link-premium {
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  transition: color 0.3s ease;
}
.link-premium::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background: #c9a227;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.link-premium:hover::after {
  width: 100%;
}
.link-premium:hover {
  color: #c9a227;
}
```

### 3.4 Section Tag (Eyebrow com Linha)

```css
/* ─── SECTION TAG ─── */
.section-tag {
  position: relative;
  padding-left: 3rem;
}
.section-tag::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2px;
  background: #906c16;
}
.section-tag.center {
  display: inline-block;
}
```

### 3.5 Service Card

```css
/* ─── SERVICE CARD ─── */
.service-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-top: 3px solid #906c16;
  background-color: #f8f5f0;
  padding: 2rem;
  border-radius: 0.5rem;
  position: relative;
}
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}
```

### 3.6 Testimonial Card

```css
/* ─── TESTIMONIAL CARD ─── */
.testimonial-card {
  flex-shrink: 0;
  width: 350px; /* sm: 450px */
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(144, 108, 22, 0.05);
}
```

### 3.7 Floating WhatsApp Button

```css
/* ─── WHATSAPP FLUTUANTE (VERSÃO FINAL) ─── */
.btn-flutuante-whatsapp {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  color: #FFF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: pulse-whatsapp 2s infinite;
}
.btn-flutuante-whatsapp:hover {
  transform: scale(1.1) rotate(5deg);
  color: #FFF;
  animation: none;
  box-shadow: 0px 8px 25px rgba(37, 211, 102, 0.4);
}
```

### 3.8 Cookie Banner (Componente Completo)

Ver arquivos `cookie-banner.css` e `cookie-banner.js`. Resumo das classes:
- `#ck-banner`: fixed bottom, transform translateY(100%)→0, backdrop-filter blur(12px)
- `.ck-btn-primary`: gradiente #906c16→#c9a227, shadow dourada
- `.ck-btn-secondary`: glassmorphism, border branco 10%
- `.ck-modal-content`: fundo #f8f5f0, scale(0.9)→1, border-radius 8px
- `.ck-toggle-slider`: 44×24px, toggle dourado #906c16 quando checked

### 3.9 Mobile Menu Drawer

```css
/* ─── MOBILE MENU ─── */
.mobile-menu {
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #000000 !important;
}
.mobile-menu.open {
  transform: translateX(0);
}
```

### 3.10 Scrollbar Customizada

```css
/* ─── SCROLLBAR ─── */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f8f5f0;
}
::-webkit-scrollbar-thumb {
  background: #906c16;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #6b4f10;
}
```

### 3.11 Sistema de Ícones (SVG Sprite)

Todos os ícones são referenciados via `<svg class="icon [size]"><use href="#id" /></svg>`.
Tamanhos disponíveis:
- `.icon-sm`: 1rem × 1rem
- `.icon`: 1.5rem × 1.5rem (padrão)
- `.icon-lg`: 2rem × 2rem
- `.icon-xl`: 3rem × 3rem

Sprite inline contém 30+ símbolos: award, calendar, briefcase, file-check, shield-alert, users, heart-pulse, shield, graduation-cap, map-pin, phone, whatsapp, clock, send, instagram, facebook, linkedin, quote, target, heart, trophy, x, message-circle, alert-circle, check-circle, arrow-right, mail.

### 3.12 Sistema .reveal on Scroll

```css
/* ─── REVEAL ON SCROLL ─── */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
```

Uso no JS: `IntersectionObserver` com `threshold: 0.1` e `rootMargin: '0px 0px -50px 0px'`. Stagger via `style="transition-delay: 100ms;"` nos service cards.

---

## 4. SISTEMA GLOBAL DE ANIMAÇÕES

TABELA consolidada de TODOS os `@keyframes` declarados no CSS:

| Nome | 0% | 50% | 100% | Duração padrão | Easing | Onde é usado |
|---|---|---|---|---|---|---|
| `typing` | width: 0 | — | width: 100% | 2.5s | steps(35) | `.typewriter-text` (hero h1) |
| `blink-caret` | border-right-color: transparent | border-right-color: #906c16 | border-right-color: transparent | — | — | declarado mas não aplicado diretamente nos elementos analisados |
| `marquee` | transform: translateX(0) | — | transform: translateX(-50%) | 35s | linear | `.marquee-track` (ticker texto, galeria imagens, depoimentos) |
| `shimmer` | transform: translateX(-100%) | — | transform: translateX(100%) | — | — | declarado mas não aplicado diretamente |
| `ken-burns` | transform: scale(1.1); opacity: 0 | — | transform: scale(1); opacity: 0.8 | 3s | cubic-bezier(0.2,0.8,0.2,1) | `.animate-ken-burns` (imagem hero) |
| `image-float` | transform: translateY(0) scale(1.02) | transform: translateY(-10px) scale(1.05) | transform: translateY(0) scale(1.02) | 8s | ease-in-out | `.animate-image-float` (declarado, não observado em uso no HTML analisado) |
| `pulse-gold` | box-shadow: 0 0 0 0 rgba(144,108,22,0.4) | box-shadow: 0 0 0 15px rgba(144,108,22,0) | box-shadow: 0 0 0 0 rgba(144,108,22,0.4) | 2s | ease-in-out | `.hero-badge` (declarado, não observado em uso) |
| `fadeInUp` | opacity: 0; transform: translateY(30px) | — | opacity: 1; transform: translateY(0) | 0.8s | ease-out | `.animate-fade-in-up` (subtítulo, CTAs, stats do hero) |
| `pulse-whatsapp` | box-shadow: 0 0 0 0 rgba(201,162,39,0.6) | box-shadow: 0 0 0 20px rgba(201,162,39,0) | box-shadow: 0 0 0 0 rgba(201,162,39,0) | 2s | ease | `.btn-flutuante-whatsapp` |

---

## 5. COMPORTAMENTOS JAVASCRIPT

| Função / Comportamento | Trigger | Ação executada | Classes add/remove | Elementos afetados |
|---|---|---|---|---|
| Header Scroll Effect | `window scroll` | Adiciona/remove fundo e sombra; esconde/mostra header | `bg-black`, `shadow-lg` (add/remove); `style.transform` | `#header` |
| Mobile Menu Open | `click #menuBtn` | Abre drawer mobile | `.open` no `#mobileMenu`; remove `pointer-events-none`, add `opacity-100` no `#menuOverlay` | `#mobileMenu`, `#menuOverlay`, `body` (overflow:hidden) |
| Mobile Menu Close | `click #closeMenu` ou click overlay | Fecha drawer mobile | Remove `.open`; add `pointer-events-none`, remove `opacity-100` | `#mobileMenu`, `#menuOverlay`, `body` |
| Reveal on Scroll | `IntersectionObserver` (threshold 0.1, rootMargin -50px) | Adiciona classe `.active` | `.active` | `.reveal` |
| Form Submit | `submit #contactForm` | Previne submit, monta mensagem WhatsApp, abre link | — | `#contactForm` → `window.open(waUrl, '_blank')` |
| Phone Mask | `input #tel-input` | Formata telefone brasileiro | — | `#tel-input` (regex: `(\d{0,2})(\d{0,5})(\d{0,4})`) |
| Cookie Banner Init | `DOMContentLoaded` | Cria banner e modal se não houver consentimento | `.show` no `#ck-banner` após 1500ms | `body` (append `#ck-banner`, `#ck-modal`) |
| Cookie Accept All | `click #ck-accept-all` | Define analytics=true, marketing=true, salva cookie | — | `#ck-banner` (hide) |
| Cookie Reject | `click #ck-reject-all` | Define analytics=false, marketing=false, salva cookie | — | `#ck-modal`, `#ck-banner` (hide) |
| Cookie Save Prefs | `click #ck-save-prefs` | Lê toggles, salva preferências | — | `#ck-modal`, `#ck-banner` (hide) |
| Cookie Open Modal | `click #ck-customize` ou `#shared-ck-prefs-link` | Abre modal de preferências | `.show` no `#ck-modal` | `#ck-modal`, `body` (overflow:hidden) |
| Cookie Close Modal | `click #ck-modal-close` ou click backdrop | Fecha modal | Remove `.show` | `#ck-modal`, `body` |
| gtag Consent Update | após saveConsent | Atualiza consentimento do Google Analytics/Ads | — | `gtag('consent', 'update', {...})` |

**Detalhes da Máscara Telefone:**
```js
let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
```

**Detalhes do Header Scroll:**
```js
if (currentScroll > 20) header.classList.add('bg-black', 'shadow-lg');
else header.classList.remove('bg-black', 'shadow-lg');

if (currentScroll > lastScroll && currentScroll > 200) header.style.transform = 'translateY(-100%)';
else header.style.transform = 'translateY(0)';
```

**Detalhes do Form → WhatsApp:**
```js
const text = `Olá, me chamo ${nome}, vim através do site e gostaria de uma informação.

- E-mail: ${email}
- Telefone: ${telefone}
- Assunto: ${assunto}
- Situação: ${mensagem}`;
const waUrl = `https://wa.me/5521972542096?text=${encodeURIComponent(text)}`;
window.open(waUrl, '_blank');
```

---

## 6. RESPONSIVIDADE

| Breakpoint (max-width) | Elemento | Propriedade | Valor padrão | Valor no breakpoint |
|---|---|---|---|---|
| 1023px | `.adm-footer-site` | height | 555px | auto |
| 1023px | `.adm-footer-nav-col` | margin-left | 57px | 0 |
| 1023px | `.adm-footer-spec-col` | margin-left | 29px | 0 |
| 768px | `.btn-flutuante-whatsapp` | bottom/right | 24px / 24px | 20px / 20px |
| 768px | `.btn-flutuante-whatsapp` | width/height | 60px / 60px | 55px / 55px |
| 640px | `#ck-banner` | padding | 24px | 20px |
| 640px | `.ck-banner-content` | flex-direction | row | column |
| 640px | `.ck-banner-actions` | flex-direction | row | column |
| 640px | `.ck-btn` | width | auto | 100% |
| 640px | `.ck-modal-header/body/footer` | padding-x | 40px | 20px |
| 640px | `.ck-modal-footer` | flex-direction | row | column |
| 640px | `.ck-option` | flex-direction | row | column |
| 640px | `.ck-toggle` | align-self | — | flex-start |

**Comportamentos Responsivos Estruturais (Tailwind):**
- Hero: `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl` — tipografia fluida
- Hero image: `w-full lg:w-[55%]` — imagem ocupa metade no desktop, full no mobile
- Grid Serviços: `md:grid-cols-2 lg:grid-cols-3` — 1→2→3 colunas
- Grid Footer: `md:grid-cols-2 lg:grid-cols-4` — 1→2→4 colunas
- Timeline: `hidden lg:flex` na linha central; nodes mobile visíveis apenas abaixo de lg
- Instagram: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` — posts 4-5 centralizados apenas em md+
- Form: `md:grid-cols-2` para tel e email
- Header CTA e Nav: `hidden lg:flex/block` — apenas desktop
- Hamburger: `lg:hidden` — apenas mobile

---

## 7. PERFORMANCE & SEO TÉCNICO

| Técnica | Elemento/Recurso | Detalhe |
|---|---|---|
| `rel="preload"` | Google Fonts CSS | `as="style"` no `<head>` |
| `rel="preload"` | Hero image | `as="image"`, imagem: `advogada-luanda-naiara-escritorio-direito-administrativo-rj (1).webp` |
| `fetchpriority="high"` | Hero `<img>` | Prioridade de carregamento alta para LCP |
| `loading="lazy"` | Todas as imagens abaixo do fold | Observado em imagens da seção dor, sobre, galeria, depoimentos, CTA |
| `width` + `height` | Todas as `<img>` | Atributos explícitos para evitar CLS |
| Schema.org | `@type: LegalService` | Campos: name, image, @id, url, telephone, address, geo, openingHours, sameAs, aggregateRating |
| Schema.org | `@type: FAQPage` | 3 perguntas/respostas sobre especialidade, localização, nomeação |
| Geo Tags | `<meta name="geo.region">` | `BR-RJ`, `geo.placename`: Campo Grande, Rio de Janeiro |
| Open Graph | 8 tags | og:type, title, description, image (1200×630), url, locale |
| Twitter Cards | 4 tags | summary_large_image |
| Canonical | `<link rel="canonical">` | `https://www.luandanaiaraadv.com.br/` |
| Robots | `<meta name="robots">` | `index, follow` |
| Sitemap | `sitemap.xml` | Presente na raiz |
| Robots.txt | `robots.txt` | Presente na raiz |
| Instagram Embed | `//www.instagram.com/embed.js` | Script async para embeds nativos |
| Cookie Consent | LGPD/GDPR | Banner custom com modal de preferências, gtag consent update |

---

## 8. ANTI-PADRÕES REGISTRADOS

❌ **CARROSSEL DE DEPOIMENTOS COM SWIPER/SLICK**
→ Genérico seria: usar Swiper.js ou Slick com bullets, setas e JS pesado
→ Aqui foi feito: duas faixas de marquee CSS puro com duplicação de DOM, animação infinita e direções opostas
→ Prova técnica: `.marquee-track { animation: marquee 35s linear infinite; }` e `style="animation-direction: reverse;"` na segunda faixa

❌ **ÍCONES VIA FONT AWESOME CDN**
→ Genérico seria: carregar biblioteca completa de ícones via CDN
→ Aqui foi feito: SVG sprite inline no `<head>` com 30+ símbolos customizados, referenciados via `<use href="#id">`
→ Prova técnica: `<svg style="display: none;"><defs><symbol id="icon-award" ...></symbol>...</defs></svg>`

❌ **HERO COM BACKGROUND-IMAGE E OVERLAY SIMPLES**
→ Genérico seria: `background-image: url(...)` com overlay linear único
→ Aqui foi feito: imagem posicionada absolutamente (`right-0 w-[55%]`) com três gradientes sobrepostos (um sobre a imagem, um global, um mobile-only), mais animação Ken Burns
→ Prova técnica: `bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent` + `bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/45 to-transparent` + `bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/10 to-[#1a1a1a]/10 lg:hidden`

❌ **FORMULÁRIO COM BACKEND/PHP/NETLIFY**
→ Genérico seria: action para endpoint de processamento de leads
→ Aqui foi feito: interceptação do submit via JS, formatação de mensagem WhatsApp e redirecionamento para `wa.me`
→ Prova técnica: `e.preventDefault(); window.open(waUrl, '_blank');` no listener de `#contactForm`

❌ **NAVBAR FIXA TRANSPARENTE GENÉRICA**
→ Genérico seria: header fixo com fundo escuro permanente
→ Aqui foi feito: header transparente que adquire fundo após 20px de scroll, com comportamento de ocultação inteligente (esconde ao descer, mostra ao subir)
→ Prova técnica: `if (currentScroll > 20) header.classList.add('bg-black', 'shadow-lg');` e `if (currentScroll > lastScroll && currentScroll > 200) header.style.transform = 'translateY(-100%)';`

❌ **CTA PADRÃO "SAIBA MAIS" COM BOTÃO SÓLIDO**
→ Genérico seria: botão retangular sólido com texto
→ Aqui foi feito: link premium com underline parcial (40px) que expande para 100% no hover, combinado com seta que translada horizontalmente
→ Prova técnica: `.link-premium::after { width: 40px; height: 2px; background: #c9a227; transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1); }` e `.link-premium:hover::after { width: 100%; }`

❌ **COOKIE BANNER DE PLUGIN PRONTO**
→ Genérico seria: banner genérico de terceiros (Cookiebot, OneTrust)
→ Aqui foi feito: sistema custom completo com banner inferior, modal de preferências, toggles customizados, sincronização com gtag e link de reabertura no footer com representação visual de switch
→ Prova técnica: `cookie-banner.js` (340 linhas) + `cookie-banner.css` (347 linhas) + `#shared-ck-prefs-link` com mini-toggle visual SVG-free construído em divs

❌ **FOOTER DE TEMPLATE COM HEIGHT AUTO**
→ Genérico seria: footer com padding padrão e altura fluida
→ Aqui foi feito: footer com altura fixa de 555px no desktop, colunas com margens esquerdas assimétricas (57px e 29px), linha decorativa gradiente no topo, e informações de última atualização + publicação com Schema itemprop
→ Prova técnica: `.adm-footer-site { height: 555px; }`, `.adm-footer-nav-col { margin-left: 57px; }`, `.adm-footer-spec-col { margin-left: 29px; }`, e `<span itemprop="dateModified">Última atualização: 30 de Março de 2026</span>`

❌ **MARQUEE COM BIBLIOTECA JS**
→ Genérico seria: usar react-fast-marquee ou jQuery Marquee para texto rolante
→ Aqui foi feito: animação CSS `@keyframes marquee { transform: translateX(0) → translateX(-50%) }` com duplicação idêntica do conteúdo para loop suave
→ Prova técnica: `.marquee-track { display: flex; animation: marquee 35s linear infinite; }` e duplicação literal do HTML dentro do mesmo container

---

**FIM DO SITE DNA — LUANDA NAIARA ADVOCACIA**
