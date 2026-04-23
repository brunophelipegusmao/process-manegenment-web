import { createFileRoute } from '@tanstack/react-router';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
   ChevronDown,
   User,
   Settings,
   LogOut,
   Plus,
   FileText,
   Calendar,
   Users,
   MoreHorizontal,
} from 'lucide-react';

export const Route = createFileRoute('/styleguide/dropdown-menu')({
   component: DropdownMenuPage,
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
         <div className='flex flex-wrap gap-3'>{children}</div>
      </div>
   );
}

function DropdownMenuPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>
               Menu Dropdown
            </h1>
            <p className='text-muted-foreground mt-1'>
               Menu contextual com grupos, separadores e atalhos.
            </p>
         </div>

         <Section title='Simples'>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button variant='outline'>
                     Ações <ChevronDown className='ml-2 size-4' />
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                  <DropdownMenuItem>Editar</DropdownMenuItem>
                  <DropdownMenuItem>Duplicar</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className='text-destructive'>
                     Excluir
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='icon'>
                     <MoreHorizontal className='size-4' />
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align='end'>
                  <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                  <DropdownMenuItem>Compartilhar</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className='text-destructive'>
                     Remover
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </Section>

         <Section title='Com Grupos e Atalhos'>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button>
                     <Plus className='mr-2 size-4' /> Novo{' '}
                     <ChevronDown className='ml-2 size-4' />
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent className='w-48'>
                  <DropdownMenuLabel>Criar novo</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                     <DropdownMenuItem>
                        <FileText className='mr-2 size-4' /> Processo{' '}
                        <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                     </DropdownMenuItem>
                     <DropdownMenuItem>
                        <Calendar className='mr-2 size-4' /> Audiência{' '}
                        <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                     </DropdownMenuItem>
                     <DropdownMenuItem>
                        <Users className='mr-2 size-4' /> Cliente{' '}
                        <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                     </DropdownMenuItem>
                  </DropdownMenuGroup>
               </DropdownMenuContent>
            </DropdownMenu>
         </Section>

         <Section title='Menu de Usuário'>
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button variant='ghost' className='gap-2 h-auto py-1 px-2'>
                     <Avatar className='size-7'>
                        <AvatarFallback className='text-xs'>CM</AvatarFallback>
                     </Avatar>
                     <span className='text-sm'>Dr. Carlos</span>
                     <ChevronDown className='size-3 text-muted-foreground' />
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align='end' className='w-48'>
                  <DropdownMenuLabel>Dr. Carlos Mendes</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                     <User className='mr-2 size-4' /> Perfil
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                     <Settings className='mr-2 size-4' /> Configurações
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className='text-destructive'>
                     <LogOut className='mr-2 size-4' /> Sair
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </Section>
      </div>
   );
}
