import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constant";
import { addNowPlayingTrailer } from "../Utils/trailerSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (id)=>{



    const dispatch = useDispatch();

    useEffect(() => {
      getBackgroundMovie();
    }, []);
  
    const getBackgroundMovie = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        API_OPTIONS
      );
  
      const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const Trailer = filterData.length ? filterData[0] : json.results[0];
      // console.log("Trailer key" , Trailer)
    
      dispatch(addNowPlayingTrailer(Trailer))
    
     
    };

}


export default useMovieTrailer;