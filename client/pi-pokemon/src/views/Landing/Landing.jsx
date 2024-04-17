import { Link } from "react-router-dom";
import { useState } from 'react';
import style from "./Landing.module.css";


const Landing = () => {
  const [isLandingEnabled, setIsLandingEnabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleLandingStart = () => {
    setIsLandingEnabled(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleStartClick = () => {
    handleLandingStart();
    handleClosePopup();
  };

  return (
    <div className={style.landingBackground}>
     
      <div className={style.content}>
        <h1 className={style.landingText}>
        El Pokemon perfecto no existe <br /> ¡Todos tienen algo especial!
        </h1>
        {!isLandingEnabled && (
          <div>
            <button 
            className={style.button} 
            onClick={() => setShowPopup(true)}
            >
            ¡Comienza tu aventura Pokémon!
            </button>
            {showPopup && (
              <div className={style.welcomePopup}>
                <div className={style.welcomePopupContent}>
                  <h2>¡Bienvenido a nuestra aplicación Pokémon!</h2>
                  <p>Aquí encontrarás todos los Pokémon que puedas imaginar.</p>
                  <p>Tambien la posibilidad de crear tus propias criaturas unicas.</p>
                  <p>!Expolora, descubre y crea tu equipo perfecto</p>
                  <p>para convertirte en el mejor Entrenador Pokémon!.</p>
                  <p>¿Estamos Listos? </p>
                  
                  <Link to="/home">
                    <button 
                    className={style.button} 
                    onClick={handleStartClick}
                    >
                    ¡Atrévete a ser un Maestro Pokémon!
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;




