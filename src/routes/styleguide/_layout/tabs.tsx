import { createFileRoute } from '@tanstack/react-router';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Clock, CheckCircle2 } from 'lucide-react';

export const Route = createFileRoute('/styleguide/_layout/tabs')({
   component: TabsPage,
});

function TabsPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Abas</h1>
            <p className='text-muted-foreground mt-1'>
               Navegação por conteúdo em painéis tabulados.
            </p>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Básico
            </h2>
            <Tabs defaultValue='active'>
               <TabsList>
                  <TabsTrigger value='active'>Ativos</TabsTrigger>
                  <TabsTrigger value='pending'>Pendentes</TabsTrigger>
                  <TabsTrigger value='closed'>Encerrados</TabsTrigger>
               </TabsList>
               <TabsContent value='active' className='mt-4'>
                  <p className='text-sm text-muted-foreground'>
                     Exibindo 12 processos ativos.
                  </p>
               </TabsContent>
               <TabsContent value='pending' className='mt-4'>
                  <p className='text-sm text-muted-foreground'>
                     Exibindo 4 processos pendentes de resposta.
                  </p>
               </TabsContent>
               <TabsContent value='closed' className='mt-4'>
                  <p className='text-sm text-muted-foreground'>
                     Exibindo 28 processos encerrados.
                  </p>
               </TabsContent>
            </Tabs>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Com Ícones e Badges
            </h2>
            <Tabs defaultValue='docs'>
               <TabsList>
                  <TabsTrigger value='docs' className='gap-2'>
                     <FileText className='size-4' /> Documentos{' '}
                     <Badge className='ml-1 size-5 justify-center p-0 text-xs'>
                        8
                     </Badge>
                  </TabsTrigger>
                  <TabsTrigger value='timeline' className='gap-2'>
                     <Clock className='size-4' /> Histórico
                  </TabsTrigger>
                  <TabsTrigger value='tasks' className='gap-2'>
                     <CheckCircle2 className='size-4' /> Tarefas{' '}
                     <Badge
                        variant='destructive'
                        className='ml-1 size-5 justify-center p-0 text-xs'
                     >
                        2
                     </Badge>
                  </TabsTrigger>
               </TabsList>
               <TabsContent value='docs' className='mt-4'>
                  <Card>
                     <CardHeader>
                        <CardTitle className='text-base'>
                           Documentos do Processo
                        </CardTitle>
                        <CardDescription>8 arquivos anexados</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <div className='flex flex-col gap-2'>
                           {[
                              'Petição Inicial.pdf',
                              'Procuração.pdf',
                              'Contrato.docx',
                           ].map(doc => (
                              <div
                                 key={doc}
                                 className='flex items-center gap-3 text-sm p-2 rounded-md hover:bg-muted cursor-pointer'
                              >
                                 <FileText className='size-4 text-muted-foreground' />
                                 <span>{doc}</span>
                              </div>
                           ))}
                        </div>
                     </CardContent>
                  </Card>
               </TabsContent>
               <TabsContent value='timeline' className='mt-4'>
                  <Card>
                     <CardHeader>
                        <CardTitle className='text-base'>
                           Histórico de Movimentações
                        </CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className='text-sm text-muted-foreground'>
                           Nenhuma movimentação recente.
                        </p>
                     </CardContent>
                  </Card>
               </TabsContent>
               <TabsContent value='tasks' className='mt-4'>
                  <Card>
                     <CardHeader>
                        <CardTitle className='text-base'>
                           Tarefas Pendentes
                        </CardTitle>
                        <CardDescription>
                           2 tarefas aguardando ação
                        </CardDescription>
                     </CardHeader>
                     <CardContent>
                        <div className='flex flex-col gap-2'>
                           <div className='flex items-center gap-3 text-sm p-2 rounded-md bg-destructive/5 border border-destructive/20'>
                              <span className='size-2 rounded-full bg-destructive shrink-0' />
                              <span>
                                 Protocolar recurso de apelação até 20/01
                              </span>
                           </div>
                           <div className='flex items-center gap-3 text-sm p-2 rounded-md bg-warning/5 border border-warning/20'>
                              <span className='size-2 rounded-full bg-warning shrink-0' />
                              <span>
                                 Confirmar presença na audiência de 15/01
                              </span>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               </TabsContent>
            </Tabs>
         </div>
      </div>
   );
}
