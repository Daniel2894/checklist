import { Component } from '@angular/core';
import { Task } from 'src/core/models/task.interface';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  task: Task[] = [
    {
      id:1,
      name: 'Buy Milk',
      description: 'I need to go to the shop and buy a gallon of milk',
      dueDate: new Date(),
      status: "To Do"
    }
  ]
}
