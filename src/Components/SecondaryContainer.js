import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = ()=>{
    
const movies = useSelector((store)=>(store.movies))
console.log("MOvies",movies.nowPlayingMoviesc)
    return(
        <>
          <div className="">
              <MovieList tittle={"Now Playing"} movies={movies.nowPlayingMovies}/>
          </div>
          <div className="">
              <MovieList tittle={"Trending"} movies={movies.nowPlayingMovies}/>
          </div>
          <div className="">
              <MovieList tittle={"Popular"} movies={movies.nowPlayingMovies}/>
          </div>
          <div className="">
              <MovieList tittle={"Horror"} movies={movies.nowPlayingMovies}/>
          </div>
          <div className="">
              <MovieList tittle={"Upcomming"} movies={movies.nowPlayingMovies}/>
          </div>
    
        </>
      

    )
}


export default SecondaryContainer