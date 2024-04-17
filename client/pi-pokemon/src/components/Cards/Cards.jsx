/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import style from "../Cards/Cards.module.css"

const Cards = ({ dataPokemon }) => {
  return (
   <div>
    <div className={style.linkCard}>
      {dataPokemon.map(pokemon => (
        <Link key={pokemon.id} className={style.card}  to={`/detail/${pokemon.id}`}>
        <Card
          key={pokemon.id}
          image={pokemon.image}
          name={pokemon.name}
          types={pokemon.types}
          attack={pokemon.attack}
          hp={pokemon.hp}
        />

        </Link>
      ))}
    </div>
   </div> 
  );
};


export default Cards;
