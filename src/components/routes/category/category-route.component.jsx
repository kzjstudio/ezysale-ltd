import "./category-route.styles.scss";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../../context/categories.context";
import ProductCard from "../../product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { CategoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(CategoriesMap[category]);

  useEffect(() => {
    setProducts(CategoriesMap[category]);
  }, [category, CategoriesMap]);
  return (
    <div className="category=container">
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </div>
  );
};

export default Category;
