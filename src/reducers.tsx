const initialState = {
  luckyNumber: 7,
  name: "",
  value: 0
};

export default function reducer(
  state: {
    value?: number;
    name?: string;
    luckyNumber?: number;
  } = initialState,
  action: {
    type: string;
    value?: number;
    name?: string;
    luckyNumber?: number;
  }
) {
  switch (action.type) {
    case "INCREMENT_ASYNC":
      return Object.assign({}, state, {
        value: state.value! + action.value!
      });
    case "DECREMENT_ASYNC":
      console.log("hitting reducer", action);
      return Object.assign({}, state, {
        value: state.value! + action.value!
      });
    case "SUBMIT_FORM":
      return Object.assign({}, state, {
        luckyNumber: action.luckyNumber,
        name: action.name
      });
    default:
      return state;
  }
}
