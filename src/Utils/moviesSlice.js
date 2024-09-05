import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,

  
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.PopularMovies = action.payload;
    },
    addTopRated:(state,action)=>{
      state.TopRated = action.payload;
    },
    addHorror:(state,action)=>{
      state.Horror = action.payload;
    }

  
  },
});

export const {addNowPlayingMovies,addPopularMovies,addTopRated,addHorror} = movieSlice.actions;
export default movieSlice.reducer;
