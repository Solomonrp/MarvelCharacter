import React from 'react';

import styles from './pagination.module.css';

const Pagination = ({ totalItens, itensPerPage, changePage, currentPage, command }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalItens / itensPerPage); i += 1) {
    pageNumber.push(i);
  }

  return (
    <ul className={styles.pages__container}>
      {
        currentPage >= 2 ?
          <div className={styles.arrows__container}>
            <a href='!#' onClick={() => command(1)} className={styles.back}>&#171;</a>
            <a href='!#' onClick={() => command(currentPage - 1)} className={styles.back}>&#8249;</a>
          </div>

          :
          null
      }
      {
        pageNumber.map(number => (
          <li  onClick={() => changePage(number)} key={number} className={number === currentPage ? styles.active : null}>
            <a href='!#'>{number}</a>
          </li>
        ))
      }
      {
        currentPage !== pageNumber.length ?
          <div className={styles.arrows__container}>
            <a href='!#' onClick={() => command(currentPage + 1)} className={styles.next}>&#8250;</a>
            <a href='!#' onClick={() => command(pageNumber.length)} className={styles.next}>&#187;</a>
          </div>
          :
          null
      }
    </ul >
  )
}

export default Pagination;