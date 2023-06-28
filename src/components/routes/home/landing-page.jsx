import Directory from "../../directory/directory.component";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectHomeCategories } from "../../../redux-store/home-categories/home-categories.selector";

const LandingPage = () => {
 const categories = useSelector(selectHomeCategories)
  return <Directory categories={categories} />;
};

export default LandingPage;
