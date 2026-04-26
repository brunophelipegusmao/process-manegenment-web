import { createFileRoute } from '@tanstack/react-router';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const Route = createFileRoute('/styleguide/_layout/textarea')({
   component: TextareaPage,
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
         <div className='grid gap-4 max-w-sm'>{children}</div>
      </div>
   );
}

function TextareaPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Textarea</h1>
            <p className='text-muted-foreground mt-1'>
               Área de texto multilinha para entradas longas.
            </p>
         </div>

         <Section title='Básico'>
            <div className='grid gap-2'>
               <Label htmlFor='default'>Observações</Label>
               <Textarea
                  id='default'
                  placeholder='Digite suas observações...'
               />
            </div>
            <div className='grid gap-2'>
               <Label htmlFor='rows'>Mais linhas</Label>
               <Textarea
                  id='rows'
                  rows={6}
                  placeholder='Campo com mais linhas...'
               />
            </div>
         </Section>

         <Section title='Estados'>
            <div className='grid gap-2'>
               <Label>Desabilitado</Label>
               <Textarea disabled placeholder='Campo desabilitado' />
            </div>
            <div className='grid gap-2'>
               <Label>Com valor</Label>
               <Textarea defaultValue='Este é um texto já preenchido no campo de texto longo. Pode conter várias linhas de conteúdo.' />
            </div>
            <div className='grid gap-2'>
               <Label>Com erro</Label>
               <Textarea
                  aria-invalid='true'
                  className='border-destructive'
                  placeholder='Campo com erro'
               />
               <p className='text-destructive text-sm'>
                  Descrição não pode estar vazia.
               </p>
            </div>
         </Section>
      </div>
   );
}
