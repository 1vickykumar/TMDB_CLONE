import React from 'react';
import styles from './css/TrailerCard.module.css';

import { IconContext } from "react-icons";
import { GrPlayFill } from "react-icons/gr";

function TrailerCard() {
  return (
    <div className={styles.cardVideo}>
      <div className={styles.cardImage}>
        <a href="javascript:void(0)">
          <img
            src="https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/l3ycQYwWmbz7p8otwbomFDXIEhn.jpg"
            alt="trailer_Video"
          />

          <IconContext.Provider value={{ size: '50px', color: 'white', className: styles.playIcon }}>
            <div className={styles.playButton}>
              <GrPlayFill />
            </div>
          </IconContext.Provider>
        </a>
      </div>
      <div className={styles.cardCaption}>
        <a href='javascipt:void(0)'>

        <h2 className={styles.h2}>Movie_name</h2>
        </a>
        <a href='javascipt:void(0)'>
        <h3 className={styles.h3}>trailer_info</h3>
</a>
      </div>
    </div>
  );
}

export default TrailerCard;
