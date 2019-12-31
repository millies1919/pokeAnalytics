import { CompPokes } from './CompPokeData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class PokemonCompReader {
  static fromCsv(filename: string): PokemonCompReader {
    return new PokemonCompReader(new CsvFileReader(filename));
  }

  pokemon: CompPokes[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.pokemon = this.reader.data.map(
      (row: string[]): CompPokes => {
        return [
          row[0],
          row[1],
          row[2],
          row[3],
          parseInt(row[4]),
          parseInt(row[5]),
          parseInt(row[6]),
          parseInt(row[7]),
          parseInt(row[8]),
          parseInt(row[9]),
          row[10],
          row[11],
          row[12],
          row[13],
          row[14],
          row[15]
        ];
      }
    );
  }
}
