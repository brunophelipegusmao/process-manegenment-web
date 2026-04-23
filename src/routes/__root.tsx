import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Providers } from '@/app/providers'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <Providers>
      <Outlet />
    </Providers>
  )
}
