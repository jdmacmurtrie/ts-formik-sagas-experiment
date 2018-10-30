const initialState = {
  value: 0
};

export default function reducer(state: any = initialState, action: any) {
  console.log("reducer hit", action);

  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, { value: state.value + action.value });
    case "DECREMENT":
      return Object.assign({}, state, { value: state.value + action.value });
    default:
      return state;
  }
}
