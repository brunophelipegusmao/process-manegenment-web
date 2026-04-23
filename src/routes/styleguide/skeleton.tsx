import { createFileRoute } from '@tanstack/react-router'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export const Route = createFileRoute('/styleguide/skeleton')({
  component: SkeletonPage,
})

function SkeletonPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Skeleton</h1>
        <p className="text-muted-foreground mt-1">Placeholder de carregamento para evitar layout shift.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Formas Básicas</h2>
        <div className="flex flex-col gap-3 max-w-sm">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-10 w-32 rounded-md" />
          <Skeleton className="size-10 rounded-full" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Card em Carregamento</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-2xl">
          {[1, 2].map((i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Skeleton className="size-10 rounded-full" />
                <div className="flex flex-col gap-2 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-5/6" />
                <Skeleton className="h-3 w-4/6" />
                <div className="flex gap-2 mt-2">
                  <Skeleton className="h-8 w-20 rounded-md" />
                  <Skeleton className="h-8 w-16 rounded-md" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Linha de Tabela</h2>
        <div className="max-w-2xl border border-border rounded-md overflow-hidden">
          <div className="flex gap-4 px-4 py-3 bg-muted/50">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-28 ml-auto" />
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-4 px-4 py-3 border-t border-border items-center">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-16 rounded-full ml-auto" />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">Perfil</h2>
        <div className="flex items-center gap-4 max-w-sm">
          <Skeleton className="size-16 rounded-full" />
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </div>
    </div>
  )
}
