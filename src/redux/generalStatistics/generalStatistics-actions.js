import { createAction } from '@reduxjs/toolkit';

const countOfAllQuizzes = createAction('generalStatistics/countOfQuizzes');
const averageTime = createAction('generalStatistics/averageTime');
const totalQuestions = createAction('generalStatistics/totalQuestions');
const totalCorrectAnswers = createAction('generalStatistics/totalCorrectAnswers');

const generalStatisticsActions = { countOfAllQuizzes , averageTime , totalQuestions , totalCorrectAnswers}

export default   generalStatisticsActions ;