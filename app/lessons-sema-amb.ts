import { L, type LessonMap } from './lesson-type';

const P = 'https://www.planalto.gov.br/ccivil_03';
const CONAMA = ['CONAMA — Resoluções', 'https://conama.mma.gov.br'] as [string, string];
const SEMA = ['SEMA-MT', 'https://www.sema.mt.gov.br'] as [string, string];
const CPC = ['Lei 13.105/2015 — Código de Processo Civil', P + '/_ato2015-2018/2015/lei/l13105.htm'] as [string, string];

export const lessonsSemaAmb: LessonMap = {
  /* ---------- Poluição e controle ambiental ---------- */
  'trans1-1': L([
    ['Fontes e poluentes', "Fontes fixas (indústrias, caldeiras, queima de biomassa), móveis (veículos), naturais (poeira, vulcões) e queimadas. Poluentes primários são emitidos diretamente (CO, SO2, NOx, material particulado); secundários se formam na atmosfera (ozônio troposférico, chuva ácida). Os efeitos incluem doenças respiratórias, chuva ácida, ilhas de calor e redução de visibilidade."],
    ['Resolução CONAMA 506/2024', "Estabelece os padrões nacionais de qualidade do ar, com poluentes regulados como MP10, MP2,5, SO2, NO2, O3, CO e outros, e adota padrões intermediários que evoluem até um padrão final alinhado às diretrizes da OMS. Substitui a Resolução CONAMA 491/2018. Os estados monitoram, divulgam índices e podem adotar padrões mais restritivos."],
    ['Controle', "Prevenção na fonte (combustíveis limpos, eficiência), filtros, ciclones, lavadores de gases, precipitadores eletrostáticos, programas de inspeção veicular e controle de queimadas."],
  ], 'O que diferencia poluentes primários de secundários?', 'Primários são emitidos diretamente pela fonte (ex.: CO, material particulado). Secundários se formam por reações na atmosfera (ex.: ozônio troposférico).', [CONAMA]),

  'trans1-2': L([
    ['Parâmetros de qualidade da água', "Físicos: temperatura, turbidez, cor, sólidos. Químicos: pH, oxigênio dissolvido (OD), DBO, DQO, nitrogênio, fósforo, metais. Biológicos: coliformes termotolerantes/E. coli, algas e cianobactérias. OD baixo e DBO alta indicam carga orgânica elevada."],
    ['Monitoramento', "Programas coletam amostras em pontos fixos, comparam com limites da classe do rio (CONAMA 357/2005) e calculam índices como o IQA. O monitoramento biológico usa bioindicadores, como macroinvertebrados bentônicos (por exemplo, grupos sensíveis à poluição), cujas comunidades refletem a saúde do ambiente ao longo do tempo."],
  ], 'O que a DBO mede?', 'A demanda bioquímica de oxigênio: o oxigênio que microrganismos consomem para degradar a matéria orgânica; quanto maior, mais poluição orgânica.', [CONAMA]),

  'trans1-3': L([
    ['Origem e características', "Efluentes domésticos (esgoto) têm carga orgânica, nutrientes e patógenos. Efluentes industriais variam: metais, óleos, solventes, ácidos, altas temperaturas e compostos tóxicos conforme o processo. A caracterização usa DBO, DQO, sólidos, pH, nutrientes e toxicidade."],
    ['Tratamento', "Preliminar (gradeamento, desarenação), primário (decantação), secundário biológico (lodos ativados, reatores anaeróbios, lagoas) e terciário (remoção de nutrientes, desinfecção). Industriais podem exigir neutralização, coagulação e floculação, separação água-óleo e tratamento físico-químico. O lodo gerado precisa de destinação adequada."],
  ], 'Qual etapa remove principalmente a matéria orgânica dissolvida por ação de microrganismos?', 'O tratamento secundário (biológico), como lodos ativados, reatores anaeróbios e lagoas.', [CONAMA]),

  'trans1-4': L([
    ['Condições e padrões de lançamento', "A Resolução CONAMA 430/2011 complementa a 357/2005 e fixa condições para lançar efluentes em corpos d’água, após tratamento. Pontos clássicos: pH entre 5 e 9; temperatura inferior a 40 °C, com variação máxima de 3 °C no limite da zona de mistura; materiais sedimentáveis até 1 mL/L em teste de uma hora em cone Imhoff; óleos minerais até 20 mg/L e óleos vegetais e gorduras animais até 50 mg/L; ausência de materiais flutuantes."],
    ['Esgoto sanitário e regras gerais', "Para esgoto sanitário, exige remoção mínima de DBO (60%) ou demonstração de que não altera o enquadramento. O lançamento não pode alterar a classe do corpo receptor. O órgão ambiental pode ser mais restritivo e exigir automonitoramento."],
  ], 'Qual faixa de pH a CONAMA 430/2011 admite para lançamento de efluentes?', 'Entre 5 e 9.', [CONAMA]),

  'trans1-5': L([
    ['Poluição do solo', "Ocorre por disposição inadequada de resíduos, derramamentos, vazamentos de tanques de combustível, agrotóxicos, fertilizantes em excesso, chorume de lixões e mineração. Contamina águas subterrâneas e afeta a saúde."],
    ['Resíduos sólidos e PNRS', "A Lei 12.305/2010 institui a Política Nacional de Resíduos Sólidos, com ordem de prioridade: não geração, redução, reutilização, reciclagem, tratamento e disposição final ambientalmente adequada dos rejeitos. Prevê responsabilidade compartilhada pelo ciclo de vida, logística reversa (pilhas, pneus, lâmpadas, eletroeletrônicos, óleos, agrotóxicos), planos de gerenciamento e fim dos lixões, com prazos atualizados pelo marco do saneamento (Lei 14.026/2020)."],
  ], 'Qual é a ordem de prioridade da gestão de resíduos na PNRS?', 'Não geração, redução, reutilização, reciclagem, tratamento dos resíduos e, por fim, disposição ambientalmente adequada dos rejeitos.', [['Lei 12.305/2010', P + '/_ato2007-2010/2010/lei/l12305.htm']]),

  'trans1-6': L([
    ['Valores orientadores', "A CONAMA 420/2009 estabelece critérios para qualidade do solo e gerenciamento de áreas contaminadas. Valores: VRQ (referência de qualidade, concentração natural), VP (prevenção, acima do qual há risco de afetar a qualidade) e VI (investigação, acima do qual há risco potencial à saúde humana)."],
    ['Classes e gestão', "Classe 1: até o VRQ; Classe 2: entre VRQ e VP; Classe 3: entre VP e VI; Classe 4: acima do VI. Acima do VI exige-se investigação detalhada e avaliação de risco. As etapas incluem identificação, diagnóstico, intervenção e monitoramento. Os estados definem seus valores de referência."],
  ], 'O que significa um solo com concentração acima do valor de investigação (VI)?', 'Que há risco potencial à saúde humana, exigindo investigação detalhada, avaliação de risco e eventual remediação.', [CONAMA]),

  'trans1-7': L([
    ['Indicadores ambientais', "São medidas que resumem o estado e as pressões sobre o ambiente: taxas de desmatamento (PRODES/INPE), alertas (DETER), focos de calor, IQA da água, índices de qualidade do ar, cobertura de saneamento e áreas protegidas. O modelo Pressão-Estado-Resposta organiza indicadores por causa, condição e ação."],
    ['Monitoramento', "Combina estações de campo, sensoriamento remoto, cadastros (CAR) e bases públicas. Bons indicadores são mensuráveis, comparáveis, atualizados e úteis à decisão."],
  ], 'Qual sistema do INPE mede oficialmente a taxa anual de desmatamento na Amazônia?', 'O PRODES. O DETER emite alertas em tempo quase real para fiscalização.', [['INPE — TerraBrasilis', 'https://terrabrasilis.dpi.inpe.br']]),

  'trans1-8': L([
    ['Etapas do gerenciamento', "Identificação (áreas suspeitas), investigação confirmatória (amostras que comprovam contaminação), investigação detalhada (extensão e concentrações), avaliação de risco à saúde e ao ambiente, intervenção (remediação ou controle) e monitoramento pós-intervenção."],
    ['Caracterização', "Modelo conceitual do local (fontes, vias, receptores), amostragem de solo, água subterrânea e gases, análises laboratoriais acreditadas e comparação com valores orientadores (CONAMA 420/2009). Normas ABNT orientam investigação e amostragem."],
  ], 'Para que serve o modelo conceitual do local em área contaminada?', 'Para relacionar fontes, vias de exposição e receptores, orientando amostragem e avaliação de risco.', [CONAMA]),

  'trans1-9': L([
    ['Técnicas de remediação', "Escavação e destinação, extração de vapores do solo, bombeamento e tratamento de água subterrânea, barreiras reativas, oxidação química in situ, biorremediação, fitorremediação e atenuação natural monitorada. A escolha depende do contaminante, do meio e do uso futuro."],
    ['Gestão', "In situ trata no local; ex situ remove o material. Medidas de controle institucional (restrição de uso, cercamento) combinam-se à remediação. O objetivo é reduzir o risco a níveis aceitáveis e reabilitar a área para um uso declarado."],
  ], 'O que é biorremediação?', 'Uso de microrganismos (ou plantas, na fitorremediação) para degradar ou imobilizar contaminantes.', [CONAMA]),

  /* ---------- Economia ---------- */
  'trans2-1': L([
    ['PIB, inflação e desemprego', "PIB é o valor dos bens e serviços finais produzidos em um país e período. Inflação é o aumento geral e persistente dos preços (IPCA oficial; meta definida pelo CMN). Desemprego (taxa de desocupação, PNAD Contínua) considera quem busca trabalho e não encontra. Distribuição de renda é medida, entre outros, pelo índice de Gini (0 igualdade; 1 desigualdade máxima)."],
    ['Política fiscal e monetária', "Fiscal: gastos e tributos do governo para estabilizar e redistribuir. Monetária: Banco Central controla juros (Selic), reservas compulsórias e operações de mercado aberto para manter a inflação na meta. Juros altos desaceleram a atividade e reduzem a inflação; juros baixos estimulam o crédito."],
  ], 'Qual instrumento principal do Banco Central para controlar a inflação?', 'A taxa básica de juros (Selic), junto com operações de mercado aberto e depósitos compulsórios.', [['Banco Central do Brasil', 'https://www.bcb.gov.br']]),

  'trans2-2': L([
    ['Indicadores', "IDH combina saúde (expectativa de vida), educação e renda (RNB per capita). Gini mede desigualdade. Linha de pobreza e extrema pobreza, taxa de mortalidade infantil, alfabetização, saneamento. Econômicos: PIB, PIB per capita, IPCA, taxa de desocupação, balança comercial, déficit/superávit primário e dívida pública."],
    ['Uso', "Indicadores orientam políticas e permitem comparar regiões e períodos. Média alta pode esconder desigualdade, por isso compare distribuição e média."],
  ], 'Quais dimensões compõem o IDH?', 'Saúde (longevidade), educação e renda.', [['PNUD Brasil', 'https://www.undp.org/pt/brazil']]),

  'trans2-3': L([
    ['Crescimento e desenvolvimento', "Crescimento é aumento do produto. Desenvolvimento inclui melhoria de qualidade de vida, redução de desigualdades e ampliação de liberdades (Amartya Sen). O desenvolvimento sustentável acrescenta a proteção do ambiente para as gerações futuras (Relatório Brundtland, 1987)."],
    ['Políticas públicas', "Transferência de renda (Bolsa Família), educação, saúde (SUS), infraestrutura, crédito, política industrial e regional, incentivos fiscais e programas de desenvolvimento local. A avaliação mede impacto sobre os indicadores sociais."],
  ], 'Por que crescimento econômico não é sinônimo de desenvolvimento?', 'Porque pode ocorrer sem redução da desigualdade e sem melhora de saúde, educação e meio ambiente; desenvolvimento considera esses resultados.', [['PNUD Brasil', 'https://www.undp.org/pt/brazil']]),

  /* ---------- Direitos humanos ---------- */
  'trans4-1': L([
    ['Declaração Universal dos Direitos Humanos (1948)', "Adotada pela Assembleia Geral da ONU em 10 de dezembro de 1948 (30 artigos). Afirma dignidade, liberdade e igualdade de todos, direitos civis e políticos (vida, liberdade, julgamento justo) e direitos econômicos, sociais e culturais (trabalho, educação, saúde). Foi resolução, não tratado, mas serve de base para tratados e é considerada costume internacional."],
    ['PIDESC (1966)', "O Pacto Internacional sobre Direitos Econômicos, Sociais e Culturais obriga os Estados a realizar progressivamente, até o máximo de recursos disponíveis, direitos ao trabalho, a condições justas, previdência, educação, saúde e vida cultural. Foi promulgado no Brasil pelo Decreto 591/1992. Seu par é o Pacto sobre Direitos Civis e Políticos."],
  ], 'Qual a natureza da realização dos direitos do PIDESC?', 'Progressiva, até o máximo dos recursos disponíveis, sem prejuízo de obrigações imediatas como a não discriminação.', [['Decreto 591/1992', P + '/decreto/1990-1994/d0591.htm'], ['ONU — DUDH', 'https://www.un.org/pt/about-us/universal-declaration-of-human-rights']]),

  'trans4-2': L([
    ['Povos indígenas', "A Constituição reconhece aos indígenas sua organização social, costumes, línguas, crenças e tradições, e os direitos originários sobre as terras que tradicionalmente ocupam (art. 231), que são bens da União, de posse permanente e usufruto exclusivo, inalienáveis e indisponíveis. O Estatuto do Índio (Lei 6.001/1973) refletia a política de integração e assimilação, superada pela Constituição de 1988. A Convenção 169 da OIT assegura consulta livre, prévia e informada. O marco temporal foi rejeitado pelo STF (2023), e o tema segue em disputa legislativa."],
    ['Quilombolas', "O art. 68 do ADCT garante propriedade definitiva às comunidades remanescentes de quilombos que ocupam suas terras; o Decreto 4.887/2003 regulamenta a titulação, com autoidentificação como critério. Empreendimentos que afetam comunidades quilombolas ou indígenas exigem estudos específicos e a manifestação de Fundação Palmares ou FUNAI no licenciamento, conforme a norma aplicável. A preservação ambiental e cultural das terras tradicionais é valor constitucional."],
    ['Colonização e resistência', "Processos de colonização produziram escravização, deslocamentos, perda de terras e línguas. Povos indígenas e quilombolas resistiram por revoltas, quilombos, alianças e, hoje, por meio da organização política e jurídica. O ensino de história e cultura afro-brasileira e indígena é obrigatório (Leis 10.639/2003 e 11.645/2008)."],
  ], 'Qual dispositivo garante a propriedade definitiva das terras ocupadas por remanescentes de quilombos?', 'O art. 68 do Ato das Disposições Constitucionais Transitórias (ADCT).', [['Constituição Federal', P + '/constituicao/constituicao.htm']]),

  /* ---------- Políticas públicas ---------- */
  'trans5-1': L([
    ['Ciclo das políticas públicas', "Fases: identificação do problema e formação da agenda, formulação de alternativas, tomada de decisão, implementação, monitoramento e avaliação (que pode levar a continuar, reformular ou encerrar a política). O ciclo é um modelo didático; na prática as fases se sobrepõem."],
    ['Monitoramento e avaliação', "Monitoramento acompanha a execução em tempo real com indicadores. Avaliação mede eficiência (uso dos recursos), eficácia (cumprimento das metas) e efetividade (impacto sobre o problema). Pode ser ex ante, durante ou ex post."],
  ], 'Qual a diferença entre eficácia e efetividade?', 'Eficácia é alcançar a meta prevista; efetividade é produzir o efeito desejado sobre o problema na sociedade.', [['ENAP', 'https://www.enap.gov.br']]),

  'trans5-2': L([
    ['Gestão de projetos', "Projeto é esforço temporário para um resultado único; programa reúne projetos relacionados. Etapas: iniciação, planejamento (escopo, cronograma, custo, riscos), execução, monitoramento e controle, encerramento. A matriz lógica (marco lógico) relaciona objetivos, indicadores, meios de verificação e hipóteses."],
    ['Projetos sociais', "Partem de diagnóstico, definem público-alvo, metas, recursos, parcerias e avaliação de resultados. Transparência, prestação de contas e participação dos beneficiários aumentam a sustentabilidade do projeto."],
  ], 'Para que serve a matriz do marco lógico?', 'Para organizar objetivos, resultados, atividades, indicadores, fontes de verificação e premissas do projeto.', [['ENAP', 'https://www.enap.gov.br']]),

  'trans5-3': L([
    ['Tipos de indicadores', "Insumo (recursos), processo (atividades), produto (entregas), resultado (efeitos diretos) e impacto (mudanças duradouras). Também se classificam em eficiência, eficácia, efetividade, economicidade e equidade."],
    ['Critérios', "Um bom indicador é válido, confiável, específico, mensurável, acessível e comparável. Meta sem indicador não se acompanha, e indicador sem meta não orienta decisão."],
  ], 'Exemplo de indicador de produto e de impacto em um programa de saneamento.', 'Produto: número de ligações de esgoto implantadas. Impacto: redução de internações por doenças de veiculação hídrica.', [['ENAP', 'https://www.enap.gov.br']]),

  'trans5-4': L([
    ['Participação e controle', "A Constituição prevê soberania popular (art. 1º, parágrafo único) e instrumentos como plebiscito, referendo e iniciativa popular (art. 14). A gestão pública usa conselhos de políticas, conferências, audiências e consultas públicas, ouvidorias e orçamento participativo."],
    ['Transparência', "A Lei de Acesso à Informação (Lei 12.527/2011) garante o acesso a informações públicas, e a Lei 13.460/2017 trata dos direitos dos usuários de serviços públicos. O controle social complementa o controle interno e externo (tribunais de contas)."],
  ], 'Cite dois instrumentos de participação social na gestão pública.', 'Conselhos de políticas públicas e audiências ou consultas públicas; também conferências, ouvidorias e orçamento participativo.', [['Lei 12.527/2011', P + '/_ato2011-2014/2011/lei/l12527.htm']]),

  /* ---------- Clima, sustentabilidade, legislação ambiental ---------- */
  'trans6-1': L([
    ['PNMA — Lei 6.938/1981', "Objetivo: preservar, melhorar e recuperar a qualidade ambiental propícia à vida. Princípios: ação governamental na manutenção do equilíbrio ecológico como patrimônio público, racionalização do uso do solo, água e ar, planejamento, proteção de ecossistemas, controle de atividades poluidoras, educação ambiental."],
    ['Instrumentos e responsabilidade', "Instrumentos (art. 9º): padrões de qualidade, zoneamento, avaliação de impactos, licenciamento, incentivos, criação de espaços protegidos, sistema de informações, cadastros, penalidades, relatório de qualidade ambiental. A responsabilidade civil por dano ambiental é objetiva (art. 14, § 1º): independe de culpa. O SISNAMA reúne órgãos federais, estaduais e municipais; o CONAMA é consultivo e deliberativo."],
  ], 'A responsabilidade civil do poluidor por dano ambiental depende de culpa?', 'Não. É objetiva (art. 14, § 1º da Lei 6.938/1981): basta o dano e o nexo de causalidade.', [['Lei 6.938/1981', P + '/leis/l6938.htm']]),

  'trans6-2': L([
    ['PNMC — Lei 12.187/2009', "Objetivos: compatibilizar desenvolvimento e proteção do sistema climático, reduzir emissões de gases de efeito estufa, fortalecer remoções por sumidouros, implementar medidas de adaptação, preservar biomas. Princípios: precaução, prevenção, participação cidadã, desenvolvimento sustentável e responsabilidades comuns, porém diferenciadas."],
    ['Instrumentos', "Plano Nacional sobre Mudança do Clima, Fundo Nacional sobre Mudança do Clima, planos setoriais, comunicações nacionais e inventários, e medidas fiscais e financeiras. A lei fixou compromisso nacional voluntário de redução de emissões para 2020, regulamentado por decreto. O Brasil atualizou sua meta (NDC) no Acordo de Paris."],
  ], 'Qual a expressão que sintetiza o tratamento diferenciado entre países na PNMC e no direito climático?', 'Responsabilidades comuns, porém diferenciadas.', [['Lei 12.187/2009', P + '/_ato2007-2010/2009/lei/l12187.htm']]),

  'trans6-3': L([
    ['Política Estadual de Mudanças Climáticas — LC 582/2017', "Alinha Mato Grosso à política nacional, com objetivos de mitigação (redução de emissões, em especial de desmatamento e queimadas), adaptação, fortalecimento institucional, inventário de emissões, pagamento por serviços ambientais e participação social. Leia o texto na SEMA para conferir instrumentos e órgãos criados (Fórum, plano, sistema)."],
    ['Como estudar', "Relacione a lei com a vocação do estado: emissões vêm sobretudo de mudança de uso do solo e agropecuária; a adaptação envolve seca, calor e incêndios no Pantanal e no Cerrado."],
  ], 'Qual a principal fonte de emissões de gases de efeito estufa em Mato Grosso?', 'A mudança de uso do solo (desmatamento e queimadas) e a agropecuária.', [SEMA]),

  'trans6-4': L([
    ['APP e Reserva Legal', "APP (art. 4º) protege vegetação em faixas marginais de cursos d’água (30 m para rios com menos de 10 m de largura; 50 m para 10 a 50 m; 100 m para 50 a 200 m; 200 m para 200 a 600 m; 500 m para mais de 600 m), nascentes (raio de 50 m), topos de morro, encostas com declividade acima de 45° e outras. Reserva Legal (art. 12): na Amazônia Legal, 80% do imóvel em área de floresta, 35% em cerrado e 20% em campos gerais; nas demais regiões, 20%."],
    ['CAR, PRA e uso', "O CAR é registro público eletrônico obrigatório (art. 29). O PRA (art. 59) regulariza passivos em áreas consolidadas até 22 de julho de 2008. Supressão de vegetação exige autorização do órgão ambiental. Mato Grosso, na Amazônia Legal, tem regras específicas de Reserva Legal."],
  ], 'Qual percentual de Reserva Legal em área de floresta na Amazônia Legal?', '80% do imóvel.', [['Lei 12.651/2012', P + '/_ato2011-2014/2012/lei/l12651.htm']]),

  'trans6-5': L([
    ['PNRH — Lei 9.433/1997', "Fundamentos: a água é bem de domínio público; recurso natural limitado, dotado de valor econômico; em escassez, o uso prioritário é consumo humano e dessedentação de animais; gestão deve proporcionar usos múltiplos; a bacia hidrográfica é a unidade territorial; gestão descentralizada e participativa."],
    ['Instrumentos e SINGREH', "Instrumentos: planos de recursos hídricos, enquadramento dos corpos de água, outorga de direitos de uso, cobrança pelo uso e sistema de informações. SINGREH: Conselho Nacional de Recursos Hídricos, ANA, conselhos estaduais, comitês de bacia, agências de água e órgãos públicos."],
    ['Política Estadual (Lei 11.088/2020)', "A lei mato-grossense organiza a gestão estadual das águas em consonância com a lei federal, com conselho estadual, comitês de bacia, outorga e cobrança. Confira o texto atualizado na SEMA."],
  ], 'Qual é a unidade territorial para implementação da PNRH?', 'A bacia hidrográfica.', [['Lei 9.433/1997', P + '/leis/l9433.htm'], SEMA]),

  'trans6-6': L([
    ['Sustentabilidade e responsabilidades', "Desenvolvimento sustentável é o que atende às necessidades presentes sem comprometer as futuras (Relatório Brundtland, 1987). O tripé da sustentabilidade combina dimensões econômica, social e ambiental. Responsabilidade social é o compromisso de organizações com impactos sobre a sociedade; responsabilidade ambiental, com o ambiente. ESG é o conjunto de critérios ambientais, sociais e de governança."],
  ], 'Qual é o tripé da sustentabilidade?', 'Dimensões econômica, social e ambiental (triple bottom line).', [['ONU Brasil', 'https://brasil.un.org']]),

  'trans6-7': L([
    ['Economia circular e consumo consciente', "Economia circular substitui o modelo linear (extrair, produzir, descartar) por ciclos de reuso, reparo, reciclagem e regeneração, eliminando resíduos desde o projeto. Consumo consciente avalia necessidade, impacto, durabilidade e origem. Compras públicas sustentáveis incluem critérios ambientais e sociais."],
  ], 'O que a economia circular busca evitar?', 'O modelo linear de extrair, produzir e descartar, reduzindo desperdício e uso de recursos.', [['Ellen MacArthur Foundation', 'https://www.ellenmacarthurfoundation.org']]),

  'trans6-8': L([
    ['Impactos de empreendimentos', "Impactos são alterações no meio físico, biótico e socioeconômico. Podem ser positivos ou negativos, diretos ou indiretos, reversíveis ou não, de curto ou longo prazo, temporários ou permanentes. Exemplos: desmatamento, perda de habitat, poluição, deslocamento populacional, pressão sobre serviços públicos e geração de empregos."],
    ['Medidas', "Prevenir, mitigar, compensar e monitorar. O EIA/RIMA, o plano básico ambiental e as condicionantes da licença estruturam as medidas. A participação da população afetada ocorre em audiências públicas."],
  ], 'Qual a diferença entre medidas mitigadoras e compensatórias?', 'Mitigadoras reduzem o impacto na origem; compensatórias oferecem contrapartida pelo dano que não pode ser evitado.', [CONAMA]),

  'trans6-9': L([
    ['Agenda 2030 e ODS', "A Agenda 2030 foi adotada pela ONU em 2015, com 17 Objetivos de Desenvolvimento Sustentável e 169 metas. Entre eles: ODS 6 (água potável e saneamento), 7 (energia limpa), 11 (cidades sustentáveis), 12 (consumo e produção responsáveis), 13 (ação contra a mudança do clima), 14 (vida na água) e 15 (vida terrestre). São indivisíveis e universais."],
  ], 'Quantos são os ODS e qual trata da ação contra a mudança do clima?', 'São 17; o ODS 13 trata de ação contra a mudança global do clima.', [['Agenda 2030 — ONU Brasil', 'https://brasil.un.org/pt-br/91863-agenda-2030-para-o-desenvolvimento-sustent%C3%A1vel']]),

  'trans6-10': L([
    ['SISNAMA e licenciamento', "O SISNAMA integra órgãos de todos os níveis (Conselho de Governo, CONAMA, MMA, IBAMA e ICMBio, órgãos estaduais e municipais). Licenciamento ambiental é o procedimento pelo qual o órgão competente autoriza a localização, instalação, ampliação e operação de atividades poluidoras. Licenças: prévia (LP), de instalação (LI) e de operação (LO)."],
    ['Competência (LC 140/2011)', "Competência da União, estados e municípios é definida pela LC 140/2011: o estado atua por regra residual, o município por impacto local, e a União nas hipóteses do art. 7º, XIV. Um empreendimento é licenciado por um único ente."],
  ], 'Quais são as três licenças tradicionais do licenciamento?', 'Licença prévia (planejamento), licença de instalação (construção) e licença de operação (funcionamento).', [['LC 140/2011', P + '/leis/lcp/lcp140.htm']]),

  'trans6-11': L([
    ['Instrumentos de política ambiental', "Comando e controle: normas, padrões, licença, fiscalização e sanções. Fiscais: tributos e incentivos (como o ICMS ecológico). De mercado: pagamento por serviços ambientais, créditos de carbono, comércio de emissões. Voluntários: certificações e acordos setoriais. A eficácia depende de fiscalização, custo, aceitação e capacidade institucional."],
  ], 'O ICMS ecológico é instrumento de qual tipo?', 'Fiscal: reparte parte da receita do ICMS entre municípios conforme critérios ambientais.', [['MMA', 'https://www.gov.br/mma']]),

  'trans6-12': L([
    ['Responsabilidade socioambiental', "Integra a gestão de impactos ambientais e sociais às decisões. Exemplos: relatórios de sustentabilidade, programas de logística reversa, boas práticas na cadeia de fornecimento, compras públicas sustentáveis (art. 5º da Lei 14.133/2021 inclui o desenvolvimento nacional sustentável como princípio) e responsabilização dos poluidores nos âmbitos civil, administrativo e penal (art. 225, § 3º, CF)."],
  ], 'Em quais esferas o poluidor pode ser responsabilizado pelo mesmo ato?', 'Civil, administrativa e penal, de forma independente (art. 225, § 3º, da Constituição).', [['Constituição Federal', P + '/constituicao/constituicao.htm']]),

  'trans6-13': L([
    ['Indicadores sociais e ambientais', "Sociais: IDH, Gini, taxa de pobreza, mortalidade infantil, escolaridade, acesso a saneamento. Ambientais: desmatamento (PRODES), focos de calor, qualidade da água (IQA) e do ar, emissões de gases de efeito estufa, áreas protegidas, geração de resíduos, pegada ecológica. Servem para diagnosticar, definir metas e avaliar políticas."],
  ], 'Qual indicador mede a desigualdade de renda?', 'O índice de Gini.', [['IBGE', 'https://www.ibge.gov.br']]),

  'trans6-14': L([
    ['LC 592/2017 — CAR, PRA e licenciamento', "Dispõe sobre o Programa de Regularização Ambiental, o Cadastro Ambiental Rural, a regularização ambiental dos imóveis rurais e o licenciamento de atividades poluidoras no estado. O CAR registra o imóvel, georreferencia APP, Reserva Legal e remanescentes; o PRA oferece caminho de adequação de passivos em área consolidada, com termo de compromisso. O licenciamento define regras e competências estaduais."],
    ['Pontos de estudo', "Relação com o Código Florestal, validade e análise do CAR (SIMCAR), adesão ao PRA, e cumprimento de termo de compromisso. Confira alterações e regulamentos (Decreto 1.031/2017)."],
  ], 'O que o PRA oferece ao proprietário rural com passivo ambiental?', 'Um procedimento de regularização, com termo de compromisso e medidas de recomposição, recuperação ou compensação de APP e Reserva Legal em área consolidada.', [SEMA, ['Lei 12.651/2012', P + '/_ato2011-2014/2012/lei/l12651.htm']]),

  'trans6-15': L([
    ['LC 140/2011 — cooperação federativa', "Regulamenta o art. 23 da CF (competência comum). Define ações administrativas da União (art. 7º), dos estados (art. 8º) e dos municípios (art. 9º), instrumentos de cooperação (consórcios, convênios, comissões tripartite e bipartites), e fixa que o licenciamento é por um único ente (art. 13). O ente que lavra o auto de infração primeiro prevalece na apuração (art. 17), sem excluir a atuação supletiva de outros em caso de omissão."],
    ['Atuação supletiva e subsidiária', "Supletiva: um ente age no lugar de outro omisso. Subsidiária: auxilia a pedido, quando solicitada."],
  ], 'Quantos entes licenciam um mesmo empreendimento segundo a LC 140/2011?', 'Apenas um (art. 13), sem prejuízo da manifestação dos demais, não vinculante.', [['LC 140/2011', P + '/leis/lcp/lcp140.htm']]),

  'trans6-16': L([
    ['Lei Geral do Licenciamento — Lei 15.190/2025', "Regulamenta o art. 225, § 1º, IV da CF. Estabelece normas gerais: princípios, tipos de licença (prévia, de instalação, de operação, ambiental única e por adesão e compromisso, entre outras), condicionantes, prazos e a participação de autoridades envolvidas (como FUNAI, Fundação Palmares, ICMBio e IPHAN) com manifestações não vinculantes. A lei foi sancionada em agosto de 2025, com vetos, e teve pontos reabertos no Congresso, então confira o texto consolidado."],
    ['Efeitos', "Altera as Leis 9.605/1998, 9.985/2000 e 6.938/1981, e revoga dispositivos das Leis 7.661/1988 e 11.428/2006. Estados continuam a regulamentar o procedimento dentro das normas gerais."],
  ], 'Qual dispositivo constitucional a Lei 15.190/2025 regulamenta?', 'O art. 225, § 1º, inciso IV, da Constituição: exigência de estudo prévio de impacto ambiental para atividades potencialmente causadoras de significativa degradação.', [['Lei 15.190/2025', P + '/_ato2023-2026/2025/lei/L15190.htm']]),

  'trans6-17': L([
    ['PNMIF — Lei 14.944/2024', "Institui a Política Nacional de Manejo Integrado do Fogo. Combina prevenção, prevenção de incêndios, uso do fogo controlado (queima prescrita, queima controlada, uso tradicional por comunidades), combate a incêndios e recuperação de áreas. Cria governança com cooperação entre União, estados, municípios e comunidades, e altera o Código Florestal e a Lei de Crimes Ambientais."],
    ['Por que importa em MT', "O estado tem grande incidência de queimadas e incêndios no Cerrado, Pantanal e Amazônia, o que torna o manejo integrado do fogo central na gestão ambiental."],
  ], 'Qual a diferença entre incêndio florestal e queima controlada?', 'Incêndio é fogo sem controle, em geral destrutivo; queima controlada é uso planejado do fogo, com autorização e técnicas, para manejo agropecuário ou ecológico.', [['Lei 14.944/2024', P + '/_ato2023-2026/2024/lei/L14944.htm']]),

  'trans6-18': L([
    ['Decreto 1.031/2017 — PRA e SIMCAR', "Regulamenta a LC 592/2017 quanto ao Programa de Regularização Ambiental, ao Sistema Mato-grossense de Cadastro Ambiental Rural (SIMCAR) e aos procedimentos de inscrição e análise do CAR. Estuda-se inscrição, retificação, análise (pendências, notificação), termo de compromisso e acompanhamento."],
  ], 'Qual sistema estadual recebe a inscrição do CAR em MT?', 'O SIMCAR (Sistema Mato-grossense de Cadastro Ambiental Rural).', [SEMA]),

  'trans6-19': L([
    ['Decreto 697/2020 — licenciamento na SEMA', "Regulamenta o procedimento de licenciamento ambiental estadual: tipos de licença, etapas (requerimento, termo de referência, estudos, análise técnica, vistoria, parecer, decisão), condicionantes, validade e renovação, e publicidade. Relaciona-se ao Decreto 1.268/2022 (taxas) e à LC 592/2017."],
  ], 'Qual o papel das condicionantes na licença ambiental?', 'Medidas e controles que o empreendedor deve cumprir para manter a validade da licença e mitigar ou compensar impactos.', [SEMA]),

  'trans6-20': L([
    ['LC 233/2005 — Política Florestal de MT', "Dispõe sobre a Política Florestal do Estado: conservação, uso sustentável e recuperação de florestas, manejo florestal sustentável, autorização de exploração, reposição florestal, controle do transporte e armazenamento de produtos florestais, fiscalização. Estude os instrumentos de autorização (PMFS) e a articulação com o Código Florestal."],
  ], 'O que é um plano de manejo florestal sustentável (PMFS)?', 'Documento técnico que autoriza e planeja a exploração de florestas, com ciclo de corte, inventário, impacto reduzido e monitoramento.', [SEMA]),

  'trans6-21': L([
    ['Decreto 1.268/2022 — taxas e tipologias', "Regulamenta a cobrança de taxas pela prestação de serviços e pelo poder de polícia ambiental e define empreendimentos e atividades sujeitos a licenciamento. A taxa varia conforme porte e potencial poluidor. Estude fato gerador, base de cálculo e a tipologia que determina o licenciamento."],
  ], 'A cobrança da taxa ambiental decorre de qual poder estatal?', 'Do poder de polícia e da prestação de serviço público específico e divisível, característicos das taxas.', [SEMA]),

  'trans6-22': L([
    ['Resolução CONSEMA 74/2025 — impacto local', "Define quais atividades e empreendimentos são de impacto ambiental local, de competência dos municípios (LC 140/2011, art. 9º, XIV, a), e estabelece normas gerais de cooperação técnica entre a SEMA e as prefeituras. O município precisa ter órgão ambiental capacitado, conselho de meio ambiente e legislação própria."],
  ], 'Quem define as tipologias de impacto local na LC 140/2011?', 'O Conselho Estadual do Meio Ambiente (em MT, o CONSEMA), considerando porte, potencial poluidor e natureza da atividade.', [SEMA]),

  'trans6-23': L([
    ['Educação ambiental em MT — Lei 10.903/2019', "Institui a Política Estadual de Educação Ambiental, em alinhamento à Política Nacional (Lei 9.795/1999). Educação ambiental é processo pelo qual indivíduo e coletividade constroem valores, conhecimentos e atitudes para a conservação do ambiente. Deve ser contínua e permanente, formal (escolas) e não formal. O Decreto 938/2024 regulamenta a política estadual."],
  ], 'A educação ambiental deve ser disciplina específica no ensino formal?', 'Em regra, não: deve ser integrada de forma transversal e permanente, e só em cursos de pós-graduação e extensão pode haver disciplina específica (Lei 9.795/1999).', [['Lei 9.795/1999', P + '/leis/l9795.htm']]),

  'trans6-24': L([
    ['Política Estadual de Recursos Hídricos', "Lei 11.088/2020: dispõe sobre a política e o sistema estadual de gerenciamento dos recursos hídricos, compatíveis com a Lei 9.433/1997. Instrumentos: planos, enquadramento, outorga, cobrança e informações. Estude também quem concede a outorga (a SEMA, para águas de domínio estadual) e a atuação dos comitês de bacia."],
  ], 'Quem concede outorga de águas de domínio estadual em MT?', 'O órgão estadual de recursos hídricos, a SEMA-MT.', [SEMA]),

  'trans6-25': L([
    ['Águas subterrâneas — Lei 9.612/2011', "Disciplina a conservação e administração das águas subterrâneas em MT. Pontos: águas subterrâneas são bens do Estado (art. 26, I, CF); exigência de outorga para perfuração e uso, cadastro de poços, áreas de proteção de aquíferos e controle de poluição. A perfuração sem autorização é infração."],
  ], 'As águas subterrâneas pertencem a qual ente segundo a Constituição?', 'Aos Estados (art. 26, I, da CF), ressalvadas as decorrentes de obras da União.', [['Constituição Federal', P + '/constituicao/constituicao.htm'], SEMA]),

  'trans7-0': L([
    ['Processo administrativo estadual — Lei 7.692/2002', "Regula o processo administrativo na Administração estadual de MT, em linha com a Lei federal 9.784/1999. Estude: princípios (legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público, eficiência), direitos e deveres do administrado, competência (delegação e avocação), impedimento e suspeição, início do processo, instrução, decisão, recursos, revisão e anulação."],
    ['Pontos clássicos', "Motivação obrigatória em atos que neguem direitos ou imponham sanções; decadência do direito de anular atos favoráveis (cinco anos na lei federal, salvo má-fé); recurso hierárquico. Confirme prazos no texto da lei estadual, pois podem diferir da federal."],
  ], 'Qual a diferença entre impedimento e suspeição no processo administrativo?', 'Impedimento decorre de situação objetiva (interesse direto, parentesco, ter participado do caso); suspeição decorre de relação subjetiva (amizade íntima ou inimizade) e pode ser alegada pelo interessado.', [['Lei 9.784/1999 (federal)', P + '/leis/l9784.htm'], ['Assembleia Legislativa de MT', 'https://www.al.mt.gov.br']]),

  /* ---------- Direito processual civil ---------- */
  'dir3-3': L([
    ['Competência: regras gerais', "Competência é a medida da jurisdição. Absoluta (matéria, pessoa e função): improrrogável, pode ser reconhecida de ofício e alegada a qualquer tempo, e gera nulidade da decisão. Relativa (valor e território): prorroga-se se o réu não a alegar como preliminar da contestação (arts. 64 e 65). Regra do foro: domicílio do réu (art. 46), com exceções (imóveis, alimentandos, etc.)."],
    ['Modificação e cooperação', "Conexão (art. 55: mesmo pedido ou causa de pedir) e continência levam à reunião de processos para evitar decisões conflitantes. Foro de eleição (art. 63) é permitido para competência relativa. Cooperação nacional (arts. 67 a 69): auxílio direto, cartas precatórias, rogatórias e de ordem; cooperação internacional nos arts. 26 a 41. Justiça Federal: art. 109 da CF."],
    ['Competência internacional', "Concorrente (arts. 21 e 22): réu domiciliado no Brasil, obrigação a ser cumprida aqui, fato ocorrido no Brasil. Exclusiva (art. 23): imóveis situados no Brasil, sucessão com bens no Brasil e partilha de bens aqui situados em divórcio ou união estável."],
  ], 'A incompetência relativa pode ser reconhecida de ofício?', 'Em regra não: deve ser alegada pelo réu como preliminar de contestação, sob pena de prorrogação. A absoluta pode ser reconhecida de ofício.', [CPC]),

  'dir3-7': L([
    ['Formação, suspensão e extinção', "O processo se inicia por demanda (princípio da inércia), e a ação é considerada proposta quando a petição inicial é protocolada (art. 312). Suspensão (art. 313): morte ou perda de capacidade, convenção das partes, impedimento, questão prejudicial, força maior, entre outras. Convenção das partes não pode exceder seis meses. Extinção: sentença (art. 316)."],
    ['Flexibilização e negócios processuais', "O juiz pode dilatar prazos e alterar a ordem das provas (art. 139, VI). As partes podem celebrar convenções processuais (art. 190), sobre ônus, prazos, provas, e calendário processual (art. 191), em direitos que admitam autocomposição, desde que capazes. O juiz controla a validade e recusa cláusula abusiva em contrato de adesão ou em caso de vulnerabilidade."],
  ], 'O que é calendário processual?', 'Acordo entre juiz e partes que fixa datas de atos do processo, dispensando intimações para esses atos (art. 191).', [CPC]),

  'dir3-10': L([
    ['Procedimentos especiais mais cobrados', "Consignação em pagamento (arts. 539 a 549): depósito para extinguir obrigação quando o credor recusa ou não é localizado. Exigir contas (arts. 550 a 553): duas fases. Possessórias (arts. 554 a 568): manutenção, reintegração e interdito proibitório; liminar sem audiência se a posse for nova (menos de ano e dia); fungibilidade entre elas. Embargos de terceiro (arts. 674 a 681): proteger bens indevidamente constritos."],
    ['Monitória e outros', "Monitória (arts. 700 a 702): quem tem prova escrita sem eficácia de título executivo pede pagamento; o réu tem 15 dias para pagar (com isenção de custas e honorários reduzidos) ou embargar; sem manifestação, forma-se título executivo judicial. Divisão e demarcação (arts. 569 a 598), oposição (arts. 682 a 686), habilitação (arts. 687 a 692), homologação do penhor legal (arts. 703 a 706) e restauração de autos (arts. 712 a 718). A ação discriminatória (Lei 6.383/1976) separa terras devolutas das particulares."],
  ], 'Qual a característica da ação monitória?', 'Exige prova escrita sem eficácia de título executivo; se o réu não paga nem embarga no prazo, o mandado converte-se em título executivo judicial.', [CPC]),

  'dir3-15': L([
    ['Ações coletivas', "Principais diplomas: Lei 7.347/1985 (ação civil pública) e CDC (arts. 81 a 104). Direitos difusos (indivisíveis, titulares indeterminados), coletivos em sentido estrito (indivisíveis, grupo ligado por relação jurídica) e individuais homogêneos (origem comum, divisíveis). Legitimados: Ministério Público, Defensoria, entes federativos, autarquias, empresas públicas, fundações, sociedades de economia mista e associações constituídas há pelo menos um ano (dispensável a pré-constituição em certos casos)."],
    ['Competência, coisa julgada e instrumentos', "Competência do foro do local do dano (absoluta). Coisa julgada: difusos e coletivos são ‘secundum eventum probationis’ (improcedência por falta de provas não impede nova ação) e individuais homogêneos ‘secundum eventum litis’ (a procedência beneficia; a improcedência não prejudica indivíduos). Inquérito civil é procedimento do MP para colher provas. TAC (art. 5º, § 6º): título executivo extrajudicial. Recomendação ministerial orienta a correção de condutas, sem caráter sancionatório."],
  ], 'Qual a regra da coisa julgada em ação civil pública sobre direitos difusos?', 'Eficácia erga omnes, exceto se a improcedência decorrer de insuficiência de provas, caso em que nova ação pode ser proposta com novas provas.', [['Lei 7.347/1985', P + '/leis/l7347orig.htm']]),

  /* ---------- Direito ambiental ---------- */
  'dir4-1': L([
    ['Art. 225 da CF', "Todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao poder público e à coletividade o dever de defendê-lo e preservá-lo para as presentes e futuras gerações. O § 1º lista deveres do poder público (EIA, espaços protegidos, controle de espécies); § 3º prevê responsabilidade penal, administrativa e civil; § 4º declara patrimônio nacional a Floresta Amazônica, a Mata Atlântica, a Serra do Mar, o Pantanal Mato-Grossense e a Zona Costeira (o Cerrado não consta)."],
    ['Competências e função social', "Competência legislativa concorrente (art. 24, VI, VII e VIII): União fixa normas gerais; estados suplementam. Competência material comum (art. 23, VI e VII). Municípios legislam sobre assuntos de interesse local (art. 30). Função social da propriedade rural exige utilização adequada dos recursos naturais e preservação (art. 186, II); a ordem econômica tem como princípio a defesa do meio ambiente (art. 170, VI)."],
  ], 'O Cerrado está entre os biomas declarados patrimônio nacional no art. 225, § 4º?', 'Não. O dispositivo cita Floresta Amazônica, Mata Atlântica, Serra do Mar, Pantanal Mato-Grossense e Zona Costeira.', [['Constituição Federal', P + '/constituicao/constituicao.htm']]),

  'dir4-4': L([
    ['Licenciamento de competência da União', "A LC 140/2011, art. 7º, XIV, atribui à União licenciar empreendimentos localizados ou desenvolvidos em mais de um país ou em mais de um estado, no mar territorial, na plataforma continental e na zona econômica exclusiva, em terras indígenas, em unidades de conservação federais (exceto APAs), de caráter militar, de material radioativo e atividades nucleares, e os listados em decreto do governo federal."],
    ['Decreto 8.437/2015', "Regulamenta a alínea final e lista tipologias, como rodovias federais (duplicação e pavimentação em alguns casos), ferrovias, hidrovias, portos organizados e terminais, aeroportos internacionais, usinas e linhas de transmissão de grande porte, exploração de petróleo e gás offshore, e produção de energia nuclear. Estude também os limites por potência e extensão."],
  ], 'A competência da União para licenciar depende de quê, além da lista em decreto?', 'Da localização (mais de um país ou estado, mar territorial, terra indígena, UC federal), do caráter militar ou nuclear e do enquadramento nas tipologias definidas.', [['Decreto 8.437/2015', P + '/_ato2015-2018/2015/decreto/d8437.htm']]),

  'dir4-9': L([
    ['Recursos hídricos', "Lei 9.433/1997: água é bem de domínio público, limitado e dotado de valor econômico; prioridade ao consumo humano e à dessedentação de animais em escassez; bacia hidrográfica como unidade; gestão descentralizada e participativa. Instrumentos: planos, enquadramento, outorga, cobrança e sistema de informações. Na esfera estadual, a Lei 11.088/2020 detalha a política mato-grossense."],
    ['Outorga e cobrança', "Outorga é ato administrativo que autoriza o uso (captação, lançamento de efluentes, aproveitamento hidrelétrico). Não transfere a propriedade da água. Cobrança é instrumento econômico para racionalizar o uso e financiar intervenções nas bacias."],
  ], 'A outorga de direito de uso da água transfere a propriedade do recurso?', 'Não. Apenas autoriza o uso, de forma precária e condicionada, sem alienação das águas.', [['Lei 9.433/1997', P + '/leis/l9433.htm']]),

  'dir4-15': L([
    ['CONAMA 001/1986 — EIA/RIMA', "Define impacto ambiental, e relaciona atividades que dependem de EIA/RIMA, como estradas de rodagem com duas ou mais faixas, ferrovias, portos, aeroportos, oleodutos, linhas de transmissão acima de 230 kV, obras hidráulicas, extração de minério, aterros sanitários, usinas de eletricidade acima de 10 MW e projetos agropecuários e urbanísticos de grande porte. O EIA contém diagnóstico ambiental, análise de impactos, medidas mitigadoras e programa de acompanhamento. O RIMA é a versão acessível e conclusiva ao público."],
    ['CONAMA 237/1997 — licenciamento', "Define licenciamento e as licenças (LP, LI e LO), e etapas: definição de documentos, requerimento e publicidade, análise, solicitação de esclarecimentos, audiência pública quando couber, parecer e deferimento ou indeferimento. Prazo máximo de análise de seis meses, ou doze meses se houver EIA/RIMA. Validade: LP até cinco anos, LI até seis anos, LO entre quatro e dez anos."],
  ], 'Qual é a diferença entre EIA e RIMA?', 'O EIA é o estudo técnico completo; o RIMA é o relatório em linguagem acessível, que resume as conclusões e dá publicidade ao estudo.', [CONAMA]),

  'dir4-21': L([
    ['Bacia do Alto Paraguai — Lei 8.830/2008', "Institui a Política Estadual de Gestão e Proteção à Bacia do Alto Paraguai em Mato Grosso, que abriga o Pantanal e o planalto de nascentes. Conciliar uso econômico e conservação, com regras específicas para ocupação, atividades e proteção dos recursos hídricos. O Decreto 774/2024 a regulamenta. A Constituição declara o Pantanal Mato-Grossense patrimônio nacional (art. 225, § 4º), com uso condicionado à preservação."],
  ], 'Qual bioma abriga a Bacia do Alto Paraguai em MT?', 'Principalmente o Pantanal, com nascentes no planalto de Cerrado.', [SEMA]),

  'dir4-28': L([
    ['Educação ambiental', "A Política Estadual de Educação Ambiental de MT (Lei 10.903/2019) acompanha a Lei federal 9.795/1999 e é regulamentada pelo Decreto 938/2024. Princípios: enfoque humanista, holístico, democrático e participativo; abordagem articulada das dimensões ambiental, social, econômica e cultural; continuidade e permanência; vinculação entre ética, educação, trabalho e práticas sociais."],
  ], 'A educação ambiental é formal, não formal ou ambas?', 'Ambas: formal nas escolas e não formal em ações da coletividade.', [['Lei 9.795/1999', P + '/leis/l9795.htm']]),
};
