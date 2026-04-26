import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/styleguide/_layout/typography')({
   component: TypographyPage,
});

function Section({
   title,
   children,
}: {
   title: string;
   children: React.ReactNode;
}) {
   return (
      <div className='space-y-4'>
         <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
            {title}
         </h2>
         {children}
      </div>
   );
}

function TypographyPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Tipografia</h1>
            <p className='text-muted-foreground mt-1'>
               Escala tipográfica e classes utilitárias do sistema.
            </p>
         </div>

         <Section title='Escala de Tamanho (Tailwind)'>
            <div className='flex flex-col gap-3'>
               {[
                  { cls: 'text-xs', label: 'text-xs · 12px' },
                  { cls: 'text-sm', label: 'text-sm · 14px' },
                  { cls: 'text-base', label: 'text-base · 16px' },
                  { cls: 'text-lg', label: 'text-lg · 18px' },
                  { cls: 'text-xl', label: 'text-xl · 20px' },
                  { cls: 'text-2xl', label: 'text-2xl · 24px' },
                  { cls: 'text-3xl', label: 'text-3xl · 30px' },
                  { cls: 'text-4xl', label: 'text-4xl · 36px' },
               ].map(({ cls, label }) => (
                  <div key={cls} className='flex items-baseline gap-4'>
                     <span className={`${cls} font-medium text-foreground`}>
                        Mulim Advogados
                     </span>
                     <code className='text-xs text-muted-foreground font-mono'>
                        {label}
                     </code>
                  </div>
               ))}
            </div>
         </Section>

         <Section title='Pesos'>
            <div className='flex flex-col gap-2'>
               {[
                  { cls: 'font-light', label: 'font-light · 300' },
                  { cls: 'font-normal', label: 'font-normal · 400' },
                  { cls: 'font-medium', label: 'font-medium · 500' },
                  { cls: 'font-semibold', label: 'font-semibold · 600' },
                  { cls: 'font-bold', label: 'font-bold · 700' },
                  { cls: 'font-extrabold', label: 'font-extrabold · 800' },
               ].map(({ cls, label }) => (
                  <div key={cls} className='flex items-center gap-4'>
                     <span className={`text-lg ${cls} text-foreground w-48`}>
                        Mulim Advogados
                     </span>
                     <code className='text-xs text-muted-foreground font-mono'>
                        {label}
                     </code>
                  </div>
               ))}
            </div>
         </Section>

         <Section title='Classes Semânticas Customizadas'>
            <div className='flex flex-col gap-3'>
               <div className='flex items-baseline gap-4'>
                  <p className='body-b1'>
                     body-b1 — Texto de corpo principal. 16px regular.
                  </p>
                  <code className='text-xs text-muted-foreground font-mono shrink-0'>
                     .body-b1
                  </code>
               </div>
               <div className='flex items-baseline gap-4'>
                  <p className='body-b2'>
                     body-b2 — Texto secundário. 14px regular.
                  </p>
                  <code className='text-xs text-muted-foreground font-mono shrink-0'>
                     .body-b2
                  </code>
               </div>
               <div className='flex items-baseline gap-4'>
                  <p className='body-b3'>
                     body-b3 — Texto terciário. 12px regular.
                  </p>
                  <code className='text-xs text-muted-foreground font-mono shrink-0'>
                     .body-b3
                  </code>
               </div>
               <div className='flex items-baseline gap-4'>
                  <p className='caption'>caption — Legenda. 11px regular.</p>
                  <code className='text-xs text-muted-foreground font-mono shrink-0'>
                     .caption
                  </code>
               </div>
               <div className='flex items-baseline gap-4'>
                  <p className='label'>
                     label — Rótulo. 12px semibold uppercase.
                  </p>
                  <code className='text-xs text-muted-foreground font-mono shrink-0'>
                     .label
                  </code>
               </div>
            </div>
         </Section>

         <Section title='Cor do Texto'>
            <div className='flex flex-col gap-2 text-base'>
               <p className='text-foreground'>
                  text-foreground — Texto principal
               </p>
               <p className='text-muted-foreground'>
                  text-muted-foreground — Texto secundário
               </p>
               <p className='text-primary'>
                  text-primary — Texto primário (azul)
               </p>
               <p className='text-destructive'>
                  text-destructive — Texto de erro
               </p>
            </div>
         </Section>
      </div>
   );
}
