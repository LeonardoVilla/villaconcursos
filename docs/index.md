# Trilha SEMA

Aplicativo de estudos para dois concursos de 2026, com prova prevista para **13/12/2026**:

- **SEMA-MT**, cargo de Analista de Desenvolvimento Econômico e Social.
- **Câmara Municipal de Cuiabá**, cargos de Analista Legislativo (TI e Direito).

Cada concurso tem edital, plano de estudos, pílulas de áudio, aulas e progresso próprios. Há dois perfis de estudo: **TI** e **Direito**.

## O que o app oferece

| Recurso | Descrição |
|---|---|
| Checklist do edital | Todos os tópicos, por perfil, com marcação de concluído e notas |
| Aulas por tópico | 100% dos tópicos dos dois editais têm aula, questão de revisão e fontes |
| Textos de revisão | Leitura geral por matéria, com referências de estudo |
| Banco de questões | Mais de 600 questões, quiz com correção, simulado por tópicos e simulado completo |
| Plano diário | Quatro blocos de 30 minutos, cronômetro e contagem regressiva para a prova |
| Pílulas de áudio | Sessenta e três faixas MP3 com narração neural em português do Brasil |
| Progresso na nuvem | Sincronização entre aparelhos com login Google e banco Neon Postgres |

## Stack

- **Next.js 16** (App Router) e **React 19**, em TypeScript.
- **next-auth 4** com provedor Google (sessão JWT).
- **Neon Postgres** com o driver serverless `@neondatabase/serverless`.
- Conteúdo estático em TypeScript e JSON, sem CMS.
- Publicação prevista na **Vercel**; CI no **GitHub Actions**.

## Por onde começar

1. [Instalação e execução](guia/instalacao.md) para rodar localmente.
2. [Arquitetura](visao-geral/arquitetura.md) para entender como as peças se encaixam.
3. [Como adicionar conteúdo](conteudo/como-adicionar-conteudo.md) para estender aulas, questões e links.
4. [Verificação de fontes](conteudo/verificacao-de-fontes.md) para saber o que já foi conferido contra o texto oficial.

!!! warning "Conteúdo jurídico"
    O app é material de apoio. Antes da prova, confira a versão vigente das normas. A página [Verificação de fontes](conteudo/verificacao-de-fontes.md) lista o que foi lido no texto oficial e o que ainda é roteiro de estudo.
