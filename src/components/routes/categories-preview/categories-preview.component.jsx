import { Fragment } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategories } from "../../../redux-store/categories/categories.selector";

import CategoryPreview from "../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);
 
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <div>
            <CategoryPreview key={title} title={title} products={products} />
          </div>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
