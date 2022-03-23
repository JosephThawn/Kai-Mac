import * as ActionTypes from "./ActionTypes";
import { DRINKS } from "../shared/drinks";

export const Drinks = (
  state = {
    isLoading: true,
    errMess: null,
    drinks: DRINKS,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DRINKS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        drinks: action.payload,
      };
    case ActionTypes.CAMPSITES_LOADING:
      return { ...state, isLoading: true, errMess: null, campsites: [] };
    case ActionTypes.CAMPSITES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
