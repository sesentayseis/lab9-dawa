import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: string[] = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
  newTask: string = '';

  addTask() {
    if (this.newTask) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
}
