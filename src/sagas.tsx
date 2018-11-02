import { delay } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";

function* incrementAsync() {
  yield delay(1000);
  yield put({
    type: "INCREMENT_ASYNC", // must have different action name from original action
    value: 1
  });
}

export function* watchIncrement() {
  yield takeLatest("INCREMENT", incrementAsync);
}

function* decrementAsync() {
  yield delay(1000);
  yield put({
    type: "DECREMENT_ASYNC", // must have different action name from original action
    value: -1
  });
}

export function* watchDecrement() {
  yield takeLatest("DECREMENT", decrementAsync);
}

// function* decrementAsync() {
//   yield delay(4000);
//   yield put({
//     type: "DECREMENT_ASYNC", // must have different action name from original action
//     value: -1
//   });
// }

// export function* watchDecrement() {
//   console.log("hitting saga?");
//   yield takeLatest("DECREMENT", decrementAsync);
// }
