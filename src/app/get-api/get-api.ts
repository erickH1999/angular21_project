import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {


  todoList: any[] = []; //property that will hold the list of todos retrieved from the API

  //constructor that injects the HttpClient service into the component, allowing it to make HTTP requests
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTodos(); //call the getTodos method when the component is initialized
  }

  //Method that makes an HTTP GET request to the specified URL and logs the result to the console
  getTodos() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((result: any) => {
      debugger; //pause the execution of the code and allow you to inspect the state of the application at this point
      this.todoList = result; // Assign the retrieved todos to the todoList property
      //console.log(result);
    });

  }
}
