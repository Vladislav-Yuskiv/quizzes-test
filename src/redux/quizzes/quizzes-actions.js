import { createAction } from '@reduxjs/toolkit';

const quizzesCategories = createAction('category/quizzes');
const selectedQuiz = createAction('selected/quiz');

const quizzesActions = { quizzesCategories , selectedQuiz }

export default   quizzesActions ;