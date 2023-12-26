import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({ user: undefined, toggleAuth: () => {} });

// Set item in localStorage
const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error({ e });
  }
};

// Get item from localStorage or initialize item
const getLocalStorage = (key, initialValue) => {
  console.log("test");
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    return initialValue;
  }
};

const initState = { loggedIn: false };

const AuthProvider = ({ children }) => {
  // 01. use "getLocalStorage" function for initialize user state with "initState" constant value
  const [user, setUser] = useState(() => {
    return getLocalStorage("user", initState);
  });

  console.log(user);

  useEffect(() => {
    // 02. set new state value in localStorage
    setLocalStorage("user", user);
  }, [user]);

  const toggleAuth = () => {
    setUser((prev) => ({
      ...prev,
      loggedIn: !prev.loggedIn,
    }));
  };

  const value = { toggleAuth, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("useAuth must be within AuthProvider!");

  return context;
};

export { AuthProvider, useAuth };
