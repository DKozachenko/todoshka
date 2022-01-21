import { Injectable } from '@angular/core'
import {ListInterface} from "../interfaces/list.interface";

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  public lists: ListInterface[] = JSON.parse(localStorage.getItem('lists') ?? '[]')

  constructor() { }

  public delete(id: number): void {
    this.lists = this.lists.filter((list: ListInterface) => {
      return list.id !== id
    })
  }

  public add(): void {
    const len = this.lists.length + 1
    this.lists.push({
      id: len,
      title: 'Название'
    })
  }
}
