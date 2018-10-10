import React from "react";
import update from "react-addons-update";
import { Title } from "../../components";
import { FormTodo, TodoItem } from "../../layout/todo";
import { connectAutoDispatch } from "../../utils";
import { getListTodo, postTodo } from "../../redux/actions";
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodos: []
    };

    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    this.props.getListTodo();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      listTodos: nextProps.listTodos
    };
  }

  addItem(item) {
    // this.setState(currentState => {
    //   return update(currentState, {
    //     listTodos: { $push: [item] }
    //   });
    // }, () => {
    //   thi
    // });
    this.props.postTodo(item);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Title>Todo App</Title>
        <TodoItem items={this.state.listTodos} />
        <FormTodo addItem={this.addItem} />
      </div>
    );
  }
}

export default connectAutoDispatch(
  state => ({
    listTodos: state.TodoReducer.listTodos
  }),
  { getListTodo, postTodo }
)(TodoApp);
