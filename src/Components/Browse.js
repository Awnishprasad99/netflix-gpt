 
import Header from "./Header";

import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import useHorror from "../Hooks/useHorror";

const Browse =()=>{

useNowPlayingMovies()
usePopularMovies();
useTopRated();
useHorror();
  return(
    <div className=" container  ">
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    
   
    </div>
  )
}


export default Browse;



//