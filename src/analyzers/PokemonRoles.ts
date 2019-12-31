import { Analyzer } from '../Summary';
import { CompPokes } from '../CompPokeData';

export class PokemonRoles implements Analyzer {
  run(pokemons: CompPokes[]): string {
    let attackPokemon = 0,
      specialPokemon = 0,
      defensivePokemon = 0,
      specialdefensePokemon = 0,
      speedyPokemon = 0,
      bulkyPokemon = 0;

    const hpEvIndex = 4,
      atkEvIndex = 5,
      spaEvIndex = 6,
      defEvIndex = 7,
      spdEvIndex = 8,
      speEvIndex = 9;

    for (let pokemon of pokemons) {
      if (pokemon[hpEvIndex] > 100) {
        bulkyPokemon++;
      }
      if (pokemon[atkEvIndex] > 100) {
        attackPokemon++;
      }
      if (pokemon[spaEvIndex] > 100) {
        specialPokemon++;
      }
      if (pokemon[defEvIndex] > 100) {
        defensivePokemon++;
      }
      if (pokemon[spdEvIndex] > 100) {
        specialdefensePokemon++;
      }
      if (pokemon[speEvIndex] > 100) {
        speedyPokemon++;
      }
    }
    return `You have ${bulkyPokemon} bulky pokemon, 
    ${attackPokemon} attack pokemon, 
    ${specialPokemon} special attack pokemon, 
    ${defensivePokemon} defensive pokemon,
    ${specialdefensePokemon} specially defensive pokemon,
    ${speedyPokemon} speedy pokemon.`;
  }
}
