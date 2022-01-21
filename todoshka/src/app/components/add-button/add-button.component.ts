import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.sass']
})
export class AddButtonComponent implements OnInit {
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  public click(): void {
    this.onClick.emit()
  }

}
