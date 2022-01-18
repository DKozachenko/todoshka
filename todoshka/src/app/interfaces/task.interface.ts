export interface TaskInterface {
  id: number,
  title: string,
  description: string | null,
  listId: number | null,
  labelsId: number[] | null
}
