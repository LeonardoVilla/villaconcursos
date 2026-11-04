import mato from '../scripts/audio/roteiros.json';
import portugues from '../scripts/audio/roteiros-portugues.json';

// Pílulas de matérias comuns aos dois perfis e aos dois editais (Mato Grosso e Português).
// Os textos vêm de scripts/audio/roteiros*.json, as mesmas fontes usadas para gerar os MP3.
export const commonPills = [...mato, ...portugues].flatMap(item =>
  (['ti', 'direito'] as const).map(profile => ({ stem: item.stem, title: item.title, profile: profile as string, text: item.text })),
);
