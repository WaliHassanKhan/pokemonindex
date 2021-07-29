import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search/:name')
export class SearchController {
    constructor(private searchService:SearchService){}
    @Get()
    searchPokemon(@Param() params){
        return this.searchService.fetchDetailsByName(params.name)
    }
}
