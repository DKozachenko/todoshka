import { Component, OnInit } from '@angular/core';
import {TaskInterface} from "../../interfaces/task.interface";
import {ListInterface} from "../../interfaces/list.interface";
import {ListsService} from "../../services/lists.service";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.sass']
})
export class ListsComponent implements OnInit {
  private delay: number = 1500

  public lists: ListInterface[] = []
  public isMessage: boolean = false
  public messageText: string = ''
  public messageClass: string = ''

  constructor(private listsService: ListsService) { }

  ngOnInit(): void {
    this.getLists()
  }

  private getLists(): void {
    this.lists = this.listsService.lists

    const listsJson: string = JSON.stringify(this.lists)
    localStorage.setItem('lists', listsJson)
  }

  private processMessage(mesText: string, mesClass: string): void {
    this.isMessage = true
    this.messageText = `Список ${mesText}`
    this.messageClass = `message__${mesClass}`
  }

  private setClickabilityWindow(str: string): void {
    window.document.documentElement.style.pointerEvents = str
  }

  private updateLocalStorage(): void {
    const listsJson: string = JSON.stringify(this.lists)
    localStorage.setItem('lists', listsJson)
  }

  public edit(): void {
    this.processMessage('изменен', 'edit')

    setTimeout(() => {
      this.isMessage = false
    }, this.delay)

    this.updateLocalStorage()
  }

  public delete(id: number): void {
    this.processMessage('удален', 'delete')
    this.setClickabilityWindow('none')

    setTimeout(() => {
      this.listsService.delete(id)
      this.isMessage = false
      this.setClickabilityWindow('auto')
      this.getLists()
    }, this.delay)

    this.updateLocalStorage()
  }

  public add(): void {
    this.listsService.add()
    this.getLists()

    this.updateLocalStorage()
  }

}
