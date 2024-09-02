import { createSlice } from "@reduxjs/toolkit";


const trailerSlice = createSlice({
    name:"trailer",
    initialState:{
        nowPlayingTrailer:null,
    },
    reducers:{
        addNowPlayingTrailer:(state,action)=>{
            state.nowPlayingTrailer= action.payload;
        },
    },
});

export const {addNowPlayingTrailer} = trailerSlice.actions;
export default trailerSlice.reducer;