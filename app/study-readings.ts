export const readings = [
  {
    groups: 'port cmc-port',
    title: 'Interpretação, coesão e concordância',
    text: [
      'Comece pela tese do texto. Identifique o que o autor defende e separe essa ideia dos exemplos que a sustentam. Uma conclusão compatível com o texto precisa decorrer das informações dadas. Em uma questão de inferência, procure a passagem que sustenta a resposta.',
      'Conectivos mudam a relação entre ideias. Em “O prazo era curto, mas a equipe concluiu a revisão”, “mas” estabelece contraste. “Logo” introduz conclusão, “porque” pode introduzir causa e “embora” sinaliza concessão. Antes de substituir um conectivo, confira se a relação foi preservada.',
      'Na concordância, localize o núcleo do sujeito. Compare “Existiam três recursos” com “Havia três recursos”. Existir concorda com o sujeito. Haver com sentido de existir é impessoal. Fazer também fica no singular quando indica tempo decorrido, como em “Faz dois meses”.',
      'Exercício de revisão. Explique por que “Os relatórios da equipe foram entregues” leva o verbo ao plural e por que “Houve três entregas” leva o verbo ao singular.',
    ],
  },
  {
    groups: 'mt cmc-mt',
    title: 'Formação histórica e geografia de Mato Grosso',
    text: [
      'A mineração de ouro impulsionou a formação de núcleos coloniais no território mato-grossense, entre eles Cuiabá. Vila Bela da Santíssima Trindade foi sede administrativa da capitania. Para organizar a cronologia, diferencie o surgimento dos núcleos mineradores da criação da estrutura administrativa colonial.',
      'No século XIX, a Rusga de 1834 pertence ao período regencial. A Guerra da Tríplice Aliança ocorreu décadas depois e envolveu o Paraguai contra Brasil, Argentina e Uruguai. No século XX, a Marcha para o Oeste relacionou-se à política de interiorização do governo Vargas. A divisão estadual que deu origem a Mato Grosso do Sul foi determinada em 1977.',
      'Mato Grosso integra o Centro-Oeste e faz fronteira com a Bolívia. Amazônia, Cerrado e Pantanal estão presentes no território. Ao revisar hidrografia, associe o Pantanal à bacia do Alto Paraguai e diferencie bacia hidrográfica de bioma.',
    ],
  },
  {
    groups: 'etica cmc-etica cmc-rel',
    title: 'Ética, argumentação e atendimento',
    text: [
      'Um juízo de fato descreve algo verificável, como “havia dez pessoas na fila”. Um juízo de valor avalia uma situação, como “foi injusto furar a fila”. Um argumento conecta razões a uma conclusão. A qualidade da conclusão depende da pertinência das razões apresentadas.',
      'Na atuação pública, critérios impessoais permitem tratar situações equivalentes da mesma maneira. Há conflito de interesses quando uma vantagem ou relação particular pode interferir no dever profissional. Em um caso prático, identifique o interesse privado e a decisão pública que ele pode influenciar.',
      'No atendimento, escuta ativa inclui ouvir a solicitação, confirmar o entendimento e explicar os próximos passos. Reformular a demanda com suas próprias palavras ajuda a corrigir equívocos antes de tomar uma providência.',
    ],
  },
  {
    groups: 'cmc-logica',
    title: 'Proposições, negação e contagem',
    text: [
      'Uma proposição admite avaliação como verdadeira ou falsa. A implicação “se P, então Q” é falsa quando P é verdadeira e Q é falsa. Negar “todos os processos foram revisados” exige pelo menos um processo sem revisão.',
      'Use o princípio multiplicativo quando a escolha é feita em etapas. Se há três opções para a primeira etapa e duas para a segunda, há seis pares possíveis. Na combinação, a ordem é irrelevante. Cinco pessoas formam dez duplas porque cada dupla aparece duas vezes na contagem ordenada de cinco vezes quatro.',
      'Em um sorteio com resultados equiprováveis, divida o número de resultados favoráveis pelo total. Em uma urna com três bolas azuis e duas verdes, a probabilidade de retirar uma verde é 2/5.',
    ],
  },
  {
    groups: 'ti0 cmc-info cmc-ti',
    title: 'Segurança da informação e proteção de dados',
    text: [
      'Confidencialidade restringe acesso à informação. Integridade protege contra alteração indevida. Disponibilidade mantém o serviço acessível quando necessário. Um vazamento afeta a confidencialidade, uma alteração clandestina afeta a integridade e uma interrupção afeta a disponibilidade.',
      'Autenticação confirma identidade. Autorização determina o que a identidade pode fazer. Aplique privilégio mínimo para limitar as permissões ao trabalho realizado. Em um cenário de phishing, verifique o domínio por um canal conhecido e evite fornecer credenciais a partir do link recebido.',
      'Criptografia protege o sigilo de dados. Um hash permite comparar o conteúdo com um valor de referência confiável. Uma assinatura digital permite verificar autenticidade e integridade. Em uma infraestrutura de chaves públicas, o certificado vincula uma chave pública a uma identidade.',
      'Para recuperar dados após um incidente, mantenha cópias separadas do ambiente principal e teste a restauração. O RPO indica a perda de dados tolerada em tempo. O RTO indica o prazo-alvo de recuperação. Na LGPD, o princípio da necessidade orienta a limitar o tratamento aos dados pertinentes à finalidade.',
    ],
  },
  {
    groups: 'ti1 ti3 cmc-ti',
    title: 'APIs, Git, CI/CD e contêineres',
    text: [
      'Em uma API HTTP, GET solicita a representação de um recurso. POST pode ser usado para criar um recurso em uma coleção. A resposta 201 informa criação bem-sucedida. Uma operação idempotente preserva o efeito pretendido ao ser repetida, embora o código de resposta possa mudar.',
      'No Git, add prepara alterações, commit registra uma versão no histórico local, fetch atualiza referências do remoto e push envia commits. Diferencie fetch, que não integra mudanças à branch atual, de pull, que também executa uma etapa de integração.',
      'A integração contínua combina mudanças frequentes com build e testes. A entrega contínua mantém uma versão apta a ser publicada. Em uma esteira com segurança, trate segredos fora do código e inclua verificações de dependências e testes antes da publicação.',
      'Uma imagem reúne as dependências e arquivos para iniciar um contêiner. O contêiner é uma instância da imagem. O Dockerfile descreve como construir a imagem. Em uma implantação gradual, acompanhe erros e latência antes de direcionar todo o tráfego para a nova versão.',
    ],
  },
  {
    groups: 'ti2 ti4 cmc-ti',
    title: 'SQL, transações e análise de dados',
    text: [
      'WHERE filtra linhas antes do agrupamento. GROUP BY reúne linhas que compartilham valores de uma ou mais colunas. HAVING filtra grupos, inclusive com agregações como COUNT. Para listar setores com mais de três chamados abertos, filtre os abertos em WHERE, agrupe por setor e aplique COUNT(*) > 3 em HAVING.',
      'INNER JOIN retorna combinações com correspondência. LEFT JOIN também mantém registros da esquerda sem correspondência, preenchendo as colunas da direita com NULL. Uma chave estrangeira protege a integridade referencial. Índices podem acelerar consultas, mas exigem manutenção quando os dados mudam.',
      'Em ACID, atomicidade é aplicar a transação por inteiro ou desfazê-la. Consistência preserva as regras do banco. Isolamento trata da interação entre operações concorrentes. Durabilidade protege as alterações confirmadas contra falhas posteriores.',
      'Na análise de dados, ETL significa extrair, transformar e carregar. Use um gráfico de linhas para acompanhar evolução no tempo. Separe os dados de teste antes de ajustar um modelo de aprendizado de máquina, para avaliar seu desempenho em exemplos que ele ainda não viu.',
    ],
  },
  {
    groups: 'ti4 cmc-ti cmc-info',
    title: 'Algoritmos, sistemas operacionais e redes',
    text: [
      'Pilha retira primeiro o item inserido por último. Fila FIFO retira primeiro o item mais antigo. A busca binária reduz o intervalo pela metade a cada comparação em uma coleção ordenada, o que leva a O(log n) comparações no pior caso.',
      'O sistema operacional gerencia processos, memória e dispositivos. A memória virtual oferece espaços de endereçamento aos processos e mapeia páginas. No Linux, as permissões r, w e x correspondem a leitura, escrita e execução em arquivos.',
      'DNS resolve nomes. DHCP fornece configuração de rede. TCP oferece um fluxo confiável e ordenado de bytes. Em IPv4, /24 corresponde à máscara 255.255.255.0. Quando uma máquina alcança um servidor por IP, mas não pelo nome, investigue a resolução DNS.',
    ],
  },
  {
    groups: 'dir0 cmc-jur cmc-adm',
    title: 'Constituição, direitos fundamentais e Municípios',
    text: [
      'Comece pelos arts. 5º, 29, 30, 31 e 37 da Constituição nos tópicos correspondentes do edital. O art. 5º reúne garantias como contraditório e ampla defesa. Para distinguir remédios constitucionais, associe habeas corpus à liberdade de locomoção e habeas data ao conhecimento ou à retificação de dados do impetrante em registros governamentais ou de caráter público.',
      'A Lei Orgânica rege a organização do Município. O Município pode legislar sobre assuntos de interesse local e suplementar a legislação federal e estadual no que couber. O controle externo municipal cabe à Câmara, com auxílio do Tribunal de Contas competente.',
      'Em uma questão, separe competência municipal, competência do órgão legislativo e atribuições da Administração. Ao estudar ingresso no serviço público, localize a regra do concurso e a ressalva constitucional para nomeações em cargos em comissão.',
    ],
  },
  {
    groups: 'dir1 cmc-jur cmc-adm trans0',
    title: 'Administração Pública, atos e contratações',
    text: [
      'Administração direta atua por órgãos integrantes da própria pessoa política. Autarquias integram a Administração indireta e têm personalidade jurídica própria. Desconcentração distribui atribuições entre órgãos da mesma pessoa. Descentralização envolve outra pessoa na execução da atividade.',
      'Ao examinar um ato, identifique competência, finalidade, forma, motivo e objeto. Anulação enfrenta ilegalidade. Revogação recai sobre ato válido e revogável por conveniência e oportunidade. A motivação explicita os fundamentos de fato e de direito.',
      'Na Lei nº 14.133/2021, a fase preparatória organiza a necessidade e a solução. Pregão atende bens e serviços comuns, observadas as regras legais. Leilão é usado nas hipóteses de alienação previstas. Inexigibilidade depende de inviabilidade de competição. Compare os arts. 28 a 32 e 72 a 75.',
      'Em orçamento público, PPA organiza diretrizes e metas plurianuais. LDO orienta a elaboração da LOA. LOA estima receitas e fixa despesas para o exercício. Em questões sobre indicadores, eficácia mede o alcance da meta e eficiência relaciona entregas aos recursos usados.',
    ],
  },
  {
    groups: 'dir2 dir3',
    title: 'Direito Civil e Processo Civil',
    text: [
      'O art. 104 do Código Civil organiza os requisitos de validade do negócio jurídico em agente capaz, objeto lícito, possível e determinado ou determinável, e forma prescrita ou não proibida. A boa-fé objetiva exige lealdade nas relações contratuais. Na prescrição, localize a pretensão que nasce da violação do direito, conforme o art. 189.',
      'No processo civil, a citação chama o réu, o executado ou o interessado para integrar a relação processual. A intimação dá ciência de atos e termos do processo. O art. 10 do CPC exige oportunidade de manifestação sobre o fundamento usado na decisão, inclusive nas matérias apreciáveis de ofício.',
      'Para tutela de urgência, revise probabilidade do direito e perigo de dano ou risco ao resultado útil do processo. Contra sentença cabe, em regra, apelação. Embargos de declaração tratam de obscuridade, contradição, omissão ou erro material. Leia o enunciado para identificar o pronunciamento e o vício alegado.',
    ],
  },
  {
    groups: 'dir4 trans6',
    title: 'Proteção ambiental e responsabilidade',
    text: [
      'O art. 225 da Constituição atribui ao Poder Público e à coletividade o dever de defender e preservar o meio ambiente. Para obra ou atividade potencialmente causadora de significativa degradação ambiental, exige estudo prévio de impacto ambiental com publicidade, na forma da lei.',
      'A Política Nacional do Meio Ambiente reúne instrumentos de proteção ambiental e organiza o SISNAMA. Para estudar a Lei nº 6.938/1981, localize os objetivos, os instrumentos e a regra de reparação do art. 14, § 1º. Separe a análise de impacto do procedimento de licenciamento.',
      'A responsabilidade civil do poluidor pela reparação independe de culpa nos termos da Lei nº 6.938/1981. A Constituição admite sanções administrativas e penais independentemente da obrigação de reparar. Ao resolver um caso, identifique em qual esfera a consequência foi perguntada.',
    ],
  },
];
