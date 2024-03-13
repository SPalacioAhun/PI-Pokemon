const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const {
    getPokemonsHandler,
    getPokemonsIdHandler,
    createPokemonsHandler,
} = require("../handlers/pokemonsHandlers");
const {getTypesHandler} = require("../handlers/typesHandlers");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", getPokemonsHandler);


router.post("/create", createPokemonsHandler);

router.get("/types", getTypesHandler);

router.get("/:idPokemon", getPokemonsIdHandler);



module.exports = router;