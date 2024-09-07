import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch=()=>{
    return(
        <div className=" ">
        <div className="absolute -z-10">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/27f1b15d-79ed-43ca-8982-7faa9e4aa388/IN-en-20240819-TRIFECTA-perspective_WEB_3c576fa6-cd23-46b6-ac3f-1ad2bb0f66fb_small.jpg" alt="" />
        </div>
                  <GptSearchBar/>
                  <GptMovieSuggestion/>
                
        </div>

    )
}

export default GptSearch;