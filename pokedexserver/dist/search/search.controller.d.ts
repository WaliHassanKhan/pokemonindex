import { SearchService } from './search.service';
export declare class SearchController {
    private searchService;
    constructor(searchService: SearchService);
    searchPokemon(params: any): Promise<any>;
}
