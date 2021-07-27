import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { PokemonData } from 'src/model/PokemonData.model';

@Injectable()
export class PokemonService {
    constructor(private httpService: HttpService) {}
    async fetchDetailsById(id: string): Promise<any> {
        return this.httpService.get('https://pokeapi.co/api/v2/pokemon/'+id).pipe(map(
            resp=>this.process(resp)
        )
        );
    }
    process(res){
        const pokemonDetails = this.processData(res.data)
        return pokemonDetails
    }
    processData(inputData:any){
        const moves = this.processMoves(inputData.moves)
        const new_url = "https://pokeres.bastionbot.org/images/pokemon/"+inputData.id+".png"
        const pokemonDetails = new PokemonData(inputData.name,new_url,"1",moves,inputData.weight)
        return pokemonDetails
    }
    processMoves(inputMoves:Array<any>){
        const move_list = inputMoves.map(obj => {
            return obj.move.name
        })
        return move_list
    }
}
