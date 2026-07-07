import { Component } from '@angular/core';
import { Todo } from '../services/todo';

@Component({
  selector: 'app-service-test',
  imports: [],
  templateUrl: './service-test.html',
  styleUrl: './service-test.css',
})
export class ServiceTest {

  constructor(private todoService: Todo) {
    // Use the todoService to call the ConcatStrings function
    debugger;
    const res = todoService.ConcatStrings("Hello", "World");
  }


}
