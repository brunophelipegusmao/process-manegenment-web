import { createFileRoute } from '@tanstack/react-router';
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Info, Bell, Calendar, ChevronDown } from 'lucide-react';

export const Route = createFileRoute('/styleguide/_layout/popover')({
   component: PopoverPage,
});

function PopoverPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Popover</h1>
            <p className='text-muted-foreground mt-1'>
               Painel flutuante ancorado a um elemento, sem bloquear a tela.
            </p>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Simples
            </h2>
            <div className='flex flex-wrap gap-3'>
               <Popover>
                  <PopoverTrigger asChild>
                     <Button variant='outline'>
                        <Info className='mr-2 size-4' />
                        Mais informações
                     </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-72'>
                     <div className='space-y-2'>
                        <h4 className='font-medium'>Prazo Processual</h4>
                        <p className='text-sm text-muted-foreground'>
                           O prazo é contado em dias úteis a partir da
                           intimação, excluindo feriados nacionais, estaduais e
                           municipais.
                        </p>
                     </div>
                  </PopoverContent>
               </Popover>

               <Popover>
                  <PopoverTrigger asChild>
                     <Button variant='ghost' size='icon' className='relative'>
                        <Bell className='size-4' />
                        <span className='absolute top-1 right-1 size-2 rounded-full bg-destructive' />
                     </Button>
                  </PopoverTrigger>
                  <PopoverContent align='end' className='w-80'>
                     <div className='space-y-3'>
                        <div className='flex items-center justify-between'>
                           <h4 className='font-medium'>Notificações</h4>
                           <Badge variant='secondary'>3 novas</Badge>
                        </div>
                        <Separator />
                        {[
                           {
                              msg: 'Prazo vencendo: Recurso #2024-001',
                              time: 'Há 2h',
                              urgent: true,
                           },
                           {
                              msg: 'Audiência amanhã: Processo #2024-002',
                              time: 'Há 5h',
                              urgent: false,
                           },
                           {
                              msg: 'Novo documento anexado',
                              time: 'Ontem',
                              urgent: false,
                           },
                        ].map(({ msg, time, urgent }) => (
                           <div key={msg} className='flex gap-3 text-sm'>
                              <span
                                 className={`mt-1.5 size-2 rounded-full shrink-0 ${urgent ? 'bg-destructive' : 'bg-muted-foreground/40'}`}
                              />
                              <div>
                                 <p className={urgent ? 'font-medium' : ''}>
                                    {msg}
                                 </p>
                                 <p className='text-xs text-muted-foreground'>
                                    {time}
                                 </p>
                              </div>
                           </div>
                        ))}
                        <Button variant='outline' size='sm' className='w-full'>
                           Ver todas
                        </Button>
                     </div>
                  </PopoverContent>
               </Popover>
            </div>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Filtro Dropdown
            </h2>
            <div className='flex flex-wrap gap-3'>
               <Popover>
                  <PopoverTrigger asChild>
                     <Button variant='outline'>
                        <Calendar className='mr-2 size-4' />
                        Período <ChevronDown className='ml-2 size-4' />
                     </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-56'>
                     <div className='space-y-1'>
                        {[
                           'Hoje',
                           'Esta semana',
                           'Este mês',
                           'Este trimestre',
                           'Este ano',
                           'Personalizado...',
                        ].map(opt => (
                           <Button
                              key={opt}
                              variant='ghost'
                              className='w-full justify-start font-normal h-8'
                           >
                              {opt}
                           </Button>
                        ))}
                     </div>
                  </PopoverContent>
               </Popover>
            </div>
         </div>
      </div>
   );
}
