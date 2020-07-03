import React, { useEffect, useState } from 'react';
import GetAll from '../../api/index';
import { Card, Pagination, Modal } from '../../components/index';

import styles from './MainPage.module.css';

const MainPage = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itensPerPage] = useState(5);
  const [total, setTotal] = useState();

  const [modal, setModal] = useState({
    status: false,
    data: {}
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAll();
      setData(data);
      setSearch(Page(data.results));
      setLoading(true);
      setTotal(data.results.length);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data.results) {
      const page = Page(data.results);
      setSearch(page);
    }
  }, [currentPage])

  const Page = (data) => {
    const lastPage = currentPage * itensPerPage;
    const firstPage = lastPage - itensPerPage;
    return data.slice(firstPage, lastPage);
  }

  const handleSearch = ({ target }) => {
    let dataSearch = data.results.filter(character => {
      if (character.name.toLowerCase().includes(target.value.toLowerCase())) {
        return character;
      };
    });
    setCurrentPage(1)
    setTotal(dataSearch.length);
    setSearch(Page(dataSearch));
  }


  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={styles.section__container}>
      <h2 className={styles.section__title}>Busca de personagens</h2>
      <div className={styles.section__search}>
        <h4 className={styles.section__title}>Nome do personagem</h4>
        <input placeholder="Search" alt="Search for hero" onChange={handleSearch} />
      </div>
      <section>
        <p>Personagens</p>
        <ul className={styles.character__topic}>
          <li>Personagens</li>
          <li>Séries</li>
          <li>Eventos</li>
        </ul>
        {
          loading ?
            search.map((character, key) => (
              <Card state={setModal} key={key} data={character} />
            ))
            :
            null
        }
      </section>
      <Modal state={modal} changeStatus={setModal}/>
      <Pagination command={setCurrentPage} totalItens={total} itensPerPage={itensPerPage} changePage={paginate} currentPage={currentPage} />
    </div>
  );
};

export default MainPage;