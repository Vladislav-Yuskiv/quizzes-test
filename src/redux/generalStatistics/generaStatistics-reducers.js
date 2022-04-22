import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './generalStatistics-actions';

const countOfAllQuizzes = createReducer( 0 , {
     [actions.countOfAllQuizzes]: ( _, { payload }) => payload,
});

const totalQuestions = createReducer(0, {
    [actions.totalQuestions]: ( _, { payload }) => payload,
});

const avarageTime = createReducer(0, {
    [actions.averageTime]: ( _, { payload }) => payload,
});

const totalCorrectAnswers = createReducer(0, {
    [actions.totalCorrectAnswers]: ( _, { payload }) => payload,
});



export default combineReducers({
    countOfAllQuizzes,
    totalQuestions,
    avarageTime,
    totalCorrectAnswers
});