import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "" });

  return <AuthContext.Provider value={{user: user, setUser, setUser}} >{children}</AuthContext.Provider>;
};

export { AuthProvider };

export default AuthContext;
