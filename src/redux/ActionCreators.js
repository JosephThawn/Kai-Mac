import * as ActionTypes from "./ActionTypes";
import { CAMPSITES } from "../shared/campsites";
// import { DRINKS } from "./shared/drinks";

// export const addComment = (campsiteId, rating, author, text) => ({
//   type: ActionTypes.ADD_COMMENT,
//   payload: {
//     campsiteId: campsiteId,
//     rating: rating,
//     author: author,
//     text: text,
//   },
// });
//redux thunk
export const fetchCampsites = () => (dispatch) => {
  dispatch({ type: ActionTypes.CAMPSITES_LOADING });

  setTimeout(() => {
    dispatch(addCampsites(CAMPSITES));
  }, 2000);
};

// export const campsitesLoading = () => ({
//     type: ActionTypes.CAMPSITES_LOADING
// });

export const campsitesFailed = (errMess) => ({
  type: ActionTypes.CAMPSITES_FAILED,
  payload: errMess,
});

export const addCampsites = (campsites) => ({
  type: ActionTypes.ADD_CAMPSITES,
  payload: campsites,
});

export const addDrinks = (drinks) => ({
  type: ActionTypes.ADD_DRINKS,
  payload: drinks,
});
export const addEntrees = (entrees) => ({
  type: ActionTypes.ADD_ENTREES,
  payload: entrees,
});
