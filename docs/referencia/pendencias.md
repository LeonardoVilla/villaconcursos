# Pendências

Lista do que ainda falta ou merece atenção.

## Conteúdo

- [ ] **Áudios:** todas as matérias têm faixa. Falta atualizar Atualidades perto da prova, conferir números de leis e prazos dos roteiros de Direito e, se desejado, criar faixas de questões comentadas. Veja [Áudios](../conteudo/audios.md).
- [ ] **Conferir** a Lei 9.612/2011 (águas subterrâneas), o Decreto 1.436/2022, o Decreto 1.436/2022 e outros decretos ambientais citados contra o texto oficial.
- [ ] **Atualizar** as aulas da Lei 7.692/2002 e da LC 04/1990 com o texto consolidado.
- [ ] **Exercícios de leitura:** só parte dos textos de revisão tem exercício.
- [ ] **Banco de respostas** para a prova discursiva.
- [ ] **Ampliar o banco de questões.** O banco tem cerca de 700 questões. Português tem 93 e os transversais da SEMA de administração, economia, direitos humanos e políticas públicas têm 30 cada. Faltam mais questões em matérias com menos de 20 (por exemplo, Ética, Atualidades e Informática da Câmara). Ampliar com questões geradas por IA e revisadas.

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
