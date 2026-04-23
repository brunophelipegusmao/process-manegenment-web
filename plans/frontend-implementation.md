# Plano de Implementação — Frontend Process Management

## Contexto

API REST em NestJS + Fastify (`process-management-api`) para gestão de processos cíveis brasileiros.  
Este documento guia a construção completa do frontend em React 19 + TanStack Router para consumir essa API.

**Base URL da API**: `http://localhost:3333`  
**Documentação interativa**: `http://localhost:3333/docs` (Swagger/OpenAPI)

---

## 1. Stack atual do frontend

| Tecnologia | Versão | Papel |
|---|---|---|
| React | 19 | UI |
| Vite | 8 | Bundler + dev server |
| TypeScript | ~6.0 | Tipagem estática |
| TanStack Router | 1.x | Routing file-based |
| Tailwind CSS | v4 | Estilização utilitária |
| shadcn/ui (radix-nova) | 4.x | Componentes de UI |
| Motion | 12.x | Animações |

---

## 2. Pacotes a instalar

```bash
# Server state, formulários, validação
pnpm add @tanstack/react-query @tanstack/react-query-devtools
pnpm add react-hook-form @hookform/resolvers zod

# HTTP client
pnpm add axios

# Auth client (BetterAuth — mesmo que a API usa)
pnpm add better-auth

# Datas (format pt-BR, cálculos)
pnpm add date-fns

# Tabelas headless (sort, filter, paginação)
pnpm add @tanstack/react-table

# Charts (módulo Reports)
pnpm add recharts

# Toast notifications
pnpm add sonner

# Shadcn components
pnpm dlx shadcn@latest add button input label form select dialog sheet \
  table badge card tabs dropdown-menu avatar separator skeleton \
  command popover calendar breadcrumb sidebar tooltip scroll-area \
  alert-dialog progress
```

---

## 3. Módulos da API mapeados

### 3.1 Autenticação (`/auth/*`)
Gerenciado pelo BetterAuth. Endpoints relevantes:

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/auth/sign-in/email` | Login com e-mail + senha |
| POST | `/auth/sign-out` | Logout |
| GET | `/auth/session` | Sessão atual |
| GET | `/me` | Dados do usuário autenticado |

**Perfis**: `superadmin` · `advogado` · `paralegal`

### 3.2 Clientes (`/clients`)

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/clients` | Listar (paginado) |
| GET | `/clients/:id` | Detalhe |
| POST | `/clients` | Criar |
| PATCH | `/clients/:id` | Atualizar |
| DELETE | `/clients/:id` | Excluir |

**Filtros**: `email`, `name`, `type` (`pf`/`pj`), `page`, `pageSize`  
**Campos**: `name`, `email`, `phone?`, `type` (`pf` = pessoa física / `pj` = pessoa jurídica)

### 3.3 Processos (`/processes`)

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/processes` | Listar (paginado) |
| GET | `/processes/:id` | Detalhe |
| POST | `/processes` | Criar |
| PATCH | `/processes/:id` | Atualizar |
| DELETE | `/processes/:id` | Excluir |

**Filtros**: `clientId`, `cnjNumber`, `courtType` (`vara`/`jec`), `status`, `mentionsWitness`, `page`, `pageSize`  
**Campos**: `clientId`, `cnjNumber`, `comarca`, `vara`, `courtType`, `authorName`, `defendantName`, `clientSide` (`reu`/`autor`), `status` (`citado`/`em_andamento`/`encerrado`), `citationDate?`, `mentionsWitness`

### 3.4 Audiências (`/hearings`)

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/hearings` | Listar (paginado) |
| GET | `/hearings/:id` | Detalhe |
| POST | `/hearings` | Criar |
| PATCH | `/hearings/:id` | Atualizar dados |
| POST | `/hearings/:id/reschedule` | Reagendar (gera novos prazos + e-mail E5) |
| DELETE | `/hearings/:id` | Cancelar (cancela prazos + e-mail E4) |

**Filtros**: `processId`, `type`, `status`, `startsAt`, `endsAt`, `page`, `pageSize`  
**Tipos**: `conciliacao` · `aij` · `oitiva` · `acij`  
**Status**: `agendada` · `realizada` · `cancelada` · `redesignada`

### 3.5 Testemunhas (`/witnesses`)

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/witnesses` | Listar (paginado) |
| GET | `/witnesses/:id` | Detalhe |
| POST | `/witnesses` | Criar (valida limite: JEC=4, vara=10) |
| PATCH | `/witnesses/:id` | Atualizar dados |
| POST | `/witnesses/:id/replace` | Substituir (cria nova + marca original) |
| POST | `/witnesses/:id/intimation` | Registrar intimação |
| POST | `/witnesses/:id/intimation/outcome` | Registrar resultado da intimação |
| DELETE | `/witnesses/:id` | Desistir (status=desistida, cancela prazos) |

**Filtros**: `processId`, `side` (`reu`/`autor`), `status`, `replaced`, `page`, `pageSize`  
**⚠ GATE-1**: campos CPF, RG, CNH, document são **bloqueados** (400)  
**⚠ GATE-2**: limite de testemunhas por tipo de juízo (JEC=4, vara=10)  
**Status do ciclo de vida**: `pendente_dados` → `dados_completos` → `rol_juntado` → `intimada` → `intimacao_positiva`/`intimacao_negativa` → `aguardando_cliente`/`desistida`/`substituida`

**Métodos de intimação**: `carta_simples` · `carta_precatoria` · `sala_passiva` · `mandado` · `whatsapp`  
**Resultado da intimação**: `positive` (exige `hearingDate`) · `negative`

### 3.6 Prazos (`/deadlines`)

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/deadlines` | Listar (paginado) |
| GET | `/deadlines/:id` | Detalhe |
| POST | `/deadlines` | Criar (calcula `dueDate` em dias úteis automaticamente) |
| PATCH | `/deadlines/:id` | Atualizar |
| DELETE | `/deadlines/:id` | Cancelar |

**Filtros**: `processId`, `witnessId`, `type`, `status`, `dueDateFrom`, `dueDateTo`, `page`, `pageSize`  
**Tipos**: `dados_testemunha` · `custas_precatoria` · `juntada_intimacao` · `desistencia_testemunha` · `providencia_cliente`  
**Status**: `aberto` · `cumprido` · `vencido` · `cancelado`

### 3.7 Feriados (`/holidays`)

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/holidays` | Listar (paginado) |
| GET | `/holidays/:id` | Detalhe |
| POST | `/holidays` | Criar |
| PATCH | `/holidays/:id` | Atualizar |
| DELETE | `/holidays/:id` | Excluir |

**Filtros**: `date`, `type` (`nacional`/`estadual`/`municipal`), `state`, `municipality`, `source` (`auto`/`manual`), `page`, `pageSize`  
**Nota**: fonte `auto` = sincronizado via BrasilAPI (cron mensal), `manual` = criado pelo usuário

### 3.8 Usuários (`/users`) — apenas `superadmin`

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/users` | Listar (paginado) |
| GET | `/users/:id` | Detalhe |
| POST | `/users` | Criar usuário administrativo |
| PATCH | `/users/:id` | Atualizar |
| DELETE | `/users/:id` | Excluir (exceto superadmin) |

**Filtros**: `email`, `profile`, `active`, `page`, `pageSize`

### 3.9 Reports (`/reports`) — `superadmin` e `advogado`

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/reports/overview` | KPIs agregados do sistema |
| GET | `/reports/deadlines-by-status` | Contagem de prazos por status |
| GET | `/reports/witnesses-by-status` | Contagem de testemunhas por status |
| GET | `/reports/upcoming-hearings` | Audiências nos próximos 30 dias |

---

## 4. Envelopes de resposta da API

Todas as respostas seguem o padrão:

```typescript
// Sucesso (item único ou ação)
{ data: T }

// Sucesso (lista paginada)
{ data: T[], meta: { total: number, page: number, pageSize: number } }

// Erro
{ error: string, details?: unknown }
```

---

## 5. Arquitetura de arquivos

### 5.1 Árvore de rotas

```
src/routes/
├── __root.tsx                        # layout raiz (já existe) — adicionar QueryProvider + Toaster
├── index.tsx                         # "/" → redirect para /dashboard (ou /login se não autenticado)
├── (auth)/
│   └── login.tsx                     # "/login" — público, redireciona para /dashboard se logado
└── (app)/
    ├── _layout.tsx                   # layout protegido: sidebar + header (beforeLoad verifica sessão)
    ├── dashboard.tsx                 # "/dashboard"
    ├── clients/
    │   ├── index.tsx                 # "/clients" — lista + criação
    │   └── $clientId.tsx            # "/clients/:clientId" — detalhe + edição
    ├── processes/
    │   ├── index.tsx                 # "/processes" — lista + criação
    │   └── $processId.tsx           # "/processes/:processId" — detalhe com abas
    ├── hearings/
    │   └── index.tsx                 # "/hearings" — lista (global ou por processo)
    ├── witnesses/
    │   └── index.tsx                 # "/witnesses" — lista
    ├── deadlines/
    │   └── index.tsx                 # "/deadlines" — lista
    ├── holidays/
    │   └── index.tsx                 # "/holidays"
    ├── users/
    │   └── index.tsx                 # "/users" — superadmin only
    └── reports/
        └── index.tsx                 # "/reports" — superadmin/advogado only
```

### 5.2 Feature slices

```
src/features/
├── auth/
│   ├── components/
│   │   └── LoginForm.tsx
│   ├── hooks/
│   │   └── use-session.ts            # hook para ler/validar sessão
│   ├── services/
│   │   └── auth.service.ts           # signIn, signOut, getSession via better-auth client
│   ├── types.ts
│   └── index.ts
├── clients/
│   ├── components/
│   │   ├── ClientTable.tsx
│   │   ├── ClientForm.tsx
│   │   └── ClientFilters.tsx
│   ├── hooks/
│   │   ├── use-clients.ts            # useQuery para lista paginada
│   │   └── use-client-mutations.ts   # useMutation para create/update/delete
│   ├── services/
│   │   └── clients.service.ts
│   ├── types.ts
│   └── index.ts
├── processes/
│   ├── components/
│   │   ├── ProcessTable.tsx
│   │   ├── ProcessForm.tsx
│   │   ├── ProcessDetail.tsx          # tabs: Audiências | Testemunhas | Prazos
│   │   └── ProcessFilters.tsx
│   ├── hooks/
│   │   ├── use-processes.ts
│   │   └── use-process-mutations.ts
│   ├── services/
│   │   └── processes.service.ts
│   ├── types.ts
│   └── index.ts
├── hearings/
│   ├── components/
│   │   ├── HearingTable.tsx
│   │   ├── HearingForm.tsx
│   │   ├── RescheduleDialog.tsx
│   │   └── CancelHearingDialog.tsx
│   ├── hooks/
│   │   ├── use-hearings.ts
│   │   └── use-hearing-mutations.ts  # create, update, reschedule, cancel
│   ├── services/
│   │   └── hearings.service.ts
│   ├── types.ts
│   └── index.ts
├── witnesses/
│   ├── components/
│   │   ├── WitnessTable.tsx
│   │   ├── WitnessForm.tsx
│   │   ├── WitnessStatusBadge.tsx
│   │   ├── IntimationDialog.tsx
│   │   ├── IntimationOutcomeDialog.tsx
│   │   └── ReplaceWitnessDialog.tsx
│   ├── hooks/
│   │   ├── use-witnesses.ts
│   │   └── use-witness-mutations.ts  # create, update, replace, intimation, outcome, withdraw
│   ├── services/
│   │   └── witnesses.service.ts
│   ├── types.ts
│   └── index.ts
├── deadlines/
│   ├── components/
│   │   ├── DeadlineTable.tsx
│   │   ├── DeadlineForm.tsx
│   │   └── DeadlineStatusBadge.tsx
│   ├── hooks/
│   │   ├── use-deadlines.ts
│   │   └── use-deadline-mutations.ts
│   ├── services/
│   │   └── deadlines.service.ts
│   ├── types.ts
│   └── index.ts
├── holidays/
│   ├── components/
│   │   ├── HolidayTable.tsx
│   │   └── HolidayForm.tsx
│   ├── hooks/
│   │   ├── use-holidays.ts
│   │   └── use-holiday-mutations.ts
│   ├── services/
│   │   └── holidays.service.ts
│   ├── types.ts
│   └── index.ts
├── users/
│   ├── components/
│   │   ├── UserTable.tsx
│   │   └── UserForm.tsx
│   ├── hooks/
│   │   ├── use-users.ts
│   │   └── use-user-mutations.ts
│   ├── services/
│   │   └── users.service.ts
│   ├── types.ts
│   └── index.ts
└── reports/
    ├── components/
    │   ├── OverviewKPIs.tsx           # cards com KPIs do /reports/overview
    │   ├── DeadlinesByStatusChart.tsx # gráfico de barras/pizza
    │   ├── WitnessesByStatusChart.tsx
    │   └── UpcomingHearingsList.tsx
    ├── hooks/
    │   └── use-reports.ts
    ├── services/
    │   └── reports.service.ts
    ├── types.ts
    └── index.ts
```

### 5.3 Serviços e tipos globais

```
src/services/
└── api.ts                  # instância axios + interceptors

src/types/
└── index.ts                # tipos de domínio (já existe, precisa de expansão)

src/app/
└── providers/
    └── index.tsx           # adicionar QueryClientProvider + AuthProvider
```

---

## 6. Camada de serviço (`src/services/api.ts`)

```typescript
// Responsabilidades do axios instance:
// 1. baseURL = VITE_API_URL (env var)
// 2. withCredentials: true  (para cookies BetterAuth)
// 3. Request interceptor → injeta Authorization header se houver token
// 4. Response interceptor → unwrap { data } do envelope
// 5. Response interceptor → em 401, redireciona para /login
// 6. Response interceptor → mapeia { error, details } para Error legível
```

---

## 7. Controle de acesso

```typescript
// src/routes/(app)/_layout.tsx — beforeLoad
// Chama /me, se 401 → throw redirect({ to: '/login' })

// src/routes/(app)/users/index.tsx — beforeLoad adicional
// Se perfil !== 'superadmin' → throw redirect({ to: '/dashboard' })

// src/routes/(app)/reports/index.tsx — beforeLoad adicional
// Se perfil === 'paralegal' → throw redirect({ to: '/dashboard' })
```

Perfis e acessos:

| Rota | superadmin | advogado | paralegal |
|---|---|---|---|
| `/dashboard` | ✓ | ✓ | ✓ |
| `/clients` | ✓ | ✓ | ✓ |
| `/processes` | ✓ | ✓ | ✓ |
| `/hearings` | ✓ | ✓ | ✓ |
| `/witnesses` | ✓ | ✓ | ✓ |
| `/deadlines` | ✓ | ✓ | ✓ |
| `/holidays` | ✓ | ✓ | ✓ |
| `/reports` | ✓ | ✓ | ✗ |
| `/users` | ✓ | ✗ | ✗ |

---

## 8. Tipos de domínio (`src/types/index.ts`)

Expandir com todos os tipos espelhando os DTOs da API:

```typescript
// Enums
type UserProfile = 'superadmin' | 'advogado' | 'paralegal'
type ClientType = 'pf' | 'pj'
type ClientSide = 'reu' | 'autor'
type CourtType = 'vara' | 'jec'
type ProcessStatus = 'citado' | 'em_andamento' | 'encerrado'
type HearingType = 'conciliacao' | 'aij' | 'oitiva' | 'acij'
type HearingStatus = 'agendada' | 'realizada' | 'cancelada' | 'redesignada'
type WitnessStatus = 'pendente_dados' | 'dados_completos' | 'rol_juntado' | 'intimada' | 'intimacao_positiva' | 'intimacao_negativa' | 'aguardando_cliente' | 'desistida' | 'substituida'
type IntimationMethod = 'carta_simples' | 'carta_precatoria' | 'sala_passiva' | 'mandado' | 'whatsapp'
type DeadlineType = 'dados_testemunha' | 'custas_precatoria' | 'juntada_intimacao' | 'desistencia_testemunha' | 'providencia_cliente'
type DeadlineStatus = 'aberto' | 'cumprido' | 'vencido' | 'cancelado'
type HolidayType = 'nacional' | 'estadual' | 'municipal'
type HolidaySource = 'auto' | 'manual'

// Interfaces de domínio + envelopes de API
interface ApiMeta { total: number; page: number; pageSize: number }
interface ApiResponse<T> { data: T; meta?: ApiMeta }
interface ApiError { error: string; details?: unknown }
```

---

## 9. Fases de implementação

### Fase 1 — Auth e Infraestrutura
- [ ] Instalar todos os pacotes listados na seção 2
- [ ] Criar `src/services/api.ts` (axios instance + interceptors)
- [ ] Configurar `better-auth` client
- [ ] Atualizar `src/app/providers/index.tsx` com `QueryClientProvider` + `AuthProvider`
- [ ] Atualizar `src/routes/__root.tsx` com `<Toaster>` (sonner)
- [ ] Criar feature `auth/` (LoginForm, use-session, auth.service)
- [ ] Criar rota `(auth)/login.tsx`
- [ ] Expandir `src/types/index.ts` com todos os tipos de domínio

### Fase 2 — Layout Shell
- [ ] Instalar shadcn `sidebar` + `breadcrumb` + `avatar` + `dropdown-menu`
- [ ] Criar rota `(app)/_layout.tsx` com `beforeLoad` de sessão
- [ ] Construir sidebar com navegação baseada em perfil
- [ ] Construir header com menu do usuário (logout, perfil)
- [ ] Criar rota `/` com redirect inteligente

### Fase 3 — API Client + TanStack Query
- [ ] Configurar `QueryClient` (staleTime, gcTime, retry)
- [ ] Criar utilitários de query keys (per feature)
- [ ] Adicionar React Query Devtools (dev only)

### Fase 4 — Clientes
- [ ] Feature `clients/` completa (service, hooks, components)
- [ ] Rota `/clients` (tabela com filtros e paginação)
- [ ] Rota `/clients/:clientId` (detalhe + edição inline ou modal)
- [ ] Formulário de criação via Dialog
- [ ] Confirmação de exclusão via AlertDialog

### Fase 5 — Processos
- [ ] Feature `processes/` completa
- [ ] Rota `/processes` (tabela com filtros: status, courtType, clientId, mentionsWitness)
- [ ] Rota `/processes/:processId` (detalhe com Tabs: Audiências | Testemunhas | Prazos)
- [ ] Formulário de criação/edição (select de cliente)

### Fase 6 — Audiências
- [ ] Feature `hearings/` completa
- [ ] Rota `/hearings` (lista global, com filtro por processo)
- [ ] Aba Audiências na detail view do Processo
- [ ] Dialogs: Criar · Reagendar · Cancelar (com confirmação)
- [ ] Badge por status e tipo

### Fase 7 — Testemunhas
- [ ] Feature `witnesses/` completa
- [ ] Rota `/witnesses` (lista global)
- [ ] Aba Testemunhas na detail view do Processo
- [ ] Indicador de limite atingido (JEC=4 / vara=10)
- [ ] Dialogs: Criar · Substituir · Registrar intimação · Registrar resultado · Desistir
- [ ] WitnessStatusBadge com mapeamento visual do ciclo de vida

### Fase 8 — Prazos
- [ ] Feature `deadlines/` completa
- [ ] Rota `/deadlines` (lista global com filtro de data)
- [ ] Aba Prazos na detail view do Processo
- [ ] Destaque visual para prazos `vencidos` e próximos do vencimento
- [ ] Dialog: Criar · Atualizar status · Cancelar

### Fase 9 — Feriados
- [ ] Feature `holidays/` completa
- [ ] Rota `/holidays` (tabela com filtros de tipo/estado/município/fonte)
- [ ] Indicação visual de feriados `auto` (badge) vs `manual`
- [ ] Dialog: Criar · Editar · Excluir

### Fase 10 — Usuários (superadmin)
- [ ] Feature `users/` completa
- [ ] Rota `/users` com guarda de perfil `superadmin`
- [ ] Filtros: perfil, ativo/inativo
- [ ] Toggle de ativo/inativo inline
- [ ] Impedir exclusão do próprio usuário superadmin

### Fase 11 — Reports / Dashboard
- [ ] Feature `reports/` completa
- [ ] Rota `/reports` (superadmin/advogado)
- [ ] Rota `/dashboard` com cards de KPIs do `/reports/overview`
- [ ] Gráfico de prazos por status (recharts PieChart ou BarChart)
- [ ] Gráfico de testemunhas por status
- [ ] Lista de audiências dos próximos 30 dias

### Fase 12 — Polish
- [ ] Toggle dark/light mode (alterna classe `.dark` no `<html>`)
- [ ] Error boundaries por rota (TanStack Router `errorComponent`)
- [ ] Loading skeletons em tabelas e cards
- [ ] Estados vazios (empty state components)
- [ ] Feedback toast para todas as mutations (sucesso + erro)
- [ ] Título dinâmico de `<head>` por rota

---

## 10. Regras de negócio críticas para o frontend

| Regra | Onde aplicar |
|---|---|
| **GATE-1**: Nunca exibir ou enviar CPF/RG/CNH nos formulários de testemunha | `WitnessForm.tsx` — não incluir esses campos |
| **GATE-2**: Limite de testemunhas (JEC=4, vara=10) | Exibir contador e desabilitar botão "Adicionar" ao atingir limite |
| Testemunha com `replaced=true` não pode receber prazos | Ocultar/desabilitar ação "Novo Prazo" para testemunhas substituídas |
| Audiência `cancelada` não pode ser reagendada | Desabilitar botão "Reagendar" para audiências canceladas |
| `carta_simples` exige `hearingDate` | Campo condicional obrigatório no `IntimationDialog` |
| Resultado `positive` exige `hearingDate` | Campo condicional obrigatório no `IntimationOutcomeDialog` |
| Perfil `superadmin` não pode ser excluído via API | Ocultar/desabilitar botão Delete para o próprio superadmin logado |

---

## 11. Variáveis de ambiente

```env
# .env.local
VITE_API_URL=http://localhost:3333
VITE_BETTER_AUTH_URL=http://localhost:3333
```

---

## 12. Verificação pós-implementação

- [ ] `pnpm build` passa sem erros TypeScript
- [ ] Login com credenciais válidas redireciona para `/dashboard`
- [ ] Logout limpa sessão e vai para `/login`
- [ ] Acesso a `/users` como `paralegal` redireciona para `/dashboard`
- [ ] Acesso a `/reports` como `paralegal` redireciona para `/dashboard`
- [ ] CRUD de clientes: criar · editar · listar paginado · deletar com confirmação
- [ ] Criar processo vinculado a cliente existente
- [ ] Adicionar audiência a processo · reagendar · cancelar
- [ ] Adicionar testemunha · registrar intimação · registrar resultado
- [ ] Contador de limite de testemunhas reflete corretamente o tipo de juízo
- [ ] Dashboard exibe KPIs via `/reports/overview`
- [ ] Dark mode funciona em todas as páginas
