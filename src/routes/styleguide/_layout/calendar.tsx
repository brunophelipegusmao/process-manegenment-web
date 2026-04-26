import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { ptBR } from 'date-fns/locale';

export const Route = createFileRoute('/styleguide/_layout/calendar')({
   component: CalendarPage,
});

function CalendarPage() {
   const [date, setDate] = useState<Date | undefined>(new Date());
   const [range, setRange] = useState<{ from?: Date; to?: Date }>({});

   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Calendário</h1>
            <p className='text-muted-foreground mt-1'>
               Seleção de datas com suporte a seleção simples e por intervalo.
            </p>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Seleção Simples
            </h2>
            <div className='flex flex-wrap gap-8 items-start'>
               <Calendar
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  locale={ptBR}
                  className='rounded-md border'
               />
               <div className='text-sm text-muted-foreground pt-4'>
                  {date ? (
                     <p>
                        Data selecionada:{' '}
                        <span className='font-medium text-foreground'>
                           {date.toLocaleDateString('pt-BR', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                           })}
                        </span>
                     </p>
                  ) : (
                     <p>Nenhuma data selecionada.</p>
                  )}
               </div>
            </div>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Múltiplos Meses
            </h2>
            <Calendar
               mode='single'
               selected={date}
               onSelect={setDate}
               locale={ptBR}
               numberOfMonths={2}
               className='rounded-md border'
            />
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Com Datas Desabilitadas
            </h2>
            <Calendar
               mode='single'
               selected={date}
               onSelect={setDate}
               locale={ptBR}
               disabled={date => date < new Date()}
               className='rounded-md border'
            />
            <p className='text-sm text-muted-foreground'>
               Datas passadas desabilitadas.
            </p>
         </div>
      </div>
   );
}
