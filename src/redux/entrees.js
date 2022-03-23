import * as ActionTypes from "./ActionTypes";
import { ENTREES } from "../shared/entrees";

export const Entrees = (
  state = {
    isLoading: true,
    errMess: null,
    entrees: ENTREES,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_ENTREES:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        entrees: action.payload,
      };
    case ActionTypes.CAMPSITES_LOADING:
      return { ...state, isLoading: true, errMess: null, campsites: [] };
    case ActionTypes.CAMPSITES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
