import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2 } from 'lucide-react';

export const Route = createFileRoute('/styleguide/dialog')({
   component: DialogPage,
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

function DialogPage() {
   const [open, setOpen] = useState(false);

   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Diálogo</h1>
            <p className='text-muted-foreground mt-1'>
               Modal para confirmações, formulários e conteúdo focado.
            </p>
         </div>

         <Section title='Diálogo Simples (confirmação)'>
            <Dialog>
               <DialogTrigger asChild>
                  <Button variant='outline'>Abrir confirmação</Button>
               </DialogTrigger>
               <DialogContent>
                  <DialogHeader>
                     <DialogTitle>Confirmar ação</DialogTitle>
                     <DialogDescription>
                        Tem certeza que deseja arquivar este processo? Esta ação
                        pode ser desfeita posteriormente na aba de processos
                        arquivados.
                     </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                     <Button variant='outline'>Cancelar</Button>
                     <Button>Confirmar</Button>
                  </DialogFooter>
               </DialogContent>
            </Dialog>

            <Dialog>
               <DialogTrigger asChild>
                  <Button variant='destructive'>
                     <Trash2 className='mr-2 size-4' />
                     Excluir processo
                  </Button>
               </DialogTrigger>
               <DialogContent>
                  <DialogHeader>
                     <DialogTitle>Excluir processo</DialogTitle>
                     <DialogDescription>
                        Esta ação é <strong>irreversível</strong>. O processo
                        #2024-001 e todos os seus documentos serão
                        permanentemente removidos.
                     </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                     <Button variant='outline'>Cancelar</Button>
                     <Button variant='destructive'>
                        Excluir permanentemente
                     </Button>
                  </DialogFooter>
               </DialogContent>
            </Dialog>
         </Section>

         <Section title='Diálogo com Formulário'>
            <Dialog open={open} onOpenChange={setOpen}>
               <DialogTrigger asChild>
                  <Button>Novo cliente</Button>
               </DialogTrigger>
               <DialogContent className='sm:max-w-md'>
                  <DialogHeader>
                     <DialogTitle>Cadastrar cliente</DialogTitle>
                     <DialogDescription>
                        Preencha os dados básicos para cadastrar um novo
                        cliente.
                     </DialogDescription>
                  </DialogHeader>
                  <div className='grid gap-4 py-4'>
                     <div className='grid gap-2'>
                        <Label htmlFor='dialog-name'>Nome completo</Label>
                        <Input id='dialog-name' placeholder='João da Silva' />
                     </div>
                     <div className='grid gap-2'>
                        <Label htmlFor='dialog-email'>E-mail</Label>
                        <Input
                           id='dialog-email'
                           type='email'
                           placeholder='joao@email.com'
                        />
                     </div>
                     <div className='grid gap-2'>
                        <Label htmlFor='dialog-phone'>Telefone</Label>
                        <Input
                           id='dialog-phone'
                           placeholder='(11) 99999-9999'
                        />
                     </div>
                  </div>
                  <DialogFooter>
                     <Button variant='outline' onClick={() => setOpen(false)}>
                        Cancelar
                     </Button>
                     <Button onClick={() => setOpen(false)}>Cadastrar</Button>
                  </DialogFooter>
               </DialogContent>
            </Dialog>
         </Section>
      </div>
   );
}
