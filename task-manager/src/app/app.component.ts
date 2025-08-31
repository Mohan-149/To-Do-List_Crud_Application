import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  addTask() {
    this.taskService.createTask(this.newTask).subscribe(() => {
      this.loadTasks();
      this.newTask = { id: 0, title: '', description: '', completed: false };
    });
  }

  editTask(task: Task) {
    this.newTask = { ...task };
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}