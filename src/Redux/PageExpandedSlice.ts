import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: boolean = false;

// https://redux-toolkit.js.org/tutorials/quick-start
export const pageExpandedSlice = createSlice({
    name: 'pageExpanded',
    initialState,
    reducers: {
        setPageExpanded: (state, action: PayloadAction<boolean>) => {
            return action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setPageExpanded } = pageExpandedSlice.actions

export const pageExpandedReducer = pageExpandedSlice.reducer;