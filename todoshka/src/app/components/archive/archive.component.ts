import { Component, OnInit } from '@angular/core';
import {TaskInterface} from "../../interfaces/task.interface";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.sass']
})
export class ArchiveComponent implements OnInit {
  private delay: number = 1500
  public archiveTasks: TaskInterface[] = []

  public isMessage: boolean = false
  public messageText: string = ''
  public messageClass: string = ''

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  private getTasks(): void {
    this.archiveTasks = this.tasksService.archiveTasks
  }

  private processMessage(mesText: string, mesClass: string): void {
    this.isMessage = true
    this.messageText = `Дело ${mesText}`
    this.messageClass = `message__${mesClass}`
  }

  public delete(id: number) {
    this.processMessage('удалено', 'delete')

    setTimeout(() => {
      this.tasksService.delete(id)
      this.isMessage = false
      this.getTasks()
    }, this.delay)
  }

}
