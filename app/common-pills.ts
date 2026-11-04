import mato from '../scripts/audio/roteiros.json';
import portugues from '../scripts/audio/roteiros-portugues.json';
import semaComum from '../scripts/audio/roteiros-sema-comum.json';

type Roteiro = { stem: string; title: string; text: string; contest?: 'sema' | 'camara' };

// Pílulas de matérias comuns aos dois perfis (TI e Direito). Sem `contest`, a pílula vale para os dois editais.
// Os textos vêm de scripts/audio/roteiros*.json, as mesmas fontes usadas para gerar os MP3.
export const commonPills = ([...mato, ...portugues, ...semaComum] as Roteiro[]).flatMap(item =>
  (['ti', 'direito'] as const).map(profile => ({
    stem: item.stem, title: item.title, profile: profile as string, text: item.text, contest: item.contest as string | undefined,
  })),
);
