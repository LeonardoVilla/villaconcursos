# Pendências

Lista do que ainda falta ou merece atenção.

## Conteúdo

- [ ] **Áudios:** todas as matérias têm faixa. Falta atualizar Atualidades perto da prova, conferir números de leis e prazos dos roteiros de Direito e, se desejado, criar faixas de questões comentadas. Veja [Áudios](../conteudo/audios.md).
- [ ] **Conferir** a Lei 9.612/2011 (águas subterrâneas), o Decreto 1.436/2022, as resoluções CONAMA e os decretos federais citados contra o texto oficial.
- [ ] **Atualizar** as aulas da Lei 7.692/2002 e da LC 04/1990 com o texto consolidado.
- [ ] **Exercícios de leitura:** só parte dos textos de revisão tem exercício.
- [ ] **Banco de respostas** para a prova discursiva.
- [ ] **Ampliar o banco de questões.** O banco tem 491 questões. Português tem só 15 (SEMA) e 15 (Câmara), e o simulado completo usa 15 de Português, então ele repete sempre as mesmas. Os transversais da SEMA (trans0, 2, 4 e 5) têm 10 cada. Ampliar com questões geradas por IA e revisadas.

## Segurança

- [ ] Trocar a senha do banco Neon (parte dela apareceu na saída de uma ferramenta) e rodar `neon env pull`.
- [ ] Definir limite mensal de gasto nas contas da OpenAI e do DeepSeek.
- [ ] Decidir se as variáveis de IA devem ficar só em Production na Vercel (hoje estão também em Preview).

## IA

- [ ] Correção da discursiva com IA (as variáveis `AI_ESSAY_*` já estão previstas).
- [ ] Geração de questões novas para os tópicos de maior erro, com revisão antes de entrar no banco.

## Plataforma

- [ ] Atualizar o `README.md`: ele ainda diz que não há banco nem sincronização.
- [ ] Remover os WAV antigos de `public/audio` para aliviar o repositório.
- [ ] Instalar como aplicativo no celular (PWA, com manifest) e ouvir áudios offline.
- [ ] Testes de interface no navegador (linha do tempo de MT, lista de áudios por tópico, revisão de erros e botão de IA foram verificados só por código).
- [ ] Publicar esta documentação (por exemplo, no GitHub Pages) e criar um workflow para isso, se desejado.

## Riscos conhecidos

- Gravação por *last write wins*: edição simultânea em dois aparelhos pode perder alterações.
- O compute gratuito do Neon hiberna, e a primeira consulta pode demorar.
- Arquivos em `public/` são públicos, mesmo com login ativo.
