import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {path:'',component: IndexComponent},
  {path:'pokemon/:id',component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IndexComponent,DetailsComponent]