import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {TaskInterface} from "../../interfaces/task.interface";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  @Input() public task: TaskInterface = {
    id: 0,
    title: '',
    description: null,
    listId: null,
    labelId: null
  }

  public isTaskParameters: boolean = false


  @Output() onDone: EventEmitter<number> = new EventEmitter<number>()
  @Output() onEdit: EventEmitter<void> = new EventEmitter<void>()
  @Output() onArchive: EventEmitter<number> = new EventEmitter<number>()

  @ViewChild('taskRef') taskRef = new ElementRef('taskRef')

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  public done(): void {
    const el = this.taskRef.nativeElement
    this.renderer.setStyle(el, 'opacity', '.3')
    this.renderer.setAttribute(el, 'disabled', 'true')
    this.onDone.emit(this.task.id)
  }

  public edit(): void {
    this.isTaskParameters = !this.isTaskParameters
    if (!this.isTaskParameters) {
      this.onEdit.emit()
    }

  }

  public archive(): void {
    this.onArchive.emit(this.task.id)
  }
}
