import { createStore, combineReducers, applyMiddleware } from "redux";
import { Campsites } from "./campsites";
import { Comments } from "./comments";
import { Partners } from "./partners";
import { Promotions } from "./promotions";
import { Drinks } from "./drinks";
import { Entrees } from "./entrees";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      campsites: Campsites,
      comments: Comments,
      partners: Partners,
      promotions: Promotions,
      drinks: Drinks,
      entrees: Entrees,
      ...createForms({
        feedbackForm: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk, logger)
  );
  //I know what is thunk, but what is the usage of logger here.

  return store;
};
