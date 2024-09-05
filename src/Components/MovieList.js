import MovieCard from "./MovieCard";

const MovieList = ({ tittle, movies }) => {
  console.log(movies);
  return (
    <>
    <div className=" pt-6 pl-6   ">
       <h1 className="text-white py-2 font-semibold text-3xl">{tittle}</h1>
      <div className=" mt-6  cursor-pointer  flex overflow-x-scroll no-scrollbar  ">
     
        <div className=" flex ">
          {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie?.poster_path} />
            ))}
        </div>
      </div>
      </div>
      {/* <MovieCard /> */}
    </>
  );
};

export default MovieList;
