import { FETCH_ACTIVE_CHATS } from "../actions/chat";

var initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVE_CHATS:
      return { ...state, activeChats: action.payload };
    default:
      return state;
  }
};
