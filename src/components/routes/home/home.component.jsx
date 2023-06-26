import LandingPage from "./landing-page";
import { Routes, Route } from "react-router-dom";
import Category from "../category-route/category-route.component";
import { useDispatch } from "react-redux";
import { setCategories } from "../../../redux-store/home-categories/home-categories.reducer";
import { useEffect } from "react";
import { getHomeScreencategories } from "../../../utils/firebase/firebase.utils";


const Home = () => {
 const dispatch = useDispatch();


  useEffect(() => {
    const getHomeCategories = async () =>{
      const homeCategories = await getHomeScreencategories();
    dispatch(setCategories(homeCategories));
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
