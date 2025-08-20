import { Component, OnInit } from '@angular/core';
import { Place } from '../../places/place';
import { Category } from '../../categories/category';
import { PlaceService } from '../../places/place.service';
import { CategoryService } from '../../categories/category.service';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  
  places: Place[] = [];
  categories: Category[] = [];
  placeNameFilter: string = '';
  categoryFilter: string = '';

  constructor(
    private placeService: PlaceService,
    private categoryService: CategoryService
  ) {

  }

  ngOnInit(): void {
    this.categoryService
      .findAll()
      .subscribe(categories => this.categories = categories);
    
    this.placeService
      .findAll()
      .subscribe(places => this.places = places);
  }

  getStars(place: Place): string {
    const totalStars: number = 5;
    const filledStar: string = '&#9733;';
    const emptyStar: string = '&#9734;';
    
    return filledStar.repeat(place.rating || 0)
      .concat(emptyStar.repeat(totalStars - (place.rating || 0)));
  }

  filterByPlaceNameOrCategory() {    
    this.placeService
      .findByNameOrCategory(this.placeNameFilter, this.categoryFilter)
      .subscribe(filteredPlaces => this.places = filteredPlaces);
  }
}
