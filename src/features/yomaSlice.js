import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const yomaSlice = createSlice({
    name: 'yoma',
    initialState: {
        college: 'Obafemi Awolowo University', 
        fuck: false
    },

    // REDUCERS
    reducers: {
        changeCollege: (state) => {
            state.college = "Oduduwa University"
        },
    }
})

export const { changeCollege } = yomaSlice.actions;

export const selectCollege = (state) => state.yoma.college;

export default yomaSlice.reducer;