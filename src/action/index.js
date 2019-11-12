let nextTodoId = 0;

export const addTodo = text => {
  return { type: "INCREMENT", id: nextTodoId++, text };
};
