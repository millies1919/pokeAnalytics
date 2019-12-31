"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var PokemonCompReader = /** @class */ (function () {
    function PokemonCompReader(reader) {
        this.reader = reader;
        this.pokemon = [];
    }
    PokemonCompReader.fromCsv = function (filename) {
        return new PokemonCompReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    PokemonCompReader.prototype.load = function () {
        this.reader.read();
        this.pokemon = this.reader.data.map(function (row) {
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
        });
    };
    return PokemonCompReader;
}());
exports.PokemonCompReader = PokemonCompReader;
