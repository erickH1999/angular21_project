import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// basic typescript class for todo
export class Todo {
  //store
  //api
  //subject
  //functions

  course: string = "react";

  http= inject(HttpClient); //inject the HttpClient service into the component, allowing it to make HTTP requests

  //function to concat two strings
  ConcatStrings(str1: string, str2: string) {
    debugger;
    const res= str1 + " " + str2;
    return res;
  }

  // function to get todos from the API
  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
