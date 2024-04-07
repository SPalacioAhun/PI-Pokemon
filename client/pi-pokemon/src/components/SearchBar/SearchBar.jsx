import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../../redux/actions";
import style from './SearchBar.module.css'

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (/^[A-Za-z]+$/.test(inputValue) || inputValue === "") {
      setName(inputValue);
      setError("");
    } else {
      setError("Solo se permiten letras.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      dispatch(getNamePokemons(name));
    }
  };

  return (
    <div className={style.containerSB}>
      <input
        type="text"
        placeholder="Ingresar Nombre"
        value={name}
        onChange={(e) => handleInputChange(e)}
        className={style.inputSB}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" onClick={(e) => handleSubmit(e)} className={style.buttonSB}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;


