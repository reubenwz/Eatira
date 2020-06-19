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
  SET_CARTITEM,
} from "../types";

import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from "../../components/actions/action-types/cart-actions";

const initialState = {
  posts: [],
  cartitem: [],
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
    case SET_CARTITEM:
      return {
        ...state,
        cartitem: action.payload,
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
    case ADD_TO_CART:
      let addedItem = state.items.find(
        (item) => item.payload.postId === action.payload.postId
      );
      //check if the action id exists in the addedItems
      let existed_item = state.addedItems.find(
        (item) => action.payload.postId === item.payload.postId
      );
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }
    case REMOVE_ITEM:
      let itemToRemove = state.addedItems.find(
        (item) => action.payload.postId === item.payload.postId
      );
      let new_items = state.addedItems.filter(
        (item) => action.payload.postId !== item.payload.postId
      );

      //calculating the total
      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      console.log(itemToRemove);
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    case ADD_QUANTITY:
      addedItem.quantity += 1;
      return {
        ...state,
        total: newTotal,
      };
      case SUB_QUANTITY:
        if(addedItem.quantity === 1){
          let new_items = state.addedItems.filter(item=>item.payload.postId !== action.payload.postId)
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              addedItems: new_items,
              total: newTotal
          }
      }
      else {
          addedItem.quantity -= 1
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              total: newTotal
          }
      };
    default:
      return state;
  }
}
