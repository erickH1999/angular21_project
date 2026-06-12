import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  //deptname = "HR";
  deptname = signal("HR");
  deptid = signal(112);
  emp = signal({name: 'Edward', Id: 123})
  deptList = signal (["HR", "IT"]);
  duration: Signal<string> = signal("1h");


  constructor() {
    console.log("Before :" + this.deptname())
    setTimeout(() =>
      {
        this.deptname.set("IT");
        console.log("After :" + this.deptname())
      },2000
    );
  }
}
