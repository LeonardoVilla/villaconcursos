import roteiros from '../scripts/audio/roteiros.json';

// Pílulas de História e Geografia de Mato Grosso, comuns aos dois perfis e aos dois editais.
// Os textos vêm de scripts/audio/roteiros.json, a mesma fonte usada para gerar os MP3.
export const mtPills = roteiros.flatMap(item =>
  (['ti', 'direito'] as const).map(profile => ({ stem: item.stem, title: item.title, profile: profile as string, text: item.text })),
);
