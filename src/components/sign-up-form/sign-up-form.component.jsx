import React from "react";
import { Form } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div>
      <div>signUpForm</div>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <label>Confirm Password</label>
        <input type="password" required />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default SignUpForm;
