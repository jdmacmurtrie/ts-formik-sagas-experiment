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
  constructor(props: IProps) {
    super(props);

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  public handleIncrement() {
    this.props.onIncrement();
  }
  public handleDecrement() {
    this.props.onDecrement();
  }

  public render() {
    const { value } = this.props;
    return (
      <div>
        {/* <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "} */}
        <p>Buttons clicked: {value} times</p>
        <button onClick={this.handleIncrement}>Increment</button>{" "}
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

function mapDispatchToProps(
  dispatch: any
): {
  onIncrement: () => void;
  onDecrement: () => void;
} {
  return {
    onIncrement() {
      dispatch({ type: "INCREMENT", value: 1 });
    },
    onDecrement() {
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
