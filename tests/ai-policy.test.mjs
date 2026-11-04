import { test } from 'node:test';
import assert from 'node:assert/strict';
import { aiCandidates, dailyLimit, chatBody, explainMessages, parseExplainInput } from '../lib/ai-policy.mjs';

const chaves = { OPENAI_API_KEY: 'x', DEEPSEEK_API_KEY: 'y' };

test('Sem variáveis de modelo, usa os padrões com as duas chaves', () => {
  const lista = aiCandidates({ ...chaves }, 'explain');
  assert.deepEqual(lista, [
    { provider: 'openai', model: 'gpt-5.4-nano' },
    { provider: 'deepseek', model: 'deepseek-flash' },
  ]);
  assert.equal(aiCandidates({ ...chaves }, 'essay')[0].model, 'gpt-5.4-mini');
});

test('Os modelos podem ser trocados por variáveis de ambiente', () => {
  const lista = aiCandidates({ ...chaves, AI_EXPLAIN_PROVIDER: 'deepseek', AI_EXPLAIN_MODEL: 'deepseek-flash', AI_FALLBACK_PROVIDER: 'openai', AI_FALLBACK_MODEL: 'gpt-5-nano' }, 'explain');
  assert.deepEqual(lista, [
    { provider: 'deepseek', model: 'deepseek-flash' },
    { provider: 'openai', model: 'gpt-5-nano' },
  ]);
});

test('Provedor sem chave ou desconhecido é descartado, e não há candidatos repetidos', () => {
  assert.deepEqual(aiCandidates({ OPENAI_API_KEY: 'x' }, 'explain'), [{ provider: 'openai', model: 'gpt-5.4-nano' }]);
  assert.deepEqual(aiCandidates({}, 'explain'), []);
  assert.deepEqual(aiCandidates({ ...chaves, AI_EXPLAIN_PROVIDER: 'inexistente' }, 'explain'), [{ provider: 'deepseek', model: 'deepseek-flash' }]);
  const igual = aiCandidates({ ...chaves, AI_FALLBACK_PROVIDER: 'openai', AI_FALLBACK_MODEL: 'gpt-5.4-nano' }, 'explain');
  assert.equal(igual.length, 1);
});

test('O limite diário tem padrão e teto', () => {
  assert.equal(dailyLimit({}), 30);
  assert.equal(dailyLimit({ AI_DAILY_LIMIT: '12' }), 12);
  assert.equal(dailyLimit({ AI_DAILY_LIMIT: '0' }), 30);
  assert.equal(dailyLimit({ AI_DAILY_LIMIT: 'abc' }), 30);
  assert.equal(dailyLimit({ AI_DAILY_LIMIT: '99999' }), 200);
});

test('O corpo da requisição respeita as diferenças entre provedores', () => {
  const msgs = [{ role: 'user', content: 'oi' }];
  const gpt5 = chatBody('openai', 'gpt-5.4-nano', msgs);
  assert.equal(gpt5.reasoning_effort, 'low');
  assert.ok(gpt5.max_completion_tokens && !('max_tokens' in gpt5));
  const gpt41 = chatBody('openai', 'gpt-4.1-mini', msgs);
  assert.ok(!('reasoning_effort' in gpt41));
  const deep = chatBody('deepseek', 'deepseek-flash', msgs);
  assert.ok(deep.max_tokens >= 1500 && !('reasoning_effort' in deep));
});

test('O prompt de explicação traz gabarito, escolha do aluno e a regra de não inventar', () => {
  const base = { prompt: 'Qual o prazo?', options: ['10 dias', '15 dias', '30 dias', '5 dias', '60 dias'], explanation: 'Art. 59.', topic: 'Lei 9.784' };
  const errou = explainMessages({ ...base, chosenIndex: 1 });
  assert.equal(errou[0].role, 'system');
  assert.match(errou[0].content, /Nunca invente/);
  assert.match(errou[1].content, /Alternativa correta: 10 dias/);
  assert.match(errou[1].content, /marcada pelo aluno \(errada\): 15 dias/);
  assert.match(explainMessages({ ...base, chosenIndex: 0 })[1].content, /O aluno acertou/);
  assert.match(explainMessages({ ...base, chosenIndex: null })[1].content, /não marcou/);
});

test('A entrada da rota é validada', () => {
  assert.deepEqual(parseExplainInput({ questionId: 'q1abc', chosen: 2 }), { questionId: 'q1abc', chosen: 2 });
  assert.deepEqual(parseExplainInput({ questionId: 'q1abc' }), { questionId: 'q1abc', chosen: null });
  assert.equal(parseExplainInput({ questionId: 'q1abc', chosen: 9 }), null);
  assert.equal(parseExplainInput({ questionId: "q1'; drop table" }), null);
  assert.equal(parseExplainInput({ questionId: 5 }), null);
  assert.equal(parseExplainInput(null), null);
});
