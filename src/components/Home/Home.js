import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import movieApi from '../../common/apis/movieApi';
import { fetchActionmovie, fetchActionShoes } from '../../features/movie/movieSlice';
import MovieListing from '../MovieListing/MovieListing';
// import ApiKey from '../../common/apis/moviesApiKey'
function Home() { 
  const movieText = useSelector(state=>state.movie.text)
  //console.log(movieText)
  const dispatch =useDispatch()
  useEffect(()=>{
      dispatch(fetchActionmovie())
      dispatch(fetchActionShoes())
  },[dispatch])
  return (
    <div className='banner'>
            <MovieListing />

    </div>
  );
}

export default Home;
