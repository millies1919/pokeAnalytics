import fs from 'fs';

const pokemons = fs
  .readFileSync('./comp pokemon teams.csv', {
    encoding: 'utf-8'
  })
  .split('\r\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

let attackPokemon = 0,
  specialPokemon = 0,
  defensivePokemon = 0,
  specialdefensePokemon = 0,
  speedyPokemon = 0,
  bulkyPokemon = 0;

const hpEv = 4,
  atkEv = 5,
  spaEv = 6,
  defEv = 7,
  spdEv = 8,
  speEv = 9;

for (let pokemon of pokemons) {
  if (parseInt(pokemon[hpEv]) > 100) {
    bulkyPokemon++;
  }
  if (parseInt(pokemon[atkEv]) > 100) {
    attackPokemon++;
  }
  if (parseInt(pokemon[spaEv]) > 100) {
    specialPokemon++;
  }
  if (parseInt(pokemon[defEv]) > 100) {
    defensivePokemon++;
  }
  if (parseInt(pokemon[spdEv]) > 100) {
    specialdefensePokemon++;
  }
  if (parseInt(pokemon[speEv]) > 100) {
    speedyPokemon++;
  }
}

console.log(`You have ${bulkyPokemon} bulky pokemon`);
console.log(`You have ${attackPokemon} attack pokemon`);
console.log(`You have ${specialPokemon} special attack pokemon`);
console.log(`You have ${defensivePokemon} defensive pokemon`);
console.log(`You have ${specialdefensePokemon} specially defensive pokemon`);
console.log(`You have ${speedyPokemon} speedy pokemon`);
