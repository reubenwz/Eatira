import {
  SET_POSTS,
  LIKE_POST,
  UNLIKE_POST,
  ORDER,
  UNORDER,
  LOADING_DATA,
  DELETE_POST,
  POST_POST,
  SET_POST,
  SUBMIT_COMMENT,
  POST_TEXT,
  EDIT_QUANTITY,
} from "../types";

const initialState = {
  posts: [],
  post: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case SET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case LIKE_POST:
    case UNLIKE_POST:
      let index = state.posts.findIndex(
        (post) => post.postId === action.payload.postId
      );
      state.posts[index] = action.payload;
      if (state.post.postId === action.payload.postId) {
        let temporary = state.post.comments;
        state.post = action.payload;
        state.post.comments = temporary;
      }
      return {
        ...state,
      };
    case ORDER:
    case UNORDER:
      let orderIndex = state.posts.findIndex(
        (post) => post.postId === action.payload.postId
      );
      state.posts[orderIndex] = action.payload;
      if (state.post.postId === action.payload.postId) {
        let temporary = state.post.comments;
        state.post = action.payload;
        state.post.comments = temporary;
      }
      return {
        ...state,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.postId !== action.payload),
      };
    case POST_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [action.payload, ...state.post.comments],
        },
      };
    //
    case POST_TEXT:
      let postIndex = state.posts.findIndex(
        (post) => post.postId === action.payload.postId
      );
      state.posts[postIndex] = action.payload;
      if (state.post.postId === action.payload.postId) {
        let temporary = state.post.text;
        state.post = action.payload;
        state.post.text = temporary;
      }
      return {
        ...state,
      };
    case EDIT_QUANTITY:
      let quantityIndex = state.posts.findIndex(
        (post) => post.postId === action.payload.postId
      );
      state.posts[quantityIndex] = action.payload;
      if (state.post.postId === action.payload.postId) {
        let temporary = state.post.text;
        state.post = action.payload;
        state.post.text = temporary;
      }
      return {
        ...state,
      };
    default:
      return state;
  }
}
