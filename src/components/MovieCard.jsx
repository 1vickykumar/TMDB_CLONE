import React from "react";

import styles from'../css/MovieCard.module.css'

function MovieCard(props) {

  return (
    <div className={styles.container}>
      <div className={styles.card_image}>
        <img
          src="https://media.themoviedb.org/t/p/w220_and_h330_face/4iWjGghUj2uyHo2Hyw8NFBvsNGm.jpg"
          alt="Movie Poster"
        />

      <div className={styles.canvas} style={{'--rating': 80}}>
        60%
      </div>
      </div>
      <div className={styles.card_caption}>
        <h2><a href='javascript:void(0)'>Movie_Name</a></h2>
        <p>Release_Date</p>
      </div>
    </div>
  );
}

export default MovieCard;
