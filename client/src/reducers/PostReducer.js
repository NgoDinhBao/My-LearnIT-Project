import {
  ADD_POST,
  DELETE_POST,
  FIND_POST,
  POST_LOADED_FAIL,
  POST_LOADED_SUCCESS,
  UPDATE_POST,
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
      return { ...state, posts: [...state.posts, payload] };
    case DELETE_POST:
      //Delete post
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
      };
    case FIND_POST:
      //find post
      return {
        ...state,
        post: payload,
      };
    case UPDATE_POST:
      //Update post
      const newPosts = state.posts.map((post) =>
        post._id === payload._id ? payload : post
      );
      return {
        ...state,
        posts: newPosts,
      };

    default:
      return state;
  }
};
