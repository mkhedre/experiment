import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss'
function MovieCard(props) {
    const {data} =props
   console.log(data.imdbID)
    return (
        <div className='card'>
            <Link to={`/movie/${data.imdbID}`}>
                <div className='card-container'>
                    <img src={data.Poster} alt={data.Title} />
                    <div className='card-container' >
                        <h3>{data.Title}</h3>
                        <p>{data.Year}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;
