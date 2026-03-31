# Relatório de Auditoria SEO/GEO - Luanda Naiara Advocacia

**Data:** 30/03/2026  
**Site:** https://www.luandanaiara.ag5agencia.site  
**Auditor:** SEO Specialist Agent

---

## Resumo Executivo

Este relatório apresenta uma análise completa de SEO (Search Engine Optimization) e GEO (Generative Engine Optimization) para o site da Dra. Luanda Naiara. O site possui uma base técnica sólida, mas há oportunidades de melhoria significativas.

### Pontuação Geral: 78/100

| Categoria | Pontuação | Status |
|-----------|-----------|--------|
| Técnico | 85/100 | ✅ Bom |
| Conteúdo | 75/100 | ⚠️ Regular |
| E-E-A-T | 80/100 | ✅ Bom |
| GEO/AI | 70/100 | ⚠️ Regular |

---

## 1. Análise Técnica

### ✅ Pontos Positivos

1. **Meta Tags Básicas:** Todas as páginas têm charset UTF-8 e viewport configurados
2. **Canonical Tags:** Presentes na maioria das páginas principais
3. **Robots.txt:** Bem configurado com permissões para AI bots (GEO)
4. **Sitemap.xml:** Presente e atualizado
5. **Schema.org:** Implementado em páginas principais (LegalService, FAQPage, Person)
6. **Open Graph:** Presente nas páginas principais
7. **Twitter Cards:** Configuradas
8. **Geo Tags:** Implementados (geo.region, geo.placename, geo.position)
9. **Imagens:** Formatos modernos (.webp) sendo usados
10. **Fetchpriority:** Usado na imagem hero do index.html

### ⚠️ Problemas Identificados

#### 1.1 Títulos (Title Tags)

| Página | Título Atual | Problema |
|--------|--------------|----------|
| index.html | "Dra. Luanda Naiara \| Especialista em Direito Administrativo..." | Nome antes da keyword principal |
| sobre-dra-luanda.html | "Dra. Luanda Naiara \| Especialista..." | Nome antes da keyword |
| servicos/index.html | "Serviços de Advocacia em Concursos..." | OK, mas pode melhorar |
| politica-de-privacidade.html | "Política de Privacidade \| Dra. Luanda Naiara" | Keyword secundária primeiro |
| termos-e-condicoes.html | "Termos e Condições \| Dra. Luanda Naiara" | Keyword secundária primeiro |

**Recomendação:** Aplicar estratégia de Front-loading - colocar a keyword principal no início do título.

#### 1.2 Meta Descriptions

- ✅ Bem escritas e dentro do limite de 150-160 caracteres
- ✅ Incluem call-to-action implícito
- ⚠️ Algumas páginas secundárias têm descriptions genéricas

#### 1.3 Schema.org JSON-LD

| Página | Schema | Status |
|--------|--------|--------|
| index.html | LegalService + FAQPage | ✅ |
| sobre-dra-luanda.html | AboutPage + Person | ✅ |
| direito-previdenciario/index.html | LegalService + FAQPage | ✅ |
| servicos/index.html | ItemList | ✅ |
| politica-de-privacidade.html | ❌ Nenhum | ⚠️ |
| termos-e-condicoes.html | ❌ Nenhum | ⚠️ |
| direito-previdenciario/servicos.html | ❌ Nenhum | ⚠️ |
| direito-previdenciario/sobre-dra-luanda.html | AboutPage + Person | ✅ |

#### 1.4 Open Graph / Twitter Cards

| Página | OG | Twitter | Status |
|--------|-----|---------|--------|
| index.html | ✅ | ✅ | Completo |
| sobre-dra-luanda.html | ❌ | ❌ | Ausente |
| direito-previdenciario/index.html | ✅ | ✅ | Completo |
| servicos/index.html | ⚠️ Parcial | ❌ | Incompleto |
| politica-de-privacidade.html | ❌ | ❌ | Ausente |
| termos-e-condicoes.html | ❌ | ❌ | Ausente |
| direito-previdenciario/servicos.html | ❌ | ❌ | Ausente |

#### 1.5 Imagens

**Problemas encontrados:**

1. **Alt text ausente em algumas imagens:**
   - `direito-previdenciario/index.html` linha 936-938: imagem hero sem alt descritivo
   - `direito-previdenciario/index.html` linha 1034-1036: imagem sem alt completo

2. **Loading lazy não aplicado consistentemente:**
   - Imagens hero NÃO devem ter lazy loading (correto)
   - Imagens abaixo da dobra DEVEM ter lazy loading (parcialmente aplicado)

3. **Width/Height explícitos:**
   - ✅ Bem implementado na maioria das imagens
   - ⚠️ Algumas imagens em direito-previdenciario/index.html sem dimensões explícitas

#### 1.6 Performance (Core Web Vitals)

| Métrica | Status | Observação |
|---------|--------|------------|
| LCP | ⚠️ | Hero image tem fetchpriority, mas font preload pode melhorar |
| INP | ⚠️ | Scripts não críticos precisam de defer/async |
| CLS | ✅ | Imagens com width/height explícitos |

**Problemas:**
- Tailwind CSS CDN carregado sem defer (bloqueia renderização)
- Fontes sem `font-display: swap`

#### 1.7 Heading Hierarchy (H1-H6)

**index.html:**
- ✅ 1 H1 principal (linha 1004)
- ✅ Hierarquia lógica H2 → H3 → H4
- ⚠️ Muitos H4 em depoimentos (pode ser aceitável)

**direito-previdenciario/index.html:**
- ✅ 1 H1 principal (linha 969)
- ✅ Hierarquia lógica

#### 1.8 Timestamps (GEO)

❌ **Nenhuma página possui "Last Updated" visível** - Importante para GEO e E-E-A-T

---

## 2. Análise E-E-A-T

### Experience (Experiência)

✅ **Pontos Positivos:**
- Fotos reais do escritório e da advogada
- Depoimentos de clientes
- Casos de sucesso mencionados

⚠️ **Oportunidades:**
- Adicionar mais case studies detalhados
- Incluir número de casos atendidos

### Expertise (Especialização)

✅ **Pontos Positivos:**
- OAB mencionada
- Especialização em Direito Administrativo destacada
- Livro publicado mencionado

⚠️ **Oportunidades:**
- Adicionar formação acadêmica completa
- Cursos e certificações
- Anos de experiência explícitos

### Authoritativeness (Autoridade)

✅ **Pontos Positivos:**
- Links para perfis sociais
- Google Knowledge Panel referenciado
- Avaliações Google (4.9 estrelas, 309 reviews)

⚠️ **Oportunidades:**
- Adicionar publicações em mídia
- Parcerias institucionais
- Palestras e eventos

### Trustworthiness (Confiança)

✅ **Pontos Positivos:**
- Endereço físico completo
- Telefone e WhatsApp
- Política de Privacidade presente
- Termos e Condições presentes
- HTTPS (presumido)

⚠️ **Oportunidades:**
- Adicionar selos de segurança
- Certificações profissionais

---

## 3. Análise GEO (Generative Engine Optimization)

### Preparação para IA

| Critério | Status | Observação |
|----------|--------|------------|
| FAQ Schema | ✅ | Implementado nas páginas principais |
| Respostas diretas | ⚠️ | Pode melhorar a estrutura das respostas |
| Dados estruturados | ✅ | Schema.org bem implementado |
| Citações claras | ⚠️ | Adicionar mais estatísticas com fontes |
| Timestamps | ❌ | Não há datas de atualização |

### Robots.txt para IA Bots

✅ **Excelente:** Robots.txt permite explicitamente:
- GPTBot
- ChatGPT-User
- Claude-Web
- PerplexityBot
- Google-Extended

---

## 4. SEO Local

### NAP (Name, Address, Phone)

✅ **Consistente em:**
- Schema.org JSON-LD
- Página de contato
- Rodapé

**Dados:**
- Nome: Luanda Naiara - Advogada
- Endereço: Estrada da Cachamorra, 350, Bloco 03, Sala 403, Campo Grande, RJ
- Telefone: +55 21 97254-2096

### Geo Tags

✅ Implementados:
- geo.region: BR-RJ
- geo.placename: Campo Grande, Rio de Janeiro
- geo.position: -22.9068;-43.5465

---

## 5. Acessibilidade

| Critério | Status |
|----------|--------|
| Alt text em imagens | ⚠️ Parcial |
| Contraste de cores | ✅ Adequado |
| Estrutura semântica | ✅ Boa (header, nav, section, footer) |
| ARIA labels | ⚠️ Pode melhorar |
| Skip links | ❌ Não presente |

---

## 6. Recomendações Prioritárias

### 🔴 Alta Prioridade

1. **Otimizar Title Tags** - Aplicar front-loading de keywords
2. **Adicionar Schema.org** em páginas que faltam
3. **Adicionar Open Graph/Twitter Cards** em todas as páginas
4. **Implementar font-display: swap** nas fontes
5. **Adicionar timestamps** "Última atualização" nas páginas

### 🟡 Média Prioridade

6. **Completar alt text** em todas as imagens
7. **Adicionar defer/async** em scripts não críticos
8. **Melhorar E-E-A-T** com mais credenciais
9. **Adicionar mais FAQs** para GEO

### 🟢 Baixa Prioridade

10. **Implementar Service Worker** para PWA
11. **Adicionar breadcrumbs** com Schema
12. **Criar mais internal linking**

---

## 7. Checklist de Tarefas Externas (Não Automatizáveis)

O usuário precisa executar estas tarefas manualmente:

### Google Search Console
- [ ] Verificar propriedade do site
- [ ] Submeter sitemap.xml
- [ ] Solicitar indexação das páginas principais
- [ ] Configurar domínio preferido (www ou non-www)

### Google Meu Negócio
- [ ] Verificar perfil do Google Meu Negócio
- [ ] Garantir que NAP corresponda ao site
- [ ] Adicionar fotos do escritório
- [ ] Responder às avaliações

### Analytics
- [ ] Configurar Google Analytics 4
- [ ] Configurar Google Tag Manager
- [ ] Configurar eventos de conversão (cliques no WhatsApp)

### Backlinks e Autoridade
- [ ] Cadastrar em diretórios jurídicos (OAB, FindLaw, etc.)
- [ ] Buscar parcerias para guest posts
- [ ] Participar de eventos e obter menções

### Performance
- [ ] Testar no PageSpeed Insights após deploy
- [ ] Verificar Core Web Vitals no Search Console
- [ ] Considerar CDN para assets

### Segurança
- [ ] Verificar certificado SSL (HTTPS)
- [ ] Configurar HSTS
- [ ] Verificar segurança do servidor

---

## 8. Conclusão

O site da Dra. Luanda Naiara tem uma base técnica sólida com boa implementação de Schema.org, Geo tags e estrutura semântica. As principais oportunidades de melhoria estão em:

1. **Otimização de títulos** para melhor CTR
2. **Completude de meta tags** sociais em todas as páginas
3. **Adição de timestamps** para GEO
4. **Melhoria de E-E-A-T** com mais credenciais visíveis

Com as correções sugeridas, o site pode atingir uma pontuação de 90+/100 em SEO/GEO.

---

**Próximos Passos:**
1. Revisar e aprovar as alterações propostas
2. Implementar as mudanças de alta prioridade
3. Executar o checklist de tarefas externas
4. Monitorar resultados no Search Console após 2-4 semanas
