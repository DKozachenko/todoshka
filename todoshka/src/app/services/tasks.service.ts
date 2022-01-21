import {Injectable} from '@angular/core';
import {TaskInterface} from "../interfaces/task.interface";


@Injectable({
  providedIn: 'root'
})
export class TasksService{
  public tasks: TaskInterface[] = JSON.parse(localStorage.getItem('tasks') ?? '[]')
  public archiveTasks: TaskInterface[] = JSON.parse(localStorage.getItem('archive_tasks') ?? '[]')

  constructor() {
  }

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

    const archiveTasksJson: string = JSON.stringify(this.archiveTasks)
    localStorage.setItem('archive_tasks', archiveTasksJson)
  }

  public add(): void {
    const len = this.tasks.length + 1
    this.tasks.push({
      id: len,
      title: 'Название',
      description: null,
      listId: null,
      labelId: null
    })
  }

}
