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
      id: 1,
      title: 'Купить хлеб',
      description: null,
      listId: null,
      labelsId: null
    },
    {
      id: 1,
      title: 'Купить хлеб',
      description: null,
      listId: null,
      labelsId: null
    },
    {
      id: 1,
      title: 'Купить хлеб',
      description: null,
      listId: null,
      labelsId: null
    },
    {
      id: 1,
      title: 'Купить хлеб',
      description: null,
      listId: null,
      labelsId: null
    },
    {
      id: 1,
      title: 'Купить хлеб',
      description: null,
      listId: null,
      labelsId: null
    },
    {
      id: 1,
      title: 'Купить хлеб',
      description: null,
      listId: null,
      labelsId: null
    },
    {
      id: 1,
      title: 'Купить хлеб',
      description: null,
      listId: null,
      labelsId: null
    }
  ]

  constructor() { }
}
