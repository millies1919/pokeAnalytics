"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompPokeReader_1 = require("./CompPokeReader");
var Summary_1 = require("./Summary");
var compPokeReader = CompPokeReader_1.PokemonCompReader.fromCsv('comp pokemon teams.csv');
var summary = Summary_1.Summary.roleAnaylsisInHtml();
compPokeReader.load();
summary.buildAndPrintReport(compPokeReader.pokemon);
