import { createFileRoute } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

export const Route = createFileRoute('/styleguide/forms')({
   component: FormsPage,
});

const formSchema = z.object({
   name: z.string().min(2, 'Nome deve ter ao menos 2 caracteres.'),
   email: z.string().email('E-mail inválido.'),
   type: z.string({ required_error: 'Selecione um tipo.' }),
   notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

function FormsPage() {
   const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: { name: '', email: '', notes: '' },
   });

   function onSubmit(values: FormValues) {
      toast.success('Formulário enviado!', {
         description: `Cliente: ${values.name}`,
      });
      console.log(values);
   }

   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Formulários</h1>
            <p className='text-muted-foreground mt-1'>
               Integração Form + react-hook-form + zod para validação tipada.
            </p>
         </div>

         <div className='max-w-lg'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2 mb-6'>
               Cadastro de Cliente
            </h2>
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-6'
               >
                  <FormField
                     control={form.control}
                     name='name'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Nome completo</FormLabel>
                           <FormControl>
                              <Input placeholder='João da Silva' {...field} />
                           </FormControl>
                           <FormDescription>
                              Nome como consta nos documentos.
                           </FormDescription>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name='email'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>E-mail</FormLabel>
                           <FormControl>
                              <Input
                                 type='email'
                                 placeholder='joao@email.com'
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name='type'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Tipo de processo</FormLabel>
                           <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                           >
                              <FormControl>
                                 <SelectTrigger>
                                    <SelectValue placeholder='Selecione o tipo' />
                                 </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                 <SelectItem value='civil'>Cível</SelectItem>
                                 <SelectItem value='trabalhista'>
                                    Trabalhista
                                 </SelectItem>
                                 <SelectItem value='criminal'>
                                    Criminal
                                 </SelectItem>
                                 <SelectItem value='previdenciario'>
                                    Previdenciário
                                 </SelectItem>
                              </SelectContent>
                           </Select>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name='notes'
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Observações</FormLabel>
                           <FormControl>
                              <Textarea
                                 placeholder='Informações adicionais sobre o caso...'
                                 {...field}
                              />
                           </FormControl>
                           <FormDescription>
                              Opcional. Máx. 500 caracteres.
                           </FormDescription>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <div className='flex gap-3'>
                     <Button type='submit'>Cadastrar</Button>
                     <Button
                        type='button'
                        variant='outline'
                        onClick={() => form.reset()}
                     >
                        Limpar
                     </Button>
                  </div>
               </form>
            </Form>
         </div>
      </div>
   );
}
