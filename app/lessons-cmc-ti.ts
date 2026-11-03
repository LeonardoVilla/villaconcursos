import { L, type LessonMap } from './lesson-type';

const P = 'https://www.planalto.gov.br/ccivil_03';
const MDN = ['MDN Web Docs', 'https://developer.mozilla.org/pt-BR/'] as [string, string];

export const lessonsCmcTi: LessonMap = {
  'cmc-ti-1': L([
    ['Arquitetura de computadores', "Modelo de von Neumann: CPU (unidade de controle, ULA, registradores), memória, entrada e saída e barramentos. Hierarquia de memória: registradores, cache L1/L2/L3, RAM, armazenamento secundário (mais rápido e caro no topo). Pipeline, multicore e hyper-threading aumentam o desempenho. Representação numérica: binário, octal, hexadecimal; complemento de dois para inteiros negativos; ponto flutuante IEEE 754. RISC (conjunto reduzido, ARM) e CISC (x86)."],
    ['Sistemas de informação', "Sistemas de informação reúnem pessoas, processos, dados e tecnologia. Tipos: transacional (TPS), gerencial (MIS), apoio à decisão (DSS), executivo (EIS) e ERP. Dado, informação e conhecimento formam uma hierarquia. Ciclo de vida de dados: coleta, armazenamento, processamento, uso e descarte."],
  ], 'Qual memória é mais rápida: cache L1 ou RAM?', 'A cache L1, que fica dentro da CPU; a RAM é maior e mais lenta.', [['Arquitetura de von Neumann — Wikipédia', 'https://pt.wikipedia.org/wiki/Arquitetura_de_von_Neumann']]),

  'cmc-ti-2': L([
    ['Algoritmos e estruturas de dados', "Variáveis, condicionais, laços, funções e recursão. Estruturas: vetores, listas encadeadas, pilha (LIFO), fila (FIFO), árvores binárias de busca e balanceadas (AVL), heap, tabela hash e grafos (busca em largura e profundidade). Complexidade: O(1) < O(log n) < O(n) < O(n log n) < O(n²). Busca binária exige dados ordenados; quick sort e merge sort têm O(n log n) em média."],
    ['Programação orientada a objetos', "Pilares: abstração, encapsulamento (esconder o estado interno com visibilidade), herança (reutilização, relação “é um”), polimorfismo (mesma interface, comportamentos diferentes; sobrecarga e sobrescrita). Conceitos: classe, objeto, atributo, método, construtor, interface, classe abstrata. Princípios SOLID e padrões de projeto (Singleton, Factory, Observer, Strategy, MVC) reduzem acoplamento e aumentam coesão."],
  ], 'Qual a diferença entre sobrecarga e sobrescrita?', 'Sobrecarga: métodos de mesmo nome e assinaturas diferentes na mesma classe. Sobrescrita: a subclasse redefine um método herdado com a mesma assinatura.', [['Refactoring Guru — Padrões de projeto', 'https://refactoring.guru/pt-br/design-patterns']]),

  'cmc-ti-3': L([
    ['Engenharia de requisitos e modelagem', "Requisitos funcionais (o que o sistema faz) e não funcionais (desempenho, segurança, usabilidade). Técnicas de levantamento: entrevistas, workshops, observação, protótipos e histórias de usuário. UML: casos de uso, classes, sequência, atividades, estados e componentes. Documentação clara, rastreável e versionada."],
    ['Testes, manutenção e métodos ágeis', "Testes de unidade, integração, sistema e aceitação; caixa-branca e caixa-preta; regressão. A pirâmide de testes favorece muitos testes unitários. Manutenção: corretiva, adaptativa, perfectiva e preventiva. Cascata é sequencial; métodos ágeis (Scrum, Kanban, XP) entregam incrementos curtos. Scrum: papéis (Product Owner, Scrum Master, Developers), eventos (Sprint, Planning, Daily, Review, Retrospective) e artefatos (Product Backlog, Sprint Backlog, Incremento)."],
  ], 'Qual a diferença entre requisito funcional e não funcional?', 'Funcional descreve o que o sistema faz; não funcional descreve qualidades e restrições, como desempenho, segurança e usabilidade.', [['Scrum Guide', 'https://scrumguides.org/scrum-guide.html']]),

  'cmc-ti-4': L([
    ['Front-end', "HTML estrutura o conteúdo (semântica: header, nav, main, section, article, footer). CSS estiliza (seletores, box model, flexbox, grid, media queries para responsividade). JavaScript adiciona comportamento: DOM, eventos, fetch/async-await, JSON. Acessibilidade (WCAG): contraste, texto alternativo, navegação por teclado."],
    ['Serviços web e APIs REST', "REST usa HTTP: GET (ler), POST (criar), PUT (substituir), PATCH (alterar parcialmente), DELETE (remover). Códigos: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error. Recursos por URIs, stateless, representação em JSON, HATEOAS opcional, versionamento e documentação (OpenAPI/Swagger). Autenticação: tokens JWT, OAuth 2.0. SOAP usa XML e WSDL. Segurança: HTTPS, validação de entrada e proteção contra XSS, CSRF e injeção."],
  ], 'Qual método HTTP é idempotente e usado para substituir um recurso?', 'PUT.', [MDN]),

  'cmc-ti-5': L([
    ['Modelagem e SQL', "Modelo entidade-relacionamento: entidades, atributos, relacionamentos (1:1, 1:N, N:N). Chave primária identifica a linha; chave estrangeira garante integridade referencial. Normalização: 1FN (valores atômicos), 2FN (sem dependência parcial da chave), 3FN (sem dependência transitiva). SQL: DDL (CREATE, ALTER, DROP), DML (INSERT, UPDATE, DELETE, SELECT), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK). JOINs: INNER, LEFT, RIGHT, FULL. GROUP BY, HAVING, subconsultas e índices."],
    ['Administração, transações, backup', "Transações têm propriedades ACID: atomicidade, consistência, isolamento e durabilidade. Níveis de isolamento previnem leituras sujas e fantasmas. Backup completo, incremental e diferencial; recuperação por log de transações (point-in-time); replicação e alta disponibilidade. Integridade: restrições (NOT NULL, UNIQUE, CHECK, FK)."],
  ], 'Qual a diferença entre WHERE e HAVING?', 'WHERE filtra linhas antes do agrupamento; HAVING filtra grupos depois do GROUP BY, geralmente com funções de agregação.', [['PostgreSQL — Documentação', 'https://www.postgresql.org/docs/current/']]),

  'cmc-ti-6': L([
    ['Modelos e protocolos', "OSI (7 camadas): física, enlace, rede, transporte, sessão, apresentação, aplicação. TCP/IP: acesso à rede, internet, transporte, aplicação. TCP é orientado à conexão e confiável (handshake de três vias); UDP é sem conexão e mais leve. Protocolos: IP, ICMP, ARP, TCP, UDP, HTTP/S, DNS, DHCP, FTP, SSH, SMTP, IMAP, SNMP. Endereçamento IPv4 (32 bits, máscara CIDR) e IPv6 (128 bits); sub-redes: /24 tem 254 hosts úteis."],
    ['Equipamentos e serviços', "Hub (camada 1), switch (camada 2, VLANs), roteador (camada 3), firewall, access point. Cabeamento estruturado: par trançado categorias 5e, 6, 6A, fibra óptica; comprimento máximo de 100 m no segmento Ethernet de par trançado. Serviços: DNS, DHCP, proxy, VPN, NAT, Active Directory e servidores de arquivos. Modelo cliente-servidor, administração e monitoramento (SNMP, Zabbix)."],
  ], 'Quantos hosts úteis tem uma rede /24 IPv4?', '254 (256 endereços menos rede e broadcast).', [['Cisco Networking Academy', 'https://www.netacad.com']]),

  'cmc-ti-7': L([
    ['Windows Server e Linux', "Windows: Active Directory (domínio, usuários, grupos, GPO), permissões NTFS e compartilhamento, serviços, Agendador de Tarefas, PowerShell, backup do Windows Server. Linux: instalação, gerenciador de pacotes, usuários e grupos (useradd, passwd), permissões rwx e chmod, systemd (systemctl), cron para rotinas, logs em /var/log, rsync e tar para backup."],
    ['Permissões e serviços', "Princípio do menor privilégio: conceder só o necessário. Em Linux, chmod 640 permite leitura/escrita ao dono e leitura ao grupo. Em Windows, permissões de compartilhamento e NTFS se combinam, prevalecendo a mais restritiva. Serviços devem ser mínimos, atualizados e monitorados."],
  ], 'O que representa o modo 755 em um arquivo Linux?', 'Dono lê, escreve e executa; grupo e outros leem e executam.', [['Linux man-pages', 'https://man7.org/linux/man-pages/']]),

  'cmc-ti-8': L([
    ['Fundamentos e normas', "Tríade CID: confidencialidade, integridade e disponibilidade (mais autenticidade e não repúdio). ISO/IEC 27001:2022 especifica o SGSI (sistema de gestão da segurança da informação), com ciclo PDCA, análise de riscos, declaração de aplicabilidade e melhoria contínua. A ISO/IEC 27002:2022 traz 93 controles em quatro temas: organizacionais, pessoas, físicos e tecnológicos. Políticas de segurança, classificação da informação e conscientização."],
    ['Controles técnicos', "Gestão de identidades e acessos (IAM, MFA, RBAC, privilégio mínimo), criptografia simétrica (AES) e assimétrica (RSA, ECC), hash (SHA-256), certificados digitais e PKI (ICP-Brasil), assinatura digital, firewall, IDS/IPS, SIEM e monitoramento, análise de vulnerabilidades, testes de intrusão e resposta a incidentes (preparação, detecção, contenção, erradicação, recuperação e lições aprendidas)."],
  ], 'Quais são as três propriedades da tríade CID?', 'Confidencialidade, integridade e disponibilidade.', [['ISO/IEC 27001', 'https://www.iso.org/standard/27001']]),

  'cmc-ti-9': L([
    ['Governança e planejamento', "Governança de TI alinha TI e negócio, com direção, monitoramento e conformidade. Planejamento estratégico de TI deriva o PDTIC (Plano Diretor de TIC): diagnóstico, necessidades, metas, plano de ação, riscos e orçamento. COBIT 2019 é estrutura de governança e gestão; ITIL 4 organiza a gestão de serviços (valor, cadeia de valor, práticas); PMBOK/PMI orienta projetos (escopo, cronograma, custo, qualidade, riscos)."],
    ['Riscos e indicadores', "Gestão de riscos: identificar, analisar (probabilidade e impacto), tratar (mitigar, transferir, aceitar, evitar) e monitorar. Indicadores e acordos de nível de serviço (SLA) medem a qualidade e o desempenho dos serviços de TI."],
  ], 'O que é o PDTIC?', 'O Plano Diretor de Tecnologia da Informação e Comunicação, instrumento de planejamento da TI alinhado ao planejamento institucional.', [['COBIT — ISACA', 'https://www.isaca.org/resources/cobit']]),

  'cmc-ti-10': L([
    ['Controle de versões e CI/CD', "Git: repositório distribuído; comandos add, commit, branch, merge, rebase, pull, push, clone, fetch, stash. Fluxos: GitFlow e trunk-based. Integração contínua (CI): cada mudança dispara build e testes automatizados. Entrega contínua (CD): artefato sempre pronto para publicação com aprovação manual; implantação contínua publica automaticamente. Ferramentas: GitHub Actions, GitLab CI, Jenkins."],
    ['Contêineres', "Docker empacota aplicação e dependências em imagens (Dockerfile) executadas como contêineres, que compartilham o kernel do host e são mais leves que VMs. Registro de imagens, volumes para persistência, redes, docker compose. Kubernetes orquestra contêineres: pods, deployments, services, escalabilidade e autocura."],
  ], 'Qual a diferença entre contêiner e máquina virtual?', 'O contêiner compartilha o kernel do host e é mais leve; a VM executa um sistema operacional completo sobre um hipervisor.', [['Git — documentação', 'https://git-scm.com/doc'], ['Docker Docs', 'https://docs.docker.com']]),

  'cmc-ti-11': L([
    ['Análise de dados e BI', "Data warehouse consolida dados históricos e integrados; ETL (extrair, transformar, carregar) alimenta o DW; modelagem dimensional (fato, dimensão, esquema estrela e floco de neve); OLAP (cubos, drill-down, roll-up, slice e dice). Data lake guarda dados brutos e variados. Ferramentas de BI (Power BI, Tableau, Metabase) geram painéis e relatórios."],
    ['Visualização de informações', "Escolha o gráfico pela pergunta: comparação (barras), tendência (linhas), composição (pizza com poucas categorias), relação (dispersão), distribuição (histograma). Evite excesso de elementos, eixos truncados e cores sem significado. KPIs e metas contextualizam os números."],
  ], 'O que significa ETL?', 'Extract, Transform, Load: extrair dados das fontes, transformá-los e carregá-los em um destino analítico.', [['Microsoft Learn — Power BI', 'https://learn.microsoft.com/pt-br/power-bi/']]),

  'cmc-ti-12': L([
    ['Contratação de TI na Lei 14.133/2021', "Fase preparatória: Documento de Formalização da Demanda, Estudo Técnico Preliminar (ETP), gestão de riscos, termo de referência, pesquisa de preços e matriz de riscos. Soluções comuns de TI podem seguir pregão; serviços técnicos especializados de natureza predominantemente intelectual podem seguir técnica e preço ou melhor técnica. Regras de contrato: gestão e fiscalização por servidores designados, acordos de nível de serviço, sanções e proteção de dados. Contratos de software exigem cláusulas de propriedade intelectual, licenciamento e segurança."],
    ['Gestão', "Gestor do contrato acompanha execução, mede indicadores, ateste e pagamento. A administração deve evitar dependência de fornecedor (lock-in), exigir portabilidade e planejar a transição ao fim do contrato."],
  ], 'Qual documento fundamenta tecnicamente a necessidade da contratação na fase preparatória?', 'O Estudo Técnico Preliminar (ETP).', [['Lei 14.133/2021', P + '/_ato2019-2022/2021/lei/L14133.htm']]),

  'cmc-ti-13': L([
    ['LGPD no poder público', "A Lei 13.709/2018 aplica-se também ao poder público (arts. 23 a 30), com tratamento voltado à finalidade pública e ao interesse público, informação clara sobre as hipóteses de tratamento e indicação de encarregado. Bases legais, direitos do titular, relatório de impacto (RIPD), notificação de incidentes à ANPD e ao titular."],
    ['Lei de Acesso à Informação', "A Lei 12.527/2011 estabelece que a publicidade é a regra e o sigilo, exceção. Transparência ativa (divulgação espontânea) e passiva (atendimento a pedidos, prazo de 20 dias prorrogável por mais 10). Classificação: reservada (5 anos), secreta (15 anos) e ultrassecreta (25 anos, prorrogável uma vez). Informação pessoal tem acesso restrito. Deve-se conciliar LAI e LGPD."],
    ['Segurança de dados', "Controles de acesso, criptografia, anonimização e pseudonimização, logs de auditoria, plano de resposta a incidentes e política de retenção."],
  ], 'Qual o prazo de resposta a um pedido de acesso à informação, e a possibilidade de prorrogação?', 'Até 20 dias, prorrogável por mais 10 dias mediante justificativa.', [['Lei 12.527/2011', P + '/_ato2011-2014/2011/lei/l12527.htm'], ['Lei 13.709/2018', P + '/_ato2015-2018/2018/lei/l13709.htm']]),

  'cmc-ti-14': L([
    ['Suporte e atendimento', "Níveis de suporte: N1 (triagem e solução básica), N2 (técnico especializado), N3 (especialistas e fornecedores). Processo de chamados: registro, classificação, priorização por impacto e urgência, diagnóstico, solução, encerramento e pesquisa de satisfação. Ferramentas de service desk, base de conhecimento, acesso remoto e inventário de ativos. Boas práticas ITIL: incidente, problema, mudança e requisição."],
    ['Treinamento e documentação', "Treinar usuários reduz chamados. Documentação técnica deve ser clara, atualizada, versionada e acessível: manuais, procedimentos operacionais, diagramas de rede e registros de mudanças."],
  ], 'Qual a diferença entre incidente e problema na gestão de serviços?', 'Incidente é a interrupção ou degradação de um serviço a ser restaurado; problema é a causa raiz de um ou mais incidentes, a ser investigada e eliminada.', [['ITIL — Axelos', 'https://www.axelos.com/certifications/itil-service-management']]),
};
