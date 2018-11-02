import { put, takeLatest } from "redux-saga/effects";

function* increment() {
  yield put({
    type: "INCREMENT_ONE", // must have different action name from original action
    value: 1
  });
}

export function* watchIncrement() {
  yield takeLatest("INCREMENT", increment);
}

function* decrement() {
  yield put({
    type: "DECREMENT_ONE", // must have different action name from original action
    value: -1
  });
}

export function* watchDecrement() {
  yield takeLatest("INCREMENT", decrement);
}
