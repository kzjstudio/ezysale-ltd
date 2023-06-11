import { useAsyncError } from "react-router-dom";
import {
  signinWithGooglePopup,
  createUserDocument,
} from "../../../utils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signinWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>sign in with google pop up</button>
    </div>
  );
};

export default Signin;
