import axios from "axios";
import { baseURL } from "../config/api.js";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);
export const useUserContext = () => useContext(UserContext);


const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleRegistration = async (e) => {
    e.preventDefault();
    const body = {
        name: e.target.name.value,
        surname: e.target.surname.value,
        password: e.target.password.value,
        day: e.target.day.value,
        month: e.target.month.value,
        year: e.target.year.value
    }
    try {

        const newUser = await axios.post(baseURL + "/register", body);
        console.log(newUser);
        e.target.reset();

        
    } catch (err) {
        console.log(err);
      }
  }

  const handleSignIn = () => {};


  return (
    <UserContext.Provider value={{ handleSignIn, handleRegistration }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
