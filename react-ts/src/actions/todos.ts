import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface SetToDos {
  type: ActionTypes.SET_TODOS;
  payload: ToDo[];
}
export const setToDos = (todos: ToDo[]): SetToDos => ({
  type: ActionTypes.SET_TODOS,
  payload: todos,
});

export interface DeleteToDo {
  type: ActionTypes.DELETE_TODO;
  payload: number;
}
export const deleteToDo = (id: number): DeleteToDo => ({
  type: ActionTypes.DELETE_TODO,
  payload: id,
});

export const fetchToDos = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get<ToDo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
    dispatch<SetToDos>(setToDos(res.data));
  } catch (err) {
    console.error(err);
  }
};
