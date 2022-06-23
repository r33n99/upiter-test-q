import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: 'Show All',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilters(state, action) {
            state.filter = action.payload;
        },
    },
});

export const selectfilter = (state) => state.filter;

export const { setFilters } = filterSlice.actions;

export default filterSlice.reducer;
