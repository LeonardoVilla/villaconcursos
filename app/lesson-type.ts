export type Lesson = {
  sections: { title: string; text: string }[];
  question: string;
  answer: string;
  sources: { title: string; url: string }[];
};

export type LessonMap = Record<string, Lesson>;

// Helper compacto para escrever aulas: L([[título, texto], ...], pergunta, resposta, [[título da fonte, url], ...])
export function L(
  sections: [string, string][],
  question: string,
  answer: string,
  sources: [string, string][],
): Lesson {
  return {
    sections: sections.map(([title, text]) => ({ title, text })),
    question,
    answer,
    sources: sources.map(([title, url]) => ({ title, url })),
  };
}
