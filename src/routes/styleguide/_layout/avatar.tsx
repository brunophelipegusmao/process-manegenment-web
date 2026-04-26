import { createFileRoute } from '@tanstack/react-router'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/styleguide/_layout/avatar')({
  component: AvatarPage,
})

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-foreground border-b border-border pb-2">{title}</h2>
      {children}
    </div>
  )
}

const people = [
  { name: 'Ana Souza', role: 'Advogada Sênior', initials: 'AS', src: '' },
  { name: 'Bruno Lima', role: 'Sócio', initials: 'BL', src: '' },
  { name: 'Carla Neves', role: 'Estagiária', initials: 'CN', src: '' },
  { name: 'Diego Faria', role: 'Paralegal', initials: 'DF', src: '' },
]

function AvatarPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Avatar</h1>
        <p className="text-muted-foreground mt-1">Representação visual de usuários com imagem ou iniciais.</p>
      </div>

      <Section title="Tamanhos">
        <div className="flex items-end gap-4">
          {(['size-6', 'size-8', 'size-10', 'size-12', 'size-16', 'size-20'] as const).map((sz) => (
            <Avatar key={sz} className={sz}>
              <AvatarFallback className="text-xs">AS</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </Section>

      <Section title="Com imagem e fallback">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/broken-image.png" alt="Broken" />
            <AvatarFallback>BK</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      </Section>

      <Section title="Lista de usuários">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-lg">
          {people.map(({ name, role, initials }) => (
            <div key={name} className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{name}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Com status (badge)">
        <div className="flex gap-6">
          {[
            { initials: 'OL', label: 'Online', color: 'bg-success' },
            { initials: 'AU', label: 'Ausente', color: 'bg-warning' },
            { initials: 'OF', label: 'Offline', color: 'bg-muted-foreground' },
          ].map(({ initials, label, color }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="relative">
                <Avatar>
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <span className={`absolute bottom-0 right-0 size-3 rounded-full border-2 border-background ${color}`} />
              </div>
              <Badge variant="outline" className="text-xs">{label}</Badge>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Grupo (sobrepostos)">
        <div className="flex">
          {people.map(({ initials }, i) => (
            <Avatar key={initials} className={`border-2 border-background ${i > 0 ? '-ml-3' : ''}`}>
              <AvatarFallback className="text-xs">{initials}</AvatarFallback>
            </Avatar>
          ))}
          <Avatar className="-ml-3 border-2 border-background">
            <AvatarFallback className="text-xs bg-muted text-muted-foreground">+4</AvatarFallback>
          </Avatar>
        </div>
      </Section>
    </div>
  )
}
