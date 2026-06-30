import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Field, form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-forms',
  templateUrl: './signal-forms.html',
  styleUrls: ['./signal-forms.css'],
  imports: [FormField, JsonPipe],
})
export class SignalForms {

  empModel = signal({
    name: '',
    email: ''
  });

  //empForm = form(this.empModel);

  empForm = form(this.empModel,
    (schema) => ({
      name: [required(schema.name, { message: 'Name is required' })],
      email: [required(schema.email, { message: 'Email is required' })]
    })
  );


}
