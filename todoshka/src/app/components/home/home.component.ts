import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {TaskInterface} from "../../interfaces/task.interface";
import {ListsService} from "../../services/lists.service";
import {ListInterface} from "../../interfaces/list.interface";
import {LabelsService} from "../../services/labels.service";
import {LabelInterface} from "../../interfaces/label.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  private delay: number = 1500

  public tasks: TaskInterface[] = []
  public lists: ListInterface[] = []
  public labels: LabelInterface[] = []
  public isMessage: boolean = false
  public messageText: string = ''
  public messageClass: string = ''

  public isFilters: boolean = false
  public queryFilter: string = ''
  public keyFilter: string = 'title'

  constructor(private tasksService: TasksService,
              private listsService: ListsService,
              private labelsService: LabelsService) { }

  ngOnInit(): void {
    this.getTasks()
    this.getLists()
    this.getLabels()
  }

  private getTasks(): void {
    this.tasks = this.tasksService.tasks
  }

  private getLists(): void {
    this.lists = this.listsService.lists
  }

  private getLabels(): void {
    this.labels = this.labelsService.labels
  }

  private processMessage(mesText: string, mesClass: string): void {
    this.isMessage = true
    this.messageText = `Дело ${mesText}`
    this.messageClass = `message__${mesClass}`
  }

  public done(id: number): void {
    this.processMessage('сделано', 'done')

    setTimeout(() => {
      this.tasksService.done(id)
      this.isMessage = false
      this.getTasks()
    }, this.delay)
  }

  public edit(): void {
    this.processMessage('изменено', 'edit')

    setTimeout(() => {
      this.isMessage = false
    }, this.delay)
  }

  public archive(id: number): void {
    this.processMessage('архивировано', 'archive')

    setTimeout(() => {
      this.tasksService.archive(id)
      this.isMessage = false
      this.getTasks()
    }, this.delay)
  }

  public add(): void {
    this.tasksService.add()
    this.getTasks()
  }

  public parseKeyFilter(): string {
    if (this.keyFilter === 'title') {
      return 'названию'
    } else if (this.keyFilter === 'labelId') {
      return 'метке'
    } else if (this.keyFilter === 'listId') {
      return 'списку'
    } else {
      return ''
    }
  }


}
