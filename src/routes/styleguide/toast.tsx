import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
   CheckCircle2,
   XCircle,
   Info,
   TriangleAlert,
   Loader2,
} from 'lucide-react';

export const Route = createFileRoute('/styleguide/toast')({
   component: ToastPage,
});

function ToastPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Toast</h1>
            <p className='text-muted-foreground mt-1'>
               Notificações não-intrusivas via{' '}
               <code className='text-sm font-mono bg-muted px-1 rounded'>
                  sonner
               </code>
               .
            </p>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Tipos
            </h2>
            <div className='flex flex-wrap gap-3'>
               <Button
                  variant='outline'
                  onClick={() =>
                     toast('Mensagem padrão', {
                        description: 'Operação realizada.',
                     })
                  }
               >
                  Padrão
               </Button>
               <Button
                  className='bg-success hover:bg-success/90 text-white'
                  onClick={() =>
                     toast.success('Sucesso!', {
                        description: 'O processo foi salvo com sucesso.',
                     })
                  }
               >
                  <CheckCircle2 className='mr-2 size-4' /> Sucesso
               </Button>
               <Button
                  variant='destructive'
                  onClick={() =>
                     toast.error('Erro!', {
                        description: 'Não foi possível salvar.',
                     })
                  }
               >
                  <XCircle className='mr-2 size-4' /> Erro
               </Button>
               <Button
                  variant='outline'
                  className='border-warning text-warning hover:bg-warning/10'
                  onClick={() =>
                     toast.warning('Atenção!', {
                        description: 'O prazo vence em 2 dias.',
                     })
                  }
               >
                  <TriangleAlert className='mr-2 size-4' /> Aviso
               </Button>
               <Button
                  variant='outline'
                  className='border-info text-info hover:bg-info/10'
                  onClick={() =>
                     toast.info('Informação', {
                        description: 'Novo documento disponível.',
                     })
                  }
               >
                  <Info className='mr-2 size-4' /> Info
               </Button>
            </div>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Com Ação
            </h2>
            <div className='flex flex-wrap gap-3'>
               <Button
                  variant='outline'
                  onClick={() =>
                     toast('Processo arquivado', {
                        description: 'O processo #2024-001 foi arquivado.',
                        action: {
                           label: 'Desfazer',
                           onClick: () => toast.success('Ação desfeita!'),
                        },
                     })
                  }
               >
                  Com ação (Desfazer)
               </Button>
               <Button
                  variant='outline'
                  onClick={() =>
                     toast('Documento enviado', {
                        description: 'Aguarde o processamento.',
                        action: { label: 'Ver status', onClick: () => {} },
                        cancel: { label: 'Fechar', onClick: () => {} },
                     })
                  }
               >
                  Com ação e cancelar
               </Button>
            </div>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Promessa (loading → resultado)
            </h2>
            <Button
               variant='outline'
               onClick={() => {
                  const promise = new Promise<string>(resolve =>
                     setTimeout(() => resolve('Processo #2024-005'), 2000),
                  );
                  toast.promise(promise, {
                     loading: 'Salvando processo...',
                     success: data => `${data} criado com sucesso!`,
                     error: 'Erro ao salvar processo.',
                  });
               }}
            >
               <Loader2 className='mr-2 size-4' /> Simular loading
            </Button>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Posições
            </h2>
            <div className='flex flex-wrap gap-2'>
               {(
                  [
                     'top-left',
                     'top-center',
                     'top-right',
                     'bottom-left',
                     'bottom-center',
                     'bottom-right',
                  ] as const
               ).map(pos => (
                  <Button
                     key={pos}
                     variant='outline'
                     size='sm'
                     onClick={() => toast(`Toast: ${pos}`, { position: pos })}
                  >
                     {pos}
                  </Button>
               ))}
            </div>
         </div>
      </div>
   );
}
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/styleguide/toast')({
   component: RouteComponent,
});

function RouteComponent() {
   return <div>Hello "/styleguide/toast"!</div>;
}
