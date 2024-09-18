import {configureStore} from "@reduxjs/toolkit"
import  userReducer  from "./userSlice";
import moviesReducer from "./moviesSlice"
import trailerReducer from './trailerSlice'
import gptReducer from "./gptSlice"
import languageReducer from './languageSlice'




const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            trailer:trailerReducer,
            gpt:gptReducer,
            language:languageReducer
        }

    }
)

export default appStore;