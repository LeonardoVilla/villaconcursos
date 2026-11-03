'use client';
import { signOut } from 'next-auth/react';
export default function AccountMenu({name,email}:{name?:string|null;email:string}) {
  return <div className="account-menu"><span title={email}>{name||email}</span><button onClick={()=>signOut({callbackUrl:'/login'})}>Sair</button></div>;
}
