export const readingExercises: Record<string, {question: string; answer: string}> = {
  'Interpretação, coesão e concordância': {
    question: 'Em “O orçamento foi reduzido. Ainda assim, a equipe manteve o atendimento”, o que se pode inferir? Trocar “ainda assim” por “por isso” preserva a relação entre as frases?',
    answer: 'O texto afirma que o atendimento foi mantido apesar da redução. Ele não explica como a equipe conseguiu isso. “Ainda assim” marca contraste com uma expectativa, enquanto “por isso” apresentaria a manutenção como consequência da redução.',
  },
  'Formação histórica e geografia de Mato Grosso': {
    question: 'Ordene a criação da capitania, a fundação de Vila Bela, a Rusga e a criação de Mato Grosso do Sul. Explique como o eixo da BR-163 ajuda a compreender a urbanização recente.',
    answer: 'Capitania em 1748, Vila Bela em 1752, Rusga em 1834 e criação de Mato Grosso do Sul em 1977. A rodovia conecta áreas produtoras e centros de armazenamento e serviços. A expansão dessas atividades gera trabalho e atrai população, mas os efeitos variam entre municípios.',
  },
  'Ética, argumentação e atendimento': {
    question: 'Um servidor recebe o pedido de um conhecido para antecipar um atendimento. A fila segue ordem de chegada e existem exceções publicadas. Qual conduta é adequada?',
    answer: 'Aplique os critérios publicados. Se a pessoa se enquadrar em uma exceção, registre a razão conforme o procedimento. Reconheça a urgência relatada e explique a ordem aplicável. A relação pessoal cria risco de favorecimento e deve ser separada da decisão.',
  },
  'Proposições, negação e contagem': {
    question: 'Negue “todos os pedidos com documento completo foram aprovados”. Em seguida, conte quantas comissões de três pessoas podem ser formadas com cinco candidatos.',
    answer: 'Existe pelo menos um pedido com documento completo que não foi aprovado. Na contagem, há 5 × 4 × 3 escolhas ordenadas e cada comissão aparece 3 × 2 × 1 vezes. O resultado é 10 comissões.',
  },
  'Segurança da informação e proteção de dados': {
    question: 'Um invasor usa a senha de um servidor para consultar documentos pessoais e altera um arquivo. A equipe restaura o ambiente em quatro horas e perde os registros dos últimos quinze minutos. Quais propriedades foram afetadas e como classificar as duas medidas de tempo?',
    answer: 'A consulta indevida afeta a confidencialidade e a alteração afeta a integridade. Quatro horas é o tempo observado de recuperação, comparável ao RTO. Quinze minutos é a perda observada de dados, comparável ao RPO. Autenticação adicional, privilégio mínimo e trilhas de auditoria ajudam a reduzir risco e investigar o incidente.',
  },
  'APIs, Git, CI/CD e contêineres': {
    question: 'Uma versão passou nos testes unitários, mas erra ao gravar no banco. Como melhorar a esteira e reduzir o impacto da próxima publicação?',
    answer: 'Inclua teste de integração com o banco e confira migrações em ambiente de homologação. Gere uma imagem identificada pelo commit. Publique para uma parcela do tráfego, monitore falhas e defina critérios de interrupção. O retorno à versão anterior precisa considerar a compatibilidade do esquema e das alterações nos dados.',
  },
  'SQL, transações e análise de dados': {
    question: 'O setor Norte tem dois chamados abertos e um fechado. O setor Sul tem um aberto. Como listar apenas setores com pelo menos dois abertos? O que ocorre se a operação de registrar chamado e histórico falhar no meio de uma transação?',
    answer: 'Aplique WHERE para selecionar abertos, GROUP BY setor para agrupar e HAVING COUNT(*) >= 2 para selecionar grupos. Só Norte aparece. Se a transação falhar e for revertida, chamado e histórico devem ser desfeitos em conjunto pela atomicidade.',
  },
  'Algoritmos, sistemas operacionais e redes': {
    question: 'Um sistema de atendimento processa pedidos na ordem de chegada. A aplicação abre pelo IP e falha pelo nome. Qual estrutura e qual diagnóstico são os mais apropriados?',
    answer: 'Uma fila FIFO atende à ordem de chegada. Como a conexão pelo IP funciona, verifique resolução DNS, a configuração do resolvedor e o registro consultado. Uma falha de DNS pode afetar o nome sem interromper a comunicação por endereço IP.',
  },
  'Constituição, direitos fundamentais e Municípios': {
    question: 'Uma pessoa quer corrigir seus dados em um cadastro de caráter público. Outra sofre restrição ilegal à liberdade de locomoção. Qual remédio corresponde a cada situação?',
    answer: 'Habeas data é associado ao conhecimento ou à retificação dos dados do próprio impetrante, observados os requisitos processuais. Habeas corpus protege a liberdade de locomoção contra ilegalidade ou abuso de poder. O bem jurídico protegido distingue as duas hipóteses.',
  },
  'Administração Pública, atos e contratações': {
    question: 'Um ato foi praticado sem competência legal e, em outro caso, a Administração deseja encerrar um ato válido que se tornou inconveniente. Qual instituto examinar em cada caso?',
    answer: 'O primeiro envolve controle de legalidade e análise de anulação, considerando a possibilidade legal de convalidação e as garantias do interessado. O segundo envolve revogação por mérito, desde que o ato seja revogável. Motive a decisão e identifique o fundamento de fato e de direito.',
  },
  'Direito Civil e Processo Civil': {
    question: 'O juiz identifica um fundamento que nenhuma parte discutiu. Há também pedido urgente para evitar a perda do resultado útil. Quais análises processuais devem ser feitas?',
    answer: 'Antes de decidir com base no fundamento novo, aplique o contraditório conforme o art. 10 do CPC. Para tutela de urgência, examine a probabilidade do direito e o perigo de dano ou risco ao resultado útil. A urgência pode justificar decisão liminar nas hipóteses legais, com contraditório diferido.',
  },
  'Proteção ambiental e responsabilidade': {
    question: 'Uma obra potencialmente causadora de significativa degradação é proposta. Depois, um poluidor recebe multa por dano ambiental. Como distinguir as providências e seus fundamentos?',
    answer: 'Antes da instalação nas condições do art. 225, § 1º, IV, exige-se estudo prévio de impacto ambiental com publicidade. A multa administrativa é uma sanção. A reparação civil do dano independe de culpa nos termos da Lei nº 6.938/1981 e pode coexistir com sanções.',
  },
};
