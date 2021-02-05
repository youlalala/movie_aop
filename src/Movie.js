import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"

//state가 필요하지 않음
//componenet가 state가 필요 없을 경우 class componene가 될 필요가 없다.
//function component로 한다
function Movie({ id, year, title, summary, poster, genres}){
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map( //map에 있는 각각의 item은 key가 필요하다.
                    (genre, index) => 
                    <li key={index} className="genres__genre">
                        
                        {genre}
                    </li> 
                )}
            </ul>
            <p className="movie__summary">{summary.slice(0,180)}...</p>
        </div>

    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,  //"id":26970
    year: PropTypes.number.isRequired, //"year":2020
    title: PropTypes.string.isRequired, //"title":"Son of the South"
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    //장르 추가해보기
    genres: PropTypes.arrayOf(PropTypes.string).isRequired //"genres":["Biography","Drama"]
};


export default Movie;