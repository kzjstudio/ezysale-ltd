import "./category-route.styles.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";
import ProductCard from "../../product-card/product-card.component";
import { selectCategories } from "../../../redux-store/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategories);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  
  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>

      <div className="category-container">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </Fragment>
  );
};

export default Category;
