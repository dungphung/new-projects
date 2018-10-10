import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { setListTodo } from "./redux/actions";
import { connectAutoDispatch } from "./utils";

import constants from "./utils/constants";
import routes from "./routes";

class App extends Component {
  async componentDidMount() {
    let todoList = [];
    if (window && window.localStorage.getItem(constants.TODO_KEY)) {
      todoList = await window.localStorage.getItem(constants.TODO_KEY);
      this.props.setListTodo(todoList);
    }
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/simple-page">Simple Page</Link>
            </li>
            <li>
              <Link to="/todo-page">Todo Page</Link>
            </li>
          </ul>

          {routes.map((route, i) => (
            <Route
              path={route.path}
              render={props => {
                return <route.component {...props} routes={route.routes} />;
              }}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default connectAutoDispatch(null, { setListTodo })(App);
