import { API_OPTIONS } from "../Utils/Constant"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTopRated } from "../Utils/moviesSlice"


const useTopRated=()=>{

    const dispatch = useDispatch()

useEffect(()=>{getTopRated()},[])

const getTopRated = async()=>{

   const data =  await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTIONS)
    const json = await data.json()
    console.log(json)
    dispatch(addTopRated(json.results))
}


}


export default useTopRated;