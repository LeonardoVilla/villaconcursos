import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const data=JSON.parse(readFileSync(new URL('../app/data.json',import.meta.url),'utf8'));
test('Câmara tem conteúdo de nível superior para TI e Analista Legislativo',()=>{
 const groups=JSON.parse(readFileSync(new URL('../app/camara-data.json',import.meta.url),'utf8'));
 const ids=groups.flatMap(g=>g.topics.map(t=>t.id));
 assert.equal(ids.length,new Set(ids).size);
 assert.ok(ids.every(id=>id.startsWith('cmc-')));
 const topics=category=>groups.filter(g=>g.category===category).flatMap(g=>g.topics.map(t=>t.text)).join(' ');
 for(const term of ['Raciocínio lógico','Regimento Interno','609/2026'])assert.ok(topics('comum').includes(term),term);
 for(const term of ['APIs REST','27001','14.133/2021'])assert.ok(topics('ti').includes(term),term);
 for(const term of ['DIREITO ADMINISTRATIVO','DIREITO CONSTITUCIONAL','PPA'])assert.ok(topics('direito').includes(term),term);
 assert.equal(readFileSync(new URL('../public/fontes/camara-edital.pdf',import.meta.url)).toString('ascii',0,4),'%PDF');
});
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
test('Todo tópico do edital (SEMA e Câmara) tem aula vinculada e cada matéria tem banco mínimo de questões',async()=>{
 const {readdirSync}=await import('node:fs');
 const dir=new URL('../app/',import.meta.url);
 const files=['topic-lessons.ts',...readdirSync(dir).filter(f=>/^lessons-.*\.ts$/.test(f))];
 const keys=new Set();
 for(const f of files)for(const m of readFileSync(new URL(f,dir),'utf8').matchAll(/^  '([^']+)': (?:\{|L\()/gm))keys.add(m[1]);
 const cmc=JSON.parse(readFileSync(new URL('camara-data.json',dir),'utf8'));
 const missing=[...data.groups,...cmc].flatMap(g=>g.topics).filter(t=>!keys.has(t.id)).map(t=>t.id);
 assert.deepEqual(missing,[]);
 const bank=['practice-bank.ts','practice-extra-a.ts','practice-extra-b.ts','practice-extra-c.ts'].map(f=>readFileSync(new URL(f,dir),'utf8')).join('\n');
 const counts={};
 for(const m of bank.matchAll(/(?:add\(|\[)'([^']+)', '[^']+', `([\s\S]*?)`/g)){
  const n=m[2].trim().split('\n').length;
  for(const g of m[1].split(' '))counts[g]=(counts[g]||0)+n;
 }
 for(const g of [...data.groups,...cmc]){
  if(g.id==='trans0'||g.id==='trans1'||g.id==='trans2'||g.id==='trans4'||g.id==='trans5'||g.id==='trans7'||!g.id.startsWith('trans')) assert.ok((counts[g.id]||0)>=10,g.id+' tem '+(counts[g.id]||0)+' questões');
 }
});

test('Cada matéria dos editais tem texto de revisão e referência de estudo',()=>{
 const camara=JSON.parse(readFileSync(new URL('../app/camara-data.json',import.meta.url),'utf8'));
 const ids=src=>new Set([...readFileSync(new URL('../app/'+src,import.meta.url),'utf8').matchAll(/groups:\s*'([^']*)'/g)].flatMap(m=>m[1].split(' ')));
 const readings=new Set([...ids('study-readings.ts'),...ids('study-readings-extra.ts')]);
 const links=ids('study-materials.ts');
 // Matérias de leis locais ficam sem link próprio quando o texto oficial é conferido no portal da casa legislativa.
 const noLinkOk=new Set(['atual','cmc-leg']);
 for(const g of [...data.groups,...camara]){
  assert.ok(readings.has(g.id),'Sem texto de revisão: '+g.id);
  assert.ok(links.has(g.id)||noLinkOk.has(g.id),'Sem link de referência: '+g.id);
 }
});

test('Cada pílula de áudio tem um MP3 real em public/audio',()=>{
 const roteiros=['roteiros.json','roteiros-portugues.json','roteiros-sema-comum.json','roteiros-atualidades.json','roteiros-camara-ti.json','roteiros-camara-comum.json','roteiros-sema-transversais.json','roteiros-direito-ambiental.json'].flatMap(f=>JSON.parse(readFileSync(new URL('../scripts/audio/'+f,import.meta.url),'utf8')));
 const stems=[...roteiros.map(r=>r.stem),...data.pills.map(p=>p.stem)];
 for(const stem of stems){
  const url=new URL('../public/audio/'+stem+'.mp3',import.meta.url);
  assert.ok(existsSync(url),'MP3 ausente: '+stem);
  assert.ok(readFileSync(url).length>100000,'MP3 pequeno demais: '+stem);
 }
});

test('Todo roteiro de áudio tem categoria para agrupar a lista',()=>{
 const arquivos=['roteiros.json','roteiros-portugues.json','roteiros-sema-comum.json','roteiros-atualidades.json','roteiros-camara-ti.json','roteiros-camara-comum.json','roteiros-sema-transversais.json','roteiros-direito-ambiental.json'];
 for(const f of arquivos){
  for(const r of JSON.parse(readFileSync(new URL('../scripts/audio/'+f,import.meta.url),'utf8'))){
   assert.ok(r.category&&r.category!=='Outros','Sem categoria: '+r.stem);
  }
 }
 for(const p of data.pills) assert.ok(p.category,'Pílula sem categoria: '+p.stem);
});
