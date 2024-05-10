import { SET_USER, CLEAR_SESSION } from "../Types";

export const initialState = {
  isLoggedIn: false,
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case CLEAR_SESSION:
      return initialState;
    default:
      return state;
  }
}
