import {test} from 'node:test';
import assert from 'node:assert/strict';
import {authEnabled,googleConfigured,emailAllowed,googleIdentityAllowed} from '../lib/auth-policy.mjs';
test('Login exige ativação explícita e credenciais completas',()=>{
 assert.equal(authEnabled({}),false);
 assert.equal(authEnabled({AUTH_ENABLED:'true'}),true);
 assert.equal(googleConfigured({GOOGLE_CLIENT_ID:'id',GOOGLE_CLIENT_SECRET:'secret'}),false);
 assert.equal(googleConfigured({GOOGLE_CLIENT_ID:'id',GOOGLE_CLIENT_SECRET:'secret',NEXTAUTH_SECRET:'session-secret'}),true);
});
test('Modo restrito bloqueia qualquer conta fora da lista, inclusive lista vazia',()=>{
 assert.equal(emailAllowed('pessoa@example.com',{}),false);
 assert.equal(emailAllowed('MARIA@example.com',{AUTH_ALLOWED_EMAILS:' joao@example.com, maria@example.com '}),true);
 assert.equal(emailAllowed('outra@example.com',{AUTH_ALLOWED_EMAILS:'maria@example.com'}),false);
 assert.equal(emailAllowed('maria@example.com',{AUTH_ACCESS_MODE:'invalid'}),false);
});
test('Google precisa confirmar o e-mail, mesmo no modo público',()=>{
 const env={AUTH_ACCESS_MODE:'public'};
 assert.equal(googleIdentityAllowed({email:'pessoa@example.com',email_verified:false},env),false);
 assert.equal(googleIdentityAllowed({email:'pessoa@example.com',email_verified:'true'},env),false);
 assert.equal(googleIdentityAllowed({email:'pessoa@example.com',email_verified:true},env),true);
 assert.equal(googleIdentityAllowed(undefined,env),false);
 assert.equal(googleIdentityAllowed({email_verified:true},env),false);
});
