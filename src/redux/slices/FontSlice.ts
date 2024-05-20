import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fontSize: 'medium',
    sizeFactor: 1.25,
}

const fontSlice = createSlice({
    name: "font",
    initialState,
    reducers: {
        setFontSize: (state, action)=>{
            state.fontSize = action.payload.fontSize;
            state.sizeFactor = action.payload.sizeFactor;
        },
    }
})

export const { setFontSize } = fontSlice.actions;
export default fontSlice.reducer;