import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducers from "../reducers/rootReducers";

export const initStore = (context) => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
  }

  return createStore(rootReducers, applyMiddleware(...middlewares));
};
