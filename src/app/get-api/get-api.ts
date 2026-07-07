import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Todo } from '../services/todo';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {


  todoList: any[] = []; //property that will hold the list of todos retrieved from the API
  todoService = inject(Todo); //inject the Todo service into the component, allowing it to be used within the component's methods
  //constructor that injects the HttpClient service into the component, allowing it to make HTTP requests
  constructor(private http: HttpClient) {
    const res = this.todoService.ConcatStrings("Hello", "World");
  }

  ngOnInit(): void {
    this.getTodos(); //call the getTodos method when the component is initialized
  }

  //Method that makes an HTTP GET request to the specified URL and logs the result to the console
  getTodos() {
    this.todoService.getTodos().subscribe(
      {
        next: (result: any) => {
          this.todoList = result;
        }
      }
    );
  }
}
