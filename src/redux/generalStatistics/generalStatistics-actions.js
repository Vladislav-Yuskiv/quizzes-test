import { createAction } from '@reduxjs/toolkit';

const countOfAllQuizzes = createAction('generalStatistics/countOfQuizzes');
const aLLTime = createAction('generalStatistics/aLLTime');
const totalQuestions = createAction('generalStatistics/totalQuestions');
const totalCorrectAnswers = createAction('generalStatistics/totalCorrectAnswers');

const generalStatisticsActions = { countOfAllQuizzes , aLLTime , totalQuestions , totalCorrectAnswers}

export default   generalStatisticsActions ;