import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { PlacesRoutingModule } from './places-routing.module';
import { PlaceComponent } from './place/place.component';


@NgModule({
  declarations: [
    PlaceComponent
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PlacesModule { }
