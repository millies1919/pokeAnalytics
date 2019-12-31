import { PokemonCompReader } from './CompPokeReader';
import { Summary } from './Summary';

const compPokeReader = PokemonCompReader.fromCsv('comp pokemon teams.csv');
const summary = Summary.roleAnaylsisInHtml();

compPokeReader.load();
summary.buildAndPrintReport(compPokeReader.pokemon);
