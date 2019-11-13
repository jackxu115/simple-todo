import React from "react";
import { addTodo } from "../action";
import { connect } from "react-redux";

const AddTodo = ({ dispatch }) => {
  let input;
  let onClick = e => {
    if (input.value.trim() !== "") {
      dispatch(addTodo(input.value.trim()));
    }
  };
  return (
    <div>
      <input type="text" ref={node => (input = node)} />
      <button type="submit" onClick={onClick}>
        Add Todo
      </button>
    </div>
  );
};

export default connect()(AddTodo);
