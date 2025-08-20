import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // FormGrup - Representa o formulário // FromControll - representa os campos do formulário 
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {  
  formFields: FormGroup;

  constructor(private service: CategoryService) {
    this.formFields = new FormGroup({
      name: new FormControl('', Validators.required), // formControl recebe o valor inicial do campo, e algum validador
      description: new FormControl('', Validators.required)
    });
  }

  save(): void {
    this.formFields.markAllAsTouched();
    if(this.formFields.valid) {
      this.service
        .save(this.formFields.value)
        .subscribe({
          next: () => {
            this.formFields.reset(); // Limpar os campos após o salvamento
          },
          error: err => console.error('Error: ', err)         
        });
    }
  }

  isInvalidField(fieldName: string): boolean {
    const field = this.formFields.get(fieldName);
    return field?.invalid && field?.touched && field?.errors?.['required'];
  }
}
