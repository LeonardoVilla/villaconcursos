import { L, type LessonMap } from './lesson-type';

const P = 'https://www.planalto.gov.br/ccivil_03';
const MT = ['Governo de Mato Grosso', 'https://www.mt.gov.br'] as [string, string];
const IBGE = ['IBGE Cidades — Mato Grosso', 'https://cidades.ibge.gov.br/brasil/mt/panorama'] as [string, string];
const MANUAL = ['Manual de Redação da Presidência', 'https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/manual-de-redacao'] as [string, string];
const SEP = ['Stanford Encyclopedia of Philosophy', 'https://plato.stanford.edu'] as [string, string];

export const lessonsCmcComum: LessonMap = {
  /* ---------- Língua Portuguesa ---------- */
  'cmc-port-1': L([
    ['Como ler gêneros diversos', "Identifique o gênero (notícia, crônica, artigo de opinião, charge, tirinha, poema, texto legal, ofício) antes de responder. Cada um tem finalidade e linguagem próprias: a notícia informa, o artigo de opinião defende ponto de vista, a crônica comenta o cotidiano com subjetividade, a charge usa humor e crítica."],
    ['Tese, inferência e linguagem não verbal', "Localize a tese e os argumentos. Inferência é conclusão que o texto autoriza; extrapolação é o que ele não permite. Em charges e tirinhas, relacione imagem e texto: ironia, intertextualidade e contexto histórico ajudam a construir o sentido. Em textos poéticos, observe figuras de linguagem (metáfora, metonímia, ironia, antítese, hipérbole)."],
  ], 'Se uma alternativa afirma algo que o texto não diz nem permite concluir, como se classifica?', 'Como extrapolação, que deve ser descartada: a interpretação precisa ter apoio em trecho do texto.', [MANUAL]),

  'cmc-port-2': L([
    ['Condições de produção', "Todo texto surge numa situação: quem fala (emissor), a quem (interlocutor), para quê (finalidade), onde circula (suporte) e em que contexto histórico e social. Mudar essas condições muda o texto: um pedido a um superior difere de uma mensagem a um colega."],
    ['Marcas composicionais', "São traços estruturais do gênero: o ofício tem vocativo, corpo e fecho; a receita tem lista de ingredientes e modo de preparo; a carta do leitor tem saudação e opinião; a notícia usa lide (o quê, quem, quando, onde, como e por quê). A tipologia (narração, descrição, dissertação, injunção, exposição) é a forma predominante do trecho; o gênero é o texto completo."],
  ], 'Qual a diferença entre gênero textual e tipo textual?', 'Gênero é a forma socialmente reconhecida do texto (notícia, ofício, receita); tipo é a estrutura predominante (narração, descrição, dissertação, injunção).', [MANUAL]),

  'cmc-port-3': L([
    ['Variedades linguísticas', "A língua varia por região (diatópica: sotaques e regionalismos), grupo social (diastrática), situação de uso (diafásica: formal e informal) e tempo (diacrônica). Nenhuma variedade é errada em si; há adequação ou inadequação à situação. A norma-padrão é o modelo prescrito pela gramática; a norma culta é a variedade usada por falantes escolarizados."],
    ['Registros', "Registro formal: vocabulário preciso, concordância padrão, sem gírias ou abreviações; usado em documentos, ofícios e atendimento. Informal: gírias, contrações, marcas de oralidade. Preconceito linguístico é discriminar o falante por sua variedade. Em redação oficial, adote a impessoalidade, a clareza e o padrão culto."],
  ], 'Qual variedade linguística é associada a diferenças regionais?', 'A variedade diatópica (regional), como sotaques e regionalismos.', [MANUAL]),

  'cmc-port-4': L([
    ['Fonética e morfologia', "Sílaba tônica: oxítona (café), paroxítona (amigo), proparoxítona (lâmpada, sempre acentuada). Acentuam-se oxítonas terminadas em a, e, o, em (e seguidas de s), e paroxítonas terminadas em l, n, r, x, i(s), us, ps, ão(s), um(ns), ditongos crescentes. Formação de palavras: derivação (prefixal, sufixal, parassintética, regressiva, imprópria) e composição (justaposição, aglutinação). Flexão: gênero, número, grau, modo, tempo, pessoa."],
    ['Sintaxe', "Concordância verbal: sujeito composto → plural; haver existencial e fazer (tempo) → singular; “a maioria dos” admite ambos. Concordância nominal: “é proibido entrada” (sem artigo) vs “é proibida a entrada”; “meio” advérbio é invariável; “anexo” e “obrigado” concordam. Regência verbal: assistir (ver) com a; assistir (ajudar) sem preposição; aspirar (desejar) com a; visar (almejar) com a; preferir uma coisa a outra; obedecer a; chegar a. Colocação pronominal: próclise com palavras negativas, advérbios, pronomes relativos e conjunções subordinativas; ênclise no início de frase; mesóclise no futuro, em registro formal."],
    ['Semântica', "Polissemia: uma palavra com vários sentidos. Homonímia: mesma grafia ou som, significados distintos (manga fruta/manga da camisa). Paronímia: parecidas (ratificar/retificar, emergir/imergir, infligir/infringir, descrição/discrição). Denotação é o sentido literal; conotação, o figurado."],
  ], 'Qual a diferença entre “ratificar” e “retificar”?', 'Ratificar é confirmar; retificar é corrigir.', [MANUAL]),

  'cmc-port-5': L([
    ['Coesão e coerência', "Coesão é a ligação formal entre partes do texto (conectivos, pronomes, elipse, repetição, sinônimos). Coerência é a lógica de sentido: ideias que se articulam sem contradição, com progressão e relação com o mundo real. Um texto pode ser coeso e incoerente, ou coerente com poucos conectivos."],
    ['Intertextualidade e argumentação', "Intertextualidade: diálogo entre textos (citação, paráfrase, paródia, alusão). Argumentação: sustenta uma tese com argumentos de autoridade, exemplificação, causa e consequência, comparação e dados. Os conectivos expressam relações: adição (e, além disso), oposição (mas, porém), concessão (embora), conclusão (logo), causa (porque), finalidade (para que), condição (se, caso)."],
  ], 'Qual conectivo indica concessão?', '“Embora” (também “ainda que”, “mesmo que”, “apesar de que”).', [MANUAL]),

  'cmc-port-6': L([
    ['Vírgula', "Usa-se para separar elementos de uma enumeração, o vocativo, o aposto, o adjunto adverbial deslocado, expressões explicativas (isto é, ou seja) e orações adjetivas explicativas. Não se separa com vírgula o sujeito do verbo, o verbo do complemento nem o termo regente do regido. Orações adjetivas restritivas não levam vírgula."],
    ['Outros sinais', "Ponto e vírgula separa itens de uma enumeração complexa ou orações longas; dois-pontos antecedem explicação, citação ou enumeração; travessão marca fala ou isola explicações; aspas marcam citações e ironia; parênteses inserem informação secundária. A pontuação altera sentido: “Não, espere” e “Não espere”."],
  ], 'Qual a regra sobre a vírgula entre sujeito e verbo?', 'Não se coloca vírgula entre sujeito e verbo, salvo se houver termo intercalado, que fica entre vírgulas.', [MANUAL]),

  'cmc-port-7': L([
    ['Discurso direto, indireto e indireto livre', "Direto: reproduz a fala literal, com travessão ou aspas e verbos de elocução (disse, perguntou). Indireto: o narrador transmite a fala, com oração subordinada (disse que...), mudando pessoas, tempos e advérbios. Indireto livre: mistura a voz do narrador e a do personagem, sem verbo de elocução."],
    ['Transposição', "Ao passar de direto para indireto: pronome de 1ª e 2ª pessoa passa para 3ª; presente vira pretérito imperfeito; pretérito perfeito vira mais-que-perfeito; “aqui” vira “ali”; “hoje” vira “naquele dia”. Exemplo: Ele disse: “Eu estou cansado” → Ele disse que estava cansado."],
  ], 'Transponha para o discurso indireto: Maria disse: “Venho amanhã”.', 'Maria disse que viria no dia seguinte.', [MANUAL]),

  /* ---------- Raciocínio lógico ---------- */
  'cmc-logica-1': L([
    ['Operações', "União (A ∪ B): elementos de A ou B. Interseção (A ∩ B): elementos comuns. Diferença (A − B): elementos de A que não estão em B. Complementar: o que falta em relação ao universo. Fórmula essencial: n(A ∪ B) = n(A) + n(B) − n(A ∩ B)."],
    ['Problemas com diagramas', "Comece pela interseção e vá para fora. Exemplo: de 100 pessoas, 60 leem jornal, 50 leem revista e 20 leem os dois. Só jornal: 40; só revista: 30; ambos: 20; nenhum: 100 − (40 + 30 + 20) = 10. Para três conjuntos: n(A∪B∪C) = soma − pares + tripla."],
  ], 'Em um grupo, 30 praticam futebol, 25 vôlei e 10 os dois. Quantos praticam ao menos um esporte?', '30 + 25 − 10 = 45.', [['Khan Academy', 'https://pt.khanacademy.org/math']]),

  'cmc-logica-2': L([
    ['Sequências', "Descubra o padrão: progressão aritmética (soma constante r; an = a1 + (n−1)·r; soma Sn = (a1 + an)·n / 2), progressão geométrica (razão q; an = a1·q^(n−1)), sequências alternadas (duas regras intercaladas), diferenças de segunda ordem, Fibonacci."],
    ['Problemas numéricos', "Traduza para equações, use regra de três (direta e inversa), porcentagem (aumentos sucessivos multiplicam: +10% e +20% = 1,1 × 1,2 = 1,32, ou seja 32%), média ponderada e razão. Atenção a unidades e ao que se pede."],
  ], 'Qual o 10º termo da PA 3, 7, 11, ...?', 'a10 = 3 + 9 × 4 = 39.', [['Khan Academy', 'https://pt.khanacademy.org/math']]),

  'cmc-logica-3': L([
    ['Proposições e conectivos', "Proposição é sentença declarativa que pode ser verdadeira ou falsa. Conectivos: negação (¬p), conjunção (p ∧ q, verdadeira só se ambas verdadeiras), disjunção (p ∨ q, falsa só se ambas falsas), condicional (p → q, falsa só se p verdadeira e q falsa), bicondicional (p ↔ q, verdadeira se mesmos valores), disjunção exclusiva (p ⊻ q, verdadeira se valores diferentes)."],
    ['Tautologia e condições', "Tautologia: sempre verdadeira; contradição: sempre falsa; contingência: depende. Em “se p então q”, p é condição suficiente para q e q é condição necessária para p. Número de linhas da tabela-verdade: 2^n, em que n é o número de proposições simples."],
  ], 'Quando uma condicional “se p, então q” é falsa?', 'Somente quando p é verdadeira e q é falsa.', [['Khan Academy', 'https://pt.khanacademy.org/math']]),

  'cmc-logica-4': L([
    ['Argumentos', "Argumento é um conjunto de premissas que sustentam uma conclusão. É válido se, supondo as premissas verdadeiras, a conclusão necessariamente é verdadeira. Validade não é verdade: um argumento válido pode ter conclusão falsa se uma premissa for falsa. Para testar: assuma premissas verdadeiras e verifique se a conclusão é forçada."],
    ['Diagramas lógicos', "Premissas “Todo A é B”, “Algum A é B” e “Nenhum A é B” são representadas por conjuntos. Silogismo: Todo A é B; Todo B é C; logo, todo A é C. “Algum A é B” é equivalente a “algum B é A”. Evite concluir “todo B é A” a partir de “todo A é B”."],
  ], 'De “Todo servidor é cidadão” e “Todo cidadão tem direitos”, o que se conclui?', 'Todo servidor tem direitos.', [['Khan Academy', 'https://pt.khanacademy.org/math']]),

  'cmc-logica-5': L([
    ['Equivalências', "p → q ≡ ¬p ∨ q ≡ ¬q → ¬p (contrapositiva). Negação da condicional: ¬(p → q) ≡ p ∧ ¬q. Leis de De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q e ¬(p ∨ q) ≡ ¬p ∧ ¬q. Bicondicional: p ↔ q ≡ (p → q) ∧ (q → p)."],
    ['Implicação', "Há implicação lógica quando a conclusão é verdadeira em todos os casos em que as premissas são. Modus ponens: p → q, p, logo q. Modus tollens: p → q, ¬q, logo ¬p. Falácias: afirmar o consequente e negar o antecedente."],
  ], 'Qual a negação de “Se chove, então o evento é cancelado”?', 'Chove e o evento não é cancelado.', [['Khan Academy', 'https://pt.khanacademy.org/math']]),

  'cmc-logica-6': L([
    ['Quantificadores', "Universal: ∀ (todo, qualquer). Existencial: ∃ (existe, algum, pelo menos um). Negações: ¬(∀x P(x)) ≡ ∃x ¬P(x); ¬(∃x P(x)) ≡ ∀x ¬P(x). Em linguagem natural: a negação de “Todo servidor é pontual” é “Algum servidor não é pontual”; a negação de “Algum aluno faltou” é “Nenhum aluno faltou”."],
  ], 'Qual a negação de “Nenhum candidato foi aprovado”?', '“Algum candidato foi aprovado” (pelo menos um).', [['Khan Academy', 'https://pt.khanacademy.org/math']]),

  'cmc-logica-7': L([
    ['Princípios e fórmulas', "Princípio aditivo: ações alternativas, somam-se as possibilidades. Princípio multiplicativo: ações em sequência, multiplicam-se. Permutação simples: n!. Permutação com repetição: n!/(a!·b!...). Arranjo (importa a ordem): A(n,p) = n!/(n−p)!. Combinação (não importa a ordem): C(n,p) = n!/(p!(n−p)!)."],
    ['Como escolher', "Pergunte-se: trocar a ordem gera outro resultado? Se sim, arranjo ou permutação; se não, combinação. Exemplo: formar uma comissão de 3 entre 8: C(8,3) = 56. Escolher presidente, secretário e tesoureiro entre 8: A(8,3) = 336."],
  ], 'De quantas maneiras 5 pessoas podem formar uma fila?', '5! = 120.', [['Khan Academy', 'https://pt.khanacademy.org/math']]),

  'cmc-logica-8': L([
    ['Probabilidade', "P(A) = casos favoráveis / casos possíveis (espaço equiprovável). Complementar: P(não A) = 1 − P(A). União: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Eventos independentes: P(A ∩ B) = P(A)·P(B). Condicional: P(A|B) = P(A ∩ B)/P(B)."],
    ['Exemplo', "Em um dado honesto, a probabilidade de sair número par é 3/6 = 1/2. A de sair 6 em dois lançamentos independentes é (1/6)·(1/6) = 1/36. A de ao menos uma cara em três moedas é 1 − (1/2)³ = 7/8."],
  ], 'Qual a probabilidade de obter soma 7 no lançamento de dois dados?', '6/36 = 1/6.', [['Khan Academy', 'https://pt.khanacademy.org/math']]),

  /* ---------- Informática ---------- */
  'cmc-info-1': L([
    ['Hardware', "CPU (processa), memória RAM (volátil, trabalho), ROM/BIOS-UEFI, armazenamento (HD, SSD, pen drive), placa-mãe, placa de vídeo. Entrada: teclado, mouse, scanner, microfone. Saída: monitor, impressora, caixas de som. Dispositivos de entrada e saída: touchscreen, pen drive, impressora multifuncional. Unidades: bit, byte (8 bits), KB, MB, GB, TB (potências de 1024 em muitos contextos)."],
    ['Software', "Básico (sistema operacional, drivers), aplicativos (editores, navegadores) e utilitários (antivírus, compactadores). Licenças: proprietário, livre, de código aberto, freeware, shareware."],
  ], 'A memória RAM mantém os dados quando o computador é desligado?', 'Não. É memória volátil; dados permanentes ficam em armazenamento como SSD e HD.', [['Microsoft Learn', 'https://learn.microsoft.com/pt-br/']]),

  'cmc-info-2': L([
    ['Windows 10 e 11', "Área de trabalho, Menu Iniciar, barra de tarefas, Explorador de Arquivos, Painel de Controle e Configurações, Gerenciador de Tarefas (Ctrl+Shift+Esc). Atalhos: Win+D (área de trabalho), Win+E (Explorador), Win+L (bloquear), Alt+Tab (alternar janelas), Win+Shift+S (captura de tela), F2 (renomear), Shift+Del (exclui sem lixeira), Ctrl+C/X/V/Z/Y."],
    ['Linux', "Distribuições (Ubuntu, Debian, Fedora), kernel livre, sistema de arquivos em árvore (/ raiz, /home, /etc, /bin), terminal, permissões rwx. Comandos: ls, cd, pwd, cp, mv, rm, mkdir, chmod, sudo. Gerenciadores de pacote: apt, dnf."],
  ], 'Qual atalho do Windows bloqueia a sessão do usuário?', 'Win + L.', [['Microsoft Learn', 'https://learn.microsoft.com/pt-br/']]),

  'cmc-info-3': L([
    ['Word e Writer', "Formatação de caracteres e parágrafos, estilos, cabeçalho e rodapé, numeração de páginas, sumário, mala direta, revisão e controle de alterações, tabelas. Atalhos do Word: Ctrl+N (novo), Ctrl+B (negrito), Ctrl+I (itálico), Ctrl+U (sublinhado), Ctrl+E (centralizar), Ctrl+L (esquerda), Ctrl+R (direita), Ctrl+J (justificar), Ctrl+F (localizar), Ctrl+H (substituir), Ctrl+S (salvar), F12 (salvar como). Writer salva em .odt por padrão."],
    ['Excel e Calc', "Fórmulas iniciam com =. Funções: SOMA, MÉDIA, MÁXIMO, MÍNIMO, SE, SOMASE, CONT.SE, CONT.VALORES, PROCV. Referência relativa (A1), absoluta ($A$1) e mista ($A1, A$1); F4 alterna. Em Calc, o separador de argumentos é ponto e vírgula. Gráficos, filtros, tabelas dinâmicas. Calc salva em .ods."],
    ['PowerPoint e Impress', "Slides, layouts, mestre de slides, transições e animações. F5 inicia a apresentação do começo; Shift+F5, do slide atual. Impress salva em .odp."],
  ], 'Qual referência é usada para fixar uma célula em uma fórmula?', 'A referência absoluta, como $A$1; a tecla F4 alterna os tipos de referência.', [['Suporte Microsoft Office', 'https://support.microsoft.com/pt-br/office']]),

  'cmc-info-4': L([
    ['TCP/IP e protocolos', "Camadas do TCP/IP: aplicação, transporte, internet, acesso à rede. HTTP (80), HTTPS (443), FTP (20/21), SSH (22), SMTP (25/587), POP3 (110), IMAP (143), DNS (53), DHCP (67/68). IPv4 tem 32 bits; IPv6, 128 bits. Intranet é rede interna; extranet permite acesso externo controlado; VPN cria túnel seguro."],
    ['Navegadores e e-mail', "Edge, Chrome e Firefox têm abas, histórico, favoritos, modo anônimo (não impede que o provedor ou empregador veja a navegação), cookies e cache. No e-mail, SMTP envia, POP3 baixa as mensagens, IMAP sincroniza com o servidor. Campos: Para, Cc (cópia), Cco (cópia oculta). Ferramentas de colaboração: Teams, Meet, Zoom, drives compartilhados."],
  ], 'Qual protocolo envia e-mails e qual os sincroniza mantendo cópias no servidor?', 'SMTP envia; IMAP sincroniza com o servidor (POP3 baixa para o dispositivo).', [['Mozilla MDN', 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP']]),

  'cmc-info-5': L([
    ['Computação em nuvem', "Modelos de serviço: IaaS (infraestrutura), PaaS (plataforma) e SaaS (software). Modelos de implantação: pública, privada, híbrida. Características: autosserviço, elasticidade, acesso por rede, serviço medido. Armazenamento em nuvem (OneDrive, Google Drive, Dropbox) permite sincronização e compartilhamento, mas exige cuidado com permissões e privacidade."],
    ['Redes sociais e comunicação digital', "Boas práticas: verificar fontes, evitar compartilhar dados pessoais, atenção a golpes e desinformação, uso institucional com identificação do órgão. Videoconferência e mensageria exigem etiqueta e proteção de informações."],
  ], 'O que é SaaS?', 'Software como serviço: aplicação acessada pela internet, sem instalação local (por exemplo, Microsoft 365 online).', [['NIST — Definição de nuvem', 'https://csrc.nist.gov/pubs/sp/800/145/final']]),

  'cmc-info-6': L([
    ['Ameaças', "Vírus anexa-se a arquivos; worm se replica sozinho pela rede; cavalo de troia disfarça-se de programa útil; ransomware sequestra dados por criptografia e exige resgate; spyware espia; keylogger registra teclas; botnet é rede de máquinas controladas. Phishing é isca por e-mail, SMS ou site falso; engenharia social explora a confiança humana."],
    ['Defesas', "Antivírus, firewall (filtra tráfego), atualizações, senhas fortes e gerenciador, autenticação em dois fatores (2FA), backup (regra 3-2-1: três cópias, duas mídias, uma fora do local), criptografia e cautela com links e anexos. Backup completo, incremental e diferencial têm custos distintos de tempo e espaço."],
  ], 'O que o ransomware faz e qual a principal defesa de recuperação?', 'Criptografa os dados e exige resgate; a defesa de recuperação é ter backups atualizados e isolados.', [['CERT.br — Cartilha de Segurança', 'https://cartilha.cert.br']]),

  'cmc-info-7': L([
    ['LGPD em noções', "A Lei 13.709/2018 protege direitos de liberdade e privacidade no tratamento de dados pessoais. Conceitos: dado pessoal, dado sensível, titular, controlador, operador, encarregado (DPO), ANPD. Bases legais (art. 7º): consentimento, obrigação legal, execução de políticas públicas, contrato, legítimo interesse, entre outras. Princípios: finalidade, adequação, necessidade, livre acesso, qualidade, transparência, segurança, prevenção, não discriminação, responsabilização."],
    ['Direitos do titular', "Confirmação do tratamento, acesso, correção, anonimização ou eliminação, portabilidade, informação sobre compartilhamento, revogação do consentimento. O poder público também se submete à LGPD (arts. 23 a 30)."],
  ], 'Qual órgão fiscaliza a LGPD no Brasil?', 'A ANPD, Autoridade Nacional de Proteção de Dados.', [['LGPD', P + '/_ato2015-2018/2018/lei/l13709.htm']]),

  /* ---------- História e Geografia de MT ---------- */
  'cmc-mt-0': L([
    ['Panorama do período colonial', "A ocupação luso-brasileira de Mato Grosso é resultado das bandeiras paulistas e das monções (viagens fluviais), motivadas inicialmente pela captura de indígenas e, depois, pela busca de ouro. A descoberta de ouro em 1718-1719 deu origem a Cuiabá; a fundação de Vila Bela (1752), a sede da Capitania criada em 1748. O período combina mineração, escravidão indígena e africana, disputa de fronteira com a Espanha e administração colonial."],
  ], 'Quais são as três ideias que organizam o período colonial em MT?', 'Bandeiras e ouro, escravidão indígena e africana e defesa da fronteira oeste com a criação da Capitania.', [MT]),

  'cmc-mt-1': L([
    ['Bandeiras', "Expedições paulistas ao interior para capturar indígenas e buscar metais. Em Mato Grosso, as primeiras entradas do século XVII e início do XVIII aprisionaram indígenas (como os Coxiponé e Paresí) para o trabalho. A descoberta de ouro por Pascoal Moreira Cabral (1718-1719), às margens do Coxipó, transformou a região em foco da mineração."],
    ['Escravidão indígena', "Indígenas foram escravizados nas expedições e nas lavras, enfrentando guerra, doenças e deslocamentos. A população indígena sofreu forte redução, e a historiografia destaca resistências e alianças entre povos."],
  ], 'Quem descobriu ouro às margens do Coxipó?', 'Pascoal Moreira Cabral, na expedição de 1718-1719, o que originou Cuiabá.', [MT]),

  'cmc-mt-2': L([
    ['Cuiabá', "O arraial nasceu em 1719 e a elevação a vila ocorreu em 1727, com o nome Vila Real do Senhor Bom Jesus do Cuiabá. Em 1722, Miguel Sutil descobriu ouro no Forquilha. A instalação da vila trouxe câmara municipal, justiça e fiscalização."],
    ['Tensões políticas', "Os paulistas fundadores dominavam a exploração do ouro e o poder local e resistiam à tributação (o quinto) e à presença das autoridades metropolitanas. A Coroa buscou controlar a mineração, instalar a administração e regular o comércio de abastecimento, o que gerou conflitos entre os mineradores e o governo."],
  ], 'Em que ano Cuiabá foi elevada a vila?', '1727.', [MT]),

  'cmc-mt-3': L([
    ['Capitania de Mato Grosso', "Criada em 1748, desmembrada da Capitania de São Paulo, com primeiro governador Antônio Rolim de Moura Tavares. Fundou-se a Vila Bela da Santíssima Trindade, em 1752, às margens do Guaporé, para servir de capital e de posição defensiva contra as possessões espanholas, em contexto do Tratado de Madri (1750)."],
    ['Importância', "Vila Bela foi capital até 1835. A fronteira exigiu fortes (Príncipe da Beira, 1776-1783), comércio com a região de Belém pelo Madeira e administração militarizada."],
  ], 'Por que Vila Bela foi fundada?', 'Para ser sede da Capitania e fortalecer a defesa da fronteira oeste.', [MT]),

  'cmc-mt-4': L([
    ['Escravidão negra', "A mineração e, depois, os engenhos, fazendas e serviços urbanos usaram trabalho africano e afrodescendente escravizado. Havia resistência: fugas e quilombos como o Quariterê (liderado por Tereza de Benguela, a “Rainha Tereza”), na região do Guaporé, que reunia negros e indígenas e foi destruído por ofensivas coloniais no fim do século XVIII. A abolição ocorreu em 1888."],
  ], 'Qual quilombo mato-grossense é associado a Tereza de Benguela?', 'O Quilombo do Quariterê (também chamado do Piolho), no vale do Guaporé.', [['Fundação Cultural Palmares', 'https://www.gov.br/palmares']]),

  'cmc-mt-5': L([
    ['Crise do ouro', "A partir da segunda metade do século XVIII as jazidas se esgotaram, a população diminuiu e a economia se ruralizou. No século XIX a província sobreviveu da pecuária (especialmente no Pantanal), da agricultura de subsistência, da cana-de-açúcar (engenhos e usinas), da extração de poaia (ipecacuanha), da borracha e, mais tarde, da erva-mate, além do comércio fluvial pela bacia do Paraguai."],
  ], 'Qual atividade ganhou força após o declínio da mineração?', 'A pecuária, ao lado da agricultura de subsistência, da cana, da poaia e do comércio fluvial.', [MT]),

  'cmc-mt-6': L([
    ['A Rusga (1834)', "Movimento político e social em Cuiabá, em maio de 1834, de caráter antilusitano: setores populares e políticos locais atacaram portugueses e comerciantes reinóis, acusados de dominar a economia e os cargos. Houve mortes, saques e a ocupação da cidade. Relaciona-se à crise da Regência e à disputa entre as elites. Após a Rusga, a capital se firmou em Cuiabá (1835)."],
  ], 'Qual o caráter principal da Rusga?', 'Antilusitano: revolta contra o domínio de portugueses na política e no comércio, em Cuiabá, em 1834.', [MT]),

  'cmc-mt-7': L([
    ['Quilombos em MT', "Os quilombos de Mato Grosso reuniam escravizados fugidos e indígenas, como o Quariterê, o de Sepotuba e muitos pequenos agrupamentos próximos a minas e fazendas. Também resistiram os mocambos e comunidades que hoje se reconhecem como quilombolas (como Mata Cavalo, em Nossa Senhora do Livramento). A Constituição de 1988 garante a propriedade das terras a remanescentes (art. 68 do ADCT)."],
  ], 'Qual comunidade quilombola é bastante citada em Mato Grosso?', 'Mata Cavalo, em Nossa Senhora do Livramento (outra referência histórica é o Quariterê).', [['Fundação Cultural Palmares', 'https://www.gov.br/palmares']]),

  'cmc-mt-8': L([
    ['Presidentes de Província', "Durante o Império, a Província de Mato Grosso foi governada por presidentes nomeados pelo imperador. Destaque para Augusto Leverger (futuro Barão de Melgaço), militar e hidrógrafo que presidiu a província em diferentes períodos e liderou a defesa na invasão paraguaia, e José Vieira Couto de Magalhães, que tentou impulsionar a navegação a vapor e a integração fluvial. As realizações incluem fortificações, obras, mapeamento de rios e reorganização administrativa. Confira os nomes específicos do material da banca."],
  ], 'Qual presidente da Província é associado à defesa contra os paraguaios e a hidrografia?', 'Augusto Leverger, o Barão de Melgaço.', [MT]),

  'cmc-mt-9': L([
    ['Guerra da Tríplice Aliança', "O Paraguai de Solano López invadiu Mato Grosso em dezembro de 1864, atacando o Forte de Coimbra (resistência do tenente-coronel Portocarrero) e tomando Albuquerque, Corumbá e Miranda. O Império reorganizou a defesa; a expedição brasileira ao sul de Mato Grosso resultou na Retirada da Laguna (1867), relatada por Taunay. Corumbá foi retomada em 1867. A guerra durou até 1870."],
    ['Efeitos', "Devastação e perda populacional no sul da província, mas, após a guerra, a livre navegação do rio Paraguai aproximou Mato Grosso do mercado do Prata e estimulou Corumbá como porto."],
  ], 'Qual episódio da guerra é narrado por Taunay?', 'A Retirada da Laguna (1867).', [MT]),

  'cmc-mt-10': L([
    ['Economia pós-guerra', "A navegação livre do rio Paraguai impulsionou o comércio, a pecuária e os charqueadores do Pantanal, a extração de poaia e borracha, e a erva-mate (com a Companhia Mate Laranjeira, no sul). Corumbá cresceu como centro comercial e portuário, ligado ao Prata e ao Atlântico. A economia dependia de exportação primária e importação de manufaturas."],
  ], 'Qual cidade se destacou como porto após a guerra?', 'Corumbá, no rio Paraguai.', [MT]),

  'cmc-mt-11': L([
    ['Fim do Império', "A Proclamação da República (1889) foi seguida, em Mato Grosso, por disputas entre grupos locais, adesão de elites e oficiais militares e reorganização de poderes provinciais em estaduais. A província virou estado, com governadores e uma Constituição estadual. Setores de Corumbá e Cuiabá disputaram influência, e a região se integrou ao arranjo oligárquico da Primeira República."],
  ], 'O que mudou institucionalmente em Mato Grosso com a República?', 'A província tornou-se estado da federação, com governador, Constituição estadual e autonomia política.', [MT]),

  'cmc-mt-12': L([
    ['Coronelismo', "Sistema de poder da Primeira República em que os coronéis (grandes proprietários e chefes políticos locais) controlavam votos de cabresto e trocavam apoio por favores do governo estadual. Em Mato Grosso, famílias e facções disputaram o poder, com conflitos armados e intervenções federais. Os coronéis atuavam nas áreas da pecuária, erva-mate e usinas."],
  ], 'Qual a base do coronelismo?', 'Troca de apoio eleitoral (voto de cabresto) por favores, cargos e proteção, entre coronéis, o governo estadual e o federal.', [MT]),

  'cmc-mt-13': L([
    ['Economia na Primeira República', "Pecuária bovina no Pantanal e planalto, charqueadas, usinas de açúcar no Vale do Cuiabá e na Baixada, extração de borracha, poaia e erva-mate, além de comércio fluvial. As usinas processavam cana e aguardente. A economia era voltada para o mercado externo ou regional e pouco diversificada."],
  ], 'Qual atividade rural predominava no Pantanal?', 'A pecuária de corte, em fazendas extensivas, com charqueadas.', [MT]),

  'cmc-mt-14': L([
    ['Relações de trabalho', "Após 1888, predominaram o trabalho livre precário, a dependência por dívida (peonagem) nos ervais e seringais, o regime de “barracão” (compras a crédito que endividavam o trabalhador) e vaqueiros nas fazendas. Imigrantes e paraguaios também compuseram a mão de obra. Condições duras e coerção eram comuns."],
  ], 'O que era o sistema de barracão?', 'Armazém do patrão que vendia a crédito ao trabalhador, mantendo-o endividado e preso ao contrato.', [MT]),

  'cmc-mt-15': L([
    ['Era Vargas em MT', "O Estado Novo (1937-1945) tinha como interventor em Mato Grosso Júlio Müller. A Marcha para o Oeste estimulou a ocupação do interior: Fundação Brasil Central, Expedição Roncador-Xingu e projetos de colonização. Em 1943 foram criados territórios federais com áreas de Mato Grosso (Ponta Porã e Guaporé, que deu origem a Rondônia). Política: centralização e controle do interventor; economia: ênfase na pecuária e extrativismo, e nacionalismo de integração."],
  ], 'O que foi a Marcha para o Oeste?', 'Política do Estado Novo de ocupação e integração do interior do Brasil, estimulando colonização e infraestrutura no Centro-Oeste e na Amazônia.', [MT]),

  'cmc-mt-16': L([
    ['Terra e conflito', "A Lei de Terras de 1850 e a posse de terras devolutas originaram disputas. No século XX, a colonização dirigida e privada, a grilagem e a expansão da pecuária e da soja intensificaram conflitos entre posseiros, indígenas, assentados e fazendeiros. O INCRA conduz reforma agrária; episódios como a Chacina de Colniza (2017) mostram a persistência da violência no campo."],
  ], 'Qual instituição federal conduz a reforma agrária e a regularização fundiária?', 'O INCRA, Instituto Nacional de Colonização e Reforma Agrária.', [['INCRA', 'https://www.gov.br/incra']]),

  'cmc-mt-17': L([
    ['Governadores', "Estude a linha do tempo dos governadores a partir da redemocratização: Júlio Campos (1983-1987), Carlos Bezerra, Dante de Oliveira, Blairo Maggi (2003-2010), Silval Barbosa, Pedro Taques e Mauro Mendes (desde 2019). Relacione cada gestão a marcos: pavimentação de rodovias, expansão do agronegócio, obras de infraestrutura, programas sociais. Consulte o material oficial para a lista cobrada."],
  ], 'Qual governador esteve à frente do estado entre 2003 e 2010?', 'Blairo Maggi (dois mandatos).', [MT]),

  'cmc-mt-18': L([
    ['Temas atuais', "Agronegócio e exportações, logística (BR-163, ferrovia Rumo/Malha Norte, Ferrogrão em debate), desmatamento e queimadas, mudanças climáticas, energia (solar, etanol de milho), segurança pública, saúde, educação, tecnologia no campo, relações com a China e a União Europeia, desenvolvimento sustentável e povos indígenas. Cada tema tem raiz histórica: ocupação do território, concentração de terra e integração nacional."],
  ], 'Qual a raiz histórica da logística voltada à exportação em MT?', 'A ocupação do interior e a expansão da fronteira agrícola, que obrigaram o transporte de grãos por longas distâncias até os portos.', [IBGE]),

  'cmc-mt-19': L([
    ['MT e o Centro-Oeste', "O Centro-Oeste inclui Mato Grosso, Mato Grosso do Sul, Goiás e Distrito Federal. É a região da fronteira agrícola, do Cerrado e do Pantanal, com o maior crescimento da produção de grãos e carne e baixa densidade demográfica. Brasília (1960) estimulou a ocupação. Mato Grosso é o maior estado da região em área."],
  ], 'Quais unidades compõem o Centro-Oeste?', 'Mato Grosso, Mato Grosso do Sul, Goiás e o Distrito Federal.', [IBGE]),

  'cmc-mt-20': L([
    ['Geopolítica', "Mato Grosso faz fronteira internacional com a Bolívia e limites com AM, PA, TO, GO, MS e RO. Está na Amazônia Legal, é corredor logístico entre o Centro-Sul e o Norte (Arco Norte) e integra a Bacia do Prata. Aspectos geopolíticos: defesa de fronteira, tráfico, integração sul-americana, hidrovia Paraguai-Paraná e projetos de infraestrutura."],
  ], 'Qual país faz fronteira com Mato Grosso?', 'A Bolívia, a oeste.', [IBGE]),

  'cmc-mt-21': L([
    ['Ocupação do território', "Fases: indígena; colonial minerador (século XVIII); pecuária e extrativismo (XIX); Marcha para o Oeste (anos 1930-40); colonização dirigida do Norte e programas de integração (anos 1960-80) com incentivos da SUDAM e rodovias; expansão da soja e do milho (1990 em diante). Resultado: cidades novas, concentração fundiária e desmatamento."],
  ], 'Qual década marcou a colonização dirigida intensiva do Norte?', 'As décadas de 1970 e 1980, com incentivos federais e abertura de rodovias.', [IBGE]),

  'cmc-mt-22': L([
    ['Aspectos físicos', "Relevo: planaltos (Parecis, Guimarães), depressões e planície pantaneira. Clima tropical com estação seca; equatorial ao norte. Hidrografia: bacias Amazônica, Tocantins-Araguaia e Platina. Domínios naturais: Amazônia, Cerrado, Pantanal. Solos: latossolos no Cerrado, solos aluviais e hidromórficos no Pantanal."],
  ], 'Qual planície alagável é característica do sudoeste de MT?', 'A planície do Pantanal.', [IBGE]),

  'cmc-mt-23': L([
    ['Aspectos político-administrativos', "O estado tem 141 municípios, capital em Cuiabá e três poderes (Executivo, Legislativo na Assembleia Legislativa, Judiciário). As divisões do IBGE incluem regiões geográficas intermediárias e imediatas. Existem regiões metropolitanas, como a do Vale do Rio Cuiabá, e a Amazônia Legal, que inclui todo o território mato-grossense."],
  ], 'Quantos municípios tem Mato Grosso?', '141.', [IBGE]),

  'cmc-mt-24': L([
    ['Socioeconomia', "Economia baseada em agropecuária e agroindústria, serviços e comércio; PIB per capita acima da média nacional, mas com desigualdade entre regiões. Indicadores: IDH alto em municípios polos, rendimento domiciliar, saneamento deficitário em vários municípios, e desafios de saúde e segurança pública."],
  ], 'O PIB per capita elevado de MT implica distribuição igualitária de renda?', 'Não: a média pode ocultar desigualdades entre municípios e grupos sociais.', [IBGE]),

  'cmc-mt-25': L([
    ['Formação étnica', "Povos indígenas originários (Bororo, Xavante, Paresí, Nambikwara, Rikbaktsa, Kayabi, Kayapó, Umutina, Bakairi, entre outros), descendentes de africanos escravizados e de portugueses, paulistas, imigrantes (paraguaios, sírio-libaneses, italianos, japoneses) e migrantes sulistas e nordestinos do século XX. A cultura cuiabana mistura heranças indígena, africana e portuguesa."],
  ], 'Cite três grupos formadores da população mato-grossense.', 'Indígenas, afrodescendentes e europeus (portugueses), além de migrantes sulistas, nordestinos e imigrantes.', [IBGE]),

  'cmc-mt-26': L([
    ['Programas e fronteira agrícola', "Programas federais incentivaram a ocupação: POLOCENTRO (anos 1970, Cerrado), PRODECER (cooperação com o Japão), POLAMAZÔNIA e POLONOROESTE (BR-364), além da pesquisa da Embrapa que viabilizou a soja no Cerrado, com correção do solo. Resultado: expansão da fronteira agrícola do Sul para o Médio-Norte e Norte do estado."],
  ], 'Qual instituição foi central para adaptar a soja ao Cerrado?', 'A Embrapa, com pesquisa de variedades e correção de solo.', [['Embrapa', 'https://www.embrapa.br']]),

  'cmc-mt-27': L([
    ['Mato Grosso no contexto nacional', "O estado é o maior produtor brasileiro de soja, milho e algodão e tem o maior rebanho bovino. Entre seus principais produtos de exportação estão soja, carne, milho e algodão. É importante para a balança comercial do país, embora dependa da demanda externa e de logística longa."],
  ], 'Qual a principal cultura agrícola de MT?', 'A soja (o estado é o maior produtor do país).', [IBGE]),

  'cmc-mt-28': L([
    ['Urbanização', "Predominância urbana (mais de 80%), com crescimento rápido a partir dos anos 1970. Polos: Cuiabá/Várzea Grande, Rondonópolis, Sinop, Sorriso, Lucas do Rio Verde, Tangará da Serra, Cáceres, Barra do Garças. Problemas: saneamento, mobilidade, habitação, ilhas de calor."],
  ], 'Qual conurbação concentra a maior população do estado?', 'Cuiabá e Várzea Grande.', [IBGE]),

  /* ---------- Ética ---------- */
  'cmc-etica-1': L([
    ['Origem e método', "A filosofia nasce na Grécia (séculos VII-VI a.C.) com a passagem do mito ao logos, a explicação racional. Sócrates propõe o diálogo (maiêutica) e a busca por definições; Platão, o mundo das ideias; Aristóteles, a lógica e a observação. A atitude filosófica é crítica: perguntar, argumentar, rever pressupostos."],
    ['Áreas', "Metafísica (ser), epistemologia (conhecimento), lógica (raciocínio), ética (conduta), estética (belo) e política (poder). Distingue-se o senso comum, a ciência e a filosofia."],
  ], 'O que significa a passagem do mito ao logos?', 'A substituição de explicações sobrenaturais por explicações racionais e argumentadas.', [SEP]),

  'cmc-etica-2': L([
    ['Ética e moral', "Moral é o conjunto de normas e costumes de um grupo; ética é a reflexão filosófica sobre a moral e sobre a ação correta. Teorias: ética das virtudes (Aristóteles: eudaimonia, virtude como meio-termo), deontologia (Kant: imperativo categórico, agir por dever), utilitarismo (Bentham e Mill: maior felicidade para o maior número) e ética do discurso (Habermas)."],
    ['Imperativo categórico', "Kant: age apenas segundo uma máxima que possas querer que se torne lei universal; trata a humanidade sempre também como fim, nunca apenas como meio."],
  ], 'Qual a diferença central entre deontologia e utilitarismo?', 'A deontologia julga a ação pelo dever e princípios; o utilitarismo, pelas consequências e pelo bem-estar produzido.', [SEP]),

  'cmc-etica-3': L([
    ['Consciência crítica', "É a capacidade de refletir sobre a realidade, questionar ideologias e evitar o conformismo. A consciência ingênua aceita as coisas como dadas; a crítica investiga causas e interesses. Ideologia, na tradição crítica, é o conjunto de ideias que naturaliza a dominação. Em Paulo Freire, a conscientização é caminho de libertação."],
  ], 'O que distingue a consciência crítica da ingênua?', 'A crítica questiona causas, interesses e contexto; a ingênua aceita a realidade como natural e inevitável.', [SEP]),

  'cmc-etica-4': L([
    ['Valores e cultura', "Os valores morais são construídos socialmente e variam entre culturas e épocas. Relativismo cultural reconhece a diversidade; universalismo defende princípios comuns (como a dignidade humana, na Declaração Universal de 1948). O debate evita tanto o etnocentrismo quanto a indiferença a violações de direitos."],
  ], 'O que é etnocentrismo?', 'Julgar outras culturas pelos padrões da própria, considerando-a superior.', [SEP]),

  'cmc-etica-5': L([
    ['Fato e valor', "Juízo de fato descreve como as coisas são e pode ser verificado (“A água ferve a 100 °C ao nível do mar”). Juízo de valor avalia ou prescreve (“Roubar é errado”). Hume observou a dificuldade de deduzir “deve ser” a partir de “é”. Distinguir ambos evita confusão entre ciência e opinião."],
  ], 'A frase “A corrupção é inaceitável” é juízo de fato ou de valor?', 'De valor: expressa avaliação moral.', [SEP]),

  'cmc-etica-6': L([
    ['Ética e cidadania', "Cidadania é o exercício de direitos e deveres (civis, políticos e sociais, Marshall) e a participação na vida pública. A ética pública exige probidade, transparência e respeito ao interesse coletivo. A Constituição de 1988 tem a cidadania e a dignidade da pessoa humana como fundamentos (art. 1º, II e III)."],
  ], 'Quais fundamentos da República citam cidadania e dignidade?', 'Os incisos II e III do art. 1º da Constituição: a cidadania e a dignidade da pessoa humana.', [['Constituição Federal', P + '/constituicao/constituicao.htm']]),

  'cmc-etica-7': L([
    ['Racionalismo ético', "Corrente que fundamenta a moral na razão. Sócrates sustenta que ninguém faz o mal conscientemente (intelectualismo moral). Kant situa a moralidade na razão prática e na autonomia do sujeito. Spinoza vincula a ética ao conhecimento e ao domínio das paixões. A crítica empirista (Hume) afirma que a moral nasce do sentimento."],
  ], 'Para o racionalismo ético, qual a base da moral?', 'A razão: o dever e o bem podem ser conhecidos e justificados racionalmente.', [SEP]),

  'cmc-etica-8': L([
    ['Ética e liberdade', "Não há responsabilidade moral sem liberdade. Kant define liberdade como autonomia: dar-se a si mesmo a lei moral. Sartre afirma que o ser humano está “condenado a ser livre” e responde por suas escolhas. Berlin distingue liberdade negativa (ausência de interferência) e positiva (capacidade de autodeterminação). Liberdade também tem limites: a liberdade de um termina onde começa a de outro."],
  ], 'Qual a diferença entre liberdade negativa e positiva?', 'Negativa é ausência de coerção externa; positiva é a capacidade de se autodeterminar e realizar projetos próprios.', [SEP]),

  /* ---------- Relações interpessoais ---------- */
  'cmc-rel-1': L([
    ['Relações humanas', "São as interações entre pessoas no trabalho e na vida social, afetadas por percepção, atitudes, valores, emoções e cultura organizacional. Bom relacionamento exige respeito, cooperação e gestão de conflitos. A escola das relações humanas (Elton Mayo) mostrou que fatores sociais influenciam a produtividade."],
  ], 'Qual escola da Administração enfatizou os fatores sociais do trabalho?', 'A Escola das Relações Humanas, de Elton Mayo.', [['ENAP', 'https://www.enap.gov.br']]),

  'cmc-rel-2': L([
    ['Comunicação interpessoal', "Elementos: emissor, receptor, mensagem, canal, código, contexto e ruído; o feedback fecha o ciclo. Barreiras: ruído físico, linguagem inadequada, preconceito, pressa, emoção. A comunicação verbal e a não verbal (postura, tom, expressão) devem ser coerentes. Assertividade é expressar-se com clareza e respeito, sem agressividade nem passividade."],
  ], 'O que é ruído na comunicação?', 'Qualquer interferência que distorce ou impede a compreensão da mensagem.', [['ENAP', 'https://www.enap.gov.br']]),

  'cmc-rel-3': L([
    ['Atendimento de qualidade', "Cortesia, escuta, clareza, agilidade, resolutividade e respeito à igualdade, sem privilégios. No serviço público, a Lei 13.460/2017 assegura direitos do usuário: informação adequada, atendimento por ordem de chegada (com prioridades legais), tratamento cortês. Conheça o serviço, evite jargões e registre o atendimento."],
  ], 'Qual princípio impede privilégios no atendimento?', 'A impessoalidade e a igualdade de tratamento; a ordem de atendimento segue as regras legais, como as prioridades previstas em lei.', [['Lei 13.460/2017', P + '/_ato2015-2018/2017/lei/l13460.htm']]),

  'cmc-rel-4': L([
    ['Postura profissional', "Pontualidade, apresentação adequada, discrição com informações, ética, responsabilidade pelas tarefas, cooperação, aprendizado contínuo, controle emocional e respeito à hierarquia sem submissão acrítica. Redes sociais: evite expor informações do trabalho."],
  ], 'Qual comportamento revela postura profissional diante de uma crítica?', 'Ouvir, avaliar com serenidade, reconhecer o que for pertinente e corrigir, sem reação defensiva.', [['ENAP', 'https://www.enap.gov.br']]),

  'cmc-rel-5': L([
    ['Integração', "Integração é a inserção do indivíduo no grupo e na organização. Envolve acolher novos servidores, compartilhar objetivos, valorizar diversidade e comunicar processos. Trabalho em equipe tem metas comuns, papéis claros e confiança mútua."],
  ], 'Qual elemento mais favorece a integração de um novo servidor?', 'Acolhimento, informação clara sobre rotinas e objetivos, e participação nas atividades da equipe.', [['ENAP', 'https://www.enap.gov.br']]),

  'cmc-rel-6': L([
    ['Empatia', "É compreender a perspectiva e os sentimentos do outro sem necessariamente concordar. Empatia cognitiva entende; a afetiva sente junto; a compassiva age para ajudar. Diferencia-se de simpatia e de pena. No atendimento, reduz conflitos e melhora a solução."],
  ], 'Qual a diferença entre empatia e simpatia?', 'Empatia é entender a perspectiva do outro; simpatia é sentir afinidade ou sentimentos semelhantes.', [['ENAP', 'https://www.enap.gov.br']]),

  'cmc-rel-7': L([
    ['Escuta ativa', "Dar atenção plena, não interromper, confirmar o entendimento (parafrasear), perguntar para esclarecer e observar linguagem não verbal. Barreiras: distração, julgamento precipitado, preparar resposta enquanto o outro fala."],
  ], 'O que é parafrasear na escuta ativa?', 'Repetir com palavras próprias o que o outro disse, para confirmar a compreensão.', [['ENAP', 'https://www.enap.gov.br']]),

  'cmc-rel-8': L([
    ['Argumentação flexível', "Defender ideias com argumentos e dados, mantendo abertura para rever a posição diante de boas razões. Na negociação, busque interesses (não posições), alternativas e soluções ganha-ganha. Evite falácias (ataque pessoal, apelo à autoridade sem fundamento) e a rigidez que bloqueia o diálogo."],
  ], 'Qual a característica de uma negociação ganha-ganha?', 'Busca solução que atenda interesses essenciais de ambas as partes, em vez de impor posições.', [['Harvard PON', 'https://www.pon.harvard.edu']]),
};
