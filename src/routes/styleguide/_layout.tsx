import {
   Link,
   Outlet,
   createFileRoute,
   useRouterState,
} from '@tanstack/react-router';
import { navigation } from './-navigation';

export const Route = createFileRoute('/styleguide/_layout')({
   component: StyleguideLayout,
});

function StyleguideLayout() {
   const routerState = useRouterState();
   const pathname = routerState.location.pathname;

   return (
      <div className='flex min-h-screen bg-background'>
         {/* Sidebar */}
         <aside className='w-64 shrink-0 bg-sidebar text-sidebar-foreground flex flex-col border-r border-sidebar-border'>
            {/* Logo / Header */}
            <div className='px-6 py-5 border-b border-sidebar-border'>
               <Link to='/' className='flex items-center gap-3 group'>
                  <div className='w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center'>
                     <span className='text-sidebar-primary-foreground font-bold text-sm'>
                        M
                     </span>
                  </div>
                  <div>
                     <p className='text-sm font-semibold text-sidebar-foreground leading-tight'>
                        Mulim
                     </p>
                     <p className='text-xs text-sidebar-foreground/50 leading-tight'>
                        Styleguide
                     </p>
                  </div>
               </Link>
            </div>

            {/* Navigation */}
            <nav className='flex-1 px-3 py-4 overflow-y-auto'>
               {navigation.map(section => (
                  <div key={section.title} className='mb-6'>
                     <p className='px-3 mb-1 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/40'>
                        {section.title}
                     </p>
                     <ul className='space-y-0.5'>
                        {section.items.map(item => {
                           const isActive = pathname === item.href;
                           return (
                              <li key={item.href}>
                                 <Link
                                    to={item.href}
                                    className={[
                                       'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                                       isActive
                                          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                                          : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                                    ].join(' ')}
                                 >
                                    {item.name}
                                 </Link>
                              </li>
                           );
                        })}
                     </ul>
                  </div>
               ))}
            </nav>

            {/* Footer */}
            <div className='px-6 py-4 border-t border-sidebar-border'>
               <p className='text-xs text-sidebar-foreground/40'>
                  v1.0.0 · Mulim Design System
               </p>
            </div>
         </aside>

         {/* Main content */}
         <main className='flex-1 overflow-auto'>
            <Outlet />
         </main>
      </div>
   );
}
