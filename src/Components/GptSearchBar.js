import React from 'react';
import lang from '../Utils/languageConstant';
import { SUPPORTED_LANGUAGES } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../Utils/languageSlice';
import { useSelector } from 'react-redux';


const GptSearchBar = () => {

const langkey = useSelector(store =>store.language.lang)
  const dispatch = useDispatch()
  const handleLanguageChange=(e)=>{
    
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className='pt-[5%] '>
    <select className='ml-[900px] p-2 m-2  absolute bg-gray-900 text-white ' onChange={handleLanguageChange}>
    {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      
      </select>
      <form onSubmit={(e) => e.preventDefault()} className='w-1/2 bg-black grid grid-cols-12 ml-64'>
      
        <input
          type="text"
          className='p-4 m-4 col-span-9  text-black  focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-in-out transform hover:scale-105'
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-full transition-all duration-300 ease-in-out transform hover:bg-red-800 hover:scale-105'
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
