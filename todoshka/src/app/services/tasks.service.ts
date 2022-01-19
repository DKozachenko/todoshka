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
      labelId: null
    },
    {
      id: 2,
      title: 'Купить молоко',
      description: null,
      listId: null,
      labelId: null
    },
    {
      id: 3,
      title: 'Постирать',
      description: null,
      listId: null,
      labelId: null
    },
    {
      id: 4,
      title: 'Перебрать документы',
      description: null,
      listId: null,
      labelId: null
    },
    {
      id: 5,
      title: 'Погулять с собакой',
      description: null,
      listId: null,
      labelId: null
    }
  ]

  public archiveTasks: TaskInterface[] = []

  constructor() { }

  public done(id: number): void {
    this.tasks = this.tasks.filter((task: TaskInterface) => {
      return task.id !== id
    })
  }

  public delete(id: number): void {
    this.archiveTasks = this.archiveTasks.filter((task: TaskInterface) => {
      return task.id !== id
    })
  }
  public archive(id: number): void {
    const tempTask: TaskInterface = {
      id: 0,
      title: '',
      description: null,
      listId: null,
      labelId: null,
    }

    const archiveTask = this.tasks.find((task: TaskInterface) => {
      return task.id === id
    })

    this.tasks = this.tasks.filter((task: TaskInterface) => {
      return task.id !== id
    })

    this.archiveTasks.push(archiveTask ?? tempTask)
  }

  public add(): void {
    const len = this.tasks.length + 1
    this.tasks.push({
      id: len,
      title: 'Random title',
      description: null,
      listId: null,
      labelId: null
    })
  }

}
