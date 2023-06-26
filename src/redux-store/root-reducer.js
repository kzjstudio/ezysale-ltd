import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "../redux-store/user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";
import {homeCategoriesReducer} from "./home-categories/home-categories.reducer"

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  homeCategories: homeCategoriesReducer,
});
