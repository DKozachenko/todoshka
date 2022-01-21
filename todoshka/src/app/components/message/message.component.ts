import {AfterViewChecked, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MESSAGE_ANIMATION} from "../../animations/message.animation";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass'],
  animations: MESSAGE_ANIMATION
})
export class MessageComponent implements OnInit, AfterViewChecked {
  @Input() messageText: string = ''
  @Input() messageClass: string = ''

  @ViewChild('messageRef') messageRef = new ElementRef('messageRef')

  constructor(private renderer: Renderer2) { }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    const el = this.messageRef.nativeElement
    this.renderer.addClass(el, this.messageClass)
  }

}
