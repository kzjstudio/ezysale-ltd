import { createSelector } from "reselect";

const selectHomeCategoryReducer = (state) => state.homeCategories;

export const selectHomeCategories = createSelector(
    [selectHomeCategoryReducer],
    (homeCategoriesSlice) => homeCategoriesSlice.homeCategories
  );

  // export const selectHomeCategoriesMap = createSelector(
  //   [selectHomeCategories],
  //   (categories) =>
  //     categories.reduce((acc, category) => {
  //       const { title, items } = category;
  //       acc[title?.toLowerCase()] = items;
  //       return acc;
  //     }, {})
  // );