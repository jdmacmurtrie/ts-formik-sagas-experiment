import * as React from "react";
import { connect } from "react-redux";

import "../App.css";
import logo from "../logo.svg";
import Counter from "./Counter";
import Description from "./Description";
import Form from "./Form";
import Header from "./Header";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Stateless Component</h2>
          <Header name="REACT" />
        </header>
        <h2>Stateful Non-Redux Component</h2>
        <Description countBy={3} />
        <hr />
        <h2>Stateful Redux Component</h2>
        <Counter />
        <hr />
        <Form />
      </div>
    );
  }
}

function mapStateToProps(state: { name: string; luckyNumber: number }) {
  return {
    luckyNumber: state.luckyNumber,
    name: state.name
  };
}

export default connect(
  mapStateToProps,
  null
)(App);
