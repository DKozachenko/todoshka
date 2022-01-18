import {Component, Input, OnInit} from '@angular/core';
import {TaskInterface} from "../../interfaces/task.interface";

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
    labelsId: null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
