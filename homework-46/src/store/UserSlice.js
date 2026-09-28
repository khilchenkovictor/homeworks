import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (param, { rejectWithValue }) => {
        try {
            const response = await axios.get(BASE_URL);
            return response.data;
        } catch (error) {
            return rejectWithValue('Помилка завантаження користувачів');
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {

        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })

            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearError } = usersSlice.actions;
export default usersSlice.reducer;