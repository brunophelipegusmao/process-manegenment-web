import { createFileRoute } from '@tanstack/react-router';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Mail, Lock, Eye } from 'lucide-react';

export const Route = createFileRoute('/styleguide/_layout/input')({
   component: InputPage,
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

function InputPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Input</h1>
            <p className='text-muted-foreground mt-1'>
               Campo de entrada de texto com variantes e estados.
            </p>
         </div>

         <Section title='Básico'>
            <div className='grid gap-2'>
               <Label htmlFor='basic'>Nome</Label>
               <Input id='basic' placeholder='Digite seu nome' />
            </div>
            <div className='grid gap-2'>
               <Label htmlFor='email'>E-mail</Label>
               <Input id='email' type='email' placeholder='seu@email.com' />
            </div>
            <div className='grid gap-2'>
               <Label htmlFor='password'>Senha</Label>
               <Input id='password' type='password' placeholder='••••••••' />
            </div>
         </Section>

         <Section title='Com Ícones (via wrapper)'>
            <div className='grid gap-2'>
               <Label>Busca</Label>
               <div className='relative'>
                  <Search className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground' />
                  <Input className='pl-9' placeholder='Pesquisar...' />
               </div>
            </div>
            <div className='grid gap-2'>
               <Label>E-mail com ícone</Label>
               <div className='relative'>
                  <Mail className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground' />
                  <Input
                     className='pl-9'
                     type='email'
                     placeholder='seu@email.com'
                  />
               </div>
            </div>
            <div className='grid gap-2'>
               <Label>Senha com ícone</Label>
               <div className='relative'>
                  <Lock className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground' />
                  <Input
                     className='pl-9 pr-9'
                     type='password'
                     placeholder='••••••••'
                  />
                  <Eye className='absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground cursor-pointer' />
               </div>
            </div>
         </Section>

         <Section title='Estados'>
            <div className='grid gap-2'>
               <Label>Desabilitado</Label>
               <Input disabled placeholder='Campo desabilitado' />
            </div>
            <div className='grid gap-2'>
               <Label>Somente leitura</Label>
               <Input readOnly value='Valor somente leitura' />
            </div>
            <div className='grid gap-2'>
               <Label>Com erro</Label>
               <Input
                  aria-invalid='true'
                  className='border-destructive'
                  placeholder='Campo com erro'
               />
               <p className='text-destructive text-sm'>
                  Este campo é obrigatório.
               </p>
            </div>
         </Section>
      </div>
   );
}
