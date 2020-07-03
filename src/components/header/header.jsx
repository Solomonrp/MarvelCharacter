import React from 'react';

import styles from './header.module.css';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <div className={styles.header__container}>
      <img src={logo} alt="Objective logo" />
      <ul>
        <li className={styles.user__name}>
          <b>Matheus Rodrigues</b>
          <p>Teste de Front-end</p>
      </li>
        <li className={styles.user__nick}>
          CB
      </li>
      </ul>
    </div>
  );
};

export default Header;