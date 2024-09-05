import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constant";
import { addNowPlayingTrailer } from "../Utils/trailerSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

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
  
      try {
        const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      // console.log("trailerdata",filterData)
      const Trailer = filterData.length ? filterData[1] : json.results[1];
      // console.log("Trailer key" , Trailer)
    dispatch(addNowPlayingTrailer(Trailer))
    
      } catch (error) {
      toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
      
     
    };

}


export default useMovieTrailer;