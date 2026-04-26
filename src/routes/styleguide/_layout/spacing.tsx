import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/styleguide/_layout/spacing')({
   component: SpacingPage,
});

const spacingScale = [
   { token: '0', px: '0px', rem: '0rem' },
   { token: '0.5', px: '2px', rem: '0.125rem' },
   { token: '1', px: '4px', rem: '0.25rem' },
   { token: '1.5', px: '6px', rem: '0.375rem' },
   { token: '2', px: '8px', rem: '0.5rem' },
   { token: '2.5', px: '10px', rem: '0.625rem' },
   { token: '3', px: '12px', rem: '0.75rem' },
   { token: '4', px: '16px', rem: '1rem' },
   { token: '5', px: '20px', rem: '1.25rem' },
   { token: '6', px: '24px', rem: '1.5rem' },
   { token: '7', px: '28px', rem: '1.75rem' },
   { token: '8', px: '32px', rem: '2rem' },
   { token: '10', px: '40px', rem: '2.5rem' },
   { token: '12', px: '48px', rem: '3rem' },
   { token: '16', px: '64px', rem: '4rem' },
   { token: '20', px: '80px', rem: '5rem' },
   { token: '24', px: '96px', rem: '6rem' },
   { token: '32', px: '128px', rem: '8rem' },
];

function SpacingPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Espaçamento</h1>
            <p className='text-muted-foreground mt-1'>
               Escala de espaçamento 4px base (Tailwind).
            </p>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Escala Visual
            </h2>
            <div className='flex flex-col gap-2'>
               {spacingScale
                  .filter(s => Number(s.token) > 0)
                  .map(({ token, px, rem }) => (
                     <div key={token} className='flex items-center gap-4'>
                        <code className='text-xs font-mono text-muted-foreground w-8 text-right'>
                           {token}
                        </code>
                        <div
                           className='bg-primary/30 rounded-sm h-4 shrink-0'
                           style={{ width: px === '0px' ? '1px' : px }}
                        />
                        <span className='text-xs text-muted-foreground'>
                           {px} · {rem}
                        </span>
                     </div>
                  ))}
            </div>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Usos Comuns
            </h2>
            <div className='grid gap-4 text-sm'>
               <div className='flex flex-col gap-2'>
                  <p className='text-muted-foreground'>
                     gap-2 (8px) — Espaço entre elementos inline pequenos
                  </p>
                  <div className='flex gap-2'>
                     {[1, 2, 3, 4].map(i => (
                        <div
                           key={i}
                           className='h-8 w-8 rounded bg-primary/20 border border-primary/30'
                        />
                     ))}
                  </div>
               </div>
               <div className='flex flex-col gap-2'>
                  <p className='text-muted-foreground'>
                     gap-4 (16px) — Espaço padrão entre campos de formulário
                  </p>
                  <div className='flex gap-4'>
                     {[1, 2, 3].map(i => (
                        <div
                           key={i}
                           className='h-8 w-16 rounded bg-primary/20 border border-primary/30'
                        />
                     ))}
                  </div>
               </div>
               <div className='flex flex-col gap-2'>
                  <p className='text-muted-foreground'>
                     gap-6 (24px) — Espaço entre seções de card
                  </p>
                  <div className='flex gap-6'>
                     {[1, 2].map(i => (
                        <div
                           key={i}
                           className='h-8 w-24 rounded bg-primary/20 border border-primary/30'
                        />
                     ))}
                  </div>
               </div>
               <div className='flex flex-col gap-2'>
                  <p className='text-muted-foreground'>
                     p-8 (32px) — Padding padrão de página
                  </p>
                  <div className='p-8 bg-muted/50 rounded border border-border inline-block'>
                     <div className='h-8 w-32 rounded bg-primary/20 border border-primary/30' />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
