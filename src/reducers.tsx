const initialState = {
  value: 0
};

export default function reducer(
  state: { value: number } = initialState,
  action: { type: string; value: number }
) {
  switch (action.type) {
    case "INCREMENT_ONE":
      return Object.assign({}, state, { value: state.value + action.value });
    case "DECREMENT":
      return Object.assign({}, state, { value: state.value + action.value });
    default:
      return state;
  }
}
