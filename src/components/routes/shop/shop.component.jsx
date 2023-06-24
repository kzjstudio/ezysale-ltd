import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import { setCategories } from "../../../redux-store/categories/categories.action";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category-route/category-route.component";

const Shop = () => {
const dispatch = useDispatch();


  useEffect(() => {
    const getCategories = async () => {
      const categoriesArray= await getCategoriesAndDocuments();
    dispatch(setCategories(categoriesArray));
      
    };
    getCategories();
    
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
