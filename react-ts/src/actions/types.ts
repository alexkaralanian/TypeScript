import { SetToDos, DeleteToDo } from './todos';
export type Action = SetToDos | DeleteToDo;

export enum ActionTypes {
  SET_TODOS,
  DELETE_TODO,
}
