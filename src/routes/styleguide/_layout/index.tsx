import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/styleguide/_layout/')({
   component: DesignTokensPage,
});

// ─── Helpers ────────────────────────────────────────────────────────────────

function ColorSwatch({
   label,
   value,
   textClass = 'text-foreground',
}: {
   label: string;
   value: string;
   textClass?: string;
}) {
   return (
      <div className='flex flex-col gap-1.5 items-center'>
         <div
            className='w-full h-16 rounded-lg border border-black/10 shadow-sm'
            style={{ background: value }}
         />
         <span className={`text-xs font-mono ${textClass}`}>{label}</span>
      </div>
   );
}

function Section({
   title,
   description,
   children,
}: {
   title: string;
   description?: string;
   children: React.ReactNode;
}) {
   return (
      <section className='mb-12'>
         <div className='mb-5'>
            <h2 className='text-2xl font-semibold text-foreground'>{title}</h2>
            {description && (
               <p className='mt-1 text-sm text-muted-foreground'>
                  {description}
               </p>
            )}
         </div>
         {children}
      </section>
   );
}

// ─── Page ────────────────────────────────────────────────────────────────────

function DesignTokensPage() {
   function toggleDark() {
      document.documentElement.classList.toggle('dark');
   }

   // Color scales
   const blueScale = [
      { label: '50', value: 'var(--blue-50)' },
      { label: '100', value: 'var(--blue-100)' },
      { label: '200', value: 'var(--blue-200)' },
      { label: '300', value: 'var(--blue-300)' },
      { label: '400', value: 'var(--blue-400)' },
      { label: '500', value: 'var(--blue-500)' },
      { label: '600', value: 'var(--blue-600)' },
      { label: '700', value: 'var(--blue-700)' },
      { label: '800', value: 'var(--blue-800)' },
      { label: '900', value: 'var(--blue-900)' },
      { label: '950', value: 'var(--blue-950)' },
   ];
   const goldScale = [
      { label: '50', value: 'var(--gold-50)' },
      { label: '100', value: 'var(--gold-100)' },
      { label: '200', value: 'var(--gold-200)' },
      { label: '300', value: 'var(--gold-300)' },
      { label: '400', value: 'var(--gold-400)' },
      { label: '500', value: 'var(--gold-500)' },
      { label: '600', value: 'var(--gold-600)' },
      { label: '700', value: 'var(--gold-700)' },
      { label: '800', value: 'var(--gold-800)' },
      { label: '900', value: 'var(--gold-900)' },
      { label: '950', value: 'var(--gold-950)' },
   ];
   const neutralScale = [
      { label: '50', value: 'var(--neutral-50)' },
      { label: '100', value: 'var(--neutral-100)' },
      { label: '200', value: 'var(--neutral-200)' },
      { label: '300', value: 'var(--neutral-300)' },
      { label: '400', value: 'var(--neutral-400)' },
      { label: '500', value: 'var(--neutral-500)' },
      { label: '600', value: 'var(--neutral-600)' },
      { label: '700', value: 'var(--neutral-700)' },
      { label: '800', value: 'var(--neutral-800)' },
      { label: '900', value: 'var(--neutral-900)' },
      { label: '950', value: 'var(--neutral-950)' },
   ];

   const radii = [
      { label: 'xs', value: 'var(--radius-xs)', example: '2px' },
      { label: 'sm', value: 'var(--radius-sm)', example: '4px' },
      { label: 'md', value: 'var(--radius-md)', example: '6px' },
      { label: 'default', value: 'var(--radius)', example: '10px' },
      { label: 'lg', value: 'var(--radius-lg)', example: '12px' },
      { label: 'xl', value: 'var(--radius-xl)', example: '16px' },
      { label: '2xl', value: 'var(--radius-2xl)', example: '24px' },
      { label: 'full', value: '9999px', example: '9999px' },
   ];

   const shadows = [
      { label: 'xs', cls: 'shadow-xs' },
      { label: 'sm', cls: 'shadow-sm' },
      { label: 'md', cls: 'shadow-md' },
      { label: 'lg', cls: 'shadow-lg' },
      { label: 'xl', cls: 'shadow-xl' },
      { label: '2xl', cls: 'shadow-2xl' },
   ];

   return (
      <div className='max-w-4xl mx-auto px-8 py-10'>
         {/* Header */}
         <div className='flex items-start justify-between mb-10'>
            <div>
               <h1 className='text-4xl font-bold text-foreground'>
                  Design Tokens
               </h1>
               <p className='mt-2 text-muted-foreground'>
                  Paleta de cores, tipografia, espaçamento e outros tokens do
                  Mulim Design System.
               </p>
            </div>
            <button
               onClick={toggleDark}
               className='inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors cursor-pointer'
            >
               <span>🌓</span>
               <span>Alternar tema</span>
            </button>
         </div>

         {/* ── Blue Scale ── */}
         <Section
            title='Azul (Blue)'
            description='Cor primária da marca — usada em CTAs, links e elementos de destaque.'
         >
            <div className='grid grid-cols-11 gap-2'>
               {blueScale.map(c => (
                  <ColorSwatch key={c.label} label={c.label} value={c.value} />
               ))}
            </div>
         </Section>

         {/* ── Gold Scale ── */}
         <Section
            title='Dourado (Gold)'
            description='Cor de acento — usada no sidebar, destaques premium e elementos de status.'
         >
            <div className='grid grid-cols-11 gap-2'>
               {goldScale.map(c => (
                  <ColorSwatch key={c.label} label={c.label} value={c.value} />
               ))}
            </div>
         </Section>

         {/* ── Neutral Scale ── */}
         <Section
            title='Neutros'
            description='Escala de cinza usada em fundos, bordas, textos secundários e estados desabilitados.'
         >
            <div className='grid grid-cols-11 gap-2'>
               {neutralScale.map(c => (
                  <ColorSwatch key={c.label} label={c.label} value={c.value} />
               ))}
            </div>
         </Section>

         {/* ── Semantic Colors ── */}
         <Section
            title='Cores Semânticas'
            description='Cores de significado: sucesso, aviso, informação e erro.'
         >
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
               {[
                  {
                     label: 'Success',
                     bg: 'var(--success)',
                     fg: 'var(--success-foreground)',
                  },
                  {
                     label: 'Warning',
                     bg: 'var(--warning)',
                     fg: 'var(--warning-foreground)',
                  },
                  {
                     label: 'Info',
                     bg: 'var(--info)',
                     fg: 'var(--info-foreground)',
                  },
                  {
                     label: 'Destructive',
                     bg: 'var(--destructive)',
                     fg: 'var(--destructive-foreground)',
                  },
               ].map(({ label, bg, fg }) => (
                  <div
                     key={label}
                     className='flex flex-col items-center justify-center h-20 rounded-xl px-4 text-sm font-semibold shadow-sm border border-black/10'
                     style={{ background: bg, color: fg }}
                  >
                     {label}
                  </div>
               ))}
            </div>
         </Section>

         {/* ── Typography ── */}
         <Section
            title='Tipografia'
            description='Escala tipográfica com fonte Geist Variable.'
         >
            <div className='space-y-4 p-6 rounded-xl border border-border bg-card'>
               <div className='pb-3 border-b border-border'>
                  <span className='text-xs font-mono text-muted-foreground'>
                     H1 · 3rem · SemiBold
                  </span>
                  <h1 className='text-5xl font-semibold mt-1'>
                     Mulim Advogados
                  </h1>
               </div>
               <div className='pb-3 border-b border-border'>
                  <span className='text-xs font-mono text-muted-foreground'>
                     H2 · 2.5rem · SemiBold
                  </span>
                  <h2 className='text-4xl font-semibold mt-1'>
                     Consultoria Jurídica
                  </h2>
               </div>
               <div className='pb-3 border-b border-border'>
                  <span className='text-xs font-mono text-muted-foreground'>
                     H3 · 2rem · SemiBold
                  </span>
                  <h3 className='text-3xl font-semibold mt-1'>
                     Área do Cliente
                  </h3>
               </div>
               <div className='pb-3 border-b border-border'>
                  <span className='text-xs font-mono text-muted-foreground'>
                     H4 · 1.25rem · SemiBold
                  </span>
                  <h4 className='text-xl font-semibold mt-1'>
                     Gerenciamento de Processos
                  </h4>
               </div>
               <div className='pb-3 border-b border-border'>
                  <span className='text-xs font-mono text-muted-foreground'>
                     body-b1 · 1rem · Regular
                  </span>
                  <p className='body-b1 mt-1'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua.
                  </p>
               </div>
               <div className='pb-3 border-b border-border'>
                  <span className='text-xs font-mono text-muted-foreground'>
                     body-b2 · 0.875rem · Regular
                  </span>
                  <p className='body-b2 mt-1'>
                     Texto de suporte com tamanho secundário para descrições,
                     help text e informações complementares.
                  </p>
               </div>
               <div className='pb-3 border-b border-border'>
                  <span className='text-xs font-mono text-muted-foreground'>
                     body-b3 · 0.75rem · Regular
                  </span>
                  <p className='body-b3 mt-1'>
                     Texto terciário para notas de rodapé, metadados e
                     informações menos relevantes.
                  </p>
               </div>
               <div className='flex gap-6'>
                  <div>
                     <span className='text-xs font-mono text-muted-foreground block mb-1'>
                        caption
                     </span>
                     <p className='caption'>Legenda de imagem</p>
                  </div>
                  <div>
                     <span className='text-xs font-mono text-muted-foreground block mb-1'>
                        label
                     </span>
                     <p className='label'>CAMPO OBRIGATÓRIO</p>
                  </div>
               </div>
            </div>
         </Section>

         {/* ── Border Radius ── */}
         <Section
            title='Border Radius'
            description='Escala de arredondamento de bordas.'
         >
            <div className='grid grid-cols-4 gap-4 sm:grid-cols-8'>
               {radii.map(({ label, value, example }) => (
                  <div key={label} className='flex flex-col items-center gap-2'>
                     <div
                        className='w-14 h-14 bg-primary/15 border-2 border-primary'
                        style={{ borderRadius: value }}
                     />
                     <div className='text-center'>
                        <p className='text-xs font-mono font-medium text-foreground'>
                           {label}
                        </p>
                        <p className='text-xs text-muted-foreground'>
                           {example}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </Section>

         {/* ── Shadows ── */}
         <Section
            title='Sombras'
            description='Escala de elevação via box-shadow.'
         >
            <div className='grid grid-cols-3 gap-4 sm:grid-cols-6'>
               {shadows.map(({ label, cls }) => (
                  <div key={label} className='flex flex-col items-center gap-3'>
                     <div className={`w-16 h-16 rounded-xl bg-card ${cls}`} />
                     <p className='text-xs font-mono text-muted-foreground'>
                        {label}
                     </p>
                  </div>
               ))}
            </div>
         </Section>

         {/* ── Semantic UI Colors ── */}
         <Section
            title='Variáveis de Interface'
            description='CSS variables mapeadas pelo shadcn para background, card, muted, border, input, primary, secondary e accent.'
         >
            <div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
               {[
                  {
                     label: 'background',
                     bg: 'var(--background)',
                     fg: 'var(--foreground)',
                  },
                  {
                     label: 'card',
                     bg: 'var(--card)',
                     fg: 'var(--card-foreground)',
                  },
                  {
                     label: 'muted',
                     bg: 'var(--muted)',
                     fg: 'var(--muted-foreground)',
                  },
                  {
                     label: 'primary',
                     bg: 'var(--primary)',
                     fg: 'var(--primary-foreground)',
                  },
                  {
                     label: 'secondary',
                     bg: 'var(--secondary)',
                     fg: 'var(--secondary-foreground)',
                  },
                  {
                     label: 'accent',
                     bg: 'var(--accent)',
                     fg: 'var(--accent-foreground)',
                  },
                  {
                     label: 'sidebar',
                     bg: 'var(--sidebar)',
                     fg: 'var(--sidebar-foreground)',
                  },
                  {
                     label: 'sidebar-primary',
                     bg: 'var(--sidebar-primary)',
                     fg: 'var(--sidebar-primary-foreground)',
                  },
               ].map(({ label, bg, fg }) => (
                  <div
                     key={label}
                     className='flex items-center justify-center h-14 rounded-lg px-3 text-xs font-mono font-semibold border border-black/10'
                     style={{ background: bg, color: fg }}
                  >
                     {label}
                  </div>
               ))}
            </div>
         </Section>
      </div>
   );
}
