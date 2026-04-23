import { createFileRoute } from '@tanstack/react-router';
import { Badge } from '@/components/ui/badge';

export const Route = createFileRoute('/styleguide/badges')({
   component: BadgesPage,
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

function BadgesPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Badges</h1>
            <p className='text-muted-foreground mt-1'>
               Etiquetas visuais para status, categorias e contagens.
            </p>
         </div>

         <Section title='Variantes'>
            <Badge variant='default'>Default</Badge>
            <Badge variant='secondary'>Secondary</Badge>
            <Badge variant='outline'>Outline</Badge>
            <Badge variant='destructive'>Destructive</Badge>
         </Section>

         <Section title='Status de Processo'>
            <Badge
               className='bg-success/15 text-success border-success/30'
               variant='outline'
            >
               Ativo
            </Badge>
            <Badge
               className='bg-warning/15 text-warning border-warning/30'
               variant='outline'
            >
               Em Andamento
            </Badge>
            <Badge
               className='bg-destructive/15 text-destructive border-destructive/30'
               variant='outline'
            >
               Urgente
            </Badge>
            <Badge
               className='bg-info/15 text-info border-info/30'
               variant='outline'
            >
               Aguardando
            </Badge>
            <Badge variant='secondary'>Encerrado</Badge>
            <Badge variant='outline'>Arquivado</Badge>
         </Section>

         <Section title='Tipo de Processo'>
            <Badge>Cível</Badge>
            <Badge variant='secondary'>Trabalhista</Badge>
            <Badge variant='outline'>Criminal</Badge>
            <Badge variant='secondary'>Previdenciário</Badge>
            <Badge variant='outline'>Tributário</Badge>
         </Section>

         <Section title='Contagens'>
            <span className='flex items-center gap-2 text-sm text-muted-foreground'>
               Processos Ativos <Badge>12</Badge>
            </span>
            <span className='flex items-center gap-2 text-sm text-muted-foreground'>
               Prazos Hoje <Badge variant='destructive'>3</Badge>
            </span>
            <span className='flex items-center gap-2 text-sm text-muted-foreground'>
               Audiências <Badge variant='secondary'>7</Badge>
            </span>
         </Section>
      </div>
   );
}
