import axios from "axios";
import React, { createContext, useReducer } from "react";
import { postReducer } from "../reducers/PostReducer";
import { apiUrl, POST_LOADED_FAIL, POST_LOADED_SUCCESS } from "./constants";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  //State
  const [postState, dispatch] = useReducer(postReducer, {
    posts: [],
    postLoading: true,
  });

  //Get all post
  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/posts`);
      //   console.log(response)
      if (response.data.success) {
        dispatch({ type: POST_LOADED_SUCCESS, payload: response.data.posts });
      }
    } catch (error) {
      dispatch({ type: POST_LOADED_FAIL });
    }
  };

  //Post context data
  const postContextData = { postState, getPosts };
  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
