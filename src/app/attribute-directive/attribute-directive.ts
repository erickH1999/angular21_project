import { NgClass, NgStyle } from '@angular/common';
import { withInterceptors } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css',
})
export class AttributeDirective {
  //bg-success allows us to change this dynamically
  myClass="bg-success";
  //adjust this to false to change its color
  isActive: boolean = true;
  //change its value so that the color changes
  marks=61;

  //we will use this to assign dynamic background colors
  backColor="";

  myCSS=
  {
    color: 'white',
    'background-color': 'Green'
  }

  ToggleActivation()
  {
    this.isActive = !this.isActive;
  }
}
