# Áudios

## Situação atual

Há **trinta e cinco faixas MP3** em `public/audio`, todas com a voz neural `pt-BR-FranciscaNeural`:

| Faixa | Perfil | Tema |
|---|---|---|
| `01-poo` | TI (SEMA) | Orientação a objetos |
| `02-algoritmos` | TI (SEMA) | Algoritmos e complexidade |
| `03-banco-de-dados` | TI (SEMA) | Transações em banco de dados |
| `04-devops` | TI (SEMA) | Arquitetura e DevOps |
| `direito-roteiro` | Direito (SEMA) | As cinco frentes de Direito |
| `direito-transversais` | Direito (SEMA) | Conteúdos transversais |
| `cmc-juridico` | Direito (Câmara) | Mapa de Direito para Analista Legislativo |
| `cmc-discursiva` | Direito (Câmara) | Como planejar a discursiva |
| `mt-historia-1` | Todos | História de MT: da mineração à Guerra da Tríplice Aliança |
| `mt-historia-2` | Todos | História de MT: da República à divisão do estado |
| `mt-geografia-1` | Todos | Geografia de MT: território, relevo, clima e águas |
| `mt-geografia-2` | Todos | Geografia de MT: economia, população e gestão ambiental |
| `portugues-1` | Todos | Interpretação, argumentação, coesão e coerência |
| `portugues-2` | Todos | Ortografia, acentuação, Acordo Ortográfico e significação |
| `portugues-3` | Todos | Sintaxe, pontuação e crase |
| `portugues-4` | Todos | Concordância, regência, colocação pronominal e redação oficial |
| `etica-1` | SEMA | Filosofia, conhecimento, pós-verdade e inteligência artificial |
| `etica-2` | SEMA | Ética pública e assédio moral e sexual |
| `leg-etica-lc112` | SEMA | Código de Ética Funcional de MT (LC 112/2002) |
| `leg-estatuto-lc04` | SEMA | Estatuto dos Servidores de MT (LC 04/1990) |
| `leg-ambiental-lc38` | SEMA | Código Estadual do Meio Ambiente (LC 38/1995) |
| `atualidades-1` | SEMA | Atualidades: como estudar e temas de maior incidência |
| `cmc-ti-fundamentos` | Câmara, TI | Arquitetura, algoritmos, POO e engenharia de software |
| `cmc-ti-web-banco` | Câmara, TI | Desenvolvimento web, APIs REST e banco de dados |
| `cmc-ti-redes-so-seguranca` | Câmara, TI | Redes, Windows e Linux e segurança da informação |
| `cmc-ti-governanca-contratacao` | Câmara, TI | Governança, contratação (Lei 14.133), LGPD e LAI |
| `cmc-ti-devops-bi-suporte` | Câmara, TI | Git, CI/CD, contêineres, BI e suporte técnico |
| `cmc-logica-1` | Câmara | Raciocínio lógico: conjuntos, proposições e equivalências |
| `cmc-logica-2` | Câmara | Raciocínio lógico: argumentos, quantificadores, contagem e probabilidade |
| `cmc-informatica` | Câmara | Noções de informática |
| `cmc-etica-filosofia` | Câmara | Noções de ética e filosofia |
| `cmc-relacoes-interpessoais` | Câmara | Relações interpessoais |
| `cmc-administracao-publica` | Câmara | Noções de administração pública |
| `cmc-legislacao-1` | Câmara | Lei Orgânica de Cuiabá e Regimento Interno |
| `cmc-legislacao-2` | Câmara | Estatuto dos Servidores e Plano de Cargos |

As faixas de Mato Grosso e de Português aparecem nos dois perfis (TI e Direito) e nos dois concursos, porque as matérias são comuns. As de Ética, legislação e Atualidades aparecem nos dois perfis, mas só no concurso da SEMA, porque a matéria é só desse edital. Elas duram de 1,5 a 2 minutos cada.

## De onde vêm as pílulas

| Origem | Faixas |
|---|---|
| `app/data.json` (`pills`) | As quatro de TI da SEMA |
| `app/dashboard.tsx` (`lawPills`, `camaraLawPills`) | As de Direito |
| `scripts/audio/roteiros*.json` | Mato Grosso (`roteiros.json`), Português (`roteiros-portugues.json`) e Ética e legislação da SEMA (`roteiros-sema-comum.json`) Atualidades (`roteiros-atualidades.json`) TI da Câmara (`roteiros-camara-ti.json`) e matérias comuns da Câmara (`roteiros-camara-comum.json`). O arquivo `app/common-pills.ts` as coloca nos dois perfis |

Cada pílula tem `stem` (nome do arquivo sem extensão), `profile` (`ti` ou `direito`), título e o texto da transcrição. Nos roteiros, o campo opcional `contest` (`sema` ou `camara`) limita a pílula a um concurso, e o campo opcional `profile` (`ti` ou `direito`) limita a um perfil. Sem eles, a pílula vale para os dois concursos e os dois perfis.

Os quatro arquivos `.wav` em `public/audio` são versões anteriores. O app só toca os `.mp3`.

## Organização por tópicos

A lista da aba Pílulas é agrupada por tópico, com uma busca por título e grupos que abrem e fecham. Cada grupo mostra quantas faixas já foram ouvidas. Os tópicos são:

Língua Portuguesa, História e Geografia de Mato Grosso, Raciocínio lógico, Informática, Ética e filosofia, Relações interpessoais, Administração pública, Legislação, Atualidades, Direito e Tecnologia da Informação.

Cada roteiro tem o campo `category`, e as pílulas de `data.json` e de `dashboard.tsx` também. A ordem dos grupos está em `categoryOrder`, em `app/dashboard.tsx`. O teste falha se um roteiro ficar sem categoria.

## Lacunas

Ainda não há áudio para os transversais ambientais da SEMA (poluição e controle ambiental, economia, estatística, direitos humanos, políticas públicas e processo administrativo).

## Gerar as faixas

O script usa o `edge-tts` e a voz `pt-BR-FranciscaNeural`, a mesma das faixas anteriores:

```sh
pip install edge-tts
python scripts/audio/gerar_audio.py                 # gera as que faltam
python scripts/audio/gerar_audio.py mt-historia-1   # regera uma faixa
```

O formato de saída é MP3 mono de 24 kHz, igual ao das faixas já publicadas.

## Como adicionar uma pílula

1. Escreva o roteiro (de 1 a 3 minutos de fala, em frases curtas e sem siglas soltas).
2. Acrescente `{ "stem", "category", "title", "text" }` em um arquivo `scripts/audio/roteiros*.json` (ou crie um novo e importe-o em `app/common-pills.ts`), para matérias comuns aos dois perfis. Para uma pílula de um perfil só, use `pills` (`data.json`) ou `lawPills`/`camaraLawPills` (`dashboard.tsx`).
3. Rode `python scripts/audio/gerar_audio.py` para gerar o MP3 em `public/audio/<stem>.mp3`.
4. Rode `npm test`: o teste falha se uma pílula não tiver MP3.
5. Teste no app e confira a pronúncia de siglas e números de lei.

!!! note "Voz"
    A voz foi aprovada. O script já usa a mesma voz, para as faixas novas soarem como as antigas.

## Pronúncia

Escreva números e siglas como se fala, no roteiro: "Lei oito mil, quatrocentos e vinte e nove, de noventa e dois" em vez de "Lei 8.429/92". Revise a faixa gerada antes de publicar.
