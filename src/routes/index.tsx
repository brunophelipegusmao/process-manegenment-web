import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Eye, EyeOff, Scale } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

export const Route = createFileRoute('/')({
   component: HomePage,
});

function HomePage() {
   const LEGAL_BADGES = [
      'Processos',
      'Clientes',
      'Prazos',
      'Audiências',
      'Testemunhas',
      'Relatórios',
   ];
   const [showPassword, setShowPassword] = useState(false);
   const [rememberMe, setRememberMe] = useState(false);

   return (
      <div className='min-h-screen flex'>
         {/* ── LEFT PANEL — Hero ────────────────────────────────── */}
         <div className='hidden lg:flex relative w-1/2 overflow-hidden flex-col'>
            {/* Background gradient */}
            <div className='absolute inset-0 bg-linear-to-br from-[#00101F] via-[#001830] to-[#002B5C]' />

            {/* Decorative blobs */}
            <div className='absolute -top-24 -right-24 w-120 h-120 rounded-full bg-blue-600/15 blur-3xl pointer-events-none' />
            <div className='absolute top-1/2 -right-10 w-64 h-64 rounded-full bg-[#D4960C]/10 blur-3xl pointer-events-none' />
            <div className='absolute -bottom-24 -left-24 w-100 h-100 rounded-full bg-blue-400/10 blur-3xl pointer-events-none' />

            {/* Grid overlay texture */}
            <div
               className='absolute inset-0 opacity-[0.04]'
               style={{
                  backgroundImage:
                     'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
               }}
            />

            {/* Content */}
            <div className='relative z-10 flex flex-col h-full p-12'>
               {/* Top logo */}
               <div className='flex items-center gap-2.5'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/30'>
                     <Scale size={16} className='text-blue-400' />
                  </div>
                  <span className='text-white/70 text-sm font-medium tracking-wide'>
                     Mulim Advogados Associados
                  </span>
               </div>

               {/* Hero copy — pushed to the bottom */}
               <div className='mt-auto'>
                  {/* Badge row */}
                  <div className='flex flex-wrap gap-2 mb-7'>
                     {LEGAL_BADGES.map(tag => (
                        <Badge
                           key={tag}
                           variant='outline'
                           className='h-6 rounded-full border-white/20 bg-white/8 px-3 text-xs text-white/75 backdrop-blur-sm'
                        >
                           {tag}
                        </Badge>
                     ))}
                  </div>

                  <h1 className='text-[2.6rem] font-bold leading-[1.18] text-white max-w-105'>
                     O ambiente completo para gestão dos seus processos
                     jurídicos
                  </h1>

                  <p className='mt-4 text-base text-blue-300/70 max-w-sm leading-relaxed'>
                     Processos, clientes, prazos e audiências — tudo em um único
                     lugar, com segurança e praticidade.
                  </p>

                  {/* Stats row */}
                  <div className='mt-10 flex gap-8 border-t border-white/10 pt-7'>
                     {[
                        { value: '100%', label: 'Seguro' },
                        { value: '24/7', label: 'Disponível' },
                        { value: '∞', label: 'Processos' },
                     ].map(s => (
                        <div key={s.label}>
                           <p className='text-2xl font-bold text-white'>
                              {s.value}
                           </p>
                           <p className='text-xs text-blue-300/60 mt-0.5'>
                              {s.label}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* ── RIGHT PANEL — Login Form ─────────────────────────── */}
         <div className='flex-1 flex items-center justify-center bg-[#0A0A0B] p-8'>
            <div className='w-full max-w-85'>
               {/* Logo */}
               <div className='mb-8'>
                  <img
                     src='/images/lg_mulim.svg'
                     alt='Mulim Advogados Associados'
                     className='h-10 brightness-0 invert'
                     onError={e => {
                        // fallback: show text if SVG fails
                        (e.currentTarget as HTMLImageElement).style.display =
                           'none';
                     }}
                  />
               </div>

               {/* Heading */}
               <div className='mb-7 space-y-1'>
                  <h2 className='text-xl font-semibold text-white'>
                     Acesse sua conta
                  </h2>
                  <p className='text-sm text-neutral-500'>
                     Entre com suas credenciais para continuar
                  </p>
               </div>

               {/* Form */}
               <div className='space-y-4'>
                  {/* Email */}
                  <div className='space-y-1.5'>
                     <Label className='text-sm text-neutral-400'>E-mail</Label>
                     <Input
                        type='email'
                        placeholder='seu@email.com.br'
                        autoComplete='email'
                        className='h-10 border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-600 focus-visible:border-blue-500 focus-visible:ring-blue-500/20'
                     />
                  </div>

                  {/* Password */}
                  <div className='space-y-1.5'>
                     <Label className='text-sm text-neutral-400'>Senha</Label>
                     <div className='relative'>
                        <Input
                           type={showPassword ? 'text' : 'password'}
                           placeholder='••••••••'
                           autoComplete='current-password'
                           className='h-10 border-neutral-800 bg-neutral-900 pr-10 text-white placeholder:text-neutral-600 focus-visible:border-blue-500 focus-visible:ring-blue-500/20'
                        />
                        <button
                           type='button'
                           aria-label={
                              showPassword ? 'Ocultar senha' : 'Mostrar senha'
                           }
                           onClick={() => setShowPassword(p => !p)}
                           className='absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 transition-colors hover:text-neutral-300'
                        >
                           {showPassword ? (
                              <EyeOff size={16} />
                           ) : (
                              <Eye size={16} />
                           )}
                        </button>
                     </div>
                  </div>

                  {/* Remember me */}
                  <div className='flex items-center gap-2.5'>
                     <Checkbox
                        id='remember'
                        checked={rememberMe}
                        onCheckedChange={v => setRememberMe(!!v)}
                        className='border-neutral-600 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600'
                     />
                     <Label
                        htmlFor='remember'
                        className='cursor-pointer text-sm text-neutral-400'
                     >
                        Lembrar de mim
                     </Label>
                  </div>

                  {/* Submit */}
                  <Button
                     type='submit'
                     size='lg'
                     className='mt-1 w-full bg-[#0A56B8] font-semibold text-white hover:bg-[#0948A0] active:bg-[#0840A0]'
                  >
                     Entrar
                  </Button>

                  {/* Forgot password */}
                  <Button
                     variant='ghost'
                     className='w-full text-sm text-neutral-500 hover:text-neutral-300 h-auto py-1.5'
                  >
                     Esqueceu sua senha?
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
