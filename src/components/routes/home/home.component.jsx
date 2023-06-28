import LandingPage from "./landing-page";
import { Routes, Route } from "react-router-dom";
import Category from "../category-route/category-route.component";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../redux-store/categories/categories.reducer";
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { selectCategories } from "../../../redux-store/categories/categories.selector";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";


const Home = () => {
   const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const getHomeCategories = async () =>{
        const categories = await getCategoriesAndDocuments();
      dispatch(setCategories(categories));
      setProducts([...categories]);
      }
    getHomeCategories();
    },[])

  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path=":category" element={<Category/>}></Route>
    </Routes>
  );
};

export default Home;
