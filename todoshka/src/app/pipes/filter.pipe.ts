import { Pipe, PipeTransform } from '@angular/core';
import {TaskInterface} from "../interfaces/task.interface";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: TaskInterface[], query: string, key: string): TaskInterface[] {
    if (!query.trim()) {
      return tasks
    }

    return tasks.filter((task: TaskInterface) => {
      if (key === 'title') {
        return task.title.toLowerCase().includes(query.toLowerCase())
      } else if (key === 'labelId' && task.labelId) {
        return task.labelId.toLowerCase().includes(query.toLowerCase())
      } else if (key === 'listId' && task.listId) {
        return task.listId.toLowerCase().includes(query.toLowerCase())
      } else {
        return
      }

    })
  }

}
