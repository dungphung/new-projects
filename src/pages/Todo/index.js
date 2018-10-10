import React from "react";
import { Title } from "../../components";
import { FormTodo, TodoItem } from "../../layout/todo";
import { connectAutoDispatch } from "../../utils";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodo: []
    };

    this.addItem = this.addItem.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      listTodo: nextProps.listTodo
    };
  }

  addItem(item) {
    this.setState(currentState => {
      const listTodo = [...currentState.listTodo];
      listTodo.push(item);
      return {
        listTodo
      };
    });
  }

  render() {
    return (
      <div>
        <Title>Todo App</Title>
        <TodoItem items={this.state.listTodo} />
        <FormTodo addItem={this.addItem} />
      </div>
    );
  }
}

export default connectAutoDispatch(
  state => ({
    listTodo: state.TodoReducer.listTodo
  }),
  {}
)(TodoApp);
