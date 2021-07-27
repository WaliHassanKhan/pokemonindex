import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FetchapiService } from '../services/fetchapi.service';
import { Pokemontable1DataSource, Pokemontable1Item } from './pokemontable1-datasource';

@Component({
  selector: 'app-pokemontable1',
  templateUrl: './pokemontable1.component.html',
  styleUrls: ['./pokemontable1.component.css']
})
export class Pokemontable1Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Pokemontable1Item>;
  dataSource: Pokemontable1DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','url','imgUrl'];

  constructor(private fetchApi : FetchapiService) {
    this.dataSource = new Pokemontable1DataSource();
    this.fetchApi.getPokemons().then(res=>{
      this.dataSource.setValue(res)
      this.dataSource.paginator?._changePageSize(20)
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
