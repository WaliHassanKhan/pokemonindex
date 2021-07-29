import { HttpService } from '@nestjs/axios';
import { PokemonData } from 'src/model/PokemonData.model';
export declare class SearchService {
    private httpService;
    constructor(httpService: HttpService);
    fetchDetailsByName(name: string): Promise<any>;
    process(res: any): PokemonData;
    processData(inputData: any): PokemonData;
    processMoves(inputMoves: Array<any>): any[];
}
