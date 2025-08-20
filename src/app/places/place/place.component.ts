import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Category } from '../../categories/category';
import { CategoryService } from '../../categories/category.service';
import { PlaceService } from '../place.service';
import { Place } from '../place';

@Component({
  selector: 'app-place',
  standalone: false,
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss'
})
export class PlaceComponent implements OnInit {

  formFields: FormGroup;
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private service: PlaceService 
  ) {
    this.formFields = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      photoUrl: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
      this.categoryService.findAll()
        .subscribe({
          next: (categoryList) => this.categories = categoryList
        });
  }

  save(): void {
    this.formFields.markAllAsTouched();
    
    if(this.formFields.valid) {
      this.service
      .save(this.formFields.value)
      .subscribe({
        next: (place) => {
          // console.log('Saved successfully ', place);
          this.formFields.reset();
        },
        error: err => console.error('Error: ', err)
      });
    }
  }

  isInvalidFields(fieldName: string): boolean {
    const field = this.formFields.get(fieldName);
    return field?.invalid && field?.touched && field?.errors?.['required'];
  }
}
