import { createSlice } from "@reduxjs/toolkit";

export const HOME_CATEGORIES_INITIAL_STATE = {
    categories: [],
  };


  const homeCategoriesSlice = createSlice({
    name: "categories",
    initialState: HOME_CATEGORIES_INITIAL_STATE,
    reducers: {
      setCategories(state, action) {
        state.homeCategories = action.payload;
      },
    },
  });


  export const {setCategories}  = homeCategoriesSlice.actions;
   export const homeCategoriesReducer = homeCategoriesSlice.reducer;