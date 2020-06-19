import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "./action-types/cart-actions";

//add cart action
export const addToCart = (postId) => {
  return {
    type: ADD_TO_CART,
    postId,
  };
};
//remove item action
export const removeItem = (postId) => {
  return {
    type: REMOVE_ITEM,
    postId,
  };
};
//subtract qt action
export const subtractQuantity = (postId) => {
  return {
    type: SUB_QUANTITY,
    postId,
  };
};
//add qt action
export const addQuantity = (postId) => {
  return {
    type: ADD_QUANTITY,
    postId,
  };
};
