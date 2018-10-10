export const SET_LIST_TODO = "todo/set-list-todo";
export const ADD_TODO = "todo/add-todo";
export const REMOVE_TODO = "todo/remove-todo";

export function setListTodo(listTodo) {
  return {
    type: SET_LIST_TODO,
    payload: listTodo
  };
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id
  };
}
