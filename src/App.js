import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import routes from "./routes";

class App extends Component {
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
            <li>
              <Link to="/weather-page">Weather Page</Link>
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

export default App;
