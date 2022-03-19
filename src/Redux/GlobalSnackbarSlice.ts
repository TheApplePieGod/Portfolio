import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SnackbarState, SnackbarStatus } from '../Definitions/Definitions';

const initialState: SnackbarState = {
    status: SnackbarStatus.Closed,
    message: "",
    closeDelay: 2000
};

// https://redux-toolkit.js.org/tutorials/quick-start
export const globalSnackbarSlice = createSlice({
    name: 'globalSnackbar',
    initialState,
    reducers: {
        openGlobalSnackbar: (state, action: PayloadAction<SnackbarState>) => {
            return action.payload;
        },
        closeGlobalSnackbar: (state) => {
            return {
                ...state,
                status: SnackbarStatus.Closed
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { openGlobalSnackbar, closeGlobalSnackbar } = globalSnackbarSlice.actions

export const globalSnackbarReducer = globalSnackbarSlice.reducer;