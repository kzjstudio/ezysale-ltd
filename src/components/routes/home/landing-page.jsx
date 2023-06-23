import Directory from "../../directory/directory.component";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.utils";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [cat, setCat] = useState([]);

  const getcategories = async () => {
    await getDocs(collection(db, "home page categories")).then(
      (querySnapshot) => {
        const accuriedData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCat(accuriedData);
      }
    );
  };

  useEffect(() => {
    getcategories();
  }, []);

  return <Directory categories={cat} />;
};

export default LandingPage;
