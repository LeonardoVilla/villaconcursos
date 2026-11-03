export type Question = {
  id: string;
  groups: string[];
  topic: string;
  prompt: string;
  options: string[];
  explanation: string;
  exhibit?: string;
};

const questions: Question[] = [];
// Each authored row starts with the correct answer. The player shuffles the choices.
function add(groups: string, topic: string, rows: string) {
  for (const row of rows.trim().split('\n')) {
    const [prompt, answer, wrong1, wrong2, wrong3, wrong4, explanation] = row.trim().split('|');
    questions.push({
      id: 'q' + questions.length, groups: groups.split(' '), topic, prompt,
      options: [answer, wrong1, wrong2, wrong3, wrong4], explanation,
    });
  }
}

add('port cmc-port', 'Leitura e gramática', `
Em “O prazo foi curto, mas a equipe entregou o projeto”, qual é a relação expressa por “mas”?|Oposição|Causa|Condição|Conclusão|Finalidade|A segunda oração contrasta com a dificuldade mencionada na primeira.
Qual frase segue a concordância padrão?|Havia duas propostas na mesa.|Haviam duas propostas na mesa.|Houveram duas propostas na mesa.|Existia duas propostas na mesa.|Haviam de existir uma proposta.|Haver com sentido de existir é impessoal. O verbo existir concorda com seu sujeito.
Em qual frase o uso da crase está correto?|A equipe voltou à sala.|O formulário foi entregue à ele.|O prazo começa à partir de hoje.|Os candidatos chegaram à pé.|O servidor começou à revisar.|Voltar a mais o artigo feminino a produz à. Não há artigo antes de pronome pessoal ou verbo.
Em “O sistema falhou porque o disco estava cheio”, “porque” introduz o quê?|A causa da falha|A consequência da falha|Uma condição futura|Uma concessão|Uma comparação|O preenchimento do disco é apresentado como causa da falha.
Qual frase emprega a vírgula para isolar um vocativo?|Maria, revise o relatório.|Maria revisou o relatório, ontem à noite.|O relatório, revisado pela equipe, foi entregue.|O arquivo abriu, mas apresentou erros.|Na segunda-feira, Maria revisou o relatório.|Na primeira frase, Maria é a pessoa a quem se dirige a ordem.
Em “Embora estivesse chovendo, a prova ocorreu”, a primeira oração expressa o quê?|Concessão|Finalidade|Proporção|Consequência|Condição|A chuva poderia impedir a prova, mas ela ocorreu.
Qual frase mantém a concordância de “fazer” em indicação de tempo?|Faz três meses que estudo.|Fazem três meses que estudo.|Fizeram três meses que estudo.|Faziam três meses que estudo.|Farão três meses desde que estudo.|Fazer, indicando tempo decorrido, fica no singular.
Em “A equipe estudou a norma para aplicar seus critérios”, qual é o valor de “para”?|Finalidade|Concessão|Explicação|Condição|Comparação|Aplicar os critérios é o objetivo do estudo.
Em “Joana leu o edital. Ela anotou as datas”, que função “ela” cumpre?|Retoma Joana|Anuncia um termo posterior|Indica tempo|Substitui edital|Introduz uma oposição|O pronome retoma um referente já mencionado.
Qual é o discurso indireto de “Ela disse: ‘Entregarei o relatório amanhã’”?|Ela disse que entregaria o relatório no dia seguinte.|Ela disse: entregarei o relatório amanhã.|Ela disse que entregue o relatório ontem.|Ela disse que entregou o relatório no dia anterior.|Ela disse que entregava o relatório naquele momento.|O relato indireto adapta o futuro e a referência temporal à situação narrada.
Em qual frase a vírgula separa incorretamente sujeito e verbo?|Os servidores da comissão, analisaram o recurso.|Após a reunião, os servidores analisaram o recurso.|Os servidores analisaram o recurso, mas pediram prazo.|Servidores, analisem o recurso.|O recurso, que estava completo, foi analisado.|Na primeira frase, “Os servidores da comissão” é sujeito de “analisaram”.
Em “Se houver vaga, a inscrição será aceita”, qual é a relação entre as orações?|Condição|Concessão|Causa comprovada|Proporção|Finalidade|A existência de vaga é condição para a aceitação.
Qual alternativa preserva o sentido de “O servidor enviou o documento, portanto cumpriu o prazo”?|O servidor enviou o documento, logo cumpriu o prazo.|O servidor enviou o documento, embora cumprisse o prazo.|O servidor enviou o documento para que cumprisse o prazo.|O servidor enviou o documento, mas cumpriu o prazo.|O servidor enviou o documento porque cumpriu o prazo.|Logo e portanto introduzem conclusão.
Em “As candidatas a quem entreguei o aviso chegaram”, qual expressão o pronome relativo retoma?|As candidatas|O aviso|Entreguei|Chegaram|A quem|Quem retoma as candidatas, destinatárias do aviso.
Qual frase apresenta voz passiva analítica?|O documento foi assinado pela comissão.|A comissão assinou o documento.|A comissão vai assinar o documento.|O documento chegou ontem.|A comissão tinha assinado o documento.|A passiva analítica combina auxiliar ser e particípio. O documento é sujeito paciente.
`);

add('mt cmc-mt', 'História e geografia de Mato Grosso', `
Qual atividade teve papel central na formação de Cuiabá no período colonial?|Mineração de ouro|Extração de petróleo|Indústria automobilística|Produção de borracha no século XX|Extração de carvão mineral|As descobertas auríferas atraíram povoadores e impulsionaram os núcleos coloniais.
Qual cidade foi sede da antiga Capitania de Mato Grosso antes de Cuiabá?|Vila Bela da Santíssima Trindade|Rondonópolis|Sinop|Barra do Garças|Alta Floresta|Vila Bela foi fundada no século XVIII e sediou a administração da capitania.
Em que região oficial do Brasil se situa Mato Grosso?|Centro-Oeste|Norte|Nordeste|Sudeste|Sul|Mato Grosso integra o Centro-Oeste na divisão regional do IBGE.
Com qual país Mato Grosso possui fronteira internacional?|Bolívia|Paraguai|Peru|Colômbia|Argentina|A fronteira internacional mato-grossense está no oeste do estado e é com a Bolívia.
Qual estado resultou da divisão territorial de Mato Grosso determinada em 1977?|Mato Grosso do Sul|Tocantins|Rondônia|Goiás|Acre|A Lei Complementar federal nº 31/1977 criou Mato Grosso do Sul.
Quais biomas ocorrem em Mato Grosso?|Amazônia, Cerrado e Pantanal|Caatinga, Pampa e Pantanal|Mata Atlântica, Pampa e Caatinga|Cerrado, Caatinga e Pampa|Amazônia, Pampa e Mata Atlântica|O território mato-grossense abrange áreas desses três biomas.
Qual rio dá nome à bacia hidrográfica em que se insere o Pantanal?|Paraguai|São Francisco|Parnaíba|Doce|Paraíba do Sul|O Pantanal se insere na bacia do Alto Paraguai.
A Rusga ocorreu em qual contexto histórico?|Período Regencial|Estado Novo|República Velha|Ditadura militar|Segundo Reinado|A Rusga ocorreu em 1834, durante as regências.
Qual país enfrentou a Tríplice Aliança no conflito que afetou Mato Grosso no século XIX?|Paraguai|Bolívia|Peru|Chile|Equador|Brasil, Argentina e Uruguai formaram a aliança contra o Paraguai.
Qual processo foi associado à política de interiorização do governo Vargas?|Marcha para o Oeste|Abertura dos portos em 1808|Política dos Governadores|Proclamação da República|Guerra da Tríplice Aliança|A Marcha para o Oeste promoveu a ocupação do interior durante o governo Vargas.
`);

add('etica cmc-etica', 'Ética e filosofia', `
Qual enunciado expressa predominantemente um juízo de valor?|É injusto favorecer um conhecido na fila.|O atendimento começou às oito.|Havia dez pessoas na fila.|Dois guichês estavam abertos.|A fila terminou ao meio-dia.|A avaliação de justiça formula um juízo de valor.
Qual conduta é compatível com a impessoalidade no atendimento?|Aplicar os mesmos critérios a situações equivalentes|Dar prioridade a amigos|Alterar critérios conforme a influência do usuário|Ocultar critérios de seleção|Atender por preferência pessoal|A impessoalidade exclui favoritismo e orienta tratamento segundo critérios objetivos.
Qual atitude caracteriza reflexão crítica?|Examinar razões e evidências antes de aceitar uma conclusão|Aceitar uma afirmação por repetição|Rejeitar todo argumento divergente|Trocar evidência por popularidade|Adotar opinião sem avaliar premissas|A reflexão crítica avalia fundamentos e argumentos.
O que distingue um argumento de uma simples afirmação?|Apresentar razões para sustentar uma conclusão|Ser escrito em tom de certeza|Conter palavras técnicas|Estar de acordo com a maioria|Ser uma frase longa|Um argumento oferece premissas que dão suporte a uma conclusão.
Em uma decisão ética, o que caracteriza conflito de interesses?|Interesse particular que pode influenciar o dever profissional|Diferença de opiniões em reunião|Aplicação de regra geral|Distribuição de tarefas|Divulgação de um procedimento público|Um interesse pessoal pode comprometer a imparcialidade exigida pela função.
`);

add('cmc-rel', 'Comunicação interpessoal', `
Qual prática ajuda a confirmar que você compreendeu uma solicitação de atendimento?|Reformular o pedido e pedir confirmação|Responder antes de ouvir|Adivinhar o que falta|Mudar de assunto|Usar siglas desconhecidas|A reformulação permite detectar mal-entendidos antes de agir.
Como praticar escuta ativa em uma conversa difícil?|Ouvir a exposição e fazer perguntas esclarecedoras|Interromper para defender sua posição|Ignorar os pontos de divergência|Fazer outra tarefa durante a fala|Presumir a intenção do interlocutor|A escuta ativa exige atenção e verificação do entendimento.
Qual resposta demonstra empatia no atendimento?|Reconhecer a dificuldade e explicar os passos disponíveis|Prometer uma solução fora de sua competência|Julgar a pessoa pela queixa|Evitar qualquer explicação|Minimizar o problema|Empatia envolve reconhecer a perspectiva do usuário e orientar com clareza.
`);

add('cmc-logica', 'Raciocínio lógico', `
Qual é a negação de “todos os documentos foram assinados”?|Ao menos um documento não foi assinado.|Nenhum documento foi assinado.|Todos os documentos não foram assinados.|Alguns documentos foram assinados.|Exatamente um documento foi assinado.|Negar uma afirmação universal exige ao menos um contraexemplo.
Quando a implicação P → Q é falsa?|P verdadeira e Q falsa|P falsa e Q verdadeira|P e Q falsas|P e Q verdadeiras|Sempre que Q for verdadeira|A implicação só falha quando a premissa é verdadeira e a conclusão é falsa.
Se 20% de uma turma de 45 faltaram, quantos faltaram?|9|8|10|12|15|Multiplique 45 por 0,20.
Quantas duplas diferentes podem ser formadas com cinco pessoas?|10|20|5|15|25|Como a ordem não importa, calcule 5×4÷2.
Em uma urna com três bolas azuis e duas verdes, qual a chance de retirar uma verde?|2/5|3/5|1/2|2/3|1/5|Há dois resultados favoráveis em cinco igualmente prováveis.
`);

add('cmc-info', 'Informática básica', `
Em uma planilha, qual referência fixa linha e coluna ao copiar uma fórmula?|$A$1|A1|A$1|$A1|A:A|O cifrão diante da coluna e da linha torna ambas absolutas.
Qual medida dificulta invasão de conta mesmo se a senha vazar?|Autenticação em dois fatores|Reutilização da senha|Desativação de alertas|Envio da senha por e-mail|Uso de uma senha curta|O segundo fator exige uma prova adicional de identidade.
Qual situação é exemplo de phishing?|Mensagem falsa pede senha em uma página imitada|Backup automático copia arquivos|Editor salva uma planilha|Firewall bloqueia uma porta|Antivírus atualiza assinaturas|Phishing usa mensagens enganosas para induzir a entrega de dados ou outras ações.
Qual é a função de uma cópia de segurança?|Permitir restauração após perda de dados|Eliminar qualquer necessidade de atualização|Aumentar sempre a velocidade da rede|Impedir toda falha física|Remover a necessidade de controle de acesso|Backups permitem recuperar cópias dos dados.
Qual aplicação do LibreOffice é usada para planilhas?|Calc|Writer|Impress|Draw|Base|Calc é o componente de planilhas da suíte.
`);

add('ti0 cmc-ti', 'Segurança e privacidade', `
Qual propriedade protege dados contra leitura por pessoas não autorizadas?|Confidencialidade|Disponibilidade|Portabilidade|Redundância|Escalabilidade|Confidencialidade restringe a leitura a quem tem autorização.
Qual propriedade é afetada por alteração indevida de um arquivo?|Integridade|Disponibilidade|Portabilidade|Escalabilidade|Capacidade|Integridade diz respeito à preservação da correção e completude da informação.
Qual medida limita permissões ao necessário para o trabalho?|Privilégio mínimo|Conta administrativa compartilhada|Acesso irrestrito à rede|Desativação de auditoria|Reutilização de senhas|Privilégio mínimo reduz exposição e impacto de comprometimentos.
Qual objetivo principal da assinatura digital em um documento?|Verificar autoria e detectar alterações|Tornar o documento sempre secreto|Comprimir o arquivo|Evitar a necessidade de certificado em todos os casos|Aumentar a capacidade de armazenamento|A assinatura protege autenticidade e integridade. Sigilo depende de outra medida.
Qual é o papel de um certificado digital em infraestrutura de chaves públicas?|Vincular uma chave pública a uma identidade|Distribuir a chave privada para todos|Garantir anonimato|Compactar assinaturas|Substituir o controle de acesso|A autoridade certificadora atesta o vínculo entre identidade e chave pública.
Qual recurso é especialmente adequado para detectar mudanças acidentais em um arquivo?|Comparar o hash com um valor de referência confiável|Renomear o arquivo|Aumentar a permissão de escrita|Apagar a extensão|Alterar a data do arquivo|Hashes diferentes indicam que o conteúdo mudou.
Em proteção de dados, a qual princípio corresponde limitar o tratamento ao mínimo pertinente à finalidade?|Necessidade|Publicidade irrestrita|Disponibilidade|Descentralização|Portabilidade|A LGPD inclui a necessidade entre seus princípios no art. 6º.
Qual estratégia ajuda a limitar o impacto de ransomware sobre backups?|Manter cópias isoladas e testar a restauração|Manter todas as cópias graváveis na mesma máquina|Desativar verificação de integridade|Copiar dados apenas depois do incidente|Compartilhar a senha dos backups|Cópias isoladas reduzem a chance de criptografia simultânea dos originais e backups.
O que diferencia um IPS de um IDS em seu uso típico?|O IPS pode bloquear tráfego suspeito|O IDS sempre bloqueia tráfego em linha|O IPS apenas registra eventos|O IDS substitui autenticação|O IPS elimina a necessidade de logs|O IDS detecta. O IPS pode intervir para prevenir a atividade.
Qual prática reduz o risco de injeção SQL quando há entrada de usuário?|Consultas parametrizadas|Concatenação de texto de entrada|Mudança do nome da tabela|Armazenar senhas no código|Aumentar o número de consultas|Parâmetros mantêm dados de entrada separados da sintaxe SQL.
`);

add('ti1 cmc-ti', 'Desenvolvimento e engenharia de software', `
Qual é um requisito não funcional?|Responder em até dois segundos sob carga definida|Cadastrar um usuário|Emitir um relatório|Consultar um protocolo|Enviar uma notificação|Tempo de resposta é uma restrição de qualidade do sistema.
Qual teste verifica uma função isoladamente?|Teste unitário|Teste de aceitação|Teste de carga|Teste de recuperação|Teste ponta a ponta|Testes unitários avaliam pequenas unidades de código em isolamento.
Qual teste verifica a interação entre componentes?|Teste de integração|Teste exclusivamente unitário|Inspeção de requisitos|Teste de usabilidade isolado|Revisão de código|O teste de integração procura falhas nos pontos de comunicação.
Em uma API HTTP, qual método é definido para leitura de um recurso?|GET|POST|PATCH|DELETE|CONNECT|GET solicita uma representação sem intenção de alterar o recurso.
Qual código HTTP indica criação bem-sucedida de recurso?|201|204|301|400|503|201 Created informa que a requisição criou um ou mais recursos.
O que significa idempotência em HTTP?|Repetir o pedido tem o mesmo efeito pretendido no servidor|Todas as respostas têm o mesmo código|A operação sempre retorna JSON|A operação não pode falhar|A operação precisa de autenticação|A definição compara o efeito pretendido de múltiplas requisições idênticas com o de uma única.
Qual vantagem é típica de uma arquitetura de microsserviços?|Possibilidade de implantar serviços de forma independente|Ausência de comunicação entre serviços|Eliminação de testes distribuídos|Ausência de falhas parciais|Consistência global automática|A implantação independente é uma vantagem potencial, com custos de coordenação.
No Scrum, quem ordena o Product Backlog?|Product Owner|Scrum Master|Equipe externa de auditoria|Gestor de infraestrutura|Usuário final isoladamente|O Product Owner responde pelo gerenciamento efetivo do Product Backlog.
Qual prática é associada ao Kanban?|Limitar trabalho em andamento|Exigir sprints fixas em todos os casos|Eliminar visualização do fluxo|Maximizar tarefas simultâneas|Proibir medição de tempo|Limites de trabalho em andamento ajudam a controlar fluxo e gargalos.
Em programação orientada a objetos, o que caracteriza encapsulamento?|Controlar o acesso ao estado interno por uma interface|Copiar todos os atributos para subclasses|Exigir variáveis públicas|Usar apenas funções globais|Eliminar objetos|Encapsulamento protege detalhes de implementação e regras internas.
`);

add('ti1 ti3 cmc-ti', 'Git, CI/CD e contêineres', `
No Git, qual ação registra alterações preparadas no histórico local?|Commit|Push|Fetch|Clone|Stash|Commit cria um registro no histórico local a partir do índice.
Qual ação obtém referências e objetos do remoto sem integrar automaticamente à branch atual?|Fetch|Push|Commit|Add|Tag|Fetch atualiza informações do remoto sem fazer merge na branch atual.
O que caracteriza integração contínua?|Integrar alterações frequentes e verificar com build e testes|Publicar manualmente só ao fim do projeto|Manter branches isoladas por meses|Testar exclusivamente em produção|Eliminar controle de versões|CI busca feedback frequente e detecção precoce de falhas de integração.
O que diferencia imagem e contêiner?|A imagem é a base e o contêiner é uma instância dela|O contêiner é a base e a imagem é o processo|Ambos exigem um sistema operacional convidado completo|Uma imagem só existe enquanto é executada|Toda imagem é um cluster|Uma imagem contém os componentes necessários para iniciar uma instância.
Qual é a finalidade de um Dockerfile?|Descrever instruções para construir uma imagem|Armazenar todos os logs de produção|Definir uma consulta SQL|Trocar o protocolo HTTP|Substituir o código da aplicação|O Dockerfile reúne instruções para a construção da imagem.
Qual prática de entrega reduz risco ao publicar para uma parcela pequena do tráfego inicialmente?|Canary|Big bang|Desativação de logs|Deploy sem teste|Alteração direta no banco|A liberação canary permite observar a nova versão antes de ampliar sua exposição.
`);

add('ti2 ti4 cmc-ti', 'Banco de dados e análise', `
Qual cláusula filtra linhas antes do agrupamento em SQL?|WHERE|HAVING|ORDER BY|GROUP BY|SELECT DISTINCT|WHERE filtra linhas. HAVING filtra grupos.
Qual cláusula filtra grupos pelo total de registros?|HAVING|WHERE|FROM|ORDER BY|LIMIT|HAVING pode usar agregações como COUNT para filtrar grupos.
Qual junção preserva todas as linhas da tabela à esquerda?|LEFT JOIN|INNER JOIN|CROSS JOIN filtrado por igualdade|RIGHT JOIN|INTERSECT|LEFT JOIN mantém linhas da esquerda mesmo sem correspondência.
O que a chave estrangeira ajuda a preservar?|Integridade referencial|Confidencialidade|Isolamento físico|Compressão|Anonimização|A restrição verifica se o valor referenciado existe na tabela de destino.
Em ACID, qual propriedade descreve executar todas as operações ou desfazer a transação inteira?|Atomicidade|Consistência|Isolamento|Durabilidade|Escalabilidade|Atomicidade evita a persistência de uma transação apenas parcial.
Qual propriedade protege alterações confirmadas contra perda por falha posterior?|Durabilidade|Atomicidade|Isolamento|Disponibilidade|Consistência eventual|Durabilidade preserva o resultado de transações confirmadas.
Por que um índice pode aumentar o custo de escritas?|Também precisa ser atualizado quando os dados relevantes mudam|Impede uso de filtros|Elimina o cache|Desativa transações|Exige sempre cópia integral do banco|Índices são estruturas auxiliares que precisam de manutenção.
Qual gráfico é adequado para mostrar a evolução mensal de um indicador?|Gráfico de linhas|Diagrama de Venn|Mapa sem referência geográfica|Nuvem de palavras|Diagrama de classes|O eixo temporal e a linha evidenciam a evolução.
Em ETL, em qual etapa regras limpam ou padronizam dados?|Transformação|Extração|Carregamento|Publicação do painel|Criação do usuário|Transformação modifica dados extraídos antes do carregamento.
Qual consulta conta registros de cada categoria?|SELECT categoria, COUNT(*) FROM itens GROUP BY categoria|SELECT categoria FROM itens ORDER BY categoria|SELECT COUNT(*) FROM itens|SELECT DISTINCT categoria FROM itens|SELECT categoria FROM itens LIMIT 1|GROUP BY produz um grupo por categoria. COUNT conta suas linhas.
`);

add('ti4 cmc-ti', 'Algoritmos e sistemas', `
Qual estrutura remove primeiro o último item inserido?|Pilha|Fila FIFO|Tabela de dispersão|Lista ordenada por valor|Grafo|Uma pilha segue a política LIFO.
Qual estrutura atende primeiro o item que chegou primeiro?|Fila FIFO|Pilha|Árvore binária de busca|Grafo|Tabela hash|FIFO preserva ordem de chegada na retirada.
Qual é a complexidade de busca binária em vetor ordenado, no pior caso?|O(log n)|O(n²)|O(n!)|O(n log n)|O(2^n)|Cada comparação reduz aproximadamente pela metade o intervalo.
Qual é o principal papel da memória virtual?|Fornecer espaços de endereçamento e mapear páginas|Substituir todo armazenamento persistente|Aumentar a velocidade do cabo de rede|Evitar completamente faltas de página|Eliminar o isolamento entre processos|A memória virtual separa endereços lógicos de endereços físicos.
Qual permissão Linux permite executar um arquivo?|x|r|w|s|t|O bit x é o de execução para arquivos.
Qual é a função típica de um sistema operacional?|Gerenciar processos, memória e dispositivos|Traduzir somente páginas HTML|Executar apenas consultas SQL|Substituir o firmware de todos os componentes|Garantir largura de banda contratada|O sistema operacional administra recursos e fornece serviços a aplicações.
`);

add('cmc-ti', 'Redes e suporte', `
Qual protocolo resolve nomes de domínio em endereços IP?|DNS|DHCP|SMTP|SSH|SNMP|DNS oferece resolução de nomes e outros registros.
Qual protocolo distribui automaticamente configuração IP em uma rede?|DHCP|SMTP|HTTP|SSH|DNS|DHCP pode distribuir endereço, máscara e gateway.
Qual protocolo de transporte oferece fluxo de bytes confiável e ordenado?|TCP|UDP|IP|ARP|ICMP|TCP inclui controle de sequência e retransmissão.
Qual ferramenta de suporte deve ser consultada primeiro para conhecer impacto e urgência de um chamado?|Registro do incidente|Inventário de mobiliário|Agenda pessoal do técnico|Histórico de compras sem relação|Lista pública de ramais|Registrar sintomas, impacto e urgência permite priorizar e investigar.
Em uma rede IPv4 comum, qual máscara corresponde a /24?|255.255.255.0|255.255.0.0|255.0.0.0|255.255.255.128|255.255.255.255|Os 24 primeiros bits valem 1, formando três octetos 255.
`);

add('ti2', 'Inteligência artificial', `
Qual abordagem usa exemplos rotulados para treinar um classificador?|Aprendizado supervisionado|Agrupamento não supervisionado|Aprendizado por reforço exclusivamente|Criptografia simétrica|Indexação relacional|O rótulo informa a classe esperada durante o treinamento.
Quando ocorre sobreajuste?|Quando o modelo aprende particularidades do treino e generaliza mal|Quando o modelo não consegue ajustar nem o treino|Quando a base é sempre corretamente dividida|Quando as classes têm exatamente o mesmo tamanho|Quando o algoritmo usa CPU|O modelo se ajusta demais ao treino e perde desempenho em dados novos.
Qual é a finalidade de separar uma base de teste?|Estimar desempenho em exemplos não usados no ajuste|Aumentar artificialmente a nota de treino|Escolher cada hiperparâmetro sobre o teste final|Remover todos os erros de classificação|Dispensar dados rotulados em qualquer caso|A avaliação final deve usar dados independentes do treinamento e da seleção do modelo.
Qual tarefa é exemplo de agrupamento?|Encontrar grupos de registros similares sem rótulos prévios|Estimar uma classe conhecida por exemplos rotulados|Criptografar um banco|Ordenar nomes alfabeticamente|Excluir duplicatas exatas|Agrupamento procura estrutura em dados sem categorias previamente informadas.
`);

add('ti3 cmc-ti', 'Governança e gestão de TI', `
Qual é a finalidade de um acordo de nível de serviço?|Definir metas mensuráveis de serviço|Substituir todos os contratos|Especificar a senha do administrador|Excluir a avaliação de desempenho|Padronizar unicamente a linguagem de programação|Um SLA explicita metas como disponibilidade ou prazo de atendimento.
Qual indicador RPO expressa?|Perda de dados tolerável medida em tempo|Tempo máximo para restabelecer o serviço|Tempo médio de compilação|Prazo mínimo de retenção contratual|Total de máquinas em produção|RPO expressa até que ponto no tempo os dados precisam ser recuperados.
Qual indicador RTO expressa?|Tempo-alvo para recuperar a operação|Quantidade de transações que podem ser perdidas|Prazo para renovar a licença|Número de cópias de segurança|Taxa de transferência da rede|RTO trata do prazo de recuperação da operação.
Qual ação faz parte do gerenciamento de riscos?|Avaliar probabilidade e impacto|Ignorar riscos de baixa visibilidade|Eliminar registro de incidentes|Escolher controles sem analisar objetivos|Medir apenas custo de hardware|Probabilidade e impacto ajudam a priorizar respostas.
`);

add('dir1 cmc-jur cmc-adm', 'Direito administrativo', `
Qual princípio exige atuação sem favorecimento pessoal?|Impessoalidade|Autotutela|Especialidade|Continuidade|Hierarquia|A impessoalidade exige finalidade pública e critérios objetivos.
Qual princípio trata da divulgação dos atos administrativos, observados os sigilos legais?|Publicidade|Moralidade|Continuidade|Supremacia|Motivação|Publicidade permite conhecimento e controle social dos atos.
Qual princípio impõe atuação dentro das competências autorizadas pelo ordenamento?|Legalidade|Eficiência|Publicidade|Economicidade|Continuidade|A Administração deve atuar nos limites das normas que lhe atribuem competência.
Qual entidade integra a Administração indireta?|Autarquia|Ministério|Secretaria municipal|Gabinete do prefeito|Departamento de secretaria|A autarquia tem personalidade jurídica própria e integra a Administração indireta.
Qual distinção caracteriza a descentralização administrativa?|A execução é atribuída a outra pessoa jurídica|Distribuem-se atribuições entre órgãos da mesma pessoa|Cria-se mera divisão interna de tarefas|Toda atividade volta à chefia central|A competência é repartida apenas entre servidores de um órgão|Descentralização envolve outra pessoa. Distribuição interna entre órgãos é desconcentração.
Qual ato é próprio da autotutela administrativa sobre ato ilegal?|Anulação|Revogação por conveniência|Convalidação obrigatória de qualquer vício|Ratificação automática|Aprovação judicial prévia|A Administração pode anular seus atos ilegais, observados os limites e garantias aplicáveis.
Qual fundamento pode justificar revogação de um ato válido e revogável?|Conveniência e oportunidade|Incompetência absoluta|Desvio de finalidade|Objeto proibido|Vício insanável|Revogação recai sobre ato válido por razões de mérito administrativo.
Qual elemento indica a autoridade legalmente habilitada a praticar o ato?|Competência|Objeto|Motivo|Finalidade|Forma|Competência é a atribuição conferida pelo ordenamento.
Qual elemento corresponde ao resultado jurídico imediato do ato?|Objeto|Competência|Forma|Motivo|Finalidade geral|O objeto é o conteúdo ou efeito imediato produzido pelo ato.
Qual poder permite condicionar atividades privadas para proteger interesses coletivos?|Poder de polícia|Poder hierárquico|Poder disciplinar exclusivamente interno|Poder constituinte|Poder jurisdicional|O poder de polícia condiciona direitos e atividades em benefício do interesse público.
Qual poder fundamenta a distribuição e supervisão de funções dentro de uma estrutura administrativa?|Poder hierárquico|Poder constituinte|Poder legislativo originário|Poder de polícia|Poder eleitoral|Hierarquia permite direção e controle interno entre níveis da estrutura.
Qual garantia deve ser respeitada em processo administrativo sancionador?|Contraditório e ampla defesa|Proibição de acesso aos fundamentos|Presunção automática de culpa|Confissão compulsória|Decisão secreta sem motivação|A Constituição assegura contraditório e ampla defesa em processos administrativos.
O que significa motivar um ato administrativo?|Expor seus fundamentos de fato e de direito|Declarar apenas o nome do agente|Arquivar o ato sem justificativa|Publicar o ato sem indicar razões|Delegar a decisão sem justificativa|Motivação torna identificáveis as razões que sustentam a decisão.
Qual é a natureza de uma praça pública aberta à população?|Bem de uso comum do povo|Bem particular do administrador|Bem de uso especial em todos os casos|Bem dominical por definição|Bem consumível exclusivamente privado|Praças são exemplos de bens públicos de uso comum.
Qual exemplo representa controle interno da Administração?|Unidade de controle do próprio Poder examina seus processos|Particular ajuíza ação contra um ato|Tribunal de Contas examina contas como auxiliar do Legislativo|Juiz anula uma penalidade ilegal|Imprensa investiga contratação|O controle interno é exercido dentro da estrutura do próprio Poder.
`);

add('dir1 cmc-jur', 'Licitações e contratos', `
Em qual hipótese ocorre inexigibilidade de licitação?|Quando a competição é inviável|Sempre que o gestor preferir|Em toda contratação de baixo valor|Em qualquer caso de urgência|Sempre que existirem muitos fornecedores|O art. 74 da Lei nº 14.133/2021 vincula inexigibilidade à inviabilidade de competição.
Qual modalidade é adequada para aquisição de bens e serviços comuns, observadas as regras legais?|Pregão|Leilão|Concurso|Diálogo competitivo em todos os casos|Convite|A Lei nº 14.133/2021 define o pregão para bens e serviços comuns.
Qual modalidade é destinada à alienação de bens nas hipóteses legais, pelo maior lance?|Leilão|Pregão|Concurso|Concorrência em todos os casos|Convite|O leilão utiliza o critério de maior lance para alienação.
Qual modalidade seleciona trabalho técnico, científico ou artístico com prêmio ou remuneração?|Concurso|Leilão|Pregão|Convite|Tomada de preços|A modalidade concurso é prevista para seleção desses trabalhos.
Qual instrumento divulga centralmente atos exigidos pela Lei nº 14.133/2021?|Portal Nacional de Contratações Públicas|Diário pessoal do gestor|Sistema de votação eletrônica|Portal de serviços eleitorais|Cadastro de imóveis|O PNCP é o portal oficial de divulgação previsto na lei.
Qual princípio impede que o julgamento use critérios criados depois da entrega das propostas?|Julgamento objetivo|Informalidade absoluta|Sigilo permanente|Hierarquia|Autotutela|As propostas são avaliadas conforme critérios previamente estabelecidos.
O que o estudo técnico preliminar ajuda a demonstrar?|O problema e a solução mais adequada à necessidade pública|A aceitação automática da primeira proposta|A dispensa de análise de alternativas|O nome do fornecedor antes da competição|A ausência de necessidade de planejamento|O ETP fundamenta a escolha da solução na fase preparatória.
Em uma contratação direta, o que deve ocorrer com a justificativa do preço?|Deve integrar a instrução do processo|Deve ser sempre dispensada|Pode ser substituída por preferência pessoal|Só existe após o pagamento|É desnecessária se houver fornecedor exclusivo|O art. 72 prevê a justificativa de preço na instrução.
`);

add('dir0 cmc-jur', 'Direito constitucional', `
Qual remédio constitucional protege a liberdade de locomoção contra ilegalidade ou abuso de poder?|Habeas corpus|Habeas data|Mandado de injunção|Ação popular|Mandado de segurança coletivo|O habeas corpus protege o direito de ir e vir.
Qual remédio permite conhecer dados pessoais em registros governamentais ou de caráter público?|Habeas data|Habeas corpus|Ação popular|Mandado de injunção|Ação direta de inconstitucionalidade|Habeas data protege o conhecimento e a retificação de dados relativos ao impetrante.
Qual instrumento pode combater a falta de norma que inviabiliza o exercício de direito constitucional?|Mandado de injunção|Habeas corpus|Habeas data|Ação popular|Mandado de segurança coletivo em todo caso|O mandado de injunção enfrenta omissão normativa que impede exercício de direitos ou prerrogativas constitucionais.
Qual regra rege manifestação do pensamento na Constituição?|É livre, vedado o anonimato.|Depende de autorização administrativa prévia.|É vedada a crítica ao poder público.|Só pode ocorrer por escrito.|É reservada a agentes públicos.|A Constituição protege a livre manifestação do pensamento e veda o anonimato.
Como se organizam os Poderes da União segundo a Constituição?|Independentes e harmônicos entre si|Subordinados todos ao Executivo|Sem competências próprias|Subordinados todos ao Judiciário|Fundidos em órgão único|O art. 2º estabelece independência e harmonia entre Legislativo, Executivo e Judiciário.
O que a Constituição garante ao litigante em processo administrativo?|Contraditório e ampla defesa|Sigilo obrigatório de toda decisão|Julgamento por júri|Imunidade disciplinar|Condenação sem fundamentação|O art. 5º, LV, abrange processos judiciais e administrativos.
Em regra, o ingresso em cargo público efetivo exige o quê?|Aprovação prévia em concurso público|Indicação política|Escolha por sorteio|Apenas estágio supervisionado|Autorização judicial individual|A Constituição exige concurso para investidura, ressalvadas as nomeações em comissão previstas em lei.
`);

add('cmc-jur', 'Municípios e orçamento público', `
Qual matéria pode ser legislada pelo Município segundo a Constituição?|Assunto de interesse local|Direito penal em geral|Direito comercial em geral|Política monetária nacional|Nacionalidade|O art. 30, I, atribui ao Município competência sobre assuntos de interesse local.
Qual norma organiza o Município nos termos do art. 29 da Constituição?|Lei Orgânica|Constituição estadual própria|Código Penal municipal|Lei federal anual de orçamento|Portaria do prefeito|O Município é regido por sua Lei Orgânica, respeitados os preceitos constitucionais.
Quem exerce o controle externo municipal, com auxílio do Tribunal de Contas competente?|Câmara Municipal|Secretaria de Administração|Prefeito individualmente|Ministério Público sozinho|Delegacia municipal|O art. 31 atribui o controle externo ao Poder Legislativo municipal.
Qual instrumento estabelece diretrizes, objetivos e metas de médio prazo?|PPA|LOA|Edital de licitação|Relatório diário de caixa|Lei Orgânica|O PPA orienta o planejamento plurianual.
Qual instrumento orienta a elaboração da lei orçamentária anual?|LDO|PPA exclusivamente|Regimento Interno|Lei de criação de autarquia|Balanço patrimonial|A LDO faz a ponte entre planejamento e orçamento anual.
Qual instrumento estima receitas e fixa despesas para o exercício?|LOA|LDO|PPA|Regimento Interno|Plano diretor municipal|A LOA é a lei orçamentária anual.
Qual é a função de um indicador de resultado?|Acompanhar mudanças relacionadas ao objetivo da política|Registrar apenas a existência de uma equipe|Contar somente reuniões realizadas|Medir unicamente horas trabalhadas|Substituir a definição de objetivos|Indicadores de resultado medem efeitos relevantes em relação ao objetivo definido.
Qual atividade permite verificar se uma política atingiu seus objetivos?|Avaliação|Apenas formação de agenda|Somente publicação de norma|Apenas cadastramento de fornecedores|Exclusivamente alocação inicial de recursos|A avaliação examina resultados e oferece evidências para decisões futuras.
Qual exemplo expressa accountability na gestão pública?|Prestar contas e responder por decisões|Ocultar critérios de decisão|Eliminar auditorias|Dispensar documentação|Concentrar informação sem supervisão|Accountability envolve prestação de contas e responsabilização.
Qual característica distingue eficácia de eficiência na avaliação de uma ação pública?|Eficácia avalia o alcance de metas|Eficácia mede apenas custo por unidade|Eficiência exclui análise de recursos|Eficiência significa cumprir qualquer meta independentemente dos meios|Ambas medem apenas publicidade|Eficácia se refere ao alcance das metas. Eficiência relaciona entregas e recursos.
`);

add('dir2', 'Direito civil', `
Quando começa a personalidade civil da pessoa, segundo o Código Civil?|Com o nascimento com vida|Aos dezoito anos|No alistamento eleitoral|Na emissão de CPF|Com a matrícula escolar|O art. 2º fixa o nascimento com vida e resguarda direitos do nascituro desde a concepção.
Qual requisito integra a validade do negócio jurídico?|Agente capaz|Objeto ilícito|Forma sempre pública|Impossibilidade do objeto|Ausência de manifestação de vontade|O art. 104 exige agente capaz, objeto lícito, possível e determinado ou determinável e forma prescrita ou não proibida.
Qual princípio exige probidade e lealdade na formação e execução dos contratos?|Boa-fé objetiva|Sigilo absoluto|Tipicidade penal|Anterioridade tributária|Incomunicabilidade patrimonial|A boa-fé objetiva impõe padrões de conduta leal.
Qual elemento integra, em regra, a responsabilidade civil subjetiva?|Culpa ou dolo|Condenação penal prévia obrigatória|Contrato escrito em todos os casos|Registro em cartório de todo dano|Aprovação legislativa|A responsabilidade subjetiva exige a imputação por culpa ou dolo, além dos demais pressupostos.
Em regra, o que a prescrição atinge conforme o art. 189 do Código Civil?|A pretensão|A personalidade civil|A capacidade de direito|Todo direito de propriedade|A nacionalidade|A violação do direito faz nascer a pretensão, sujeita aos prazos de prescrição.
`);

add('dir3', 'Direito processual civil', `
Que princípio impede, em regra, decisão baseada em fundamento sobre o qual as partes não puderam se manifestar?|Contraditório|Publicidade exclusivamente|Inércia da jurisdição|Oralidade|Identidade física do juiz|O art. 10 do CPC veda a decisão surpresa.
Quais elementos são exigidos para a tutela de urgência em geral?|Probabilidade do direito e perigo de dano ou risco ao resultado útil|Somente certeza definitiva do direito|Somente acordo das partes|Exclusivamente prova testemunhal|Apenas o valor elevado da causa|São os requisitos previstos no art. 300 do CPC.
Qual ato convoca o réu para integrar a relação processual?|Citação|Intimação de sentença|Sentença|Despacho de expediente|Certidão de trânsito|A citação é o ato de convocação do réu, executado ou interessado.
Qual recurso é cabível, em regra, contra sentença?|Apelação|Agravo interno|Agravo de instrumento em todo caso|Recurso ordinário constitucional em qualquer caso|Correição parcial|O CPC prevê apelação contra sentença.
Qual é uma hipótese de cabimento dos embargos de declaração?|Omissão no pronunciamento judicial|Mera vontade de refazer todo o julgamento|Escolha de novo juiz|Substituição obrigatória da apelação|Produção de prova sem vício da decisão|Embargos podem esclarecer obscuridade, eliminar contradição, suprir omissão ou corrigir erro material.
`);

add('dir4 trans6', 'Direito ambiental', `
A Constituição atribui a quem o dever de defender e preservar o meio ambiente?|Ao Poder Público e à coletividade|Exclusivamente à União|Exclusivamente aos proprietários rurais|Somente ao Ministério Público|Apenas às empresas públicas|O art. 225 atribui o dever ao Poder Público e à coletividade.
Para instalação de obra potencialmente causadora de significativa degradação, o que prevê a Constituição?|Estudo prévio de impacto ambiental com publicidade|Licença automática|Somente estudo posterior ao início da obra|Sigilo integral do estudo|Dispensa de exame de impacto|O art. 225, § 1º, IV, exige estudo prévio para obra ou atividade nas condições indicadas.
Qual é a natureza da responsabilidade civil do poluidor pelos danos ambientais, nos termos da Lei nº 6.938/1981?|Objetiva|Subjetiva em todos os casos|Exclusivamente contratual|Dependente de condenação penal|Inexistente após aplicação de multa|O art. 14, § 1º, prevê indenização ou reparação independentemente de culpa.
A obrigação de reparar dano ambiental pode coexistir com sanções administrativas e penais?|Sim, são esferas distintas previstas na Constituição.|Não, multa exclui reparação.|Não, reparação exclui qualquer sanção.|Somente se houver contrato prévio.|Somente quando o agente for pessoa jurídica.|O art. 225, § 3º, prevê sanções independentemente da obrigação de reparar.
Qual conceito corresponde ao emprego cuidadoso de medidas diante de incerteza científica sobre dano grave?|Precaução|Prescrição aquisitiva|Reserva de plenário|Anualidade orçamentária|Irretroatividade tributária|A precaução orienta ação protetiva mesmo na presença de incerteza científica relevante.
`);

add('trans3', 'Estatística aplicada', `
Qual é a mediana de 2, 3, 7, 10 e 100?|7|3|10|24,4|100|A mediana é a observação central na lista ordenada.
Qual medida é mais sensível a um valor extremo entre média e mediana?|Média aritmética|Mediana|As duas sempre na mesma proporção|Nenhuma|A posição central|A média usa a magnitude de todos os valores, incluindo extremos.
`);

export { questions };

const appliedItems: Omit<Question, 'id'>[] = [
  {
    groups: ['ti2','ti4','cmc-ti'],
    topic: 'Banco de dados e análise',
    prompt: 'Uma equipe precisa listar as unidades que registraram mais de um chamado aberto. Considere os dados e a consulta abaixo. Qual resultado a consulta retorna?',
    exhibit: "unidade | situacao\nNorte   | aberto\nNorte   | fechado\nSul     | aberto\nSul     | aberto\n\nSELECT unidade, COUNT(*) AS total\nFROM chamados\nWHERE situacao = 'aberto'\nGROUP BY unidade\nHAVING COUNT(*) > 1;",
    options: ['Sul, com total 2.', 'Norte e Sul, cada uma com total 2.', 'Norte, com total 2.', 'Norte e Sul, cada uma com total 1.', 'Sul, com total 3.'],
    explanation: 'WHERE elimina o chamado fechado antes da agregação. Norte fica com um chamado e é excluída por HAVING. Sul fica com dois.',
  },
  {
    groups: ['cmc-ti'],
    topic: 'Redes e suporte',
    prompt: 'Uma estação recebe as configurações abaixo. Ela acessa um servidor interno pelo endereço IP, mas falha ao acessar o mesmo servidor pelo nome. Qual verificação deve ser priorizada?',
    exhibit: 'Endereço IPv4: 192.168.20.31/24\nGateway:       192.168.20.1\nServidor:      192.168.20.55\nDNS:           192.168.20.10',
    options: ['Consultar o registro do servidor no DNS configurado.', 'Trocar o gateway por 192.168.20.55.', 'Alterar a máscara para /32.', 'Substituir o endereço da estação pelo endereço do servidor.', 'Desativar o protocolo TCP.'],
    explanation: 'O acesso por IP funciona. A falha pelo nome indica que a resolução DNS deve ser investigada antes de alterar a rede.',
  },
  {
    groups: ['ti4','cmc-ti'],
    topic: 'Algoritmos e sistemas',
    prompt: 'Um algoritmo conta as ocorrências de um código em uma lista. Considere o pseudocódigo a seguir e assinale a saída produzida.',
    exhibit: 'codigos ← [4, 7, 4, 4, 2]\ntotal ← 0\npara cada codigo em codigos:\n    se codigo = 4:\n        total ← total + 1\nimprima total',
    options: ['3','1','2','4','5'],
    explanation: 'A condição é verdadeira no primeiro, no terceiro e no quarto elementos. O contador é incrementado três vezes.',
  },
  {
    groups: ['dir1','cmc-jur'],
    topic: 'Licitações e contratos',
    prompt: 'Durante a preparação de uma contratação, a equipe encontra vários fornecedores e consegue definir padrões de desempenho por especificações usuais de mercado. O objeto é um serviço comum, sem as exceções legais. Nos termos da Lei nº 14.133/2021, assinale a modalidade apropriada.',
    options: ['Pregão.', 'Concurso.', 'Leilão.', 'Diálogo competitivo.', 'Convite.'],
    explanation: 'A existência de padrões objetivamente definidos para serviço comum orienta o uso do pregão, observadas as regras dos arts. 6º e 29.',
  },
  {
    groups: ['dir3'],
    topic: 'Direito processual civil',
    prompt: 'Em processo civil, o juiz identifica de ofício um fundamento jurídico que pode determinar o desfecho. As partes ainda não tiveram oportunidade de se manifestar sobre esse fundamento. Considerando o art. 10 do CPC, qual providência deve adotar?',
    options: ['Dar às partes oportunidade de se manifestar antes de decidir.', 'Decidir de imediato, pois a matéria é cognoscível de ofício.', 'Ouvir apenas a parte que seria beneficiada pela decisão.', 'Determinar a extinção automática do processo.', 'Transferir a apreciação do fundamento para a fase recursal.'],
    explanation: 'A vedação à decisão surpresa alcança também matérias sobre as quais o juiz pode decidir de ofício.',
  },
  {
    groups: ['cmc-jur'],
    topic: 'Municípios e orçamento público',
    prompt: 'Uma equipe municipal precisa identificar, respectivamente, o instrumento de planejamento plurianual, a lei que orienta a elaboração do orçamento anual e a lei que estima as receitas e fixa as despesas do exercício. Qual sequência atende ao pedido?',
    options: ['PPA, LDO e LOA.', 'LDO, LOA e PPA.', 'LOA, PPA e LDO.', 'PPA, LOA e LDO.', 'LOA, LDO e PPA.'],
    explanation: 'O PPA define diretrizes e metas plurianuais. A LDO orienta a elaboração da LOA, que estima receitas e fixa despesas.',
  },
];

questions.push(...appliedItems.map((question, index) => ({...question, id: 'aplicada-' + index})));

add('leg', 'Legislação estadual de Mato Grosso', `
Qual norma institui o Código de Ética Funcional do servidor civil estadual?|Lei Complementar nº 112/2002|Lei Complementar nº 38/1995|Lei Complementar nº 04/1990|Lei nº 14.133/2021|Lei nº 13.709/2018|A LC nº 112/2002 trata da ética funcional do servidor civil de Mato Grosso.
Qual norma institui o Código Estadual do Meio Ambiente de Mato Grosso?|Lei Complementar nº 38/1995|Lei Complementar nº 112/2002|Lei Complementar nº 04/1990|Lei nº 12.527/2011|Lei nº 14.133/2021|A LC nº 38/1995 estabelece as bases normativas da política ambiental estadual.
`);

add('atual', 'Atualidades socioambientais', `
Qual cidade brasileira sediou a COP30 em 2025?|Belém|Cuiabá|Manaus|Brasília|Recife|Belém, no Pará, sediou a conferência climática da ONU em novembro de 2025.
`);

add('cmc-leg', 'Legislação municipal de Cuiabá', `
Qual documento disciplina o funcionamento interno da Câmara Municipal de Cuiabá?|Regimento Interno da Câmara|Código de Processo Civil|Lei Orçamentária Anual|Código Penal|Estatuto da Cidade|O edital indica o Regimento Interno aprovado pela Resolução nº 08/2016.
Qual norma corresponde ao Estatuto dos Servidores de Cuiabá indicado no edital?|Lei Complementar nº 93/2003|Lei Complementar nº 235/2011|Lei nº 14.133/2021|Resolução nº 08/2016|Lei nº 13.709/2018|A LC municipal nº 93/2003 institui o estatuto. A LC nº 235/2011 trata do plano de cargos da Câmara.
`);
