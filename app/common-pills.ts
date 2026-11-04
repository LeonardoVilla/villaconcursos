import mato from '../scripts/audio/roteiros.json';
import portugues from '../scripts/audio/roteiros-portugues.json';
import semaComum from '../scripts/audio/roteiros-sema-comum.json';
import atualidades from '../scripts/audio/roteiros-atualidades.json';
import camaraTi from '../scripts/audio/roteiros-camara-ti.json';

type Roteiro = {
  stem: string; title: string; text: string;
  contest?: 'sema' | 'camara'; // sem este campo, vale para os dois editais
  profile?: 'ti' | 'direito';  // sem este campo, vale para os dois perfis
};

// Pílulas geradas a partir de scripts/audio/roteiros*.json, as mesmas fontes usadas para criar os MP3.
export const commonPills = ([...mato, ...portugues, ...semaComum, ...atualidades, ...camaraTi] as Roteiro[]).flatMap(item =>
  (item.profile ? [item.profile] : (['ti', 'direito'] as const)).map(profile => ({
    stem: item.stem, title: item.title, profile: profile as string, text: item.text, contest: item.contest as string | undefined,
  })),
);
