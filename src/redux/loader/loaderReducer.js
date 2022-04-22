import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actionLoader from './loader-action';

const loader = createReducer(false, {
     [actionLoader]: ( _, { payload }) => payload,
});

export default combineReducers({
    loader
});