import React from 'react';
import Todo from '../component/Todo';
import { connect } from 'react-redux';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos != null && todos.map(todo => <Todo key={todo.id} {...todo} />)}
    </ul>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
