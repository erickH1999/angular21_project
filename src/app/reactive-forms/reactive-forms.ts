import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  empForm: FormGroup =  new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(4)]),
    role: new FormControl("", Validators.required),
    Department: new FormControl("", Validators.required),
    salary: new FormControl(0, [Validators.min(0), Validators.required])
  });
}
