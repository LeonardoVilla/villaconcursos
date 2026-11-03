import type { LessonMap } from './lesson-type';
import { lessonsSemaComum } from './lessons-sema-comum';
import { lessonsSemaAmb } from './lessons-sema-amb';
import { lessonsCmcComum } from './lessons-cmc-comum';
import { lessonsCmcAdm } from './lessons-cmc-adm';
import { lessonsCmcTi } from './lessons-cmc-ti';

// Aulas complementares: cobrem os tópicos do edital que não tinham aula em topic-lessons.ts.
export const extraLessons: LessonMap = {
  ...lessonsSemaComum,
  ...lessonsSemaAmb,
  ...lessonsCmcComum,
  ...lessonsCmcAdm,
  ...lessonsCmcTi,
};
