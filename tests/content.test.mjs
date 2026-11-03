import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const data=JSON.parse(readFileSync(new URL('../app/data.json',import.meta.url),'utf8'));
test('O programa mantém matérias gerais, cinco eixos de TI e todas as áreas jurídicas',()=>{
 assert.equal(data.groups.filter(g=>g.category==='ti').length,5);
 assert.equal(data.groups.filter(g=>g.category==='direito').length,5);
 assert.equal(data.groups.filter(g=>g.category==='comum').length,5);
 assert.equal(data.groups.filter(g=>g.category==='transversal').length,8);
 const ti=data.groups.filter(g=>g.category==='ti').flatMap(g=>g.topics).map(t=>t.text).join(' ');
 for(const term of ['GDPR','Kubernetes','Quick Sort','SQL','UX/UI','COBIT','Hadoop'])assert.ok(ti.includes(term),term);
 const law=data.groups.filter(g=>['direito','transversal'].includes(g.category)).flatMap(g=>g.topics).map(t=>t.text).join(' ');
 for(const term of ['14.133/2021','7.692/2002','15.190/2025','9.612/2011','Mandado de segurança','Estatística'])assert.ok(law.includes(term),term);
});
test('Cada marcação tem chave única e todos os tópicos têm conteúdo',()=>{
 const topics=data.groups.flatMap(g=>g.topics);assert.equal(new Set(topics.map(t=>t.id)).size,topics.length);
 for(const t of topics)assert.ok(t.text.trim().length>5,t.id);
});
test('As quatro faixas de TI são WAV reais, não arquivos vazios',()=>{
 assert.equal(data.pills.length,4);
 for(const p of data.pills){
  const bytes=readFileSync(new URL('../public/audio/'+p.stem+'.wav',import.meta.url));
  assert.equal(bytes.toString('ascii',0,4),'RIFF');assert.equal(bytes.toString('ascii',8,12),'WAVE');
  assert.ok(bytes.length>1000000);assert.ok(bytes.subarray(1000,300000).some(b=>b!==0));
 }
});
test('Edital e documentos complementares estão disponíveis no projeto',()=>{
 for(const name of ['edital','retificacao-1','retificacao-2','cronograma']){
 const file=new URL('../public/fontes/'+name+'.pdf',import.meta.url);assert.ok(existsSync(file));assert.equal(readFileSync(file).toString('ascii',0,4),'%PDF');
 }
});
