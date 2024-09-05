import { IMG_CDN } from "../Utils/Constant";


const MovieCard = ({posterPath}) => {


  return ( 
    <div className=" w-40 pr-4  transform transition duration-300 hover:scale-110 hover:shadow-xl  ">
      <img src={IMG_CDN + posterPath} alt="Movie card" />
    </div>
  );
};

export default MovieCard;
