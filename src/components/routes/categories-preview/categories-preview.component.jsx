import { useContext } from "react";

import { CategoriesContext } from "../../../context/categories.context";
import ProductCard from "../../product-card/product-card.component";
import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div>
      {categoriesMap.map((item) => {
        const { items } = item;
        return (
          <div key={item.id}>
            <h2 className="title">{item.id.toUpperCase()}</h2>
            <div className="product-page">
              {items.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
