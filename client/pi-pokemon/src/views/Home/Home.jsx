// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  filterCreated,
  getTypes,
  orderByName,
  orderByAttack,
  filterByType,
  orderByHp
} from "../../redux/actions";

import style from "./Home.module.css";
// componentes
import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination";
import Navbar from "../../components/Navbar/Navbar";
import loading from "../../img-pk/gifsPokes/pokeballGif.gif";
import notFoundPs from "../../img-pk/gifsPokes/pikachu-pokemon.gif";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const allTypes = useSelector((state) => state.types);
  const notFound = useSelector((state) => state.notFound);
  const [, setOrden] = useState("");
  //PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage,] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage; // 2*12=24
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage; // 24-12=12
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
    
  }, [dispatch]);

  //recargar
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getPokemons());
  };

  // A-Z Z-A
  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  //Creados - api
  const handleFilterCreated = (e) => {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  };

  //Ataque
  const handleSortAttack = (e) => {
    e.preventDefault();
    if (e.target.value !== "attack") dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  //Types
  const handleFilterTypes = (e) => {
    e.preventDefault();
    if (e.target.value !== "Tipos") {
      dispatch(filterByType(e.target.value));
    }
  };

  //HP
  const handleSortHp = (e) => {
    e.preventDefault();
    if (e.target.value !== "hp") dispatch(orderByHp(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  return (
    <div className={style.homeContainer}>
      <Navbar />
      <div className={style.containerButton}>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
          className={style.recargar}
        >
          Recargar
        </button>
        <select onChange={(e) => handleSort(e)} className={style.azButton}>
          <option value="asc">A - Z</option>
          <option value="des">Z - A</option>
        </select>
        <select
          onChange={(e) => handleFilterTypes(e)}
          className={style.typesButton}
        >
          <option>Tipos</option>
          <option value="All">Todos</option>
          {allTypes?.map((e) => {
            return (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
        <select
          onChange={(e) => handleSortAttack(e)}
          className={style.attackButton}
        >
          <option value="attack">Ataque</option>
          <option value="min">min</option>
          <option value="max">max</option>
        </select>
        <select
          onChange={(e) => handleSortHp(e)}
          className={style.attackButton}
        >
          <option value="hp">hp</option>
          <option value="min">min</option>
          <option value="max">max</option>
        </select>
        <select
          onChange={(e) => handleFilterCreated(e)}
          className={style.origenButton}
        >
          <option value="All">Origen</option>
          <option value="created">Creados</option>
          <option value="api">Api</option>
        </select>
      </div>
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        pagination={pagination}
        page={currentPage}
      />
  <div className={style.linkCard}>
  
  {currentPokemons.length ? (
    <Cards dataPokemon={currentPokemons} />
  ) : notFound ? (
    <div className={style.psydock}>
      <p className={style.nF}>Ningún Pokémon coincide con tu búsqueda</p>
      <p className={style.signos}>¿?</p>
      <img src={notFoundPs} alt="notFound" style={{ width: 200 }} />
    </div>
  ) : (
    <div className={style.containerLoading}>
      <img className={style.mime} src={loading} alt="pokeBall cargando" />
      <p className={style.loading}><strong>Cargando...</strong></p>
    </div>
  )}
</div>
    </div>
  );
};

export default Home;