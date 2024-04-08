const request = require('supertest');
const app = require('../../src/app');

describe('GET /pokemons/:idPokemon', () => {
  it('should get a Pokemon by ID successfully', async () => {
    const pokemonId = '125';

    const response = await request(app)
      .get(`/pokemons/${pokemonId}`);

    expect(response.status).toBe(200);

    expect(response.body).toBeTruthy();
  });

  it('should handle errors when getting a Pokemon by ID', async () => {
    const invalidPokemonId = 'invalid_id';

    const response = await request(app)
      .get(`/pokemons/${invalidPokemonId}`);

    expect(response.status).toBe(400);

    expect(response.body.error).toBeTruthy();
  });
});
