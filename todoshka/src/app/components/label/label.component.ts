import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {TaskInterface} from "../../interfaces/task.interface";
import {ListInterface} from "../../interfaces/list.interface";
import {LabelInterface} from "../../interfaces/label.interface";

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.sass']
})
export class LabelComponent implements OnInit {
  public isLabelParameters: boolean = false

  @Input() public label: LabelInterface = {
    id: 0,
    title: '',
    color: null
  }

  @Output() onEdit: EventEmitter<void> = new EventEmitter<void>()
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>()

  @ViewChild('labelRef') labelRef = new ElementRef('labelRef')

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  private processTaskStyle(): void {
    const el = this.labelRef.nativeElement
    this.renderer.setStyle(el, 'opacity', '.3')
    this.renderer.setAttribute(el, 'disabled', 'true')
  }

  public edit(): void {
    this.isLabelParameters = !this.isLabelParameters

    if (!this.isLabelParameters) {
      this.onEdit.emit()
    }
  }

  public delete(id: number): void {
    this.processTaskStyle()
    this.onDelete.emit(this.label.id)
  }

}
