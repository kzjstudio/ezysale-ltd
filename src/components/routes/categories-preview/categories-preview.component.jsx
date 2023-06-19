import { useContext } from "react";

import { CategoriesContext } from "../../../context/categories.context";
import ProductCard from "../../product-card/product-card.component";
import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div>
      {categoriesMap.map((item) => {
        return (
          <div key={item.title}>
            <h2 className="title">{item.title}</h2>
            <div className="product-page">
              {item.items.slice(0,4).map((product) => (
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
