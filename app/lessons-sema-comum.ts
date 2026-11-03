import { L, type LessonMap } from './lesson-type';

const IBGE_MT = ['IBGE Cidades — Mato Grosso', 'https://cidades.ibge.gov.br/brasil/mt/panorama'] as [string, string];
const SEMA = ['SEMA-MT', 'https://www.sema.mt.gov.br'] as [string, string];

export const lessonsSemaComum: LessonMap = {
  'port-1': L([
    ['Tese, argumentos e ideia central', "Antes de olhar as alternativas, leia o texto e responda: qual é a tese (o que o autor defende), quais argumentos a sustentam e qual é o tom (crítico, informativo, irônico). A ideia central é a que organiza o texto inteiro; exemplos, dados e citações apenas a sustentam. Em provas de banca, o título, o primeiro e o último parágrafo costumam indicar a tese."],
    ['Compreender, interpretar e inferir', "Compreender é extrair o que está dito. Interpretar é concluir o que o texto permite concluir (inferência). Extrapolar é ir além do texto, e é o erro mais cobrado. Regra prática: se você não consegue apontar o trecho que sustenta a alternativa, ela provavelmente extrapola. Atenção a palavras absolutizantes (sempre, nunca, todos, apenas, somente), que costumam tornar a alternativa falsa, e a alternativas que invertem a relação de causa e consequência."],
    ['Armadilhas frequentes', "(1) Substituição de conectivo: trocar “embora” por “porque” muda a relação de concessão para causa. (2) Sentido de palavra no contexto: o mesmo termo muda de sentido conforme o trecho. (3) Pronomes e referentes: “o qual”, “este”, “aquele” retomam termos específicos; identifique a quem se referem. (4) Opinião do autor versus opinião de terceiros citados. Sublinhe o que é fato e o que é avaliação."],
  ], 'No trecho “Embora o prazo fosse curto, a equipe entregou o relatório”, qual relação “embora” estabelece e que conectivo preserva o sentido?', 'Concessão: o fato da segunda oração ocorre apesar do obstáculo da primeira. “Ainda que”, “mesmo que” e “apesar de que” preservam o sentido. “Porque” e “portanto” mudariam a relação para causa ou conclusão, o que altera o significado.', [['Manual de Redação da Presidência da República', 'https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/manual-de-redacao']]),

  'mt-1': L([
    ['Panorama geográfico', "Mato Grosso ocupa cerca de 903 mil km², é o terceiro maior estado do Brasil, tem 141 municípios e capital em Cuiabá. Está na região Centro-Oeste e faz fronteira com a Bolívia a oeste. Reúne três biomas: Amazônia (norte e noroeste), Cerrado (centro) e Pantanal (sudoeste). Por isso as provas relacionam clima, vegetação e uso econômico do solo."],
    ['Como estudar este bloco', "O edital divide a geografia em sete eixos: espaço regional, aspectos naturais, gestão ambiental, espaço industrial, população, urbanização e espaço agrário. Estude cada um com a mesma estrutura: o que é, onde ocorre no estado, qual o efeito econômico ou social e qual o problema ambiental associado."],
  ], 'Quais são os três biomas de Mato Grosso e onde predominam?', 'Amazônia, no norte e noroeste; Cerrado, na faixa central; Pantanal, no sudoeste, na planície alagável do alto rio Paraguai.', [IBGE_MT]),

  'mt-2': L([
    ['Ocupação e regionalização', "O espaço mato-grossense foi produzido por ciclos: mineração colonial no vale do rio Cuiabá (século XVIII), pecuária extensiva (século XIX), extrativismo (borracha, poaia), colonização dirigida no norte a partir dos anos 1970 e expansão do agronegócio de grãos. A regionalização usual distingue o Pantanal (sul/sudoeste), a Baixada Cuiabana, o Centro-Sul, o Médio-Norte (soja), o Norte (Amazônia, colonização) e o Nordeste/Araguaia."],
    ['Papel do Estado e das colonizadoras', "Nos anos 1960 e 1970 a ocupação foi induzida por incentivos da SUDAM, abertura de rodovias (BR-364 e BR-163), programas de colonização oficial e projetos privados de colonização que originaram cidades como Sinop, Alta Floresta e Colíder. O resultado foi urbanização rápida, concentração fundiária e conflitos por terra e desmatamento."],
  ], 'Cite dois fatores que explicam a ocupação do norte de Mato Grosso a partir dos anos 1970.', 'Incentivos e planos de integração (SUDAM, programas de colonização) e abertura de rodovias como a BR-163 e a BR-364, aliados a projetos privados de colonização que fundaram cidades como Sinop e Alta Floresta.', [IBGE_MT]),

  'mt-3': L([
    ['Clima, relevo e solo', "O clima predominante é tropical com estação seca (inverno seco e verão chuvoso), com variação equatorial úmida ao norte. O relevo combina planaltos (Parecis, Guimarães), depressões (Cuiabana, do Araguaia) e planície (Pantanal). Os solos do Cerrado são ácidos e antigos (latossolos), férteis apenas após correção com calcário e adubação, o que viabilizou a agricultura de grãos."],
    ['Hidrografia', "O Planalto dos Parecis funciona como divisor de águas entre três grandes bacias: Amazônica (rios Juruena, Teles Pires, Xingu, que formam o Tapajós), Tocantins-Araguaia (leste) e Platina/Paraguai (Pantanal). A localização de nascentes no estado torna sua preservação importante para outros estados e países."],
    ['Vegetação e biodiversidade', "Floresta Amazônica (ombrófila e de transição), Cerrado (savana arbustiva, campos, matas de galeria) e Pantanal (mosaico de campos inundáveis, cerrado e matas). Uso da biodiversidade envolve manejo florestal, pesquisa, turismo e conservação; pressões incluem desmatamento, queimadas e expansão agropecuária."],
  ], 'Por que o Planalto dos Parecis tem importância hidrográfica?', 'Porque funciona como divisor de águas: de lá partem rios que alimentam as bacias Amazônica (via Tapajós/Xingu), Tocantins-Araguaia e Platina (Paraguai), ligando nascentes mato-grossenses a outros estados e países.', [IBGE_MT, SEMA]),

  'mt-4': L([
    ['Instrumentos de gestão ambiental', "A gestão ambiental pública se apoia em comando e controle (licenciamento, fiscalização, multas, embargos), instrumentos econômicos (pagamento por serviços ambientais, taxas) e instrumentos de informação e planejamento (zoneamento, cadastros, monitoramento por satélite). Em Mato Grosso, a SEMA coordena o SISEMA, e o CONSEMA delibera sobre normas."],
    ['Pilares estaduais', "Cadastro Ambiental Rural (CAR) e Programa de Regularização Ambiental (PRA) disciplinados pela LC 592/2017; licenciamento regulado pelo Decreto 697/2020; Política Estadual de Mudanças Climáticas (LC 582/2017); recursos hídricos (Lei 11.088/2020). A estratégia estadual de redução do desmatamento e queimadas combina monitoramento, fiscalização e regularização fundiária e ambiental."],
  ], 'Qual é a diferença entre instrumentos de comando e controle e instrumentos econômicos?', 'Comando e controle impõem regras e sanções (licença, fiscalização, multa, embargo). Instrumentos econômicos influenciam o comportamento por incentivos e custos (taxas, pagamento por serviços ambientais, créditos).', [SEMA, ['Código Estadual do Meio Ambiente (LC 38/1995)', 'https://www.sema.mt.gov.br']]),

  'mt-5': L([
    ['Estrutura industrial', "A indústria mato-grossense é fortemente ligada ao agronegócio: frigoríficos, esmagamento de soja e produção de óleo e farelo, beneficiamento de algodão, usinas de etanol de cana e de milho, laticínios e indústria madeireira. Há também construção civil, energia (usinas hidrelétricas e solar) e polos urbanos em Cuiabá/Várzea Grande e Rondonópolis."],
    ['Limites e desafios', "A agroindústria agrega valor, mas boa parte da produção sai como commodity bruta (soja em grão). Desafios: logística (distâncias aos portos, dependência de rodovias, avanço do transporte ferroviário e pelo Arco Norte), custo de energia e qualificação. O etanol de milho é exemplo de diversificação recente."],
  ], 'Por que a industrialização de Mato Grosso é chamada de agroindustrial?', 'Porque seus principais ramos transformam matérias-primas locais do campo: carne, soja, algodão, cana, milho, leite e madeira.', [IBGE_MT]),

  'mt-6': L([
    ['Dinâmica demográfica', "A população de Mato Grosso é de cerca de 3,7 milhões de pessoas (Censo 2022) e cresceu acima da média nacional por migração: sulistas, nordestinos e paulistas chegaram com a colonização e o agronegócio. A taxa de natalidade caiu e a estrutura etária envelhece lentamente, com ainda grande contingente em idade ativa."],
    ['Distribuição de renda e indicadores', "O estado tem renda média alta frente ao Brasil, mas há desigualdade entre municípios e entre campo e cidade. Indicadores de qualidade de vida: IDH, esperança de vida, mortalidade infantil, alfabetização, saneamento e acesso a serviços. Questões sociais recorrentes: moradia, saneamento, saúde, violência, conflitos fundiários e situação de povos indígenas."],
  ], 'Qual processo explica o crescimento populacional de Mato Grosso nas últimas décadas?', 'Principalmente os fluxos migratórios para a fronteira agrícola (sulistas, nordestinos, paulistas), atraídos por terras, colonização e empregos no agronegócio.', [IBGE_MT]),

  'mt-7': L([
    ['Urbanização rápida e concentrada', "Mais de 80% da população vive em cidades. A urbanização foi acelerada a partir dos anos 1970-80, com surgimento de cidades planejadas ou espontâneas ao longo de rodovias (Sinop, Sorriso, Lucas do Rio Verde, Alta Floresta). Cuiabá e Várzea Grande formam a principal conurbação e a região metropolitana do Vale do Rio Cuiabá."],
    ['Problemas urbanos', "Crescimento sem infraestrutura: déficit de saneamento, ocupações irregulares, transporte coletivo limitado, ilhas de calor (Cuiabá é uma das capitais mais quentes do país) e pressão sobre áreas de preservação. Cidades do agronegócio têm renda alta, mas dependem de uma única cadeia econômica."],
  ], 'Cite uma característica da urbanização mato-grossense.', 'Foi rápida e ligada à fronteira agrícola: cidades surgiram e cresceram ao longo de rodovias e polos do agronegócio, enquanto Cuiabá e Várzea Grande formam a principal conurbação do estado.', [IBGE_MT]),

  'mt-8': L([
    ['Espaço agrário e inserção internacional', "Mato Grosso é o maior produtor nacional de soja, milho e algodão e tem o maior rebanho bovino do país. A produção é voltada à exportação (China, União Europeia, Oriente Médio). O modelo é de grandes propriedades mecanizadas, com tecnologia, e convive com agricultura familiar e assentamentos."],
    ['Questões do agrário', "Concentração fundiária, conflitos por terra, desmatamento e queimadas, uso de agrotóxicos, pressão sobre terras indígenas, rastreabilidade na pecuária e acordos comerciais com exigências ambientais (como o regulamento europeu antidesmatamento). A logística e a dependência de poucos mercados são vulnerabilidades."],
  ], 'O que é a fronteira agrícola no contexto mato-grossense?', 'É a frente de expansão de áreas para produção agropecuária, que avançou do Centro-Sul ao Norte do estado, incorporando áreas de Cerrado e Amazônia.', [IBGE_MT]),

  'mt-9': L([
    ['Povos indígenas e ocupação antes dos portugueses', "O território que hoje é Mato Grosso era habitado por centenas de povos de troncos linguísticos como tupi, jê, aruak e karib, com agricultura, caça, pesca e redes de troca. Não era “vazio”: a colonização portuguesa se deu sobre territórios ocupados."],
    ['Missões e bandeiras', "No século XVII, missões religiosas (jesuítas espanhóis nas Missões de Chiquitos e Moxos, na fronteira oeste) catequizaram e usaram trabalho indígena. As bandeiras paulistas avançaram no interior para capturar indígenas, depois para procurar ouro. No século XVIII a descoberta de ouro por Pascoal Moreira Cabral (1718-1719) abriu a ocupação luso-brasileira de Mato Grosso."],
  ], 'Qual foi o principal estímulo para a ocupação luso-brasileira do território de Mato Grosso no século XVIII?', 'A descoberta e exploração do ouro, a partir de 1718-1719, nas margens do rio Coxipó, que originou Cuiabá.', [['Governo de Mato Grosso — história', 'https://www.mt.gov.br']]),

  'mt-10': L([
    ['De arraial a vila', "O arraial do Cuiabá surgiu em 1719 após a descoberta de ouro por Pascoal Moreira Cabral. Em 1722, Miguel Sutil achou outras jazidas, no Forquilha. Em 1727 foi elevado à vila, como Vila Real do Senhor Bom Jesus do Cuiabá. A elevação a vila instalou câmara, justiça e a cobrança de tributos, como o quinto."],
    ['Capitania e Vila Bela', "A Capitania de Mato Grosso foi criada em 1748, desmembrada de São Paulo. Vila Bela da Santíssima Trindade, fundada em 1752 pelo primeiro governador, Antônio Rolim de Moura, foi capital até 1835 e fortificou a fronteira com os domínios espanhóis."],
    ['Mão de obra e da mineração à pecuária', "A mineração usou trabalho indígena e, sobretudo, africano escravizado. Houve quilombos, como o Quariterê, liderado por Tereza de Benguela. Com a decadência do ouro no fim do século XVIII, cresceram a agricultura de subsistência e a pecuária, que se afirmou no século XIX, principalmente no Pantanal."],
  ], 'Por que Vila Bela da Santíssima Trindade foi fundada em 1752?', 'Para ser sede da recém-criada Capitania de Mato Grosso e reforçar a defesa da fronteira oeste contra a presença espanhola.', [['Governo de Mato Grosso — história', 'https://www.mt.gov.br']]),

  'mt-11': L([
    ['Império e República', "A Rusga (1834) foi revolta em Cuiabá contra a presença e o poder de portugueses na política e no comércio, com forte sentimento antilusitano e ligada à transição pós-Independência. Em 1835 a capital foi transferida de Vila Bela para Cuiabá."],
    ['Guerra da Tríplice Aliança (1864-1870)', "O Paraguai invadiu Mato Grosso em dezembro de 1864 (Forte Coimbra, Albuquerque, Corumbá, Miranda). A Retirada da Laguna (1867) é episódio célebre. A guerra devastou a região, mas a abertura da navegação do rio Paraguai estimulou a economia no pós-guerra."],
    ['Século XX', "No Estado Novo, a Marcha para o Oeste (1938) estimulou a ocupação do interior, com a Fundação Brasil Central e a Expedição Roncador-Xingu (1943). Em 1977, no regime militar, a Lei Complementar 31 dividiu o estado e criou Mato Grosso do Sul (instalado em 1979). A política fundiária (colonização, grilagem, assentamentos) gerou tensões sociais no campo."],
  ], 'Em que ano ocorreu o desmembramento que criou Mato Grosso do Sul e em que governo?', 'Foi criado em 1977 (Lei Complementar nº 31), durante o regime militar, no governo Geisel; foi instalado em 1979.', [['Presidência da República — Lei Complementar 31/1977', 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp31.htm']]),

  'etica-1': L([
    ['Filosofia e tipos de conhecimento', "Filosofia é reflexão crítica e racional sobre a realidade, o conhecimento e a ação. Distinguem-se: conhecimento empírico (do senso comum, vivido), científico (método, testabilidade, verificação) e filosófico (questiona pressupostos e conceitos)."],
    ['Correntes epistemológicas', "Racionalismo (Descartes): a razão é fonte principal do conhecimento. Empirismo (Locke, Hume): o conhecimento vem da experiência sensível. Criticismo (Kant): sintetiza as duas, afirmando que conhecer exige experiência e formas da razão (“pensamentos sem conteúdo são vazios; intuições sem conceitos são cegas”)."],
    ['Desafios contemporâneos', "Pós-verdade: emoções e crenças pesam mais que fatos objetivos na formação da opinião; relaciona-se a desinformação e câmaras de eco. Inteligência artificial: pergunta sobre autoria, viés algorítmico, responsabilidade, transparência, alucinações e deepfakes. A ética pede verificação de fontes e uso responsável de ferramentas."],
  ], 'Qual corrente afirma que o conhecimento nasce da experiência sensível?', 'O empirismo (Locke, Hume). O racionalismo prioriza a razão, e o criticismo kantiano combina ambos.', [['Stanford Encyclopedia of Philosophy', 'https://plato.stanford.edu']]),

  'etica-2': L([
    ['Assédio moral e sexual', "Assédio moral é conduta abusiva, repetida, que humilha, constrange ou isola o servidor e viola sua dignidade. Assédio sexual é constranger alguém com intuito de vantagem sexual, prevalecendo-se de hierarquia ou ascendência (crime do art. 216-A do Código Penal). A Lei 14.540/2023 instituiu programa de prevenção e enfrentamento do assédio sexual e de outras formas de violência na administração pública."],
    ['Medidas de enfrentamento', "Prevenção (capacitação, campanhas, código de conduta), canais seguros de denúncia, acolhimento, apuração em processo administrativo disciplinar com contraditório e ampla defesa, proteção a quem denuncia e responsabilização. A ética pública valoriza respeito, impessoalidade, probidade, urbanidade e as virtudes de honestidade, prudência, justiça e coragem."],
  ], 'Cite duas medidas de enfrentamento ao assédio moral no serviço público.', 'Prevenção por capacitação e código de conduta, canais seguros de denúncia com proteção ao denunciante, apuração em processo disciplinar e responsabilização do agente.', [['Lei 14.540/2023', 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/L14540.htm']]),

  'atual-1': L([
    ['Como estudar atualidades', "Em provas de órgãos ambientais, atualidades focam em meio ambiente, clima, economia, política pública, cultura e Mato Grosso. Faça um caderno com: o fato, a data, os atores, a causa e a consequência. Ligue cada fato a um tema do edital."],
    ['Temas de alta incidência', "COP30 em Belém (novembro de 2025) e a agenda de adaptação, financiamento e florestas; Lei Geral do Licenciamento Ambiental (Lei 15.190/2025); reforma tributária do consumo (EC 132/2023); eventos extremos (secas, incêndios no Pantanal e na Amazônia em 2024); transição energética; inteligência artificial e regulação; debates sobre desmatamento, regularização fundiária e agronegócio em Mato Grosso."],
  ], 'Por que a COP30 em Belém tem relevância para provas ambientais?', 'Foi a conferência climática da ONU realizada na Amazônia (novembro de 2025), com pauta de implementação do Acordo de Paris, florestas, adaptação e financiamento climático.', [['COP30 — Ministério do Meio Ambiente', 'https://www.gov.br/mma/pt-br/assuntos/cop30/cop30/']]),

  'leg-1': L([
    ['LC 112/2002 — Código de Ética Funcional', "A lei complementar fixa princípios e deveres do servidor civil do Poder Executivo estadual e prevê comissões de ética. Estude: princípios (legalidade, impessoalidade, moralidade, publicidade, eficiência), deveres (urbanidade, lealdade, zelo, sigilo), vedações (uso do cargo em proveito próprio, recebimento de vantagem indevida) e o processo ético na comissão. Leia o texto integral na PGE-MT."],
    ['Como cai em prova', "Questões trazem situações do cotidiano (aceitar presente, usar carro oficial, divulgar informação reservada) e pedem o dever violado. Associe a conduta a um princípio e distinga infração ética (comissão de ética) de infração disciplinar (processo administrativo disciplinar)."],
  ], 'Aceitar presente de empresa que tem interesse em decisão do servidor viola qual ideia central da ética pública?', 'A moralidade e a impessoalidade: a vantagem indevida compromete a imparcialidade e é vedada pelo código de ética.', [['PGE-MT — Ética', 'https://www.pge.mt.gov.br/pt/etica']]),

  'leg-2': L([
    ['LC 04/1990 — Estatuto dos Servidores de MT', "Regime jurídico dos servidores da administração direta, autarquias e fundações. Estude os eixos: provimento (nomeação, promoção, readaptação, reversão, aproveitamento, reintegração, recondução), vacância (exoneração, demissão, aposentadoria, falecimento e outras), direitos e vantagens (vencimento, férias, licenças), deveres e proibições, regime disciplinar e processo administrativo disciplinar."],
    ['Pontos clássicos', "Diferença entre exoneração (não punitiva) e demissão (pena); estágio probatório e estabilidade (CF, art. 41); acumulação lícita de cargos (CF, art. 37, XVI); penalidades (advertência, suspensão, demissão, cassação de aposentadoria). Verifique o texto atualizado, porque a lei foi alterada várias vezes."],
  ], 'Qual a diferença entre exoneração e demissão?', 'Exoneração é desligamento sem caráter punitivo (a pedido ou de ofício, por exemplo no estágio probatório ou cargo em comissão). Demissão é pena disciplinar aplicada após processo administrativo.', [['Assembleia Legislativa de MT', 'https://www.al.mt.gov.br']]),

  'leg-3': L([
    ['LC 38/1995 — Código Estadual do Meio Ambiente', "Estabelece a Política Estadual do Meio Ambiente, os princípios (desenvolvimento sustentável, prevenção, poluidor-pagador), a estrutura do SISEMA/CONSEMA, os instrumentos (zoneamento, licenciamento, avaliação de impacto, monitoramento, unidades de conservação) e as sanções. Foi modificado por leis posteriores, então confira as alterações."],
    ['Relação com outras normas', "Complementa a Lei 6.938/1981 (PNMA) e a LC 140/2011 (competências). O licenciamento estadual segue também o Decreto 697/2020 e a Lei 15.190/2025 naquilo que for norma geral federal."],
  ], 'Qual princípio impõe ao poluidor arcar com os custos da prevenção e reparação do dano?', 'O princípio do poluidor-pagador.', [SEMA]),

  'ti0-1.1': L([
    ['Segurança cibernética e proteção de dados', "Segurança cibernética protege confidencialidade, integridade e disponibilidade (tríade CID). A LGPD (Lei 13.709/2018, Brasil) e o GDPR (regulamento da União Europeia) estabelecem princípios para tratamento de dados pessoais, direitos do titular, bases legais e deveres do controlador e do operador. Ambos têm alcance extraterritorial em hipóteses definidas."],
    ['Zero Trust, firewall, IDS/IPS e WAF', "Zero Trust parte de “nunca confie, sempre verifique”: autenticação forte, privilégio mínimo, microssegmentação e verificação contínua. Firewall filtra tráfego por regras. IDS detecta intrusões; IPS detecta e bloqueia. WAF protege aplicações web (SQL injection, XSS) na camada 7."],
    ['Vulnerabilidades e pentest', "Análise de vulnerabilidades procura e classifica falhas (CVE, CVSS). Teste de penetração simula ataque controlado, com escopo e autorização formais, para explorar falhas e medir impacto. Resultados viram plano de correção."],
  ], 'Qual é a diferença entre IDS e IPS?', 'O IDS apenas detecta e alerta sobre atividade suspeita; o IPS fica em linha no tráfego e consegue bloquear a ameaça.', [['ABNT NBR ISO/IEC 27001', 'https://www.iso.org/standard/27001'], ['LGPD', 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm']]),

  'ti2-3.1': L([
    ['Tipos de aprendizado', "Supervisionado usa dados rotulados para prever (classificação e regressão). Não supervisionado busca estrutura em dados sem rótulo (clusterização, redução de dimensionalidade). Por reforço aprende por tentativa, com recompensas (agente e ambiente)."],
    ['Deep Learning, NLP e visão', "Redes neurais profundas têm várias camadas e aprendem representações. NLP processa linguagem (tokenização, embeddings, transformers, modelos de linguagem). Visão computacional interpreta imagens (CNN, detecção, segmentação). Risco: viés nos dados, sobreajuste (overfitting) e falta de explicabilidade."],
  ], 'Qual tipo de aprendizado usa dados rotulados?', 'O aprendizado supervisionado.', [['IBM — Machine Learning', 'https://www.ibm.com/topics/machine-learning']]),

  'ti3-4.1': L([
    ['Arquitetura IoT', "Sensores coletam dados do ambiente; o gateway agrega, traduz protocolos (MQTT, CoAP, Zigbee, LoRaWAN) e envia ao destino; a nuvem armazena, processa e analisa. Atuadores executam ações."],
    ['Edge Computing', "Processa dados perto da origem, reduzindo latência e tráfego, e mantendo operação mesmo com conexão instável. Em segurança IoT: autenticação de dispositivos, atualização de firmware e segmentação de rede."],
  ], 'Qual a vantagem da edge computing em IoT?', 'Reduz latência e tráfego para a nuvem porque processa dados perto dos sensores.', [['AWS — O que é IoT', 'https://aws.amazon.com/pt/what-is/iot/']]),

  'ti4-5.1': L([
    ['Busca e ordenação', "Busca linear O(n); busca binária O(log n), exige dados ordenados. Bubble sort O(n²) no pior caso e é simples; Quick sort em média O(n log n), pior caso O(n²); Merge sort O(n log n) estável."],
    ['Estruturas de dados', "Lista, pilha (LIFO), fila (FIFO), árvore (AVL é binária de busca auto-balanceada; B+ guarda dados nas folhas e é usada em índices de bancos), tabela hash (acesso médio O(1) com tratamento de colisões)."],
    ['Complexidade', "Notação O descreve o crescimento no pior caso. Ordem: O(1) < O(log n) < O(n) < O(n log n) < O(n²). Ignora constantes."],
  ], 'Qual a complexidade média do Quick Sort e do pior caso?', 'Média O(n log n); pior caso O(n²), quando o pivô é sempre o menor ou o maior elemento.', [['Khan Academy — Algoritmos', 'https://pt.khanacademy.org/computing/computer-science/algorithms']]),

  'ti4-5.2': L([
    ['Processos, memória e escalonamento', "Processo é programa em execução; thread é fluxo dentro do processo. Escalonadores: FIFO, Round Robin (quantum), prioridades. Memória: paginação, segmentação, memória virtual, swap. Deadlock exige exclusão mútua, posse e espera, não preempção e espera circular."],
    ['Linux e Windows Server', "Comandos básicos de Linux: ls, cd, pwd, cp, mv, rm, chmod, chown, grep, ps, top, systemctl. Permissões rwx para dono, grupo e outros (chmod 755). Windows Server: Active Directory (serviço de diretório, domínio, GPO), DNS (resolução de nomes) e DHCP (atribuição de IP). Sistemas de arquivos: ext4, XFS, NTFS, FAT32."],
  ], 'O que significa chmod 755 em um arquivo?', 'O dono tem leitura, escrita e execução (7); grupo e outros têm leitura e execução (5).', [['Linux man pages', 'https://man7.org/linux/man-pages/']]),

  'trans0-1': L([
    ['Funções administrativas', "O processo administrativo é composto por planejamento (definir objetivos e meios), organização (estruturar recursos e responsabilidades), direção (liderar e motivar pessoas) e controle (medir, comparar com o planejado e corrigir). Formam o ciclo PDCA ampliado."],
    ['Níveis', "Planejamento estratégico (longo prazo, alta direção), tático (departamentos) e operacional (rotinas). No setor público, o planejamento se materializa no PPA, na LDO e na LOA."],
  ], 'Qual função administrativa compara resultados com o planejado e corrige desvios?', 'O controle.', [['ENAP', 'https://www.enap.gov.br']]),
};
