import { combineReducers } from 'redux'
import { globalSnackbarReducer } from './GlobalSnackbarSlice';

export const rootReducer = combineReducers({
    globalSnackbar: globalSnackbarReducer
});