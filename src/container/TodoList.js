import React from "react";
import Todo from "../component/Todo";
import { connect } from "react-redux";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos != null && todos.map(todo => <Todo key={todo.id} {...todo} />)}
    </ul>
  );
};

export default connect()(TodoList);
