// Propostas de discursiva do simulado completo, uma por contexto (banca e perfil).
// O servidor usa as mesmas propostas para corrigir, então o navegador envia só a chave e o texto.
export type EssayKey = 'sema-ti' | 'sema-direito' | 'cmc-ti' | 'cmc-direito';

export const essayTasks: Record<EssayKey, { prompt: string; review: string }> = {
  'cmc-direito': {
    prompt: 'A Câmara precisa contratar um serviço comum. Explique como a fase preparatória, a escolha da modalidade e a definição de critérios objetivos contribuem para uma contratação regular.',
    review: 'Descreva a necessidade e o planejamento, indique o pregão para serviço comum nas condições legais e relacione critérios prévios com julgamento objetivo.',
  },
  'cmc-ti': {
    prompt: 'A Câmara precisa implantar uma aplicação web que trata dados pessoais. Proponha medidas para autenticação, proteção de dados, cópias de segurança e resposta a incidentes.',
    review: 'Explique controle de acesso e privilégio mínimo, medidas de proteção, cópias isoladas com testes de restauração e ações de contenção e recuperação.',
  },
  'sema-direito': {
    prompt: 'Uma atividade potencialmente causadora de significativa degradação ambiental vai ser implantada. Explique a função do estudo prévio de impacto e a relação entre sanções e reparação do dano.',
    review: 'Relacione o estudo prévio e a publicidade ao art. 225, § 1º, IV, da Constituição. Explique a independência entre obrigação de reparar e sanções administrativas e penais.',
  },
  'sema-ti': {
    prompt: 'Uma API de um órgão público é atualizada com frequência. Proponha um fluxo de CI/CD que preserve a segurança e permita recuperar a operação se a nova versão falhar.',
    review: 'Descreva controle de versão, testes e verificações de segurança, gestão de segredos, implantação gradual, observabilidade e recuperação ou reversão.',
  },
};

export const essayKey = (camara: boolean, legal: boolean): EssayKey =>
  `${camara ? 'cmc' : 'sema'}-${legal ? 'direito' : 'ti'}` as EssayKey;
