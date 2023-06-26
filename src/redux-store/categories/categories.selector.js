import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategoriesRed = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategories = createSelector(
  [selectCategoriesRed],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title?.toLowerCase()] = items;
      return acc;
    }, {})
);
