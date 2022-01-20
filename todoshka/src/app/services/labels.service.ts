import { Injectable } from '@angular/core';
import {LabelInterface} from "../interfaces/label.interface";

@Injectable({
  providedIn: 'root'
})
export class LabelsService {
  public labels: LabelInterface[] = [
    {
      id: 1,
      title: 'КEХ',
      color: null
    },
    {
      id: 2,
      title: 'ДОМ',
      color: null
    },
    {
      id: 3,
      title: 'УЛИ',
      color: null
    },
  ]

  constructor() { }

  public delete(id: number): void {
    this.labels = this.labels.filter((label: LabelInterface) => {
      return label.id !== id
    })
  }

  public add(): void {
    const len = this.labels.length + 1
    this.labels.push({
      id: len,
      title: 'RND',
      color: null
    })
  }
}
