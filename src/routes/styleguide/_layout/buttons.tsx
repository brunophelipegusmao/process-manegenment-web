import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Loader2, Plus, Trash2, Download, ChevronRight } from 'lucide-react';

export const Route = createFileRoute('/styleguide/_layout/buttons')({
   component: ButtonsPage,
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
         <div className='flex flex-wrap gap-3'>{children}</div>
      </div>
   );
}

function ButtonsPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Botões</h1>
            <p className='text-muted-foreground mt-1'>
               Variantes, tamanhos e estados do componente Button.
            </p>
         </div>

         <Section title='Variantes'>
            <Button variant='default'>Default</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='link'>Link</Button>
            <Button variant='destructive'>Destructive</Button>
         </Section>

         <Section title='Tamanhos'>
            <Button size='sm'>Small</Button>
            <Button size='default'>Default</Button>
            <Button size='lg'>Large</Button>
            <Button size='icon'>
               <Plus />
            </Button>
         </Section>

         <Section title='Com Ícones'>
            <Button>
               <Plus className='mr-2 size-4' />
               Adicionar
            </Button>
            <Button variant='outline'>
               <Download className='mr-2 size-4' />
               Exportar
            </Button>
            <Button variant='destructive'>
               <Trash2 className='mr-2 size-4' />
               Excluir
            </Button>
            <Button variant='ghost'>
               Próximo
               <ChevronRight className='ml-2 size-4' />
            </Button>
         </Section>

         <Section title='Estados'>
            <Button disabled>Desabilitado</Button>
            <Button disabled>
               <Loader2 className='mr-2 size-4 animate-spin' />
               Carregando...
            </Button>
            <Button variant='outline' disabled>
               Outline Desabilitado
            </Button>
         </Section>
      </div>
   );
}
