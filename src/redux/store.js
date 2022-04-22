import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import quizzesReducer from './quizzes/quizzes-reducer';
import generaStatisticsReducer from './generalStatistics/generaStatistics-reducers';
import quisStatisticsReducer from './quizStatistics/quisStatistics-reducer';
import loaderReducer from './loader/loaderReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const quizzesPersistConfig = {
  key: "quizzes",
  storage,
  blacklist: ['filter'],
};

const statiscticsPersistConfig = {
  key: "generalStatistics",
  storage,
  blacklist: ['filter'],
};

const middleware = [
  ...getDefaultMiddleware({
      serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  }),
];


const store = configureStore({
  reducer: {
      isLoading: loaderReducer,
      quizzes : persistReducer(quizzesPersistConfig ,quizzesReducer),
      quizStatistics: quisStatisticsReducer,
      generalStatistics : persistReducer(statiscticsPersistConfig ,generaStatisticsReducer),
      
      
  },
  middleware ,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export { store, persistor };