import React from 'react';
import { connect } from 'react-redux';
import { ToDo, fetchToDos, deleteToDo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: ToDo[];
  fetchToDos(): any;
  deleteToDo(): any;
}

export class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchToDos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteToDo();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: ToDo) => {
      return (
        // <li key={todo.id}>
        <li onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>FETCH</button>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: ToDo[] } => ({
  todos: state.todos,
});

export const App = connect(mapStateToProps, { fetchToDos, deleteToDo })(_App);
