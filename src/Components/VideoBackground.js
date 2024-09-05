
import { useSelector} from "react-redux"
import useMovieTrailer from "../Hooks/useMovieTrailer";

// import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {




  const trailervideo = useSelector(store=>(store?.trailer?.nowPlayingTrailer ))
  

  useMovieTrailer(id);
  


  return (
    <>
    <div className=" ">
      <iframe
          className=" w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailervideo?.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
