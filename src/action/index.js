let nextTodoId = 0;

export const addTodo = content => ({
  type: "ADD_TODO",
  id: ++nextTodoId,
  content
});
