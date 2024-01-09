import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // const response = await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    // const response = await signInWithGooglePopup();
    console.log({ user });
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={logGoogleRedirectUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
