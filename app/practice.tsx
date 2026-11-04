'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { questions, type Question } from './practice-bank';
import { materials } from './study-materials';
import { topicLessons as baseLessons } from './topic-lessons';
import { extraLessons } from './topic-lessons-extra';
import { readings as baseReadings } from './study-readings';
import { readingsExtra } from './study-readings-extra';
import { mtGeography, mtTimeline } from './mt-lessons';
import { readingExercises } from './reading-exercises';
const readings = [...baseReadings, ...readingsExtra];

function ExplainWithAi({ questionId, chosen }: { questionId: string; chosen: number | null }) {
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  async function ask() {
    setState('loading');
    setMessage('');
    try {
      const response = await fetch('/api/ai/explain', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ questionId, chosen }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setMessage(response.status === 429
          ? 'Você usou todas as explicações de hoje. Volte amanhã.'
          : response.status === 401 ? 'Entre com sua conta para usar a IA.'
          : 'A IA não está disponível agora. Tente de novo em instantes.');
        setState('error');
        return;
      }
      setText(String(data.text || ''));
      setMessage(typeof data.remaining === 'number' ? data.remaining + ' explicações restantes hoje.' : '');
      setState('done');
    } catch {
      setMessage('Não foi possível falar com a IA. Verifique a conexão.');
      setState('error');
    }
  }
  return <div className="ai-explain">
    {state !== 'done' && <button type="button" onClick={ask} disabled={state === 'loading'}>{state === 'loading' ? 'Pensando…' : 'Não entendi: explicar com IA'}</button>}
    {state === 'error' && <p className="login-error" role="alert">{message}</p>}
    {state === 'done' && <div role="status">
      <p><strong>Explicação da IA</strong></p>
      {text.split('\n').filter(Boolean).map((line, i) => <p key={i}>{line}</p>)}
      <small>Gerada por IA como apoio. Confira sempre no texto da lei ou do edital. {message}</small>
    </div>}
  </div>;
}

function MatoGrossoTimeline() {
  const [index, setIndex] = useState(0);
  const event = mtTimeline[index];
  const last = mtTimeline.length - 1;
  return <div className="mt-tl">
    <article className="mt-tl-detail" aria-live="polite">
      <span className="mt-date">{event.date}</span>
      <h4>{event.title}</h4>
      <p>{event.text}</p>
      <div className="mt-tl-nav">
        <button type="button" onClick={() => setIndex(index - 1)} disabled={index === 0}>Anterior</button>
        <span>{index + 1} de {mtTimeline.length}</span>
        <button type="button" onClick={() => setIndex(index + 1)} disabled={index === last}>Próximo</button>
      </div>
    </article>
    <ol className="mt-tl-list" aria-label="Eventos da história de Mato Grosso">
      {mtTimeline.map((item, i) => <li key={item.date}>
        <button type="button" className={i === index ? 'active' : ''} aria-current={i === index ? 'step' : undefined} onClick={() => setIndex(i)}>
          <span className="mt-tl-dot" aria-hidden="true" />
          <span><strong>{item.title}</strong><small>{item.date}</small></span>
        </button>
      </li>)}
    </ol>
  </div>;
}

function MatoGrossoLesson() {
  return <>
    <nav className="reading-jumps" aria-label="Seções da leitura de Mato Grosso">
      <a href="#mt-historia">Linha do tempo</a>
      <a href="#mt-geografia">Geografia</a>
      <a href="#mt-revisao">Revisão</a>
    </nav>
    <h3 id="mt-historia">História de Mato Grosso</h3>
    <p className="subtext">Toque em um evento para ler o detalhe. Abaixo, a mesma linha do tempo em lista corrida.</p>
    <MatoGrossoTimeline />
    <ol className="mt-timeline">
      {mtTimeline.map(event => <li key={event.date}>
        <span className="mt-date">{event.date}</span>
        <h4>{event.title}</h4>
        <p>{event.text}</p>
      </li>)}
    </ol>
    <p className="reading-sources"><a href="https://www.mtprev.mt.gov.br/-/10074659-conheca-a-historia-de-mato-grosso-desde-o-periodo-colonial" target="_blank" rel="noreferrer">História de Mato Grosso · MT Prev</a> · <a href="https://www.historia.uff.br/impressoesrebeldes/revolta/rusga/" target="_blank" rel="noreferrer">A Rusga · UFF</a> · <a href="https://legis.senado.leg.br/norma/540736" target="_blank" rel="noreferrer">Divisão estadual · Senado</a></p>
    <h3 id="mt-geografia">Geografia de Mato Grosso</h3>
    {mtGeography.map(section => <section key={section.title}>
      <h4>{section.title}</h4>
      <p>{section.text}</p>
    </section>)}
    <p className="reading-sources"><a href="https://www.ibge.gov.br/cidades-e-estados/mt.html" target="_blank" rel="noreferrer">Indicadores de Mato Grosso · IBGE</a> · <a href="https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1181763/1/MatoGrosso.pdf" target="_blank" rel="noreferrer">Território e biomas · Embrapa</a></p>
  </>;
}

type Group = { id: string; title: string; category: string; topics: { id: string; text: string }[] };
type Mode = 'quick' | 'custom' | 'full' | 'review';
export type QuizStat = { r: number; w: number; last: 'r' | 'w'; ts: number };
type Item = { question: Question; order: number[]; section: string; weight: number };
const topicLessons: Record<string, (typeof baseLessons)[string]> = { ...extraLessons, ...baseLessons };

type Props = { camara: boolean; groups: Group[]; quiz?: Record<string, QuizStat>; onAnswer?: (id: string, correct: boolean) => void; aiEnabled?: boolean };

function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function StudyLibrary({ groups, camara, initialGroup = '' }: Props & { initialGroup?: string }) {
  const [group, setGroup] = useState(initialGroup);
  const eligible = new Set(groups.map(item => item.id));
  const activeGroup = eligible.has(group) ? group : '';
  const available = materials.filter(item => item.groups.split(' ').some(id => eligible.has(id)));
  const selected = available.filter(item => !activeGroup || item.groups.split(' ').includes(activeGroup));
  const lessons = readings.filter(item => item.groups.split(' ').some(id => activeGroup ? id === activeGroup : eligible.has(id)));
  const syllabus = groups.filter(item => !activeGroup || item.id === activeGroup);
  const topics = syllabus.flatMap(item => item.topics);
  const writtenCount = topics.filter(topic => topicLessons[topic.id]).length;
  return <section className="card practice-card">
    <h2>Materiais do edital</h2>
    <p className="subtext">Leia os textos de revisão aqui no app e use as referências para aprofundar o estudo.</p>
    <label className="practice-field">Matéria
      <select value={activeGroup} onChange={event => setGroup(event.target.value)}>
        <option value="">Todas as matérias</option>
        {groups.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
      </select>
    </label>
    <h3>Aulas por tópico do edital</h3>
    <p className="subtext">{writtenCount} de {topics.length} itens com aula vinculada. Os textos de revisão gerais aparecem abaixo.</p>
    <div className="reading-list">
      {syllabus.map(item => <details className="reading-lesson" key={item.id} open={item.id === activeGroup}>
        <summary>{item.title} · {item.topics.filter(topic => topicLessons[topic.id]).length}/{item.topics.length}</summary>
        <div className="reading-body">
          {item.topics.map(topic => {
            const lesson = topicLessons[topic.id];
            return <details className="reading-lesson" key={topic.id}>
              <summary>{topic.text}</summary>
              <div className="reading-body">
                {lesson ? <>
                  {lesson.sections.map(section => <section key={section.title}><h3>{section.title}</h3><p>{section.text}</p></section>)}
                  <section className="reading-exercise">
                    <h3>Questão de revisão</h3>
                    <p>{lesson.question}</p>
                    <details><summary>Ver resolução comentada</summary><p>{lesson.answer}</p></details>
                  </section>
                  <ul className="reading-sources">
                    {lesson.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a></li>)}
                  </ul>
                </> : <p>Aula detalhada pendente para este item.</p>}
              </div>
            </details>;
          })}
        </div>
      </details>)}
    </div>
    <h3>Textos de revisão</h3>
    <div className="reading-list">
      {lessons.map(lesson => {
        const isMatoGrosso = lesson.groups === 'mt cmc-mt';
        const exercise = readingExercises[lesson.title];
        return <details className="reading-lesson" key={lesson.title} open={Boolean(activeGroup)}>
          <summary>{lesson.title}</summary>
          <article className="reading-body">
            {isMatoGrosso ? <MatoGrossoLesson/> : <>
              <h3>Conceitos e exemplos</h3>
              {lesson.text.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </>}
            {exercise && <section className="reading-exercise" id={isMatoGrosso ? 'mt-revisao' : undefined}>
              <h3>Pratique o que leu</h3>
              <p>{exercise.question}</p>
              <details>
                <summary>Ver resolução comentada</summary>
                <p>{exercise.answer}</p>
              </details>
            </section>}
          </article>
        </details>;
      })}
    </div>
    {!lessons.length && <p>Esta matéria ainda está sem texto de revisão.</p>}
    <h3>Referências complementares</h3>
    {!selected.length && <p>Use o edital como referência para esta matéria. Ainda não há material complementar selecionado.</p>}
    <div className="study-resources">
      {selected.map(item => <article key={item.url}>
        <small>{item.publisher}</small>
        <h3><a href={item.url} target="_blank" rel="noreferrer">{item.title} <ArrowUpRight size={14}/></a></h3>
        <p>{item.guide}</p>
      </article>)}
    </div>
    <a className="text-button" href={camara ? 'https://concursos.selecon.org.br/informacoes/102' : 'https://concursos.cesgranrio.org.br/portal/avaliacoes/21'} target="_blank" rel="noreferrer">Publicações e retificações da banca <ArrowUpRight size={14}/></a>
  </section>;
}

export default function Practice({ camara, groups, quiz = {}, onAnswer, aiEnabled = false }: Props) {
  const [mode, setMode] = useState<Mode>('quick');
  const [selected, setSelected] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(5);
  const [items, setItems] = useState<Item[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState('');
  const [essay, setEssay] = useState('');
  const legal = groups.some(group => group.category === 'direito');
  const written = camara
    ? legal
      ? {prompt:'A Câmara precisa contratar um serviço comum. Explique como a fase preparatória, a escolha da modalidade e a definição de critérios objetivos contribuem para uma contratação regular.', review:'Descreva a necessidade e o planejamento, indique o pregão para serviço comum nas condições legais e relacione critérios prévios com julgamento objetivo.'}
      : {prompt:'A Câmara precisa implantar uma aplicação web que trata dados pessoais. Proponha medidas para autenticação, proteção de dados, cópias de segurança e resposta a incidentes.', review:'Explique controle de acesso e privilégio mínimo, medidas de proteção, cópias isoladas com testes de restauração e ações de contenção e recuperação.'}
    : legal
      ? {prompt:'Uma atividade potencialmente causadora de significativa degradação ambiental vai ser implantada. Explique a função do estudo prévio de impacto e a relação entre sanções e reparação do dano.', review:'Relacione o estudo prévio e a publicidade ao art. 225, § 1º, IV, da Constituição. Explique a independência entre obrigação de reparar e sanções administrativas e penais.'}
      : {prompt:'Uma API de um órgão público é atualizada com frequência. Proponha um fluxo de CI/CD que preserve a segurança e permita recuperar a operação se a nova versão falhar.', review:'Descreva controle de versão, testes e verificações de segurança, gestão de segredos, implantação gradual, observabilidade e recuperação ou reversão.'};
  const groupIds = new Set(groups.map(group => group.id));
  const pool = questions.filter(question => question.groups.some(id => groupIds.has(id)));
  const topicNames = [...new Set(pool.map(question => question.topic))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  const filtered = pool.filter(question => !selected.length || selected.includes(question.topic));
  const wrongPool = pool.filter(question => quiz[question.id]?.last === 'w');
  const attempted = pool.filter(question => quiz[question.id]);
  const rights = attempted.reduce((sum, question) => sum + quiz[question.id].r, 0);
  const wrongs = attempted.reduce((sum, question) => sum + quiz[question.id].w, 0);
  const weakTopics = topicNames.map(topic => {
    const list = attempted.filter(question => question.topic === topic);
    const r = list.reduce((sum, question) => sum + quiz[question.id].r, 0);
    const w = list.reduce((sum, question) => sum + quiz[question.id].w, 0);
    return { topic, r, w, rate: r + w ? w / (r + w) : 0 };
  }).filter(entry => entry.r + entry.w >= 2 && entry.w > 0).sort((a, b) => b.rate - a.rate).slice(0, 3);
  const specificIds = groups.filter(group => group.category !== 'comum' || group.id === 'cmc-leg').map(group => group.id);
  const sections = camara
    ? [
      {label:'Conhecimentos básicos', count:15, weight:1, ids:['cmc-port','cmc-logica','cmc-info']},
      {label:'Conhecimentos gerais', count:15, weight:1, ids:['cmc-mt','cmc-etica','cmc-rel','cmc-adm']},
      {label:'Conhecimentos específicos', count:40, weight:1.75, ids:specificIds},
    ]
    : [
      {label:'Língua Portuguesa', count:15, weight:1, ids:['port']},
      {label:'História e Geografia de MT', count:10, weight:1, ids:['mt']},
      {label:'Ética, Atualidades e Legislação', count:5, weight:1, ids:['etica','atual','leg']},
      {label:'Conhecimentos específicos', count:40, weight:1, ids:specificIds},
    ];

  function item(question: Question, section: string, weight: number): Item {
    return { question, order: shuffle(camara ? [0,1,2,3] : [0,1,2,3,4]), section, weight };
  }

  function start() {
    setError('');
    const next: Item[] = [];
    if (mode === 'full') {
      const used = new Set<string>();
      const bySection = new Map<string, Item[]>();
      // Reserve specific questions first when a question fits two blocks.
      for (const section of [...sections].reverse()) {
        const candidates = pool.filter(question => !used.has(question.id) && question.groups.some(id => section.ids.includes(id)));
        if (candidates.length < section.count) {
          setError('Ainda faltam questões em ' + section.label + ' para montar uma prova completa.');
          return;
        }
        const chosen = shuffle(candidates).slice(0, section.count);
        chosen.forEach(question => used.add(question.id));
        bySection.set(section.label, chosen.map(question => item(question, section.label, section.weight)));
      }
      sections.forEach(section => next.push(...(bySection.get(section.label) ?? [])));
    } else {
      const base = mode === 'review' ? wrongPool : filtered;
      if (!base.length) {
        setError('Você ainda não tem questões para revisar. Responda ao quiz para o app registrar seus erros.');
        return;
      }
      if (!Number.isInteger(quantity) || quantity < 1 || quantity > base.length) {
        setError('Escolha uma quantidade entre 1 e ' + base.length + '.');
        return;
      }
      next.push(...shuffle(base).slice(0, quantity).map(question => item(question, question.topic, 1)));
    }
    setAnswers({});
    setEssay('');
    setIndex(0);
    setFinished(false);
    setItems(next);
  }

  const current = items[index];
  const answered = Object.keys(answers).length;
  const score = items.reduce((sum, entry) => sum + (answers[entry.question.id] === 0 ? entry.weight : 0), 0);
  const total = items.reduce((sum, entry) => sum + entry.weight, 0);
  const format = (value: number) => value.toLocaleString('pt-BR', {maximumFractionDigits:2});

  if (!items.length) return <section className="card practice-card">
    <h2>Quiz e simulados</h2>
    <p className="subtext">{pool.length} questões autorais para o cargo selecionado, com correção comentada.</p>
    <div className="practice-modes" role="group" aria-label="Modo de prática">
      {([['quick','Quiz rápido'],['custom','Simulado por tópicos'],['full','Simulado completo'],['review','Revisar erros (' + wrongPool.length + ')']] as const).map(([value,label]) =>
        <button key={value} aria-pressed={mode === value} onClick={() => {setMode(value); setError(''); if (value === 'review') setQuantity(Math.max(1, Math.min(10, wrongPool.length)));}}>{label}</button>)}
    </div>
    {attempted.length > 0 && <div className="practice-stats" aria-label="Seu desempenho">
      <strong>Seu desempenho</strong>
      <p>{attempted.length} questões respondidas · {rights} acertos · {wrongs} erros · {Math.round(rights / Math.max(1, rights + wrongs) * 100)}% de acerto</p>
      {weakTopics.length > 0 && <p>Pontos fracos: {weakTopics.map(entry => entry.topic + ' (' + Math.round(entry.rate * 100) + '% de erro)').join('; ')}.</p>}
    </div>}
    {mode === 'review' && <p className="subtext">{wrongPool.length ? 'Questões que você errou na última vez que respondeu. Ao acertar uma delas, ela sai desta lista.' : 'Nenhum erro registrado ainda. Faça um quiz e as questões erradas aparecem aqui.'}</p>}
    {mode === 'full' ? <div className="practice-details">
      <strong>Prova objetiva · 70 questões · {camara ? 'Selecon' : 'Cesgranrio'}</strong>
      <ul>{sections.map(section => <li key={section.label}>{section.label} · {section.count} questões de {format(section.weight)} ponto(s)</li>)}</ul>
      <p>Inclui uma proposta de discursiva do cargo, com roteiro de autoavaliação. A pontuação automática é da prova objetiva.</p>
    </div> : mode === 'review' ? <>
      <label className="practice-field">Quantidade de questões
        <input type="number" min={1} max={Math.max(1, wrongPool.length)} value={quantity || ''} onChange={event => {setQuantity(Number(event.target.value));setError('');}}/>
      </label>
      <p className="subtext">{wrongPool.length} questões para revisar.</p>
    </> : <>
      <label className="practice-field">Quantidade de questões
        <input type="number" min={1} max={filtered.length} value={quantity || ''} onChange={event => {setQuantity(Number(event.target.value));setError('');}}/>
      </label>
      <fieldset className="practice-topics">
        <legend>Tópicos</legend>
        <p className="subtext">Selecione um ou vários. Sem seleção, o app sorteia de todo o banco deste cargo.</p>
        <div className="practice-grid">
          {topicNames.map(topic => <label key={topic}>
            <input type="checkbox" checked={selected.includes(topic)} onChange={() => {setSelected(current => current.includes(topic) ? current.filter(value => value !== topic) : [...current,topic]);setError('');}}/>
            {topic}
          </label>)}
        </div>
      </fieldset>
      <p className="subtext">{filtered.length} questões disponíveis na seleção.</p>
    </>}
    {error && <p className="login-error" role="alert">{error}</p>}
    <button className="primary" onClick={start}>Começar {mode === 'quick' ? 'quiz' : mode === 'review' ? 'revisão' : 'simulado'}</button>
  </section>;

  if (finished) return <section className="card practice-card">
    <h2>Resultado</h2>
    <p className="practice-score">{format(score)} de {format(total)} pontos</p>
    <p>{answered} de {items.length} questões respondidas.</p>
    {mode === 'full' && <ul>{sections.map(section => {
      const part = items.filter(entry => entry.section === section.label);
      const correct = part.filter(entry => answers[entry.question.id] === 0).length;
      return <li key={section.label}>{section.label} · {correct}/{part.length} acertos · {format(correct * section.weight)} pontos</li>;
    })}</ul>}
    <button className="primary" onClick={() => setItems([])}>Nova prática</button>
    <div className="practice-review">
      {mode === 'full' && <details>
        <summary>Discursiva · roteiro de autoavaliação</summary>
        <p>{written.prompt}</p>
        {essay.trim() && <p className="essay-response">{essay}</p>}
        <p>{written.review}</p>
      </details>}
      {items.map(({question}, number) => <details key={question.id}>
        <summary>{number + 1}. {answers[question.id] === 0 ? 'Acerto' : answers[question.id] === undefined ? 'Em branco' : 'Erro'} · {question.topic}</summary>
        <p>{question.prompt}</p>
        {question.exhibit && <pre className="practice-exhibit">{question.exhibit}</pre>}
        <p><strong>Sua resposta</strong> {question.options[answers[question.id]] ?? 'Em branco'}</p>
        <p><strong>Gabarito</strong> {question.options[0]}</p>
        <p>{question.explanation}</p>
        {aiEnabled && <ExplainWithAi key={question.id} questionId={question.id} chosen={answers[question.id] ?? null} />}
      </details>)}
    </div>
  </section>;

  function finish() {
    if (answered === items.length || confirm('Finalizar com questões em branco?')) {
      if (mode === 'custom' || mode === 'full') items.forEach(({question}) => { if (answers[question.id] !== undefined) onAnswer?.(question.id, answers[question.id] === 0); });
      setFinished(true);
    }
  }

  if (mode === 'full' && index === items.length) return <section className="card practice-card">
    <h2>Prova discursiva</h2>
    <p>{written.prompt}</p>
    {camara && <p className="subtext">No papel, pratique a resposta em 20 a 30 linhas.</p>}
    <label className="essay-field">Sua resposta
      <textarea rows={12} value={essay} onChange={event => setEssay(event.target.value)}/>
    </label>
    <div className="practice-actions">
      <button onClick={() => setIndex(index - 1)}>Voltar à última questão</button>
      <button className="primary" onClick={finish}>Finalizar</button>
    </div>
  </section>;

  const chosen = answers[current.question.id];
  const showCorrection = (mode === 'quick' || mode === 'review') && chosen !== undefined;
  return <section className="card practice-card">
    <p className="eyebrow">{current.section} · {answered}/{items.length} respondidas</p>
    <h2>Questão {index + 1} de {items.length}</h2>
    <fieldset className="practice-options">
      <legend>{current.question.prompt}</legend>
      {current.question.exhibit && <pre className="practice-exhibit">{current.question.exhibit}</pre>}
      {current.order.map((choice, letter) => <label key={choice} className={showCorrection && choice === 0 ? 'correct-choice' : ''}>
        <input type="radio" name="practice-answer" checked={chosen === choice} disabled={showCorrection}
          onChange={() => {setAnswers(previous => ({...previous, [current.question.id]:choice})); if (mode === 'quick' || mode === 'review') onAnswer?.(current.question.id, choice === 0);}}/>
        <span>{String.fromCharCode(65 + letter)}. {current.question.options[choice]}</span>
      </label>)}
    </fieldset>
    {showCorrection && <div className="notice subtle" role="status"><strong>{chosen === 0 ? 'Correto. ' : 'Gabarito: ' + current.question.options[0] + '. '}</strong>{current.question.explanation}</div>}
    {showCorrection && aiEnabled && <ExplainWithAi key={current.question.id} questionId={current.question.id} chosen={chosen ?? null} />}
    <div className="practice-actions">
      <button disabled={!index} onClick={() => setIndex(index - 1)}>Anterior</button>
      <button disabled={index === items.length - 1} onClick={() => setIndex(index + 1)}>Próxima</button>
      {mode === 'full'
        ? <button className="primary" onClick={() => setIndex(items.length)}>Ir para discursiva</button>
        : <button className="primary" onClick={finish}>Finalizar</button>}
    </div>
  </section>;
}
