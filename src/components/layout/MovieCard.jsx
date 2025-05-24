import React from "react";
import '../css/MovieCard.css'
function MovieCard(props) {

  return (
    <div className="card-container">
      <div className="card-image">
        <img
          src="https://media.themoviedb.org/t/p/w220_and_h330_face/4iWjGghUj2uyHo2Hyw8NFBvsNGm.jpg"
          alt="Movie Poster"
        />
      <div className="canvas" style={{'--rating': 60}}>
        60%
      </div>
      </div>
      <div className="card-caption">
        <h2><a href='javascript:void(0)'>Movie_Name</a></h2>
        <p>Release_Date</p>
      </div>
    </div>
  );
}

export default MovieCard;
