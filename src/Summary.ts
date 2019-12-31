import { CompPokes } from './CompPokeData';
import { PokemonRoles } from './analyzers/PokemonRoles';
import { HtmlReport } from './reportTargets/HtmlReports';

export interface Analyzer {
  run(pokemon: CompPokes[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static roleAnaylsisInHtml() {
    return new Summary(new PokemonRoles(), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(pokemons: CompPokes[]): void {
    const output = this.analyzer.run(pokemons);
    this.outputTarget.print(output);
  }
}
