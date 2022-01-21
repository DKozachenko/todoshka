import { Component, OnInit } from '@angular/core';
import {LabelInterface} from "../../interfaces/label.interface";
import {LabelsService} from "../../services/labels.service";

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.sass']
})
export class LabelsComponent implements OnInit {
  private delay: number = 1500

  public labels: LabelInterface[] = []
  public isMessage: boolean = false
  public messageText: string = ''
  public messageClass: string = ''

  constructor(private labelsService: LabelsService) { }

  ngOnInit(): void {
    this.getLabels()
  }

  private getLabels(): void {
    this.labels = this.labelsService.labels

    const labelsJson: string = JSON.stringify(this.labels)
    localStorage.setItem('labels', labelsJson)
  }

  private processMessage(mesText: string, mesClass: string): void {
    this.isMessage = true
    this.messageText = `Метка ${mesText}`
    this.messageClass = `message__${mesClass}`
  }

  private setClickabilityWindow(str: string): void {
    window.document.documentElement.style.pointerEvents = str
  }

  private updateLocalStorage(): void {
    const labelsJson: string = JSON.stringify(this.labels)
    localStorage.setItem('labels', labelsJson)
  }

  public edit(): void {
    this.processMessage('изменена', 'edit')

    setTimeout(() => {
      this.isMessage = false
    }, this.delay)

    this.updateLocalStorage()
  }

  public delete(id: number): void {
    this.processMessage('удалена', 'delete')
    this.setClickabilityWindow('none')

    setTimeout(() => {
      this.labelsService.delete(id)
      this.isMessage = false
      this.setClickabilityWindow('auto')
      this.getLabels()
    }, this.delay)

    this.updateLocalStorage()
  }

  public add(): void {
    this.labelsService.add()
    this.getLabels()

    this.updateLocalStorage()
  }

}
