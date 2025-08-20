import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceComponent } from "./place/place.component";

const routes: Routes = [{
  path: '',
  component: PlaceComponent,
  pathMatch: 'full' // Config que define como encontrar encontrar a URL deste component. A URL é definida em 'path'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }
