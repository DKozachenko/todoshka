import { Injectable } from '@angular/core';
import {TaskInterface} from "../interfaces/task.interface";


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks: TaskInterface[] = [
    {
      id: 1,
      title: 'Купить хлеб',
      description: null,
      listId: null,
      labelsId: null
    },
    {
      id: 2,
      title: 'Купить молоко',
      description: null,
      listId: null,
      labelsId: null
    },
    {
      id: 3,
      title: 'Постирать',
      description: null,
      listId: null,
      labelsId: null
    },
    {
      id: 4,
      title: 'Перебрать документы',
      description: null,
      listId: null,
      labelsId: null
    },
    {
      id: 5,
      title: 'Погулять с собакой',
      description: null,
      listId: null,
      labelsId: null
    }
  ]

  public archiveTasks: TaskInterface[] = []

  constructor() { }

  public done(id: number): void {
    this.tasks = this.tasks.filter((task: TaskInterface) => {
      if (task.id === id) {
        this.archiveTasks.push(task)
        return
      } else {
        return task
      }
    })
  }

}
