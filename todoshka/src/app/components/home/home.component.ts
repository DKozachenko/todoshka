import { Component, OnInit } from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {TaskInterface} from "../../interfaces/task.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public tasks: TaskInterface[] = []

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  private getTasks(): void {
    this.tasks = this.tasksService.tasks
  }

  public done(id: number): void {
    setTimeout(() => {
      this.tasksService.done(id)
      this.getTasks()
    }, 2000)

  }

}
