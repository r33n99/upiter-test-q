import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    cards: [],
    loading: false,
    newCards: [],
};

export const getImageData = createAsyncThunk('images/imagesData', async (category) => {
    const whatCategory = category === 'Show All' ? '' : `?filter=${category}`;
    const haveCategory = category ? whatCategory : '';
    const { data } = await axios.get(`https://62b46aa2a36f3a973d338c9f.mockapi.io/api/v1/cards${haveCategory}`);
    return data;
});

export const ImageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        loadMoreImages: (state, action) => {
            const newCards = action.payload.map((card,index) => {
                return {
                    ...card,
                    name: card.name + new Date().getTime() + index,
                }
            })
            state.cards = [...state.cards, ...newCards];
        },
    },

    extraReducers: {
        [getImageData.pending]: (state) => {
            state.loading = true;
        },
        [getImageData.fulfilled]: (state, action) => {
            if (state.cards.length) {
                state.cards = [...state.cards, action.payload];
            }
            state.cards = action.payload;
            state.newCards = action.payload;
            state.loading = false;
        },
        [getImageData.rejected]: (state) => {
            state.status = 'error';
        },
    },
});

export const selectImages = (state) => state.images;

export const { loadMoreImages } = ImageSlice.actions;

export default ImageSlice.reducer;
