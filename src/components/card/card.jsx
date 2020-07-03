import React from 'react';

import styles from './card.module.css';

const Card = ({ state, data }) => {
  return (
    <div className={styles.character__container} onClick={() => { state({ status: true, data: data }) }}>
      <div className={styles.character__img}>
        <img src={`${data.thumbnail.path}/standard_amazing.${data.thumbnail.extension}`} alt="hero" />
      </div>
      <a href='!#' >{data.name}</a>
      <ul className={styles.character__series}>
        {
          data.series.items.slice(0, 3).length >= 1 ?
            data.series.items.slice(0, 3).map((item, key) => (
              <li key={key}>{item.name}</li>
            ))
            :
            <li>Sem Série</li>
        }
      </ul>

      <ul className={styles.character__series}>
        {
          data.events.items.slice(0, 3).length >= 1 ?
            data.events.items.slice(0, 3).map((item, key) => (
              <li key={key}>{item.name}</li>
            ))
            :
            <li>Sem Evento</li>
        }
      </ul>

    </div>
  );
};

export default Card;