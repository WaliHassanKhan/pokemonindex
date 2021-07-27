export class PokemonData{
    name: string
    url: string
    gen: string
    moves: Array<string>
    weight: string
    constructor(inputName:string,inputUrl:string,inputGen:string,
        inputMoves:Array<string>,inputWeight:string){
        this.name = inputName
        this.url = inputUrl
        this.gen = inputGen
        this.moves = inputMoves
        this.weight = inputWeight
    }
}