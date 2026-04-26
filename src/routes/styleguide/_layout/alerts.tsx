import { createFileRoute } from '@tanstack/react-router';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react';

export const Route = createFileRoute('/styleguide/_layout/alerts')({
   component: AlertsPage,
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
         <div className='flex flex-col gap-3'>{children}</div>
      </div>
   );
}

function AlertsPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Alertas</h1>
            <p className='text-muted-foreground mt-1'>
               Mensagens de feedback contextual para o usuário.
            </p>
         </div>

         <Section title='Variantes Padrão'>
            <Alert>
               <Info className='size-4' />
               <AlertTitle>Informação</AlertTitle>
               <AlertDescription>
                  O processo foi atualizado com sucesso. As mudanças serão
                  refletidas imediatamente.
               </AlertDescription>
            </Alert>

            <Alert variant='destructive'>
               <AlertCircle className='size-4' />
               <AlertTitle>Erro</AlertTitle>
               <AlertDescription>
                  Não foi possível salvar as alterações. Verifique sua conexão e
                  tente novamente.
               </AlertDescription>
            </Alert>
         </Section>

         <Section title='Semânticos (com CSS customizado)'>
            <Alert className='border-success/40 bg-success/10 text-success [&>svg]:text-success'>
               <CheckCircle2 className='size-4' />
               <AlertTitle>Sucesso</AlertTitle>
               <AlertDescription className='text-success/80'>
                  Audiência agendada com sucesso para 15 de Janeiro, 2025 às
                  14:00.
               </AlertDescription>
            </Alert>

            <Alert className='border-warning/40 bg-warning/10 text-warning [&>svg]:text-warning'>
               <TriangleAlert className='size-4' />
               <AlertTitle>Atenção</AlertTitle>
               <AlertDescription className='text-warning/80'>
                  O prazo para recurso vence em 3 dias. Certifique-se de
                  protocolar a petição a tempo.
               </AlertDescription>
            </Alert>

            <Alert className='border-info/40 bg-info/10 text-info [&>svg]:text-info'>
               <Info className='size-4' />
               <AlertTitle>Informação</AlertTitle>
               <AlertDescription className='text-info/80'>
                  Novo documento disponível para análise. Acesse a aba de
                  documentos para visualizar.
               </AlertDescription>
            </Alert>
         </Section>

         <Section title='Sem Título (apenas descrição)'>
            <Alert>
               <Info className='size-4' />
               <AlertDescription>
                  Você tem 5 prazos vencendo nos próximos 7 dias.
               </AlertDescription>
            </Alert>
            <Alert variant='destructive'>
               <AlertCircle className='size-4' />
               <AlertDescription>
                  Sessão expirando em 5 minutos. Salve seu trabalho.
               </AlertDescription>
            </Alert>
         </Section>
      </div>
   );
}
