import { createFileRoute } from '@tanstack/react-router';
import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Route = createFileRoute('/styleguide/_layout/table')({
   component: TablePage,
});

const processes = [
   {
      id: '#2024-001',
      client: 'João da Silva',
      type: 'Cível',
      lawyer: 'Dr. Carlos',
      status: 'Ativo',
   },
   {
      id: '#2024-002',
      client: 'Maria Oliveira',
      type: 'Trabalhista',
      lawyer: 'Dra. Ana',
      status: 'Em Andamento',
   },
   {
      id: '#2024-003',
      client: 'Pedro Santos',
      type: 'Criminal',
      lawyer: 'Dr. Bruno',
      status: 'Urgente',
   },
   {
      id: '#2024-004',
      client: 'Ana Lima',
      type: 'Previdenciário',
      lawyer: 'Dr. Carlos',
      status: 'Aguardando',
   },
   {
      id: '#2023-089',
      client: 'Carlos Ferreira',
      type: 'Cível',
      lawyer: 'Dra. Ana',
      status: 'Encerrado',
   },
];

const statusStyles: Record<string, string> = {
   Ativo: 'bg-success/15 text-success border-success/30',
   'Em Andamento': 'bg-warning/15 text-warning border-warning/30',
   Urgente: 'bg-destructive/15 text-destructive border-destructive/30',
   Aguardando: 'bg-info/15 text-info border-info/30',
   Encerrado: '',
};

function TablePage() {
   return (
      <div className='p-8 max-w-4xl mx-auto space-y-10'>
         <div>
            <h1 className='text-3xl font-bold text-foreground'>Tabela</h1>
            <p className='text-muted-foreground mt-1'>
               Exibição tabular de dados estruturados.
            </p>
         </div>

         <div>
            <h2 className='text-lg font-semibold text-foreground border-b border-border pb-2 mb-4'>
               Lista de Processos
            </h2>
            <Table>
               <TableCaption>
                  Total: {processes.length} processos listados.
               </TableCaption>
               <TableHeader>
                  <TableRow>
                     <TableHead>Nº Processo</TableHead>
                     <TableHead>Cliente</TableHead>
                     <TableHead>Tipo</TableHead>
                     <TableHead>Advogado</TableHead>
                     <TableHead>Status</TableHead>
                     <TableHead className='w-10' />
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {processes.map(p => (
                     <TableRow key={p.id}>
                        <TableCell className='font-mono text-sm font-medium'>
                           {p.id}
                        </TableCell>
                        <TableCell>{p.client}</TableCell>
                        <TableCell>
                           <Badge variant='outline'>{p.type}</Badge>
                        </TableCell>
                        <TableCell className='text-muted-foreground'>
                           {p.lawyer}
                        </TableCell>
                        <TableCell>
                           <Badge
                              variant={
                                 p.status === 'Encerrado'
                                    ? 'secondary'
                                    : 'outline'
                              }
                              className={statusStyles[p.status]}
                           >
                              {p.status}
                           </Badge>
                        </TableCell>
                        <TableCell>
                           <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                 <Button
                                    variant='ghost'
                                    size='icon'
                                    className='size-8'
                                 >
                                    <MoreHorizontal className='size-4' />
                                    <span className='sr-only'>Ações</span>
                                 </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align='end'>
                                 <DropdownMenuItem>
                                    Ver detalhes
                                 </DropdownMenuItem>
                                 <DropdownMenuItem>Editar</DropdownMenuItem>
                                 <DropdownMenuItem className='text-destructive'>
                                    Excluir
                                 </DropdownMenuItem>
                              </DropdownMenuContent>
                           </DropdownMenu>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </div>
      </div>
   );
}
