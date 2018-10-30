import * as React from "react";
import { connect } from "react-redux";
// import { decrement, increment } from "./actions";

interface IProps {
  onIncrement: () => void;
  // onIncrementAsync: () => void;
  onDecrement: () => void;
  value: number;
}

class Counter extends React.Component<IProps> {
  public render() {
    console.log("rendering counter");

    const { value } = this.props;
    return (
      <div>
        {/* <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "} */}
        <button onClick={this.handleIncrement}>Increment</button>{" "}
        <button onClick={this.handleDecrement}>Decrement</button>
        <hr />
        <div>Clicked: {value} times</div>
      </div>
    );
  }

  private handleIncrement() {
    this.props.onIncrement();
  }
  private handleDecrement() {
    this.props.onDecrement();
  }

  function mapDispatchToProps(
    dispatch: any
    ): {
      onIncrement: () => void;
      onDecrement: () => void;
    } {
      console.log("dispatch?");

      return {
        onIncrement() {
          dispatch({ type: "INCREMENT" });
        },
        onDecrement() {
          dispatch({ type: "DECREMENT" });
        }
      };
    }

    function mapStateToProps(state: any) {
      console.log("state?", state);

      return {
        value: state.value
      };
    }
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
