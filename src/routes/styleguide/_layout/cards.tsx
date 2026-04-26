import { createFileRoute } from '@tanstack/react-router';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { FileText, Calendar, User } from 'lucide-react';

export const Route = createFileRoute('/styleguide/_layout/cards')({
   component: CardsPage,
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
         <div className='grid gap-4'>{children}</div>
      </div>
   );
}

function CardsPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Cards</h1>
            <p className='text-muted-foreground mt-1'>
               Contêiner flexível para agrupamento de conteúdo.
            </p>
         </div>

         <Section title='Card Simples'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
               <Card>
                  <CardHeader>
                     <CardTitle>Processo #2024-001</CardTitle>
                     <CardDescription>
                        Ação Indenizatória · Vara Cível
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <p className='text-sm text-muted-foreground'>
                        Autor busca compensação por danos materiais e morais
                        causados por acidente de trânsito em março de 2024.
                     </p>
                  </CardContent>
                  <CardFooter className='flex gap-2'>
                     <Button size='sm'>Ver detalhes</Button>
                     <Button size='sm' variant='outline'>
                        Editar
                     </Button>
                  </CardFooter>
               </Card>

               <Card>
                  <CardHeader>
                     <CardTitle>Audiência Agendada</CardTitle>
                     <CardDescription>
                        Amanhã, 14:00 · Tribunal de Justiça
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <div className='flex flex-col gap-2 text-sm'>
                        <div className='flex items-center gap-2 text-muted-foreground'>
                           <FileText className='size-4' />
                           <span>Processo #2024-001</span>
                        </div>
                        <div className='flex items-center gap-2 text-muted-foreground'>
                           <Calendar className='size-4' />
                           <span>15 de Janeiro, 2025</span>
                        </div>
                        <div className='flex items-center gap-2 text-muted-foreground'>
                           <User className='size-4' />
                           <span>Dr. Carlos Mendes</span>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </Section>

         <Section title='Card com Badge e Avatar'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
               <Card>
                  <CardHeader className='flex flex-row items-start gap-4'>
                     <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                     </Avatar>
                     <div className='flex flex-col gap-1'>
                        <CardTitle className='text-base'>
                           João da Silva
                        </CardTitle>
                        <CardDescription>
                           Cliente desde Jan 2023
                        </CardDescription>
                     </div>
                     <Badge className='ml-auto'>Ativo</Badge>
                  </CardHeader>
                  <CardContent>
                     <p className='text-sm text-muted-foreground'>
                        3 processos ativos · 1 encerrado
                     </p>
                  </CardContent>
               </Card>

               <Card className='border-destructive/50 bg-destructive/5'>
                  <CardHeader>
                     <div className='flex items-center justify-between'>
                        <CardTitle className='text-base'>
                           Prazo Crítico
                        </CardTitle>
                        <Badge variant='destructive'>Urgente</Badge>
                     </div>
                     <CardDescription>Recurso de Apelação</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <p className='text-sm text-muted-foreground'>
                        Prazo para interposição de recurso encerra em{' '}
                        <strong>2 dias</strong>.
                     </p>
                  </CardContent>
                  <CardFooter>
                     <Button variant='destructive' size='sm' className='w-full'>
                        Ação Necessária
                     </Button>
                  </CardFooter>
               </Card>
            </div>
         </Section>

         <Section title='Card Sem Padding (só estrutura)'>
            <Card className='overflow-hidden max-w-sm'>
               <div className='h-32 bg-primary/10 flex items-center justify-center'>
                  <FileText className='size-10 text-primary/40' />
               </div>
               <CardHeader>
                  <CardTitle>Documento Digitalizado</CardTitle>
                  <CardDescription>
                     Petição Inicial · PDF · 2,4 MB
                  </CardDescription>
               </CardHeader>
               <CardFooter className='gap-2'>
                  <Button variant='outline' size='sm'>
                     Download
                  </Button>
                  <Button variant='ghost' size='sm'>
                     Visualizar
                  </Button>
               </CardFooter>
            </Card>
         </Section>
      </div>
   );
}
