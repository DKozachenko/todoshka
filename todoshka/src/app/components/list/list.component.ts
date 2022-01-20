import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {ListInterface} from "../../interfaces/list.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public isListParameters: boolean = false

  @Input() public list: ListInterface = {
    id: 0,
    title: ''
  }

  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>()
  @Output() onEdit: EventEmitter<void> = new EventEmitter<void>()

  @ViewChild('listRef') listRef = new ElementRef('listRef')

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  private processTaskStyle(): void {
    const el = this.listRef.nativeElement
    this.renderer.setStyle(el, 'opacity', '.3')
    this.renderer.setAttribute(el, 'disabled', 'true')
  }

  public edit(): void {
    this.isListParameters = !this.isListParameters

    if (!this.isListParameters) {
      this.onEdit.emit()
    }
  }

  public delete(id: number): void {
    this.processTaskStyle()
    this.onDelete.emit(this.list.id)
  }

}
