import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({ moviesState:movieReducer,favoritesState: favoritesReducer });
export default rootReducer;