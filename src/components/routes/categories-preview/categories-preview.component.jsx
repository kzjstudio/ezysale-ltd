import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../context/categories.context";
import "./categories.styles.scss";

import CategoryPreview from "../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

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
