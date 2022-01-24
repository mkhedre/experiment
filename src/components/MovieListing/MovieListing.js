import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import './movielisting.scss'
function MovieListing() {
    const movies = useSelector(state=>state.movie.movie)
    const shoes = useSelector(state=>state.movie.shoes.payload)
    //console.log(movies)
    //console.log(shoes)
    let rendermovie =""
    let rendershoes =""
    rendermovie = movies.Response ==="True" ?(
        movies.Search.map((movie,index)=>
            <MovieCard data={movie} key={index}/>
        )
    ) : (
        <div className="error">
        <h3>{movies.error}</h3>
        </div>)

        rendershoes=(
            shoes.Search.map((shoe,index)=><MovieCard data={shoe} key={index} />)
        )
        //console.log(rendermovie)
  return (
      <div className='list-movies'>
          <h3>Movies</h3>
          <div className='movie-container'>
          {rendermovie}
          </div>
          <h3>Shows</h3>
          <div className='movie-container'>
              {rendershoes}
          </div>
      </div>
  );
}

export default MovieListing;
