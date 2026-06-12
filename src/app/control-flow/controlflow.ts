import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlflow',
  imports: [FormsModule],
  templateUrl: './controlflow.html',
  styleUrl: './controlflow.css',
})
export class Controlflow {
  isShowText: boolean = false;
  //Writable signal that you can update its value
  showSuccessLabel : WritableSignal<boolean> = signal(false);
  age=0;

  //array of two strings
  courses : string [] = ["Angular", "React"];

  //Array with options
  deptList=[
    {name: "HR", Id: 123},
    {name: "IT", Id: 444}
  ];
item: any;

  ToggleLabelVisibility()
  {
    this.showSuccessLabel.set(!this.showSuccessLabel());
  }
}
