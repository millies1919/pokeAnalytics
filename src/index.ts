import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('comp pokemon teams.csv');
reader.read();

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

for (let pokemon of reader.data) {
  if (parseInt(pokemon[hpEvIndex]) > 100) {
    bulkyPokemon++;
  }
  if (parseInt(pokemon[atkEvIndex]) > 100) {
    attackPokemon++;
  }
  if (parseInt(pokemon[spaEvIndex]) > 100) {
    specialPokemon++;
  }
  if (parseInt(pokemon[defEvIndex]) > 100) {
    defensivePokemon++;
  }
  if (parseInt(pokemon[spdEvIndex]) > 100) {
    specialdefensePokemon++;
  }
  if (parseInt(pokemon[speEvIndex]) > 100) {
    speedyPokemon++;
  }
}

console.log(`You have ${bulkyPokemon} bulky pokemon`);
console.log(`You have ${attackPokemon} attack pokemon`);
console.log(`You have ${specialPokemon} special attack pokemon`);
console.log(`You have ${defensivePokemon} defensive pokemon`);
console.log(`You have ${specialdefensePokemon} specially defensive pokemon`);
console.log(`You have ${speedyPokemon} speedy pokemon`);
