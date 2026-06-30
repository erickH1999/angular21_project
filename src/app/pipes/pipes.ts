import { DatePipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',

  //importing the pipes that we want to use in this component
  //UpperCasePipe makes all letters uppercase, 
  // LowerCasePipe makes all letters lowercase, 
  // and TitleCasePipe makes the first letter of each word uppercase and the rest lowercase
  // DatePipe formats a date value according to locale rules
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {

  department = "Marketing";
  goal = "learn angular pipes";
  //Display the current date and time using the Date pipe
  dated: Date = new Date();

  empNames: string[] = ['Erick', 'John', 'Jane', 'Doe'];
}
