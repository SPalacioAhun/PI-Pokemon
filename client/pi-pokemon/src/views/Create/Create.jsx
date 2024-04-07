/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemons, getTypes } from "../../redux/actions";
import { useEffect } from "react";
import style from "./Create.module.css";
import validate from "../../components/Validate/Validate";
import { Link } from "react-router-dom";

const Create = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    types: [],
    height: "", // Agregar estado para altura
    weight: "", // Agregar estado para peso
  });

  useEffect(() => {
    dispatch(getTypes());
    // eslint-disable-next-line
  }, []);

  const [errors, setErrors] = useState({});

  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      //console.log("soy error", error);
      if (errors[error] === "" || errors[error].length === 0) disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPokemons(input));
    setInput({
      name: "",
      image: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      types: [],
      height: "", // Agregar estado para altura
      weight: "", // Agregar estado para peso
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input, //copia el estado como ya existe
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    //console.log(input);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleDelete = (e) => {
    setInput({
      ...input, // estado anterior
      types: input.types.filter((t) => t !== e),
    });
  };

  return (
    <div className={style.containerF}>
      <div className={style.guiaP}>
        <Link to={"/home"} className={style.spanBo}>
          <button className={style.buttonVolver}>
            
            <span className={style.spanV}>Volver</span>
          </button>
        </Link>
        <div className={style.containerGuia}>
          <div className={style.necesitasP}>
            <h3>Imágenes para crear tu pokemon</h3>
            <h4>
              aquí:{" "}
              <a
                className={style.linkParaCrear}
                href="https://custom-doodle.com/collection/pokemon/"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </h4>
          </div>
          
        </div>
      </div>
      <div className={style.formContainer}>
        <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
          <h3 className={style.formTitle}><strong>CREA UN POKEMON</strong></h3>
          <div>
            <div className={style.inputContainer}>
              <input
                placeholder="Nombre"
                name="name"
                type="text"
                value={input.name}
                onChange={handleChange}
              />
              <div>
                {errors.name && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.name}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder="Imagen  .jpg .jpeg .png .gif"
                name="image"
                type="text"
                value={input.image}
                onChange={handleChange}
              />
              <div>
                {errors.image && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.image}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder="HP"
                name="hp"
                type="number"
                min="1"
                value={input.hp}
                onChange={handleChange}
              />
              <div>
                {errors.hp && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.hp}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder="Ataque"
                name="attack"
                type="number"
                min="1"
                value={input.attack}
                onChange={handleChange}
              />
              <div>
                {errors.attack && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.attack}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder="Defensa"
                name="defense"
                type="number"
                min="1"
                value={input.defense}
                onChange={handleChange}
              />
              <div>
                {errors.defense && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.defense}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder="Velocidad"
                name="speed"
                type="number"
                min="1"
                value={input.speed}
                onChange={handleChange}
              />
              <div>
                {errors.speed && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.speed}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder="Altura"
                name="height"
                type="number"
                min="1"
                value={input.height}
                onChange={handleChange}
              />
              <div>
                {errors.height && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.height}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <input
                placeholder="Peso"
                name="weight"
                type="number"
                min="1"
                value={input.weight}
                onChange={handleChange}
              />
              <div>
                {errors.weight && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.weight}
                  </span>
                )}
              </div>
            </div>
            <div className={style.inputContainer}>
              <label className={style.typeS}>Tipo:</label>
              <select
                onChange={(e) => handleSelect(e)}
                className={style.selectType}
              >
                {types.map((t, index) => (
                  <option key={index} value={t.name}>
                    {t.name}
                  </option>
                ))}
              </select>
              <div>
                {errors.types && (
                  <span
                    className={style.spanError}
                    style={{ color: "#e74c3c" }}
                  >
                    {errors.types}
                  </span>
                )}
              </div>
            </div>
            <div className={style.crearP}>
              <button
                className={style.buttonCrear}
                type="submit"
                name="submit"
                disabled={disable()}
              >
                <span className={style.go}>Crear!</span>
                
              </button>
            </div>
          </div>
        </form>
        <div>
          {input.types.map((e, index) => (
            <div className={style.divDelete} key={index}>
              <p className={style.typeElegido} style={{ color: "white" }}>
                {e}
              </p>
              <button className={style.botonX} onClick={() => handleDelete(e)}>
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Create;

