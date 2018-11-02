import * as React from "react";
import { connect } from "react-redux";
// import { decrement, increment } from "./actions";

interface ICounterProps {
  onIncrementAsync: () => void;
  onDecrementAsync: () => void;
  value: number;
}

class Counter extends React.Component<ICounterProps> {
  constructor(props: ICounterProps) {
    super(props);

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  public handleIncrement() {
    this.props.onIncrementAsync();
  }
  public handleDecrement() {
    this.props.onDecrementAsync();
  }

  public render() {
    const { value } = this.props;
    return (
      <div>
        {/* <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "} */}
        <p>Buttons clicked: {value} times</p>
        <button onClick={this.handleIncrement}>
          Increment with short delay
        </button>{" "}
        <button onClick={this.handleDecrement}>
          Decrement with long delay
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(
  dispatch: any
): {
  onIncrementAsync: () => void;
  onDecrementAsync: () => void;
} {
  return {
    onIncrementAsync() {
      dispatch({ type: "INCREMENT", value: 1 });
    },
    onDecrementAsync() {
      dispatch({ type: "DECREMENT", value: -1 });
    }
  };
}

function mapStateToProps(state: { value: number }) {
  return {
    value: state.value
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
