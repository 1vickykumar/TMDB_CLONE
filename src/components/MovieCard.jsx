import React, { useEffect } from "react";

import styles from'./css/MovieCard.module.css'

function MovieCard(props) {
  useEffect(()=>{
    console.log(props) 
  })

  return (
    <div className={styles.container}>
      <div className={styles.card_image}>
        <img
        src={`https://media.themoviedb.org/t/p/w220_and_h330_face${props.data.poster_path}`}
          alt="Movie Poster"
        />

      <div className={styles.canvas} style={{'--rating': parseInt(props.data.vote_average*10)}}>
        <div className={styles.canvasTop}>
            {parseInt(props.data.vote_average*10)}

        </div>
      </div>
      </div>
      <div className={styles.card_caption}>
        <h2><a href='javascript:void(0)'>{props.data.title? props.data.title: props.data.name}</a></h2>
        <p>{props.data.release_date? props.data.release_date : props.data.first_air_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
