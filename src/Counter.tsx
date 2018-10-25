import * as React from "react";

interface IProps {
  onIncrement: () => void;
  onIncrementAsync: () => void;
  onDecrement: () => void;
  value: number;
}

class Counter extends React.Component<IProps> {
  public render() {
    const { onIncrement, onIncrementAsync, onDecrement, value } = this.props;
    return (
      <div>
        <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
        <button onClick={onIncrement}>Increment</button>{" "}
        <button onClick={onDecrement}>Decrement</button>
        <hr />
        <div>Clicked: {value} times</div>
      </div>
    );
  }
}

export default Counter;
