import { createFileRoute } from '@tanstack/react-router';
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export const Route = createFileRoute('/styleguide/_layout/select')({
   component: SelectPage,
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

function SelectPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Select</h1>
            <p className='text-muted-foreground mt-1'>
               Componente de seleção dropdown com suporte a grupos.
            </p>
         </div>

         <Section title='Básico'>
            <div className='grid gap-2'>
               <Label>Estado</Label>
               <Select>
                  <SelectTrigger>
                     <SelectValue placeholder='Selecione um estado' />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value='sp'>São Paulo</SelectItem>
                     <SelectItem value='rj'>Rio de Janeiro</SelectItem>
                     <SelectItem value='mg'>Minas Gerais</SelectItem>
                     <SelectItem value='rs'>Rio Grande do Sul</SelectItem>
                     <SelectItem value='ba'>Bahia</SelectItem>
                  </SelectContent>
               </Select>
            </div>
         </Section>

         <Section title='Com Grupos'>
            <div className='grid gap-2'>
               <Label>Tipo de processo</Label>
               <Select>
                  <SelectTrigger>
                     <SelectValue placeholder='Selecione o tipo' />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Cível</SelectLabel>
                        <SelectItem value='acao-indenizatoria'>
                           Ação Indenizatória
                        </SelectItem>
                        <SelectItem value='acao-revisional'>
                           Ação Revisional
                        </SelectItem>
                        <SelectItem value='execucao-civil'>
                           Execução Civil
                        </SelectItem>
                     </SelectGroup>
                     <SelectGroup>
                        <SelectLabel>Trabalhista</SelectLabel>
                        <SelectItem value='reclamacao-trabalhista'>
                           Reclamação Trabalhista
                        </SelectItem>
                        <SelectItem value='execucao-trabalhista'>
                           Execução Trabalhista
                        </SelectItem>
                     </SelectGroup>
                     <SelectGroup>
                        <SelectLabel>Criminal</SelectLabel>
                        <SelectItem value='acao-penal'>Ação Penal</SelectItem>
                        <SelectItem value='habeas-corpus'>
                           Habeas Corpus
                        </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
         </Section>

         <Section title='Estados'>
            <div className='grid gap-2'>
               <Label>Desabilitado</Label>
               <Select disabled>
                  <SelectTrigger>
                     <SelectValue placeholder='Campo desabilitado' />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value='a'>Opção A</SelectItem>
                  </SelectContent>
               </Select>
            </div>
         </Section>
      </div>
   );
}
