import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class IndexService {
  constructor(private httpService: HttpService) {}
  async findAll(): Promise<any> {
    return this.httpService.get('https://pokeapi.co/api/v2/pokemon/').pipe(map(
      resp=>this.process(resp)
    ))
  }
  process(res){
    res.data.results.map(result=>{
      const url_split = result.url.split("/")
      const id = url_split[url_split.length-2]
      const imgUrl = "https://pokeres.bastionbot.org/images/pokemon/"+id+".png"
      result.imgUrl = imgUrl
      result.id = id
    })
    return res.data.results
  }
}
