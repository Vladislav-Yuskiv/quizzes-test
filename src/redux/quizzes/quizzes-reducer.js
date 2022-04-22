import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './quizzes-actions';

const quizzesCategories = createReducer([], {
     [actions.quizzesCategories]: ( _, { payload }) => payload,
});

const selectedQuiz = createReducer([], {
    [actions.selectedQuiz]: ( _, { payload }) => payload,
});

export default combineReducers({
    quizzesCategories,
    selectedQuiz
});