# Pendências

Lista do que ainda falta ou merece atenção.

## Conteúdo

- [ ] **Áudios:** todas as matérias têm faixa. Falta atualizar Atualidades perto da prova, conferir números de leis e prazos dos roteiros de Direito e, se desejado, criar faixas de questões comentadas. Veja [Áudios](../conteudo/audios.md).
- [ ] **Conferir** a Lei 9.612/2011 (águas subterrâneas), o Decreto 1.436/2022, as resoluções CONAMA e os decretos federais citados contra o texto oficial.
- [ ] **Atualizar** as aulas da Lei 7.692/2002 e da LC 04/1990 com o texto consolidado.
- [ ] **Exercícios de leitura:** só parte dos textos de revisão tem exercício.
- [ ] **Banco de respostas** para a prova discursiva.
- [ ] **Ampliar o banco de questões** nas matérias com poucas questões.

## IA

- [ ] Correção da discursiva com IA (as variáveis `AI_ESSAY_*` já estão previstas).
- [ ] Geração de questões novas para os tópicos de maior erro, com revisão antes de entrar no banco.
- [ ] Cadastrar `OPENAI_API_KEY`, `DEEPSEEK_API_KEY` e `AI_*` na Vercel e fazer um Redeploy.

## Plataforma

- [ ] Atualizar o `README.md`: ele ainda diz que não há banco nem sincronização.
- [ ] Remover os WAV antigos de `public/audio` para aliviar o repositório.
- [ ] Publicar na Vercel, com as variáveis de ambiente, e cadastrar a URL pública no Google.
- [ ] Teste de ponta a ponta da sincronização em dois aparelhos.
- [ ] Publicar esta documentação (por exemplo, no GitHub Pages) e criar um workflow para isso, se desejado.

## Riscos conhecidos

- Gravação por *last write wins*: edição simultânea em dois aparelhos pode perder alterações.
- O compute gratuito do Neon hiberna, e a primeira consulta pode demorar.
- Arquivos em `public/` são públicos, mesmo com login ativo.
