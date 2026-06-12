import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  deptname = "HR";
  className= "danger";
  inputType="radio";

  showMessage() {
    alert("Hello")
  }

  changeCity() {
    alert("City Changed")
  }
}
