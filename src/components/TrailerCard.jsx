import React from 'react';
import styles from './css/TrailerCard.module.css';

import { IconContext } from "react-icons";
import { GrPlayFill } from "react-icons/gr";

function TrailerCard(props) {
  console.log(props.data);
  return (
    <div className={styles.cardVideo}>
      <div className={styles.cardImage}>
        <a href="javascript:void(0)">
          <img
            src={props.data.pic}
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

        <h2 className={styles.h2}>{props.data.Name}</h2>
        </a>
        <a href='javascipt:void(0)'>
        <h3 className={styles.h3}>{props.data.about}</h3>
</a>
      </div>
    </div>
  );
}

export default TrailerCard;
