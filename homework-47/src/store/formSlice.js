import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',

    initialState: {
        formData: null,
        loading: false,
        error: null
    },

    reducers: {
        setFormData: (state, action) => {
            state.formData = action.payload;
        },
        clearFormData: (state) => {
            state.formData = null;
        }
    }
});

export const { setFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;