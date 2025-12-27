import { createSlice } from "@reduxjs/toolkit";
import type { Post } from "../types/post";
import { apiSlice } from "./apiSlice";

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        state.posts = action.payload;
      }
    );
  },
});

export default postSlice.reducer;
