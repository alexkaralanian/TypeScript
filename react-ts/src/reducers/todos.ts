import { Action, ToDo, ActionTypes } from '../actions';

export const todosReducer = (state: ToDo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_TODOS:
      return action.payload;
    case ActionTypes.DELETE_TODO:
      return state.filter((todo: ToDo) => todo.id !== action.payload);
    default:
      return state;
  }
};
