import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null,
    isLoading: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLoginRequest: (state, action)=>{
            state.isLoading = true;
        },
    }
})

export const { userLoginRequest } = userSlice.actions;
export default userSlice.reducer;