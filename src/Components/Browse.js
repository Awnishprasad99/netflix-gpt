 
import Header from "./Header";

import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import useHorror from "../Hooks/useHorror";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";




const Browse =()=>{

  
const showGptSearch = useSelector((store)=>(store.gpt.showGptSearch))


useNowPlayingMovies()
usePopularMovies();
useTopRated();
useHorror();
  return(
    <div className=" container  ">
    <Header/>
    {showGptSearch?<GptSearch/>:  <> <MainContainer/> <SecondaryContainer/></>
    }
    
 
   
    </div>
  )
}


export default Browse;



//