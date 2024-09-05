import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground";
import VideoTittle from "./VideoTittle"

const MainContainer =()=>{

    const movies = useSelector((store)=> store?.movies?.nowPlayingMovies);
    if(movies===null) return;
    const mainMovie = movies[0];
    console.log(mainMovie)
const  {adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count}=mainMovie;

    return(
      <div className=" top-0 z-10 ">
     <VideoTittle tittle={original_title} overview={overview}/>
     <VideoBackground  id = {id}/>
     {/* <h1>{original_title}</h1> */}
     
      </div>
    )
}

export default MainContainer