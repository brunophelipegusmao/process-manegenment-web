import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
   CommandSeparator,
   CommandShortcut,
} from '@/components/ui/command';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
   Search,
   FileText,
   Users,
   Calendar,
   Settings,
   Plus,
   LayoutDashboard,
} from 'lucide-react';

export const Route = createFileRoute('/styleguide/command')({
   component: CommandPage,
});

function CommandPage() {
   const [open, setOpen] = useState(false);

   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Comando</h1>
            <p className='text-muted-foreground mt-1'>
               Paleta de comandos com busca integrada — ideal para navegação
               rápida.
            </p>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Embutido
            </h2>
            <Command className='rounded-lg border border-border shadow-sm max-w-lg'>
               <CommandInput placeholder='Buscar processos, clientes, audiências...' />
               <CommandList>
                  <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
                  <CommandGroup heading='Processos'>
                     <CommandItem>
                        <FileText className='mr-2 size-4' />
                        <span>Processo #2024-001 — Recurso</span>
                        <Badge variant='secondary' className='ml-auto'>
                           Em andamento
                        </Badge>
                     </CommandItem>
                     <CommandItem>
                        <FileText className='mr-2 size-4' />
                        <span>Processo #2024-002 — Contestação</span>
                        <Badge variant='outline' className='ml-auto'>
                           Aguardando
                        </Badge>
                     </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading='Navegação'>
                     <CommandItem>
                        <LayoutDashboard className='mr-2 size-4' />
                        <span>Dashboard</span>
                        <CommandShortcut>⌘D</CommandShortcut>
                     </CommandItem>
                     <CommandItem>
                        <Users className='mr-2 size-4' />
                        <span>Clientes</span>
                        <CommandShortcut>⌘C</CommandShortcut>
                     </CommandItem>
                     <CommandItem>
                        <Calendar className='mr-2 size-4' />
                        <span>Audiências</span>
                        <CommandShortcut>⌘A</CommandShortcut>
                     </CommandItem>
                     <CommandItem>
                        <Settings className='mr-2 size-4' />
                        <span>Configurações</span>
                        <CommandShortcut>⌘,</CommandShortcut>
                     </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading='Ações'>
                     <CommandItem>
                        <Plus className='mr-2 size-4' />
                        <span>Novo processo</span>
                        <CommandShortcut>⌘N</CommandShortcut>
                     </CommandItem>
                  </CommandGroup>
               </CommandList>
            </Command>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Em Dialog (⌘K)
            </h2>
            <Dialog open={open} onOpenChange={setOpen}>
               <DialogTrigger asChild>
                  <Button variant='outline' className='gap-2'>
                     <Search className='size-4' />
                     Busca rápida
                     <kbd className='ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground'>
                        ⌘K
                     </kbd>
                  </Button>
               </DialogTrigger>
               <DialogContent className='p-0 max-w-lg'>
                  <Command>
                     <CommandInput placeholder='Digite um comando ou busca...' />
                     <CommandList>
                        <CommandEmpty>Nenhum resultado.</CommandEmpty>
                        <CommandGroup heading='Sugestões'>
                           <CommandItem onSelect={() => setOpen(false)}>
                              <FileText className='mr-2 size-4' />
                              Novo processo
                           </CommandItem>
                           <CommandItem onSelect={() => setOpen(false)}>
                              <Users className='mr-2 size-4' />
                              Cadastrar cliente
                           </CommandItem>
                           <CommandItem onSelect={() => setOpen(false)}>
                              <Calendar className='mr-2 size-4' />
                              Agendar audiência
                           </CommandItem>
                        </CommandGroup>
                     </CommandList>
                  </Command>
               </DialogContent>
            </Dialog>
         </div>
      </div>
   );
}
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/styleguide/command')({
   component: RouteComponent,
});

function RouteComponent() {
   return <div>Hello "/styleguide/command"!</div>;
}
