# Áudios

## Situação atual

Há **oito faixas MP3** em `public/audio`, com narração neural em português do Brasil:

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

As pílulas de TI da SEMA ficam em `app/data.json` (`pills`). As de Direito, da SEMA e da Câmara, estão em `app/dashboard.tsx` (`lawPills` e `camaraLawPills`). Cada pílula tem `stem`, que é o nome do arquivo sem extensão, `profile` (`ti` ou `direito`), título e texto da transcrição.

Os quatro arquivos `.wav` em `public/audio` são versões anteriores. O app só toca os `.mp3`; os WAV são usados apenas por um teste que confere se são arquivos de áudio válidos.

## Lacunas

Não há áudio para as matérias comuns nem para boa parte do edital. Faltam, por exemplo:

- História e geografia de Mato Grosso
- Língua Portuguesa
- Ética e legislação específica
- Atualidades
- Matérias comuns e de TI da Câmara (rede, banco, segurança, lógica)
- Transversais ambientais da SEMA

## Como adicionar uma pílula

1. Escreva o roteiro (de 1 a 3 minutos de fala, em frases curtas e sem siglas soltas).
2. Gere o MP3 em português do Brasil com um motor de voz neural e salve em `public/audio/<stem>.mp3`.
3. Acrescente a entrada em `pills` (`data.json`) ou em `lawPills`/`camaraLawPills` (`dashboard.tsx`), com o mesmo `stem`.
4. Teste no app e confira a pronúncia de siglas e números de lei.

!!! note "Voz"
    A voz atual foi aprovada. Para novas faixas, mantenha a mesma voz para o app soar consistente.

## Pronúncia

Escreva números e siglas como se fala, no roteiro: "Lei oito mil, quatrocentos e vinte e nove, de noventa e dois" em vez de "Lei 8.429/92". Revise a faixa gerada antes de publicar.
