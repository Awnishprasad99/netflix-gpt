import { API_OPTIONS } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addHorror } from "../Utils/moviesSlice";
import { useEffect } from "react";



const useHorror=()=>{

    const dispatch  = useDispatch()

    useEffect(()=>{
HorrorMovies()
    },[])

    const HorrorMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS)
        const json = await data.json();
        dispatch(addHorror(json.results))
    }



}


export default useHorror;