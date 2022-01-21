import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {TaskInterface} from "../../interfaces/task.interface";

@Component({
  selector: 'app-archive-task',
  templateUrl: './archive-task.component.html',
  styleUrls: ['./archive-task.component.sass']
})
export class ArchiveTaskComponent implements OnInit {
  @Input() public task: TaskInterface = {
    id: 0,
    title: '',
    description: null,
    listId: null,
    labelId: null
  }

  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>()

  @ViewChild('taskRef') taskRef = new ElementRef('taskRef')

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  private processTaskStyle(): void {
    const el = this.taskRef.nativeElement
    this.renderer.setStyle(el, 'opacity', '.3')
    this.renderer.setAttribute(el, 'disabled', 'true')
  }

  public delete(id: number): void {
    this.processTaskStyle()
    this.onDelete.emit(this.task.id)
  }

}
