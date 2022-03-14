import { combineReducers } from 'redux'
import { globalSnackbarReducer } from './GlobalSnackbarSlice';
import { pageExpandedReducer } from './PageExpandedSlice';

export const rootReducer = combineReducers({
    globalSnackbar: globalSnackbarReducer,
    pageExpanded: pageExpandedReducer
});