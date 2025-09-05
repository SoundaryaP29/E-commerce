import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name:"home",
    initialState: {
        loading: true,
    },
    reducers: {
        setLoading : (state , action) => {
            state.loading = action.payload;
            // state.loading = !state.loading;
        },
    },
});
