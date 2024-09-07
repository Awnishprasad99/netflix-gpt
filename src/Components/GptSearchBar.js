import React from 'react';
import lang from '../Utils/languageConstant';

const GptSearchBar = () => {
  return (
    <div className='pt-[5%]'>
      <form onSubmit={(e) => e.preventDefault()} className='w-1/2 bg-black grid grid-cols-12 ml-64'>
        <input
          type="text"
          className='p-4 m-4 col-span-9  text-black  focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-in-out transform hover:scale-105'
          placeholder='What Would You Like To Watch Today?'
        />
        <button
          className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-full transition-all duration-300 ease-in-out transform hover:bg-red-800 hover:scale-105'
        >
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
