import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = ()=>{
    
  
const movies = useSelector((store)=>(store.movies))
console.log("MOvies",movies.nowPlayingMoviesc)
    return(
        <>
      <div className="bg-black">

      <div className="relative z-20 -mt-48">
          <div className="">
              <MovieList  tittle={"Now Playing"} movies={movies.nowPlayingMovies}/>
          </div>
          <div className="">
              <MovieList tittle={"Top Rated"} movies={movies.TopRated}/>
          </div>
          <div className="">
              <MovieList tittle={"Popular"} movies={movies.PopularMovies}/>
          </div>
          <div className="">
              <MovieList tittle={"Horror"} movies={movies.Horror}/>
          </div>
         
          </div>

          </div>
        
        </>
      

    )
}


export default SecondaryContainer