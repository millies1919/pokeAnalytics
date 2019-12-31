"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PokemonRoles_1 = require("./analyzers/PokemonRoles");
var HtmlReports_1 = require("./reportTargets/HtmlReports");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.roleAnaylsisInHtml = function () {
        return new Summary(new PokemonRoles_1.PokemonRoles(), new HtmlReports_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (pokemons) {
        var output = this.analyzer.run(pokemons);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
