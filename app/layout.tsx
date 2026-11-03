import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Trilha SEMA • Estudos a dois', description: 'Plano de estudos SEMA-MT 2026 para Tecnologia da Informação e Direito.' };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html> }
