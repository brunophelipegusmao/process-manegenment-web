import { createFileRoute } from '@tanstack/react-router';
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarHeader,
   SidebarInset,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarProvider,
   SidebarSeparator,
   SidebarTrigger,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
   FileText,
   Users,
   Calendar,
   BarChart3,
   Settings,
   Bell,
   Home,
   LogOut,
} from 'lucide-react';

export const Route = createFileRoute('/styleguide/sidebar')({
   component: SidebarPage,
});

const navItems = [
   { label: 'Dashboard', icon: Home, href: '#' },
   { label: 'Processos', icon: FileText, href: '#', badge: '12' },
   { label: 'Clientes', icon: Users, href: '#' },
   {
      label: 'Agenda',
      icon: Calendar,
      href: '#',
      badge: '3',
      badgeVariant: 'destructive' as const,
   },
   { label: 'Relatórios', icon: BarChart3, href: '#' },
];

const bottomItems = [
   { label: 'Notificações', icon: Bell, href: '#', badge: '5' },
   { label: 'Configurações', icon: Settings, href: '#' },
];

function DemoSidebar() {
   return (
      <Sidebar>
         <SidebarHeader>
            <div className='flex items-center gap-3 px-2 py-1'>
               <div className='flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground font-bold text-sm'>
                  M
               </div>
               <div>
                  <p className='text-sm font-semibold text-sidebar-foreground'>
                     Mulim
                  </p>
                  <p className='text-xs text-sidebar-foreground/60'>
                     Advogados Associados
                  </p>
               </div>
            </div>
         </SidebarHeader>

         <SidebarContent>
            <SidebarGroup>
               <SidebarGroupLabel>Navegação</SidebarGroupLabel>
               <SidebarGroupContent>
                  <SidebarMenu>
                     {navItems.map(
                        ({ label, icon: Icon, href, badge, badgeVariant }) => (
                           <SidebarMenuItem key={label}>
                              <SidebarMenuButton
                                 asChild
                                 isActive={label === 'Processos'}
                              >
                                 <a
                                    href={href}
                                    className='flex items-center justify-between'
                                 >
                                    <span className='flex items-center gap-2'>
                                       <Icon className='size-4' />
                                       {label}
                                    </span>
                                    {badge && (
                                       <Badge
                                          variant={badgeVariant ?? 'secondary'}
                                          className='size-5 justify-center p-0 text-[10px]'
                                       >
                                          {badge}
                                       </Badge>
                                    )}
                                 </a>
                              </SidebarMenuButton>
                           </SidebarMenuItem>
                        ),
                     )}
                  </SidebarMenu>
               </SidebarGroupContent>
            </SidebarGroup>

            <SidebarSeparator />

            <SidebarGroup>
               <SidebarGroupLabel>Sistema</SidebarGroupLabel>
               <SidebarGroupContent>
                  <SidebarMenu>
                     {bottomItems.map(({ label, icon: Icon, href, badge }) => (
                        <SidebarMenuItem key={label}>
                           <SidebarMenuButton asChild>
                              <a
                                 href={href}
                                 className='flex items-center justify-between'
                              >
                                 <span className='flex items-center gap-2'>
                                    <Icon className='size-4' />
                                    {label}
                                 </span>
                                 {badge && (
                                    <Badge
                                       variant='secondary'
                                       className='size-5 justify-center p-0 text-[10px]'
                                    >
                                       {badge}
                                    </Badge>
                                 )}
                              </a>
                           </SidebarMenuButton>
                        </SidebarMenuItem>
                     ))}
                  </SidebarMenu>
               </SidebarGroupContent>
            </SidebarGroup>
         </SidebarContent>

         <SidebarFooter>
            <SidebarSeparator />
            <div className='flex items-center gap-3 px-2 py-2'>
               <Avatar className='size-7'>
                  <AvatarFallback className='text-xs'>CM</AvatarFallback>
               </Avatar>
               <div className='flex-1 min-w-0'>
                  <p className='text-xs font-medium text-sidebar-foreground truncate'>
                     Dr. Carlos Mendes
                  </p>
                  <p className='text-[10px] text-sidebar-foreground/60 truncate'>
                     carlos@mulim.com.br
                  </p>
               </div>
               <LogOut className='size-4 text-sidebar-foreground/60 cursor-pointer hover:text-sidebar-foreground transition-colors' />
            </div>
         </SidebarFooter>
      </Sidebar>
   );
}

function SidebarPage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Sidebar</h1>
            <p className='text-muted-foreground mt-1'>
               Navegação lateral colapsável. Requer{' '}
               <code className='text-sm font-mono bg-muted px-1 rounded'>
                  SidebarProvider
               </code>{' '}
               como wrapper.
            </p>
         </div>

         <div className='space-y-4'>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2'>
               Demo Interativa
            </h2>
            <p className='text-sm text-muted-foreground'>
               Clique no botão de toggle (ícone de painel) para
               colapsar/expandir a sidebar.
            </p>
            <div
               className='rounded-lg border border-border overflow-hidden'
               style={{ height: 480 }}
            >
               <SidebarProvider>
                  <DemoSidebar />
                  <SidebarInset>
                     <header className='flex items-center gap-3 border-b border-border px-4 py-3'>
                        <SidebarTrigger />
                        <span className='text-sm font-medium'>Processos</span>
                     </header>
                     <div className='p-6 text-sm text-muted-foreground'>
                        Conteúdo principal da página. A sidebar é colapsável via
                        o botão de toggle.
                     </div>
                  </SidebarInset>
               </SidebarProvider>
            </div>
         </div>
      </div>
   );
}
