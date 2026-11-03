import { L, type LessonMap } from './lesson-type';

const P = 'https://www.planalto.gov.br/ccivil_03';
const CF = ['Constituição Federal', P + '/constituicao/constituicao.htm'] as [string, string];
const L14133 = ['Lei 14.133/2021', P + '/_ato2019-2022/2021/lei/L14133.htm'] as [string, string];
const CAMARA = ['Câmara Municipal de Cuiabá', 'https://www.camaracuiaba.mt.gov.br'] as [string, string];
const ENAP = ['ENAP', 'https://www.enap.gov.br'] as [string, string];

export const lessonsCmcAdm: LessonMap = {
  /* ---------- Noções de Administração Pública ---------- */
  'cmc-adm-1': L([
    ['Estado, governo e administração', "Estado é a pessoa jurídica soberana formada por povo, território e governo. Governo é a condução política dos negócios públicos; administração pública é o aparelho que executa as decisões (sentido subjetivo: órgãos e agentes; objetivo: atividade administrativa). Poderes do Estado: Legislativo, Executivo e Judiciário, independentes e harmônicos (art. 2º, CF)."],
    ['Princípios', "O art. 37 da CF lista legalidade, impessoalidade, moralidade, publicidade e eficiência (LIMPE). Também valem razoabilidade, proporcionalidade, motivação, supremacia e indisponibilidade do interesse público, segurança jurídica, finalidade, continuidade e autotutela. Natureza e fins: atender ao interesse coletivo, de forma contínua e eficiente."],
  ], 'Qual princípio foi incluído no art. 37 pela EC 19/1998?', 'O princípio da eficiência.', [CF]),

  'cmc-adm-2': L([
    ['Organização administrativa', "Centralização: o Estado exerce a atividade por si, pela administração direta. Descentralização: transfere a atividade a outra pessoa jurídica (por outorga, a entes criados por lei; por delegação, a particulares por contrato ou ato). Desconcentração: distribuição interna de competências entre órgãos da mesma pessoa jurídica. Hierarquia, coordenação e controle estruturam a relação entre órgãos."],
    ['Órgãos públicos', "Órgão é centro de competência sem personalidade jurídica, integrante de uma pessoa jurídica. Classificam-se em independentes, autônomos, superiores e subalternos. A Lei 9.784/1999 e o Decreto-Lei 200/1967 organizam a administração federal, servindo de modelo para os demais entes."],
  ], 'Qual a diferença entre descentralização e desconcentração?', 'Descentralização transfere atividade a outra pessoa jurídica; desconcentração distribui competências entre órgãos da mesma pessoa.', [CF]),

  'cmc-adm-3': L([
    ['Administração direta', "Compõe-se dos entes federativos (União, estados, DF e municípios) e seus órgãos (ministérios, secretarias). Não tem personalidade jurídica própria dos órgãos; quem a tem é o ente."],
    ['Administração indireta', "Pessoas jurídicas criadas ou autorizadas por lei: autarquias (direito público, criadas por lei, executam atividade típica de Estado), fundações públicas, empresas públicas (capital 100% público, qualquer forma societária) e sociedades de economia mista (SA, maioria do capital votante público). Empresas estatais que exploram atividade econômica seguem regime de direito privado (art. 173, CF). Criação: lei específica para autarquia; autorização por lei para as demais, com registro em cartório/junta. Submetem-se à supervisão (controle finalístico) do ente."],
  ], 'Qual a forma societária obrigatória da sociedade de economia mista?', 'Sociedade anônima.', [CF]),

  'cmc-adm-4': L([
    ['Espécies de agentes', "Agentes políticos (chefes do Executivo, parlamentares, magistrados e membros do MP em sentido amplo), servidores estatutários (cargo público, regime jurídico próprio), empregados públicos (emprego, CLT), servidores temporários (art. 37, IX) e particulares em colaboração. Cargo é o lugar na organização com atribuições, criado por lei; função é atribuição; emprego é vínculo celetista."],
    ['Regras constitucionais', "Acesso por concurso (art. 37, II), com cargos em comissão de livre nomeação e exoneração. Acumulação de cargos é vedada, salvo exceções (dois cargos de professor; um de professor e um técnico ou científico; dois de profissionais de saúde com profissões regulamentadas), desde que haja compatibilidade de horários. Estabilidade após três anos de efetivo exercício, com avaliação especial (art. 41). Direito de greve nos termos da lei; teto remuneratório."],
  ], 'Após quanto tempo o servidor nomeado por concurso adquire estabilidade?', 'Três anos de efetivo exercício, com avaliação especial de desempenho (art. 41 da CF).', [CF]),

  'cmc-adm-5': L([
    ['Poderes administrativos', "Hierárquico (ordenar, delegar, avocar, rever), disciplinar (punir infrações internas e de particulares ligados à administração por vínculo especial), regulamentar (editar normas para execução da lei, por decreto), de polícia (limitar direitos individuais em prol do interesse público; atributos: discricionariedade, autoexecutoriedade, coercibilidade). Poder normativo é gênero em debate."],
    ['Abuso de poder', "Gênero de excesso de poder (agir além da competência) e desvio de finalidade (agir com finalidade diversa da legal). Ambos geram nulidade. O uso do poder deve respeitar legalidade, proporcionalidade e razoabilidade."],
  ], 'Qual a diferença entre excesso de poder e desvio de poder?', 'Excesso: o agente age fora dos limites de sua competência. Desvio: age dentro da competência, mas com finalidade diversa da lei.', [CF]),

  'cmc-adm-6': L([
    ['Atos administrativos', "Declaração do Estado, com efeitos jurídicos imediatos, sob regime de direito público e sujeita a controle judicial. Requisitos (elementos): competência, finalidade, forma, motivo e objeto. Atributos: presunção de legitimidade e veracidade, imperatividade, autoexecutoriedade e tipicidade. Classificação: vinculado ou discricionário; simples, composto ou complexo; geral ou individual; ampliativo ou restritivo. Espécies: decreto, portaria, resolução, alvará, licença, autorização, permissão, parecer, certidão, atestado."],
    ['Invalidação', "Anulação: por ilegalidade, pela administração ou pelo Judiciário, com efeitos retroativos (ex tunc). Revogação: por conveniência e oportunidade, só pela administração, com efeitos prospectivos (ex nunc). Convalidação sana vícios sanáveis de competência (não exclusiva) e forma. Súmulas 346 e 473 do STF. Prazo decadencial de cinco anos para anular atos favoráveis (Lei 9.784/1999, art. 54)."],
    ['Controle e responsabilidade', "Controle interno, externo (Legislativo com Tribunal de Contas), judicial (legalidade, não mérito) e social. Responsabilidade civil do Estado: objetiva, na modalidade risco administrativo, para atos de agentes que causem danos a terceiros, com direito de regresso contra o agente em caso de dolo ou culpa (art. 37, § 6º). Para omissões, aplica-se, em regra, a responsabilidade subjetiva (culpa do serviço)."],
  ], 'Qual a diferença entre anulação e revogação?', 'Anulação trata de ilegalidade e tem efeitos retroativos; revogação decorre de conveniência e oportunidade e tem efeitos para o futuro.', [CF]),

  /* ---------- Legislação (Câmara de Cuiabá) ---------- */
  'cmc-leg-1': L([
    ['Lei Orgânica e organização do Município', "A Lei Orgânica é a “Constituição” do Município, aprovada em dois turnos, com interstício mínimo de dez dias, e quórum de dois terços dos membros da Câmara (art. 29, CF), e deve respeitar as Constituições Federal e Estadual. Os pontos usuais: autonomia do Município, competências privativas e suplementares, organização dos Poderes Executivo (prefeito) e Legislativo (vereadores), bens, serviços públicos, orçamento e controle."],
    ['Competências constitucionais', "Pelo art. 30 da CF, o Município legisla sobre assuntos de interesse local, suplementa a legislação federal e estadual, institui e arrecada tributos, organiza serviços públicos de interesse local (como transporte coletivo) e promove ordenamento territorial. O art. 31 trata da fiscalização do Município pelo Legislativo, com auxílio do Tribunal de Contas. O art. 29, VIII, garante a inviolabilidade dos vereadores por opiniões, palavras e votos no exercício do mandato e na circunscrição do Município."],
    ['Como estudar o texto local', "Leia o texto atualizado no site da Câmara. Marque: número e requisitos de vereadores, duração do mandato, vedações e perda do mandato, processo legislativo, iniciativa privativa do prefeito, orçamento, participação popular e prazos."],
  ], 'Qual o quórum para aprovar a Lei Orgânica municipal?', 'Dois terços dos membros da Câmara, em dois turnos, com interstício mínimo de dez dias (art. 29, CF).', [CF, CAMARA]),

  'cmc-leg-2': L([
    ['Regimento Interno (Resolução 08/2016)', "Disciplina o funcionamento da Câmara: Mesa Diretora, Presidência, comissões permanentes e temporárias, sessões (ordinárias, extraordinárias, solenes, secretas), ordem do dia, uso da palavra, votações e tramitação das proposições. Regimento é norma interna, sem força de lei; é fonte do processo legislativo da casa."],
    ['Processo legislativo típico', "Espécies: emenda à Lei Orgânica, lei complementar, lei ordinária, decreto legislativo e resolução, conforme a Lei Orgânica. Etapas: iniciativa, discussão em comissões (constituição e justiça, orçamento, etc.), votação em plenário, sanção ou veto do prefeito, promulgação e publicação. O veto pode ser derrubado por maioria absoluta (padrão da CF, confira o regimento local). Decreto legislativo e resolução tratam de matéria de competência exclusiva da Câmara e não vão à sanção."],
    ['Estudo orientado', "Leia as seções sobre Mesa, comissões, quórum, prazos e proposições. Monte um quadro: proposição → quem propõe → quem aprova → quórum → quem sanciona. Cada banca costuma cobrar literalidade."],
  ], 'Decreto legislativo e resolução dependem de sanção do prefeito?', 'Não. Tratam de matérias de competência exclusiva da Câmara e são promulgados pelo Legislativo.', [CAMARA]),

  'cmc-leg-3': L([
    ['Estatuto dos Servidores (LC 93/2003)', "Regime jurídico dos servidores do Município de Cuiabá. Estruture o estudo em: provimento (nomeação, promoção, readaptação, reversão, aproveitamento, reintegração, recondução), posse e exercício, estágio probatório e estabilidade, vacância, remuneração e vantagens, férias e licenças, direitos e deveres, proibições, responsabilidades, regime disciplinar e processo administrativo disciplinar."],
    ['Conceitos que se repetem nos estatutos', "Posse é a assunção formal do cargo com compromisso, e exercício é o início das atribuições. Demissão é pena; exoneração não é pena. Reintegração é o retorno com ressarcimento após anulação da demissão; recondução é o retorno ao cargo anterior por inabilitação em estágio probatório ou reintegração do ocupante anterior. Confirme os prazos no texto da lei."],
  ], 'Qual a diferença entre reintegração e recondução?', 'Reintegração é o retorno do demitido ilegalmente ao cargo, com ressarcimento; recondução é o retorno ao cargo anteriormente ocupado.', [CAMARA]),

  'cmc-leg-4': L([
    ['Plano de Cargos da Câmara (LC 235/2011 e LC 609/2026)', "Organiza o quadro, as carreiras, os cargos, a estrutura de vencimentos, a progressão, a evolução funcional e as gratificações da Câmara de Cuiabá. A LC 609/2026 traz alterações recentes, e o edital as cita expressamente. Organize o estudo por: estrutura da carreira (cargos de nível superior, médio), requisitos de ingresso, atribuições, tabelas, progressão e promoção, jornada, gratificações e vedações."],
    ['Técnica de estudo', "Como os valores e as tabelas mudam com cada alteração, confira sempre a versão consolidada e as datas de vigência. Leia a descrição do cargo de Analista Legislativo na própria lei."],
  ], 'Por que se deve consultar a versão consolidada do plano de cargos?', 'Porque as alterações posteriores (como a LC 609/2026) modificam estrutura, tabelas e regras, e a prova cobra o texto vigente.', [CAMARA]),

  /* ---------- Direito e Administração Pública ---------- */
  'cmc-jur-0': L([
    ['Princípios expressos', "Art. 37, caput, da CF: legalidade (a administração só faz o que a lei autoriza), impessoalidade (finalidade pública, sem favoritismo), moralidade (probidade e boa-fé), publicidade (transparência) e eficiência (resultados com economia)."],
    ['Princípios implícitos', "Supremacia do interesse público (prevalece sobre o particular), indisponibilidade, razoabilidade e proporcionalidade (adequação, necessidade, proporcionalidade em sentido estrito), motivação, segurança jurídica, autotutela (Súmulas 346 e 473 STF), continuidade do serviço público, contraditório e ampla defesa, isonomia, finalidade, especialidade e presunção de legitimidade."],
  ], 'O que significa o princípio da legalidade para o agente público?', 'Que só pode fazer o que a lei autoriza ou determina, diferentemente do particular, a quem é permitido tudo que a lei não proíbe.', [CF]),

  'cmc-jur-1': L([
    ['Administração direta e indireta', "Direta: entes federados e seus órgãos. Indireta: autarquias, fundações públicas, empresas públicas e sociedades de economia mista, com personalidade própria, criadas ou autorizadas por lei (art. 37, XIX), vinculadas a um ente, com controle finalístico. Autarquia: direito público, bens públicos, imunidade tributária recíproca e regime de precatórios. Empresa pública e SEM: direito privado, com regras públicas (licitar, concurso, teto)."],
  ], 'Qual instrumento autoriza a criação de empresa pública?', 'Lei específica que autoriza a criação (art. 37, XIX), seguida do registro na forma privada.', [CF]),

  'cmc-jur-2': L([
    ['Atos administrativos', "Requisitos: competência, finalidade, forma, motivo e objeto (vícios nos dois primeiros e na forma são mais facilmente convalidados; vício de finalidade e de objeto não). Atributos: presunção de legitimidade, imperatividade, autoexecutoriedade (nem todo ato), tipicidade. Extinção: cumprimento, desfazimento (anulação e revogação), cassação, caducidade, contraposição, renúncia. Teoria dos motivos determinantes: o motivo declarado vincula o ato."],
  ], 'O que afirma a teoria dos motivos determinantes?', 'Que o motivo indicado pela administração vincula o ato: se for falso ou inexistente, o ato é nulo.', [CF]),

  'cmc-jur-3': L([
    ['Poderes administrativos', "Hierárquico (organiza, ordena, fiscaliza), disciplinar (aplica sanções a servidores e a pessoas com vínculo específico), regulamentar (decretos para fiel execução da lei, art. 84, IV), de polícia (limita direitos individuais; ciclo: ordem, consentimento, fiscalização e sanção). O exercício exige motivação e proporcionalidade."],
  ], 'Qual poder possibilita ao prefeito editar decreto para fiel execução da lei?', 'O poder regulamentar.', [CF]),

  'cmc-jur-4': L([
    ['Contratos administrativos', "Ajuste entre a administração e o particular, sob regime de direito público. Cláusulas exorbitantes (art. 104 da Lei 14.133): alteração e rescisão unilaterais, fiscalização, aplicação de sanções, ocupação provisória. Duração: em regra, a vigência vai até o crédito orçamentário, com serviços contínuos de até cinco anos prorrogáveis até dez. Alteração: acréscimos ou supressões até 25% do valor inicial (50% para reforma de edifício ou equipamento). Garantia: até 5% (10% em obras de grande vulto)."],
    ['Inexecução e sanções', "Sanções: advertência, multa, impedimento de licitar e contratar, declaração de inidoneidade. Equilíbrio econômico-financeiro: reajuste, repactuação e reequilíbrio (fato do príncipe, caso fortuito, teoria da imprevisão). O contratado responde pelos encargos trabalhistas, e a administração só responde subsidiariamente em hipóteses de falha de fiscalização."],
  ], 'Qual o limite ordinário de acréscimo unilateral de objeto no contrato administrativo?', '25% do valor inicial atualizado (50% para reforma de edifício ou equipamento).', [L14133]),

  'cmc-jur-5': L([
    ['Princípios, modalidades e critérios', "A Lei 14.133/2021 substituiu a 8.666/1993, a 10.520/2002 e o RDC. Modalidades: pregão (bens e serviços comuns, menor preço ou maior desconto), concorrência, concurso, leilão e diálogo competitivo. Critérios de julgamento: menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço, maior lance (leilão) e maior retorno econômico. Os princípios incluem planejamento, transparência, eficiência, interesse público, probidade, segregação de funções e desenvolvimento sustentável."],
    ['Fases e contratação direta', "Fases (art. 17): preparatória (planejamento, ETP, termo de referência, pesquisa de preços), divulgação do edital no PNCP, apresentação de propostas e lances, julgamento, habilitação, recursal e homologação. Inversão de fases é a regra: julgamento antes da habilitação. Contratação direta: dispensa (art. 75; valores atualizados anualmente) e inexigibilidade (art. 74: inviabilidade de competição, como fornecedor exclusivo e serviços técnicos especializados de natureza predominantemente intelectual). Agente de contratação e comissão conduzem a licitação."],
  ], 'Qual a regra da ordem das fases na licitação segundo a Lei 14.133?', 'Em regra, julgamento das propostas antes da habilitação (inversão de fases).', [L14133]),

  'cmc-jur-6': L([
    ['Processo administrativo', "A Lei 9.784/1999 regula o processo na União e, na ausência de lei local, aplica-se subsidiariamente a estados e municípios (Súmula 633 do STJ). Princípios: legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público, eficiência. Prazos: decisão em até 30 dias após a instrução, prorrogável por igual período (art. 49); recurso em 10 dias (art. 59); decadência de 5 anos para anular atos favoráveis (art. 54)."],
    ['Fluxo', "Início (de ofício ou a pedido), instrução (provas, pareceres, consultas e audiências públicas), decisão motivada, recursos (hierárquico, reconsideração), revisão (a qualquer tempo, fatos novos, sem agravar a sanção). Impedimento e suspeição afastam o servidor."],
  ], 'Qual o prazo geral para o recurso administrativo na Lei 9.784/1999?', 'Dez dias, contados da ciência ou divulgação oficial da decisão (art. 59).', [['Lei 9.784/1999', P + '/leis/l9784.htm']]),

  'cmc-jur-7': L([
    ['Agentes públicos', "Agentes políticos, servidores públicos (estatutários, empregados públicos e temporários) e particulares em colaboração (mesários, jurados). Cargos acessíveis a brasileiros e, na forma da lei, estrangeiros (art. 37, I). Concurso público (II), com prazo de validade até 2 anos, prorrogável uma vez; cargo em comissão para direção, chefia e assessoramento (V); acumulação restrita (XVI); vedação do nepotismo (Súmula Vinculante 13)."],
    ['Responsabilização', "O agente responde por infrações nas esferas civil, penal e administrativa, que em regra são independentes; a absolvição penal por negativa de autoria ou inexistência do fato repercute nas demais. Improbidade, crimes funcionais e infrações disciplinares seguem ritos próprios. Para servidores municipais, o regime é o do estatuto local (LC 93/2003, no caso de Cuiabá)."],
  ], 'O que veda a Súmula Vinculante 13?', 'O nepotismo: nomear parentes até o 3º grau para cargos em comissão ou função de confiança na administração direta e indireta.', [CF]),

  'cmc-jur-8': L([
    ['Serviços públicos', "Atividades materiais de interesse coletivo prestadas pelo Estado ou por delegatários sob regime de direito público. Princípios: continuidade, generalidade, modicidade das tarifas, atualidade, segurança, cortesia e mutabilidade. Execução direta ou indireta. A Lei 8.987/1995 regula concessão (concorrência, prazo determinado, risco do concessionário) e permissão (precária, contrato de adesão). Corte por inadimplemento é possível, mediante aviso prévio, com restrições a serviços essenciais e situações de saúde."],
  ], 'Qual a diferença básica entre concessão e permissão de serviço público?', 'Concessão: contrato com prazo e licitação por concorrência; permissão: contrato de adesão, a título precário, revogável unilateralmente (nos termos da lei).', [['Lei 8.987/1995', P + '/leis/l8987cons.htm']]),

  'cmc-jur-9': L([
    ['Controle da administração', "Interno: exercido por sistema dentro de cada Poder (art. 74). Externo: Legislativo com auxílio do Tribunal de Contas (arts. 70 e 71). No Município, a Câmara exerce o controle externo com auxílio do Tribunal de Contas do Estado (art. 31); o parecer prévio só deixa de prevalecer por decisão de dois terços dos vereadores. Judicial: controla a legalidade (mérito só quando houver violação de razoabilidade ou proporcionalidade). Social: transparência, ouvidoria, conselhos."],
    ['Instrumentos', "Mandado de segurança, habeas data, ação popular, ação civil pública, ação de improbidade, representação ao TC, auditorias. Prestação de contas: obrigação de quem gere recursos públicos (art. 70, parágrafo único). O STF fixou (Tema 835) que as Câmaras julgam as contas anuais dos prefeitos, com parecer prévio do Tribunal de Contas."],
  ], 'Quem julga as contas anuais do prefeito?', 'A Câmara Municipal, com parecer prévio do Tribunal de Contas, que só deixa de prevalecer por decisão de dois terços dos vereadores.', [CF]),

  'cmc-jur-10': L([
    ['Improbidade — Lei 8.429/1992', "Reformada pela Lei 14.230/2021: exige dolo (não admite mais a modalidade culposa). Atos: enriquecimento ilícito (art. 9º), prejuízo ao erário (art. 10) e violação de princípios (art. 11, com rol taxativo). Sanções (art. 12): ressarcimento, perda de bens, perda da função, suspensão de direitos políticos (até 14 anos no art. 9º e até 12 no art. 10), multa civil, proibição de contratar com o poder público (até 14, 12 e 4 anos, respectivamente)."],
    ['Procedimento', "Legitimidade ativa do Ministério Público (a lei reforçou); prescrição de oito anos contados do fato (art. 23) e prescrição intercorrente de quatro anos; acordo de não persecução civil. A ação segue o rito comum do CPC."],
  ], 'A Lei 14.230/2021 admite improbidade por conduta culposa?', 'Não. Exige-se dolo para todos os tipos de improbidade.', [['Lei 8.429/1992', P + '/leis/l8429.htm']]),

  'cmc-jur-11': L([
    ['Bens públicos', "Classificação do Código Civil (arts. 98 a 103): de uso comum do povo (ruas, praças), de uso especial (sede de repartição) e dominicais (sem destinação específica). Características: inalienabilidade condicionada (afetados só são alienáveis após desafetação), impenhorabilidade (execução por precatório), imprescritibilidade (não se usucapem) e não onerabilidade (não podem ser dados em garantia real)."],
    ['Alienação e uso privativo', "Alienação exige interesse público justificado, avaliação prévia, licitação e, para imóveis da administração direta, autarquias e fundações, autorização legislativa (Lei 14.133, arts. 76 e 77). Uso privativo por particular: autorização (ato precário), permissão (ato precário), concessão de uso (contrato) e concessão de direito real de uso."],
  ], 'Um bem dominical pode ser usucapido?', 'Não. Os bens públicos, inclusive os dominicais, não se sujeitam a usucapião (CF, arts. 183, § 3º, e 191, parágrafo único).', [CF]),

  'cmc-jur-12': L([
    ['Direitos e garantias fundamentais', "Título II da CF (arts. 5º a 17): direitos individuais e coletivos (vida, liberdade, igualdade, segurança, propriedade), sociais (art. 6º: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência, proteção à maternidade e infância, assistência), nacionalidade, direitos políticos e partidos. Aplicabilidade imediata (art. 5º, § 1º). Características: universalidade, historicidade, inalienabilidade, imprescritibilidade, relatividade."],
    ['Remédios constitucionais', "Habeas corpus (liberdade de locomoção), habeas data (informações pessoais), mandado de segurança (direito líquido e certo, individual ou coletivo), mandado de injunção (falta de norma regulamentadora), ação popular (ato lesivo ao patrimônio público, moralidade administrativa, ambiente e patrimônio cultural). Direito de petição, certidão e acesso à informação."],
  ], 'Qual remédio protege direito líquido e certo não amparado por habeas corpus ou habeas data?', 'O mandado de segurança.', [CF]),

  'cmc-jur-13': L([
    ['Município na Constituição', "O Município é ente federativo autônomo (arts. 1º e 18): autoadministração, autolegislação e autogoverno. Lei Orgânica própria (art. 29). Competências do art. 30: legislar sobre assuntos de interesse local, suplementar a legislação, instituir e arrecadar tributos (IPTU, ISS, ITBI), organizar serviços de interesse local e promover o ordenamento territorial. Vereadores têm inviolabilidade por opiniões, palavras e votos (art. 29, VIII). O limite de despesas do Legislativo e do subsídio dos vereadores é fixado na CF (arts. 29, VI e 29-A)."],
    ['Orçamento do Legislativo municipal', "O total da despesa do Poder Legislativo (inclusive subsídios, sem inativos) tem limites percentuais da receita tributária e transferências do ano anterior: por exemplo, 4,5% nos municípios com população entre 500 mil e 3 milhões, e a folha de pagamento não pode ultrapassar 70% do orçamento da Câmara (art. 29-A, § 1º). Confira a faixa de população aplicável ao município."],
  ], 'O Município é ente federativo?', 'Sim. A Constituição de 1988 o reconhece como ente federativo autônomo (arts. 1º e 18).', [CF]),

  'cmc-jur-14': L([
    ['Evolução dos modelos', "Administração patrimonialista (confusão entre patrimônio público e privado), burocrática (Weber: impessoalidade, hierarquia, formalismo, profissionalização), e gerencial/Nova Gestão Pública (foco em resultados, eficiência, controle por desempenho, descentralização e orientação ao cidadão). A reforma de 1995 (Plano Diretor de Reforma do Estado, Bresser-Pereira) e a EC 19/1998 incluíram a eficiência na Constituição. Estado do bem-estar social: provisão pública de direitos sociais."],
    ['Governança pública', "Conjunto de mecanismos de liderança, estratégia e controle para avaliar, direcionar e monitorar a gestão. O Decreto 9.203/2017 lista princípios: capacidade de resposta, integridade, confiabilidade, melhoria regulatória, prestação de contas e responsabilidade, transparência."],
  ], 'Qual é o foco da administração gerencial?', 'Resultados, eficiência e controle por desempenho, em contraste com o controle de procedimentos da burocrática.', [ENAP]),

  'cmc-jur-15': L([
    ['Políticas públicas', "São decisões e ações do Estado para enfrentar problemas coletivos. Ciclo: agenda, formulação, decisão, implementação, monitoramento e avaliação. Arranjos institucionais envolvem atores públicos, privados e sociais (conselhos, consórcios, redes). A avaliação mede eficácia, eficiência e efetividade; pode ser ex ante, intermediária ou ex post."],
  ], 'O que é avaliação ex post de uma política pública?', 'A avaliação feita depois da implementação, para medir resultados e impactos.', [ENAP]),

  'cmc-jur-16': L([
    ['PPA, LDO e LOA', "Art. 165 da CF. PPA: plano plurianual, estabelece diretrizes, objetivos e metas para despesas de capital e programas de duração continuada; vigência de quatro anos, do segundo ano de mandato ao primeiro do mandato seguinte. LDO: metas e prioridades, orienta a elaboração da LOA, dispõe sobre alterações na legislação tributária e política de agências de fomento. LOA: orçamento fiscal, de investimento das estatais e da seguridade social. Princípios orçamentários: anualidade, unidade, universalidade, exclusividade, legalidade, equilíbrio e publicidade."],
    ['Lei de Responsabilidade Fiscal', "LC 101/2000: planejamento, transparência, controle e responsabilização. Limites de despesa com pessoal no Legislativo municipal (6% da receita corrente líquida), metas fiscais, restos a pagar e vedações no último ano de mandato. Processo orçamentário: o Executivo elabora e envia o projeto; o Legislativo aprecia e emenda; sanção; execução e controle."],
  ], 'Qual instrumento orienta a elaboração da LOA?', 'A Lei de Diretrizes Orçamentárias (LDO).', [CF, ['LRF', P + '/leis/lcp/lcp101.htm']]),

  'cmc-jur-17': L([
    ['Flexibilização da ação estatal', "Parcerias público-privadas (Lei 11.079/2004): concessão patrocinada (tarifa dos usuários + contraprestação do poder público) e administrativa (a administração é usuária direta ou indireta); valor mínimo de R$ 10 milhões, prazo de 5 a 35 anos. Consórcios públicos (Lei 11.107/2005): união de entes para gestão associada. Terceirização: delegação de atividades-meio ou, nos limites do STF, de qualquer atividade. Parcerias com organizações da sociedade civil (Lei 13.019/2014, MROSC): termo de colaboração, termo de fomento e acordo de cooperação."],
  ], 'Qual a diferença entre termo de colaboração e termo de fomento?', 'O termo de colaboração é proposto pela administração, em política pública de sua iniciativa; o termo de fomento é proposto pela organização da sociedade civil, em ações de iniciativa dela.', [['Lei 13.019/2014', P + '/_ato2011-2014/2014/lei/l13019.htm']]),

  'cmc-jur-18': L([
    ['Mudanças institucionais', "Organizações sociais (OS, Lei 9.637/1998): entidades privadas sem fins lucrativos qualificadas, que firmam contrato de gestão com o poder público. OSCIP (Lei 9.790/1999): termo de parceria. Agências reguladoras (Lei 13.848/2019): autarquias em regime especial, com autonomia, mandato fixo de dirigentes, poder normativo técnico. Agência executiva: autarquia ou fundação qualificada por contrato de gestão para maior autonomia. Conselhos de políticas públicas: espaços de participação e controle."],
    ['Centralização e descentralização', "Centralizar reforça a coordenação e a uniformidade; descentralizar aproxima o serviço do cidadão e permite adaptação local, com risco de desigualdade e falta de capacidade. O federalismo brasileiro combina ambos."],
  ], 'Qual instrumento rege a relação entre o Poder Público e uma OS?', 'O contrato de gestão.', [['Lei 9.637/1998', P + '/leis/l9637.htm']]),

  'cmc-jur-19': L([
    ['Governança e accountability', "Governança pública: estrutura e processos para a tomada de decisão, controle de riscos e prestação de contas. Governabilidade é a capacidade política de governar (apoios, coalizões); governança é a capacidade técnica e institucional. Accountability: responsabilização e prestação de contas, vertical (eleitores) e horizontal (controles institucionais)."],
  ], 'Qual a diferença entre governabilidade e governança?', 'Governabilidade é a capacidade política de sustentar e aprovar decisões; governança é a capacidade administrativa e institucional de implementá-las com eficiência.', [ENAP]),

  'cmc-jur-20': L([
    ['Estratégia', "Planejamento estratégico define missão, visão, valores, análise do ambiente (SWOT: forças, fraquezas, oportunidades, ameaças), objetivos, metas e iniciativas. Os cinco Ps de Mintzberg: plano, pretexto, padrão, posição e perspectiva. Estratégia deliberada é planejada; emergente surge dos acontecimentos. Mudança estratégica exige liderança, comunicação e gestão de resistência."],
  ], 'O que é a análise SWOT?', 'Matriz que cruza forças e fraquezas (ambiente interno) com oportunidades e ameaças (ambiente externo).', [ENAP]),

  'cmc-jur-21': L([
    ['Gestão por resultados', "Orienta o gasto e a gestão por metas e entregas. Ferramentas: PDCA, Balanced Scorecard (perspectivas financeira, clientes, processos internos e aprendizado), indicadores de desempenho, contratos de gestão e avaliação de programas. Os indicadores medem economicidade, eficiência, eficácia e efetividade, além de equidade e excelência."],
  ], 'Quais são as quatro perspectivas do Balanced Scorecard?', 'Financeira, clientes (ou cidadãos), processos internos e aprendizado e crescimento.', [ENAP]),
};
