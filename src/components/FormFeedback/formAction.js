export const ADD_REQUEST = "ADD_REQUEST";

export const addAC = (elem) => {
  return {
    type: ADD_REQUEST,
    payload: elem,
  }
}