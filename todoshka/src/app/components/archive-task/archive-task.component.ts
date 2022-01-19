import {Component, Input, OnInit} from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  public delete(id: number): void {

  }

}
