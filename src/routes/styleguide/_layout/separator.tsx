import { createFileRoute } from '@tanstack/react-router';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export const Route = createFileRoute('/styleguide/_layout/separator')({
   component: SeparatorPage,
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

function SeparatorPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Separador</h1>
            <p className='text-muted-foreground mt-1'>
               Linha divisória visual para separar seções de conteúdo.
            </p>
         </div>

         <Section title='Horizontal (padrão)'>
            <div className='max-w-sm space-y-4'>
               <p className='text-sm'>Conteúdo acima</p>
               <Separator />
               <p className='text-sm'>Conteúdo abaixo</p>
               <Separator />
               <p className='text-sm'>Mais conteúdo</p>
            </div>
         </Section>

         <Section title='Vertical'>
            <div className='flex items-center gap-4 h-8 text-sm'>
               <span>Processos</span>
               <Separator orientation='vertical' />
               <span>Clientes</span>
               <Separator orientation='vertical' />
               <span>Audiências</span>
               <Separator orientation='vertical' />
               <span>Relatórios</span>
            </div>
         </Section>

         <Section title='Em formulário de detalhes'>
            <div className='max-w-sm space-y-4'>
               <div>
                  <h3 className='font-medium'>Processo #2024-001</h3>
                  <p className='text-sm text-muted-foreground'>
                     Ação Indenizatória
                  </p>
               </div>
               <Separator />
               <div className='grid grid-cols-2 gap-4 text-sm'>
                  <div>
                     <p className='text-muted-foreground'>Cliente</p>
                     <p className='font-medium'>João da Silva</p>
                  </div>
                  <div>
                     <p className='text-muted-foreground'>Status</p>
                     <Badge
                        className='mt-0.5 bg-success/15 text-success border-success/30'
                        variant='outline'
                     >
                        Ativo
                     </Badge>
                  </div>
               </div>
               <Separator />
               <div className='grid grid-cols-2 gap-4 text-sm'>
                  <div>
                     <p className='text-muted-foreground'>Advogado</p>
                     <p className='font-medium'>Dr. Carlos Mendes</p>
                  </div>
                  <div>
                     <p className='text-muted-foreground'>Vara</p>
                     <p className='font-medium'>3ª Vara Cível</p>
                  </div>
               </div>
               <Separator />
               <div className='text-sm'>
                  <p className='text-muted-foreground'>Próxima audiência</p>
                  <p className='font-medium'>15 Jan 2025, 14:00</p>
               </div>
            </div>
         </Section>
      </div>
   );
}
