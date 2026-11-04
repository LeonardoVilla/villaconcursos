# Áudios

## Situação atual

Há **dezesseis faixas MP3** em `public/audio`, todas com a voz neural `pt-BR-FranciscaNeural`:

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

As oito faixas de Mato Grosso e de Português aparecem nos dois perfis (TI e Direito) e nos dois concursos, porque as matérias são comuns. Elas duram de 1,5 a 2 minutos cada.

## De onde vêm as pílulas

| Origem | Faixas |
|---|---|
| `app/data.json` (`pills`) | As quatro de TI da SEMA |
| `app/dashboard.tsx` (`lawPills`, `camaraLawPills`) | As de Direito |
| `scripts/audio/roteiros*.json` | As de Mato Grosso (`roteiros.json`) e de Português (`roteiros-portugues.json`). O arquivo `app/common-pills.ts` as coloca nos dois perfis |

Cada pílula tem `stem` (nome do arquivo sem extensão), `profile` (`ti` ou `direito`), título e o texto da transcrição.

Os quatro arquivos `.wav` em `public/audio` são versões anteriores. O app só toca os `.mp3`.

## Lacunas

Ainda não há áudio para:

- Ética e legislação específica
- Atualidades
- Matérias comuns e de TI da Câmara (rede, banco, segurança, lógica)
- Transversais ambientais da SEMA

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
2. Acrescente `{ "stem", "title", "text" }` em um arquivo `scripts/audio/roteiros*.json` (ou crie um novo e importe-o em `app/common-pills.ts`), para matérias comuns aos dois perfis. Para uma pílula de um perfil só, use `pills` (`data.json`) ou `lawPills`/`camaraLawPills` (`dashboard.tsx`).
3. Rode `python scripts/audio/gerar_audio.py` para gerar o MP3 em `public/audio/<stem>.mp3`.
4. Rode `npm test`: o teste falha se uma pílula não tiver MP3.
5. Teste no app e confira a pronúncia de siglas e números de lei.

!!! note "Voz"
    A voz foi aprovada. O script já usa a mesma voz, para as faixas novas soarem como as antigas.

## Pronúncia

Escreva números e siglas como se fala, no roteiro: "Lei oito mil, quatrocentos e vinte e nove, de noventa e dois" em vez de "Lei 8.429/92". Revise a faixa gerada antes de publicar.

## Organização futura

Com mais faixas, a lista da aba Pílulas deve ser agrupada por tópico (por exemplo, Português, Mato Grosso, Direito, TI) para facilitar a busca. A ideia é acrescentar um campo `category` a cada roteiro e agrupar a lista por esse campo no player. Ainda não foi implementado.
