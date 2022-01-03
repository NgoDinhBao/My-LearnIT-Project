import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { postReducer } from "../reducers/PostReducer";
import {
  ADD_POST,
  apiUrl,
  DELETE_POST,
  FIND_POST,
  POST_LOADED_FAIL,
  POST_LOADED_SUCCESS,
  UPDATE_POST,
} from "./constants";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  //State
  const [postState, dispatch] = useReducer(postReducer, {
    post: null,
    posts: [],
    postLoading: true,
  });

  const [showAddPostModal, setShowAddPostModal] = useState(false);
  const [showUpdatePostModal, setShowUpdatePostModal] = useState(false);
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: null,
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

  //All Post
  const addPost = async (newPost) => {
    try {
      const response = await axios.post(`${apiUrl}/posts`, newPost);
      if (response.data.success) {
        dispatch({ type: ADD_POST, payload: response.data.post });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: error.message };
    }
  };

  //Delete post
  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(`${apiUrl}/posts/${postId}`);
      if (response.data.success) {
        dispatch({ type: DELETE_POST, payload: postId });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: error.message };
    }
  };

  //Find post when user is updating post
  const findPost = (postId) => {
    const post = postState.posts.find((post) => post._id === postId);
    dispatch({ type: FIND_POST, payload: post });
  };

  //Update post
  const updatePost = async (updatedPost) => {
    try {
      console.log(updatedPost)
      const response = await axios.put(
        `${apiUrl}/posts/${updatedPost._id}`,
        updatedPost
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_POST, payload: response.data.post });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: error.message };
    }
  };

  //Post context data
  const postContextData = {
    postState,
    getPosts,
    showAddPostModal,
    setShowAddPostModal,
    addPost,
    showToast,
    setShowToast,
    deletePost,
    updatePost,
    findPost,
    showUpdatePostModal,
    setShowUpdatePostModal,
  };
  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
