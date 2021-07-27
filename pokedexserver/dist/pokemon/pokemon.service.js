"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const PokemonData_model_1 = require("../model/PokemonData.model");
let PokemonService = class PokemonService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async fetchDetailsById(id) {
        return this.httpService.get('https://pokeapi.co/api/v2/pokemon/' + id).pipe(rxjs_1.map(resp => this.process(resp)));
    }
    process(res) {
        const pokemonDetails = this.processData(res.data);
        return pokemonDetails;
    }
    processData(inputData) {
        const moves = this.processMoves(inputData.moves);
        const new_url = "https://pokeres.bastionbot.org/images/pokemon/" + inputData.id + ".png";
        const pokemonDetails = new PokemonData_model_1.PokemonData(inputData.name, new_url, "1", moves, inputData.weight);
        return pokemonDetails;
    }
    processMoves(inputMoves) {
        const move_list = inputMoves.map(obj => {
            return obj.move.name;
        });
        return move_list;
    }
};
PokemonService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], PokemonService);
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map