
import { useSelector} from "react-redux"
import useMovieTrailer from "../Hooks/useMovieTrailer";

// import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {




  const trailervideo = useSelector(store=>(store?.trailer?.nowPlayingTrailer ))

  useMovieTrailer(id);
  


  return (
    <>
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailervideo?.key}?si=9AcHvMl0Tek9cCsg`}

          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
     
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
