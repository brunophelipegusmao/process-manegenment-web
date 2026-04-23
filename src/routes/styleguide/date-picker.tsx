import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const Route = createFileRoute('/styleguide/date-picker')({
   component: DatePickerPage,
});

function SinglePicker({
   label,
   placeholder = 'Selecionar data',
   disabled,
}: {
   label: string;
   placeholder?: string;
   disabled?: boolean;
}) {
   const [date, setDate] = useState<Date>();
   return (
      <div className='grid gap-2'>
         <Label>{label}</Label>
         <Popover>
            <PopoverTrigger asChild>
               <Button
                  variant='outline'
                  disabled={disabled}
                  className={cn(
                     'w-56 justify-start text-left font-normal',
                     !date && 'text-muted-foreground',
                  )}
               >
                  <CalendarIcon className='mr-2 size-4' />
                  {date ? (
                     format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                  ) : (
                     <span>{placeholder}</span>
                  )}
               </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
               <Calendar
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  locale={ptBR}
               />
            </PopoverContent>
         </Popover>
      </div>
   );
}

function RangePicker() {
   const [from, setFrom] = useState<Date>();
   const [to, setTo] = useState<Date>();
   return (
      <div className='flex flex-wrap gap-4 items-end'>
         <div className='grid gap-2'>
            <Label>Data inicial</Label>
            <Popover>
               <PopoverTrigger asChild>
                  <Button
                     variant='outline'
                     className={cn(
                        'w-48 justify-start text-left font-normal',
                        !from && 'text-muted-foreground',
                     )}
                  >
                     <CalendarIcon className='mr-2 size-4' />
                     {from ? format(from, 'dd/MM/yyyy') : 'Início'}
                  </Button>
               </PopoverTrigger>
               <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                     mode='single'
                     selected={from}
                     onSelect={setFrom}
                     locale={ptBR}
                  />
               </PopoverContent>
            </Popover>
         </div>
         <div className='grid gap-2'>
            <Label>Data final</Label>
            <Popover>
               <PopoverTrigger asChild>
                  <Button
                     variant='outline'
                     className={cn(
                        'w-48 justify-start text-left font-normal',
                        !to && 'text-muted-foreground',
                     )}
                  >
                     <CalendarIcon className='mr-2 size-4' />
                     {to ? format(to, 'dd/MM/yyyy') : 'Fim'}
                  </Button>
               </PopoverTrigger>
               <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                     mode='single'
                     selected={to}
                     onSelect={setTo}
                     locale={ptBR}
                     disabled={from ? d => d < from : undefined}
                  />
               </PopoverContent>
            </Popover>
         </div>
         {from && to && (
            <p className='text-sm text-muted-foreground pb-1'>
               {Math.ceil(
                  (to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24),
               )}{' '}
               dias
            </p>
         )}
      </div>
   );
}

function DatePickerPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>
               Seletor de Data
            </h1>
            <p className='text-muted-foreground mt-1'>
               Composto por{' '}
               <code className='text-sm font-mono bg-muted px-1 rounded'>
                  Calendar
               </code>{' '}
               +{' '}
               <code className='text-sm font-mono bg-muted px-1 rounded'>
                  Popover
               </code>
               .
            </p>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Exemplos
            </h2>
            <div className='grid gap-4 max-w-sm'>
               <SinglePicker label='Data de audiência' />
               <SinglePicker
                  label='Prazo processual'
                  placeholder='Selecione o prazo'
               />
               <SinglePicker label='Desabilitado' disabled />
            </div>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Intervalo de Datas
            </h2>
            <RangePicker />
         </div>
      </div>
   );
}
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/styleguide/date-picker')({
   component: RouteComponent,
});

function RouteComponent() {
   return <div>Hello "/styleguide/date-picker"!</div>;
}
