import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {TaskInterface} from "../../interfaces/task.interface";
import {ListInterface} from "../../interfaces/list.interface";
import {LabelInterface} from "../../interfaces/label.interface";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit{
  public isTaskParameters: boolean = false

  @Input() public task: TaskInterface = {
    id: 0,
    title: '',
    description: null,
    listId: null,
    labelId: null
  }

  @Input() lists: ListInterface[] = []
  @Input() labels: LabelInterface[] = []

  @Output() onDone: EventEmitter<number> = new EventEmitter<number>()
  @Output() onEdit: EventEmitter<void> = new EventEmitter<void>()
  @Output() onArchive: EventEmitter<number> = new EventEmitter<number>()

  @ViewChild('taskRef') taskRef = new ElementRef('taskRef')
  @ViewChild('inputTitle') inputTitle = new ElementRef<any>('inputTitle')

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  private processTaskStyle(): void {
    const el = this.taskRef.nativeElement
    this.renderer.setStyle(el, 'opacity', '.3')
    this.renderer.setAttribute(el, 'disabled', 'true')
  }

  public done(): void {
    this.processTaskStyle()
    this.onDone.emit(this.task.id)
  }

  public edit(): void {
    this.isTaskParameters = !this.isTaskParameters

    if (!this.isTaskParameters) {
      const title: string = this.inputTitle.nativeElement.value
      this.task.title = title

      this.onEdit.emit()
    }
  }

  public archive(): void {
    this.processTaskStyle()
    this.onArchive.emit(this.task.id)
  }
}
