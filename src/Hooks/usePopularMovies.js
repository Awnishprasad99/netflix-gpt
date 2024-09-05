import { API_OPTIONS } from "../Utils/Constant";
import { useEffect } from "react";
import { addPopularMovies } from "../Utils/moviesSlice";
import { useDispatch } from "react-redux";



const usePopularMovies = () => {
    const dispatch = useDispatch()
  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("GetpopularMovies", json);
    dispatch(addPopularMovies(json.results))
  };
};

export default usePopularMovies;
