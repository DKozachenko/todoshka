import { Component, OnInit } from '@angular/core';
import {TaskInterface} from "../../interfaces/task.interface";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.sass']
})
export class ArchiveComponent implements OnInit {
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

}
