import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { Info } from 'lucide-react';

const VideoTittle =({tittle,overview})=>{
    return(

       <div className=" absolute   text-white   pt-[20%] pl-[10%] aspect-video bg-gradient-to-r from-black">
       <div className=" ">
       <div className="flex  "> <img className="w-5 h-6 " src="https://brand.netflix.com/favicon.ico" alt="" /> <h1 className="font-bold">FILM</h1></div>
<h1 className="text-6xl font-bold ">{tittle}</h1>
<h2 className="w-1/2 mt-2">{overview}</h2>

<div className="flex mt-2 py-2 ">
    <div className="flex bg-white px-10 rounded-sm  hover:opacity-40 "> <div className="mt-[10px] mr-2"><FontAwesomeIcon className="text-black" icon={faPlay} /></div> <button className=" text-lg text-black">Play</button> </div>
   <div className="flex ml-5 text-white  bg-slate-500 opacity-50 hover:opacity-25 rounded-sm py-2 w-15 px-5">    <div className="mr-2 mt-1"><Info /></div>  <button className="font-bold">More Info</button> </div>
   </div>
</div>

</div>
    )
}

export default VideoTittle