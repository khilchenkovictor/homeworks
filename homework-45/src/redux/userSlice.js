import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Guest',
        id: '0',
        city: 'Unknown',
        status: 'offline',
    },
    reducers: {
        setUser: (state, action) => action.payload,

        updateName: (state, action) => {
            state.name = action.payload
         },

        updateCity: (state, action) => {
            state.city = action.payload
        },

        updateStatus: (state, action) => {
            state.status = action.payload
        },
    }
});

export const { setUser, updateName, updateCity, updateStatus } = userSlice.actions;
export default userSlice.reducer;