import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Villa Concursos • Estudos a dois', description: 'Planos de estudo para SEMA-MT e Câmara de Cuiabá, nas áreas de TI e Direito.' };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html> }
