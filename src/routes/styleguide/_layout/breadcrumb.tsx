import { createFileRoute } from '@tanstack/react-router';
import {
   Breadcrumb,
   BreadcrumbEllipsis,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export const Route = createFileRoute('/styleguide/_layout/breadcrumb')({
   component: BreadcrumbPage_,
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
         <div className='flex flex-col gap-4'>{children}</div>
      </div>
   );
}

function BreadcrumbPage_() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Breadcrumb</h1>
            <p className='text-muted-foreground mt-1'>
               Trilha de navegação hierárquica mostrando o caminho atual.
            </p>
         </div>

         <Section title='Básico'>
            <Breadcrumb>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <BreadcrumbLink href='/'>Início</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbPage>Processos</BreadcrumbPage>
                  </BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>

            <Breadcrumb>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <BreadcrumbLink href='/'>Início</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbLink href='/processos'>
                        Processos
                     </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbPage>#2024-001</BreadcrumbPage>
                  </BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>

            <Breadcrumb>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <BreadcrumbLink href='/'>Início</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbLink href='/clientes'>Clientes</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbLink href='/clientes/joao-silva'>
                        João da Silva
                     </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbPage>Processos</BreadcrumbPage>
                  </BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>
         </Section>

         <Section title='Com Reticências (caminho longo)'>
            <Breadcrumb>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <BreadcrumbLink href='/'>Início</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbLink href='/processos/2024-001'>
                        Processo #2024-001
                     </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbPage>Documentos</BreadcrumbPage>
                  </BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>
         </Section>

         <Section title='Separador Customizado'>
            <Breadcrumb>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <BreadcrumbLink href='/'>Início</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>/</BreadcrumbSeparator>
                  <BreadcrumbItem>
                     <BreadcrumbLink href='/processos'>
                        Processos
                     </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>/</BreadcrumbSeparator>
                  <BreadcrumbItem>
                     <BreadcrumbPage>Detalhes</BreadcrumbPage>
                  </BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>
         </Section>
      </div>
   );
}
