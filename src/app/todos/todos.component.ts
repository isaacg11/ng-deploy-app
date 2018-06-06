import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;

  constructor(private todosService: TodosService) {
    this.todosService.getTodos().subscribe((data: any) => {
      let result = data;
      this.todos = result.data;
    });
  }

  ngOnInit() {
  }

}
