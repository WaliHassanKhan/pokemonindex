import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon/:id')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) {}
    @Get()
    findAll(@Param() params): any {
        return this.pokemonService.fetchDetailsById(params.id);
    }
}
