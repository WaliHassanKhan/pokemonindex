import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Main } from '../models/main.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FetchapiService {
  
  getPokemons(): Promise<any> {
    return this.http.get("http://localhost:3000/").toPromise()
  }
  getPokemonDetails(id:string): Promise<any> {
    return this.http.get("http://localhost:3000/pokemon/"+id).toPromise()
  }

  constructor(private http: HttpClient) { 
    
  }
}
