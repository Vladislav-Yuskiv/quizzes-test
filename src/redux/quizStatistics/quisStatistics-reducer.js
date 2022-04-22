import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './quisStatistics-actions';

const countCorrectAnswersQuiz = createReducer( 0 , {
     [actions.countCorrectAnswersQuiz]: ( _, { payload }) => payload,
});

const countWrongAnswersQuiz = createReducer(0, {
    [actions.countWrongAnswersQuiz]: ( _, { payload }) => payload,
});

const timeQuiz = createReducer(0, {
    [actions.timeQuiz]: ( _, { payload }) => payload,
});




export default combineReducers({
    countCorrectAnswersQuiz,
    countWrongAnswersQuiz,
    timeQuiz
});