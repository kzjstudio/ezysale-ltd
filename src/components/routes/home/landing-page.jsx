import Directory from "../../directory/directory.component";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.utils";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectHomeCategories } from "../../../redux-store/home-categories/home-categories.selector";

const LandingPage = () => {
 const categories = useSelector(selectHomeCategories)
  console.log(categories);
  return <Directory categories={categories} />;
};

export default LandingPage;
