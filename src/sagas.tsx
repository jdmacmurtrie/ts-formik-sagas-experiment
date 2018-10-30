import { put, takeLatest } from "redux-saga/effects";

function* increment() {
  console.log("incrementing saga");

  yield put({
    type: "INCREMENT",
    value: 1
  });
}

export function* watchIncrement() {
  yield takeLatest("INCREMENT", increment);
}

// export function* helloSaga() {
//   console.log('Hello Sagas!');
// }
