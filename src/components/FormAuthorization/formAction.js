export const ADD_REQUEST = "ADD_REQUEST";

export const formAction = (elem) => {
  return {
    type: ADD_REQUEST,
    payload: elem,
  }
}