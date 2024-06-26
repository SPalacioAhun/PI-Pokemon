/* eslint-disable react/prop-types */
import style from '../Pagination/Pagination.module.css'

export default function Pagination({
  pokemonsPerPage,
  allPokemons,
  pagination,
  page
}) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i+1);
  }

  return (
    <div>
    <nav>
      <ul className={style.pagination}>
        {pageNumbers &&
          pageNumbers.map((number, index) => (
            <li
              key={index}
              style={{ listStyle: "none" }}
            >
              <button
                className={style.buttonP}
                style={
                  page === number
                    ? { color: 'white' , background: "#F23030" }
                    : {}
                }
                onClick={() => pagination(number)}
              >
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>

    </div>
  );
}



