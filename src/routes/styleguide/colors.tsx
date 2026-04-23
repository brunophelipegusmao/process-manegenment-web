import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/styleguide/colors')({
   component: ColorsPage,
});

function Swatch({
   variable,
   label,
   textClass,
}: {
   variable: string;
   label: string;
   textClass?: string;
}) {
   return (
      <div className='flex flex-col gap-1.5'>
         <div
            className='h-14 w-full rounded-md border border-border/50'
            style={{ background: `hsl(var(${variable}))` }}
         />
         <div>
            <p
               className={`text-xs font-medium ${textClass ?? 'text-foreground'}`}
            >
               {label}
            </p>
            <code className='text-[10px] text-muted-foreground font-mono'>
               {variable}
            </code>
         </div>
      </div>
   );
}

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

function ColorsPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Cores</h1>
            <p className='text-muted-foreground mt-1'>
               Paleta de cores do sistema de design Mulim.
            </p>
         </div>

         <Section title='Escala Azul (Primária)'>
            <div className='grid grid-cols-5 gap-3 sm:grid-cols-10'>
               {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(n => (
                  <div key={n} className='flex flex-col gap-1'>
                     <div
                        className='h-10 rounded-md border border-border/50'
                        style={{ background: `hsl(var(--blue-${n}))` }}
                     />
                     <code className='text-[10px] text-muted-foreground font-mono text-center'>
                        {n}
                     </code>
                  </div>
               ))}
            </div>
         </Section>

         <Section title='Escala Dourado (Acento)'>
            <div className='grid grid-cols-5 gap-3 sm:grid-cols-10'>
               {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(n => (
                  <div key={n} className='flex flex-col gap-1'>
                     <div
                        className='h-10 rounded-md border border-border/50'
                        style={{ background: `hsl(var(--gold-${n}))` }}
                     />
                     <code className='text-[10px] text-muted-foreground font-mono text-center'>
                        {n}
                     </code>
                  </div>
               ))}
            </div>
         </Section>

         <Section title='Tokens Semânticos'>
            <div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
               <Swatch variable='--primary' label='Primary' />
               <Swatch variable='--secondary' label='Secondary' />
               <Swatch variable='--muted' label='Muted' />
               <Swatch variable='--accent' label='Accent' />
               <Swatch variable='--destructive' label='Destructive' />
               <Swatch variable='--background' label='Background' />
               <Swatch variable='--card' label='Card' />
               <Swatch variable='--border' label='Border' />
            </div>
         </Section>

         <Section title='Semânticos de Feedback'>
            <div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
               <Swatch variable='--success' label='Success' />
               <Swatch variable='--warning' label='Warning' />
               <Swatch variable='--info' label='Info' />
               <Swatch variable='--destructive' label='Error' />
            </div>
         </Section>

         <Section title='Sidebar'>
            <div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
               <Swatch variable='--sidebar' label='Sidebar BG' />
               <Swatch
                  variable='--sidebar-foreground'
                  label='Sidebar FG'
                  textClass='text-muted-foreground'
               />
               <Swatch variable='--sidebar-primary' label='Sidebar Primary' />
               <Swatch variable='--sidebar-accent' label='Sidebar Accent' />
            </div>
         </Section>
      </div>
   );
}
