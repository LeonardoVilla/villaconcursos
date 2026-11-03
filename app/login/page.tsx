import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Leaf, Check, Monitor, Scale } from 'lucide-react';
import { authOptions } from '../../lib/auth';
import { authEnabled, googleConfigured, emailAllowed } from '../../lib/auth-policy.mjs';
import GoogleButton from './google-button';

export const dynamic = 'force-dynamic';
export default async function Login({searchParams}:{searchParams:Promise<{error?:string}>}) {
  const available = authEnabled() && googleConfigured();
  if (available) {
    const session = await getServerSession(authOptions);
    if (session?.user?.email && emailAllowed(session.user.email)) redirect('/');
  }
  const {error} = await searchParams;
  return <div className="login-page"><section className="login-story"><a className="brand" href="/login"><span className="brand-mark"><Leaf size={26}/></span><span>trilha<span className="brand-sub">VILLA CONCURSOS</span></span></a><div className="login-story-content"><span className="eyebrow">ESTUDOS A DOIS · SEMA-MT E CÂMARA DE CUIABÁ</span><h1>Um bloco hoje.<br/>Um passo mais perto.</h1><p>Seu plano, suas revisões e os próximos passos para chegar à prova com mais confiança.</p><div className="login-benefits">{['Quatro blocos de 30 minutos por dia','Checklist do edital, com suas anotações','Pílulas para aprender pelo caminho'].map(t=><span key={t}><Check size={17}/>{t}</span>)}</div><div className="login-profiles"><span><Monitor size={18}/>Tecnologia da Informação</span><span><Scale size={18}/>Direito</span></div></div><small>Dois concursos · Um bloco de cada vez.</small></section><section className="login-form"><div className="login-box"><span className="eyebrow">BEM-VINDO À SUA TRILHA</span><h2>Vamos continuar<br/>sua preparação?</h2><p>Entre com sua conta Google para acessar seu espaço de estudos.</p>{error&&<div role="alert" className="login-error">{error==='AccessDenied'?'Esta conta não tem acesso ao aplicativo. Use uma conta autorizada.':'Não foi possível concluir o login. Tente novamente.'}</div>}{available?<GoogleButton/>:<div className="login-pending">O acesso com Google estará disponível em breve.</div>}<div className="login-privacy">Usamos seu nome e e-mail para identificar sua conta. Não solicitamos acesso ao Gmail ou ao Google Drive.</div><p className="login-local">Seu progresso permanece salvo neste navegador. Para levar as marcações a outro aparelho, use o backup.</p>{!authEnabled()&&<a className="text-button" href="/">Continuar estudando</a>}</div><span className="login-bottom">Villa Concursos · Constância faz a diferença.</span></section></div>;
}
