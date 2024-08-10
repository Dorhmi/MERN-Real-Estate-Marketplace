import { createSlice } from "@reduxjs/toolkit";

export interface UserState {}

const initialState: UserState = {
    currentUser: null,
    error: null,
    loading: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
