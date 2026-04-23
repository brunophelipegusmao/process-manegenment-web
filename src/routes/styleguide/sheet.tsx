import { createFileRoute } from '@tanstack/react-router';
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, User, ChevronRight } from 'lucide-react';

export const Route = createFileRoute('/styleguide/sheet')({
   component: SheetPage,
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

function SheetPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>
               Painel Lateral
            </h1>
            <p className='text-muted-foreground mt-1'>
               Sheet: painel deslizante para detalhes e formulários secundários.
            </p>
         </div>

         <Section title='Posições'>
            {(['right', 'left', 'top', 'bottom'] as const).map(side => (
               <Sheet key={side}>
                  <SheetTrigger asChild>
                     <Button variant='outline' className='capitalize'>
                        {side === 'right'
                           ? 'Direita'
                           : side === 'left'
                             ? 'Esquerda'
                             : side === 'top'
                               ? 'Topo'
                               : 'Baixo'}
                     </Button>
                  </SheetTrigger>
                  <SheetContent side={side}>
                     <SheetHeader>
                        <SheetTitle>Painel {side}</SheetTitle>
                        <SheetDescription>
                           Este painel desliza pela posição {side}.
                        </SheetDescription>
                     </SheetHeader>
                     <div className='py-4'>
                        <p className='text-sm text-muted-foreground'>
                           Conteúdo do painel lateral.
                        </p>
                     </div>
                  </SheetContent>
               </Sheet>
            ))}
         </Section>

         <Section title='Detalhes de Processo'>
            <Sheet>
               <SheetTrigger asChild>
                  <Button variant='outline'>
                     <ChevronRight className='mr-2 size-4' />
                     Ver processo
                  </Button>
               </SheetTrigger>
               <SheetContent className='w-[420px] sm:max-w-[420px]'>
                  <SheetHeader>
                     <SheetTitle>Processo #2024-001</SheetTitle>
                     <SheetDescription>
                        Ação Indenizatória · Vara Cível do Foro Central
                     </SheetDescription>
                  </SheetHeader>
                  <div className='py-6 space-y-5'>
                     <div className='flex items-center justify-between'>
                        <span className='text-sm text-muted-foreground'>
                           Status
                        </span>
                        <Badge
                           className='bg-success/15 text-success border-success/30'
                           variant='outline'
                        >
                           Ativo
                        </Badge>
                     </div>
                     <Separator />
                     <div className='space-y-3'>
                        <div className='flex items-center gap-3 text-sm'>
                           <User className='size-4 text-muted-foreground' />
                           <div>
                              <p className='text-muted-foreground'>Cliente</p>
                              <p className='font-medium'>João da Silva</p>
                           </div>
                        </div>
                        <div className='flex items-center gap-3 text-sm'>
                           <FileText className='size-4 text-muted-foreground' />
                           <div>
                              <p className='text-muted-foreground'>
                                 Advogado responsável
                              </p>
                              <p className='font-medium'>Dr. Carlos Mendes</p>
                           </div>
                        </div>
                        <div className='flex items-center gap-3 text-sm'>
                           <Calendar className='size-4 text-muted-foreground' />
                           <div>
                              <p className='text-muted-foreground'>
                                 Próxima audiência
                              </p>
                              <p className='font-medium'>15 Jan 2025, 14:00</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <SheetFooter>
                     <Button className='w-full'>Abrir processo completo</Button>
                  </SheetFooter>
               </SheetContent>
            </Sheet>
         </Section>

         <Section title='Formulário no Sheet'>
            <Sheet>
               <SheetTrigger asChild>
                  <Button>Editar cliente</Button>
               </SheetTrigger>
               <SheetContent>
                  <SheetHeader>
                     <SheetTitle>Editar cliente</SheetTitle>
                     <SheetDescription>
                        Atualize os dados do cliente. Clique em salvar ao
                        concluir.
                     </SheetDescription>
                  </SheetHeader>
                  <div className='grid gap-4 py-6'>
                     <div className='grid gap-2'>
                        <Label>Nome</Label>
                        <Input defaultValue='João da Silva' />
                     </div>
                     <div className='grid gap-2'>
                        <Label>E-mail</Label>
                        <Input type='email' defaultValue='joao@email.com' />
                     </div>
                     <div className='grid gap-2'>
                        <Label>Telefone</Label>
                        <Input defaultValue='(11) 99999-9999' />
                     </div>
                  </div>
                  <SheetFooter>
                     <Button className='w-full'>Salvar alterações</Button>
                  </SheetFooter>
               </SheetContent>
            </Sheet>
         </Section>
      </div>
   );
}
