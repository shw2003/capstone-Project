import { useState, createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "../utils/firebase.utils";

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// step 2
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

// step 3
const userReducer = (state, action) => {
  console.log("dispatched");
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error("Unhandled type ${type} in userReducer");
  }
};

// step 1
const INTIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);

  // step 4
  const [{ currentUser }, dispatch] = useReducer(userReducer, INTIAL_STATE);

  // step 5
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
