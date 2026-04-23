export interface NavItem {
   name: string;
   href: string;
}

export interface NavSection {
   title: string;
   items: NavItem[];
}

export const navigation: NavSection[] = [
   {
      title: 'Fundação',
      items: [{ name: 'Design Tokens', href: '/styleguide' }],
   },
   {
      title: 'Componentes',
      items: [
         { name: 'Botões', href: '/styleguide/buttons' },
         { name: 'Input', href: '/styleguide/input' },
         { name: 'Textarea', href: '/styleguide/textarea' },
         { name: 'Select', href: '/styleguide/select' },
         { name: 'Formulários', href: '/styleguide/forms' },
         { name: 'Cards', href: '/styleguide/cards' },
         { name: 'Badges', href: '/styleguide/badges' },
         { name: 'Alertas', href: '/styleguide/alerts' },
         { name: 'Diálogo', href: '/styleguide/dialog' },
         { name: 'Painel Lateral', href: '/styleguide/sheet' },
         { name: 'Tabela', href: '/styleguide/table' },
         { name: 'Abas', href: '/styleguide/tabs' },
         { name: 'Menu Dropdown', href: '/styleguide/dropdown-menu' },
         { name: 'Avatar', href: '/styleguide/avatar' },
         { name: 'Skeleton', href: '/styleguide/skeleton' },
         { name: 'Toast', href: '/styleguide/toast' },
         { name: 'Comando', href: '/styleguide/command' },
         { name: 'Popover', href: '/styleguide/popover' },
         { name: 'Calendário', href: '/styleguide/calendar' },
         { name: 'Seletor de Data', href: '/styleguide/date-picker' },
         { name: 'Breadcrumb', href: '/styleguide/breadcrumb' },
         { name: 'Sidebar', href: '/styleguide/sidebar' },
         { name: 'Separador', href: '/styleguide/separator' },
      ],
   },
   {
      title: 'Padrões',
      items: [
         { name: 'Tipografia', href: '/styleguide/typography' },
         { name: 'Cores', href: '/styleguide/colors' },
         { name: 'Espaçamento', href: '/styleguide/spacing' },
         { name: 'Sombras', href: '/styleguide/shadows' },
      ],
   },
];
