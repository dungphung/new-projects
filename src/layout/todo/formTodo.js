import React from "react";

export default class FormTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
      id: Date.now()
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.inputElement = null;
  }

  onChange(e) {
    this.setState({
      content: e.target.value,
      id: Date.now()
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (e.target.value === "") return;

    const item = { ...this.state };

    this.setState(
      {
        key: "",
        content: ""
      },
      () => {
        this.props.addItem(item);
      }
    );
  }

  componentDidMount() {
    this.inputElement.focus();
  }

  render() {
    return (
      <div className="todoListMain">
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="task"
            ref={ref => {
              this.inputElement = ref;
            }}
            value={this.state.content}
            onChange={this.onChange}
          />
          <button type="sbumit"> Add Task</button>
        </form>
      </div>
    );
  }
}
