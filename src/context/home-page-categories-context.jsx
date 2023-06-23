import { createContext, useEffect, useState } from "react";
import { getHomeScreencategories } from "../utils/firebase/firebase.utils";


export const HomeScreenCategoriesContext = createContext ({
    categoriescont : []
});


export const HomeScreenCategoriesProvider = ({ children }) =>{
const [categoriescont, setCategoriesCont] = useState([]);

useEffect(() => {
  const getCategories =  async()=>{
    const gainedCategories = getHomeScreencategories();
    setCategoriesCont(gainedCategories);
  }
getCategories()
},[])

const value = {categoriescont};
return <HomeScreenCategoriesContext.Provider value={value}>
    {children}
</HomeScreenCategoriesContext.Provider>
};