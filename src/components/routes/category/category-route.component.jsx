import "./category-route.styles.scss";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../../context/categories.context";
import ProductCard from "../../product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const categoryNeeded =[]
    categoriesMap.map((items) =>{
    categoryNeeded.push(items);
    setProducts(categoryNeeded);
    })
   

  }, [category, categoriesMap]);

  return (
    <div className="category=container">
      {products &&
        products.map((product) => {

        console.log(product);
          return <ProductCard key={product.id} product={product} />;
        })}
        <h1>on page</h1>
    </div>
  );
};

export default Category;
