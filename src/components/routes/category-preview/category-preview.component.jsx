import { useContext } from "react";

import { CategoriesContext } from "../../../context/categories.context";
import ProductCard from "../../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title?.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
