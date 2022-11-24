import { configureStore, combineReducers } from '@reduxjs/toolkit';
import GetCountryReducer from './countries/Country';

const rootReducer = combineReducers({
  GetCountryReducer,
});
const store = configureStore({ reducer: rootReducer });
export default store;
