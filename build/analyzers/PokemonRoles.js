"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PokemonRoles = /** @class */ (function () {
    function PokemonRoles() {
    }
    PokemonRoles.prototype.run = function (pokemons) {
        var attackPokemon = 0, specialPokemon = 0, defensivePokemon = 0, specialdefensePokemon = 0, speedyPokemon = 0, bulkyPokemon = 0;
        var hpEvIndex = 4, atkEvIndex = 5, spaEvIndex = 6, defEvIndex = 7, spdEvIndex = 8, speEvIndex = 9;
        for (var _i = 0, pokemons_1 = pokemons; _i < pokemons_1.length; _i++) {
            var pokemon = pokemons_1[_i];
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
        return "You have " + bulkyPokemon + " bulky pokemon, \n    " + attackPokemon + " attack pokemon, \n    " + specialPokemon + " special attack pokemon, \n    " + defensivePokemon + " defensive pokemon,\n    " + specialdefensePokemon + " specially defensive pokemon,\n    " + speedyPokemon + " speedy pokemon.";
    };
    return PokemonRoles;
}());
exports.PokemonRoles = PokemonRoles;
