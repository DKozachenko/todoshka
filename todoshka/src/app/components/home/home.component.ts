import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {TaskInterface} from "../../interfaces/task.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  private delay: number = 1500

  public tasks: TaskInterface[] = []
  public isMessage: boolean = false
  public messageText: string = ''
  public messageClass: string = ''

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  private getTasks(): void {
    this.tasks = this.tasksService.tasks
  }

  public done(id: number): void {
    this.isMessage = true
    this.messageText = 'Дело сделано'
    this.messageClass = 'message__done'

    setTimeout(() => {
      this.tasksService.done(id)
      this.isMessage = false
      this.getTasks()
    }, this.delay)
  }

  public edit(): void {
    this.isMessage = true
    this.messageText = 'Дело изменено'
    this.messageClass = 'message__edit'

    setTimeout(() => {
      this.isMessage = false
    }, this.delay)
  }


}
