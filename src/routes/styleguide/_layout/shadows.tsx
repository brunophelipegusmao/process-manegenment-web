import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/styleguide/_layout/shadows')({
   component: ShadowsPage,
});

const shadows = [
   {
      cls: 'shadow-xs',
      label: 'shadow-xs',
      desc: 'Elevação mínima — inputs, small elements',
   },
   {
      cls: 'shadow-sm',
      label: 'shadow-sm',
      desc: 'Elevação baixa — cards, botões',
   },
   {
      cls: 'shadow-md',
      label: 'shadow-md',
      desc: 'Elevação média — dropdowns, tooltips',
   },
   {
      cls: 'shadow-lg',
      label: 'shadow-lg',
      desc: 'Elevação alta — popovers, modais',
   },
   {
      cls: 'shadow-xl',
      label: 'shadow-xl',
      desc: 'Elevação muito alta — sheets',
   },
   {
      cls: 'shadow-2xl',
      label: 'shadow-2xl',
      desc: 'Elevação máxima — overlays principais',
   },
];

const semanticShadows = [
   { variable: '--shadow-card', label: 'Card shadow' },
   { variable: '--shadow-dialog', label: 'Dialog shadow' },
   { variable: '--shadow-popover', label: 'Popover shadow' },
   { variable: '--shadow-dropdown', label: 'Dropdown shadow' },
];

function ShadowsPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Sombras</h1>
            <p className='text-muted-foreground mt-1'>
               Escala de elevação via box-shadow (Tailwind).
            </p>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Escala Tailwind
            </h2>
            <div className='grid grid-cols-2 gap-6 sm:grid-cols-3'>
               {shadows.map(({ cls, label, desc }) => (
                  <div key={cls} className='flex flex-col gap-3'>
                     <div className={`h-20 rounded-lg bg-card ${cls}`} />
                     <div>
                        <code className='text-sm font-mono font-medium text-foreground'>
                           {label}
                        </code>
                        <p className='text-xs text-muted-foreground mt-0.5'>
                           {desc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Comparação de Elevação
            </h2>
            <div className='flex flex-wrap gap-8 items-end'>
               {shadows.map(({ cls, label }) => (
                  <div key={cls} className='flex flex-col items-center gap-2'>
                     <div
                        className={`rounded-lg bg-card ${cls}`}
                        style={{ width: 64, height: 64 }}
                     />
                     <code className='text-[10px] font-mono text-muted-foreground'>
                        {label}
                     </code>
                  </div>
               ))}
            </div>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Sombra Interna
            </h2>
            <div className='flex flex-wrap gap-6'>
               <div className='flex flex-col gap-2'>
                  <div className='h-20 w-32 rounded-lg bg-muted shadow-inner' />
                  <code className='text-xs font-mono text-muted-foreground'>
                     shadow-inner
                  </code>
               </div>
               <div className='flex flex-col gap-2'>
                  <div className='h-20 w-32 rounded-lg bg-muted shadow-none' />
                  <code className='text-xs font-mono text-muted-foreground'>
                     shadow-none
                  </code>
               </div>
            </div>
         </div>
      </div>
   );
}
