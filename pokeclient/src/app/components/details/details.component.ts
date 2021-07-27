import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonData } from 'src/app/models/PokemonData.model';
import { FetchapiService } from 'src/app/services/fetchapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private fetchApi : FetchapiService,private route: ActivatedRoute) { }
  pokemon:PokemonData = new PokemonData("", "", "", [], "")
  ngOnInit(): void {
    const id = this.route.snapshot.params["id"]
    this.fetchApi.getPokemonDetails(id).then(res=>{
      this.pokemon = new PokemonData(res.name, res.url, res.gen, res.moves, res.weight)
    })
  }

}
