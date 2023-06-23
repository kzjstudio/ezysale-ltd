import { useState } from "react";

import "./sign-in-form.style.scss";
import Button from "../button/button.component";

import {
  signinWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInPut from "../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signinWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("Either email or password is incorrect");
      }
      if (error.code === "auth/wrong-password") {
        alert("Incorrect password for email");
      }
      console.log(error);
    }
  };

  const handleChnge = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInPut
          lable="Email"
          type="email"
          required
          onChange={handleChnge}
          name="email"
          value={email}
        />

        <FormInPut
          lable="Password"
          type="password"
          required
          onChange={handleChnge}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit"> Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
