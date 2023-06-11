import { useState } from "react";
import "./sign-up-form.style.scss";
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";

import FormInPut from "../form-input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassowrd: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("user creation encounted an error", error);
      }
    }
  };

  const handleChnge = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInPut
          lable="Display Name"
          type="text"
          required
          onChange={handleChnge}
          name="displayName"
          value={displayName}
        />

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

        <FormInPut
          lable="Confirm Password"
          type="password"
          required
          onChange={handleChnge}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit"> Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
