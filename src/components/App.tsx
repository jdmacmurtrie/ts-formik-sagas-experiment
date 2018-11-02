import * as React from "react";
import "../App.css";
import logo from "../logo.svg";
import Counter from "./Counter";
import Description from "./Description";
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
      </div>
    );
  }
}

export default App;
