import * as React from "react";
import * as ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { helloSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  // reducer,
  applyMiddleware(sagaMiddleware)
);
applyMiddleware(sagaMiddleware);
sagaMiddleware.run(helloSaga);

const action = type => store.dispatch({ type });

ReactDOM.render(<App store={store} action={action} />, document.getElementById(
  "root"
) as HTMLElement);
registerServiceWorker();
