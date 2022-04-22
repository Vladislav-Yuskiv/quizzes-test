import { createAction } from '@reduxjs/toolkit';

const countCorrectAnswersQuiz = createAction('quizStatistics/countCorrectAnswersQuiz');
const countWrongAnswersQuiz = createAction('quizStatistics/countWrongAnswersQuiz');
const timeQuiz = createAction('quizStatistics/timeQuiz');

const quizStatisticsActions = { countCorrectAnswersQuiz , countWrongAnswersQuiz , timeQuiz}

export default   quizStatisticsActions ;