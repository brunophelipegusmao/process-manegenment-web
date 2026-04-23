import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Providers } from '@/app/providers';
import { Toaster } from '@/components/ui/sonner';

export const Route = createRootRoute({
   component: RootLayout,
});

function RootLayout() {
   return (
      <Providers>
         <Outlet />
         <Toaster richColors position='top-right' />
      </Providers>
   );
}
