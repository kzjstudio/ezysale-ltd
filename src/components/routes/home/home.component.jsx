import Category from "../category-route/category-route.component";
import LandingPage from "./landing-page";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
    </Routes>
  );
};

export default Home;
