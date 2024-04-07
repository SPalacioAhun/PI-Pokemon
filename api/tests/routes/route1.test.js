const request = require('supertest');
const app = require('../../src/app');

describe('GET /pokemons/:idPokemon', () => {
  it('should get a Pokemon by ID successfully', async () => {
    // Supongamos que tienes un ID de Pokémon válido para probar
    const pokemonId = '125';

    const response = await request(app)
      .get(`/pokemons/${pokemonId}`);

    // Verificar el código de estado
    expect(response.status).toBe(200);

    // Verificar que se haya devuelto un Pokémon
    expect(response.body).toBeTruthy();
  });

  it('should handle errors when getting a Pokemon by ID', async () => {
    // Supongamos que tienes un ID de Pokémon inválido para probar
    const invalidPokemonId = 'invalid_id';

    const response = await request(app)
      .get(`/pokemons/${invalidPokemonId}`);

    // Verificar el código de estado
    expect(response.status).toBe(400);

    // Verificar que se haya devuelto un mensaje de error
    expect(response.body.error).toBeTruthy();
  });
});
