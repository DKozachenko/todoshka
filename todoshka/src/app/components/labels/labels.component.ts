import { Component, OnInit } from '@angular/core';
import {TaskInterface} from "../../interfaces/task.interface";
import {ListInterface} from "../../interfaces/list.interface";
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
  }

  private processMessage(mesText: string, mesClass: string): void {
    this.isMessage = true
    this.messageText = `Метка ${mesText}`
    this.messageClass = `message__${mesClass}`
  }

  private setClickabilityWindow(str: string): void {
    window.document.documentElement.style.pointerEvents = str
  }

  public edit(): void {
    this.processMessage('изменена', 'edit')

    setTimeout(() => {
      this.isMessage = false
    }, this.delay)
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
  }

  public add(): void {
    this.labelsService.add()
    this.getLabels()
  }

}
