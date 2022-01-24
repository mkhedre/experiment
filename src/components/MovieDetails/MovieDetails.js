import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchselectedmovie } from '../../features/movie/movieSlice';
import { useParams } from 'react-router-dom';
import './MovieDetails.scss'
function MovieDetails() {
  const {imdbid} = useParams()
  const dispatch =useDispatch()
  const {payload} = useSelector(state=>state.movie.selectedmovie)
  // console.log(payload.Plot)
  useEffect(()=>{
      dispatch(fetchselectedmovie(imdbid))
  },[dispatch,imdbid])
  return (
    <div className='movie-section'>
      <div className='movie-container'>
        <div className='section-left'>
          <h2>{payload.Title}</h2>
          <i className="fa fa-film"></i>
        
          <div className='movie-plot'>{payload.Plot}</div>
          <div className='movie-info'>
            <div>
              <div>
                <span>director : </span>
                <span>{payload.Director}</span>
              </div>
              <div>
                <span>Stars : </span>
                <span>{payload.Actors}</span>
              </div>
              <div>
                <span>Geners : </span>
                <span>{payload.Genrs}</span>
              </div>
              <div>
                <span>Languages : </span>
                <span>{payload.Language}</span>
              </div>
              <div>
                <span>Award : </span>
                <span>{payload.Awards}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='section-right'>
          <img src={payload.Poster} alt={payload.Title} />
        </div>
      </div>
      movie
    </div>
  );
}

export default MovieDetails;
