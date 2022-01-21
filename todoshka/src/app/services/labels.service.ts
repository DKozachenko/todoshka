import { Injectable } from '@angular/core';
import {LabelInterface} from "../interfaces/label.interface";

@Injectable({
  providedIn: 'root'
})
export class LabelsService {
  public labels: LabelInterface[] = JSON.parse(localStorage.getItem('labels') ?? '[]')

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
      title: 'ХХХ',
      color: null
    })
  }
}
