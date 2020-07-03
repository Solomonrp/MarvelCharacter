import React, { useRef, useEffect } from 'react';

import styles from './modal.module.css';


const Modal = ({ state, changeStatus }) => {

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          changeStatus({ status: false, data: {} })
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <React.Fragment>
      {
        state.status &&
        <div id='myModal' className={styles.modal}>
          <div ref={wrapperRef} className={styles.modal__content}>
            <div className={styles.modal__header}>
              <span className={styles.close} onClick={() => { changeStatus({ status: false, data: {} }) }}>&times;</span>
              <h2>{state.data.name}</h2>
            </div>
            <div className={styles.modal__body}>
              <img src={`${state.data.thumbnail.path}/portrait_fantastic.${state.data.thumbnail.extension}`} alt={state.data.name} />
              <div>
                <ul>
                  <li><a href='!#'>Stories: {state.data.stories.available}</a></li>
                  <li><a href='!#'>Events: {state.data.events.available}</a></li>
                  <li><a href='!#'>Series: {state.data.series.available}</a></li>
                </ul>
                <ul>
                  {
                    state.data.series.items.slice(0, 8).length >= 1 ?
                      state.data.series.items.slice(0, 8).map((item, key) => (
                        <li key={key}>{item.name}</li>
                      ))
                      :
                      <li>Sem Série</li>
                  }
                </ul>
              </div>
            </div>
            <div className={styles.modal__links}>
              {
                state.data.urls.map((url, key) => (
                  <a key={key} href={url.url}>{url.type}</a>
                ))
              }
            </div>
            <div className={styles.modal__footer}>
              <h3>{state.data.name}</h3>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default Modal;
