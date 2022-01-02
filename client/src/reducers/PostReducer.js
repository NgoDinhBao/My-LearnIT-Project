import {
  ADD_POST,
  POST_LOADED_FAIL,
  POST_LOADED_SUCCESS,
} from "../contexts/constants";

export const postReducer = (state, action) => {
  const { type, payload } = action;
  // console.log(state)
  // console.log(action)
  switch (type) {
    case POST_LOADED_SUCCESS:
      //Load post tu server
      return { ...state, posts: payload, postLoading: false };
    case POST_LOADED_FAIL:
      //Ko co post nao
      return { ...state, posts: [], postLoading: false };
    case ADD_POST:
      //Posts cu va nhan post moi vao
      return { ...state, posts: [...state.posts, payload], postLoading: false };

    default:
      return state;
  }
};
