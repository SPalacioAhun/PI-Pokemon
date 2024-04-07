const request = require('supertest');
const app = require('../../src/app.js');

describe('GET /pokemons', () => {
  it('should return a list of all Pokemons successfully', async () => {
    // Realizar la solicitud GET al endpoint /pokemons
    const response = await request(app).get('/pokemons');

    // Verificar el código de estado de la respuesta
    expect(response.status).toBe(200);

    // Verificar el tipo de contenido de la respuesta
    expect(response.headers['content-type']).toMatch(/json/);

    // Verificar que la respuesta contenga datos de Pokemon
    expect(response.body).toBeTruthy();

    // Verificar que la respuesta sea un arreglo
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return a list of Pokemons matching the specified name successfully', async () => {
    const pokemonName = 'Pikachu';

    // Realizar la solicitud GET al endpoint /pokemons con un nombre especificado
    const response = await request(app).get('/pokemons').query({ name: pokemonName });

    // Verificar el código de estado de la respuesta
    expect(response.status).toBe(200);

    // Verificar el tipo de contenido de la respuesta
    expect(response.headers['content-type']).toMatch(/json/);

    // Verificar que la respuesta contenga datos de Pokemon
    expect(response.body).toBeTruthy();

    // Verificar que la respuesta sea un arreglo
    expect(Array.isArray(response.body)).toBe(true);

    // Verificar que al menos un Pokemon en la respuesta tenga el nombre especificado
    const pokemonWithName = response.body.find(pokemon => pokemon.name === pokemonName);
    expect(pokemonWithName).toBeTruthy();
  });

  it('should return 500 status code when fetching Pokemons throws an error', async () => {
    // Forzar un error al intentar obtener los Pokemons
    jest.spyOn(global, 'getAllPokemons').mockImplementation(() => {
      throw new Error('Error fetching Pokemons');
    });
  
    // Realizar la solicitud GET al endpoint /pokemons
    const response = await request(app).get('/pokemons');
  
    // Verificar el código de estado de la respuesta
    expect(response.status).toBe(500);
  
    // Restaurar la implementación original de getAllPokemons
    global.getAllPokemons.mockRestore();
  });
  
});
