const { Router } = require("express");
const routerPk = Router();
const {
  getPokemonsHandler,
  getPokemonsIdHandler,
  createPokemonsHandler,
} = require("../handlers/pokemonsHandlers");

//query
routerPk.get("/", getPokemonsHandler);

//params
routerPk.get("/:idPokemon", getPokemonsIdHandler);

//body
routerPk.post("/create",createPokemonsHandler);

//query
routerPk.get("/name", getPokemonsHandler);

module.exports = routerPk;