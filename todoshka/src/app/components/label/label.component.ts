import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {LabelInterface} from "../../interfaces/label.interface";

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.sass']
})
export class LabelComponent implements OnInit {
  public isLabelParameters: boolean = false
  public isLabelPreview: boolean = false
  public labelPreviewTitle: string = ''

  @Input() public label: LabelInterface = {
    id: 0,
    title: '',
    color: null
  }

  @Output() onEdit: EventEmitter<void> = new EventEmitter<void>()
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>()

  @ViewChild('labelRef') labelRef = new ElementRef('labelRef')
  @ViewChild('inputTitle') inputTitle = new ElementRef<any>('inputTitle')


  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  private processTaskStyle(): void {
    const el = this.labelRef.nativeElement
    console.log(typeof el)
    this.renderer.setStyle(el, 'opacity', '.3')
    this.renderer.setAttribute(el, 'disabled', 'true')
  }

  public setTitle(str: string): void {
    if (str.length > 3) {
      str = str.substring(0, 3)
    }
    str = str.toUpperCase()
    this.label.title = str

    this.isLabelPreview = true
  }

  public setPreviewTitle(str: string): void {
    if (str.length > 3) {
      str = str.substring(0, 3)
    }
    str = str.toUpperCase()

    this.labelPreviewTitle = str
    this.isLabelPreview = true
  }

  public edit(): void {
    this.isLabelParameters = !this.isLabelParameters

    if (!this.isLabelParameters) {
      const title: string = this.inputTitle.nativeElement.value
      this.setTitle(title)

      this.onEdit.emit()
    }
  }

  public delete(id: number): void {
    this.processTaskStyle()
    this.onDelete.emit(this.label.id)
  }

}
