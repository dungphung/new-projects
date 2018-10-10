import update from "react-addons-update";
import { SET_LIST_TODO, ADD_TODO, REMOVE_TODO } from "../actions/todoAction";

const initialState = {
  listTodos: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LIST_TODO:
      return setListTodo(state, action);
    case ADD_TODO:
      return addTodo(state, action);

    case REMOVE_TODO:
      return removeTodo(state, action);
    default:
      return state;
  }
}

export function setListTodo(state, { payload }) {
  return update(state, {
    listTodos: { $set: payload }
  });
}

export function addTodo(state, { payload }) {
  return update(state, {
    listTodos: { $push: [payload] }
  });
}

export function removeTodo(state, { payload }) {
  const index = state.listTodos.findIndex(todo => todo.id === payload);
  return update(state, {
    listTodos: { $splice: [[index, 1]] }
  });
}
