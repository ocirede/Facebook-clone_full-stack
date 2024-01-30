import axios from "../config/axiosConfig.js";
import { baseURL } from "../config/api.js";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);
export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [register, setRegister] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token)
    const fetchUser = async () => {
      if (token) {
        try {
          const response = await axios.get(baseURL + "/users/loggeduser");
          setUser(response.data.user);
          console.log("fetchedUser =====>", response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchUser();
  }, []);

  const handleRegistration = async (e) => {
    e.preventDefault();
    const date = `${e.target.year.value}-${e.target.month.value}-${e.target.day.value}`;
    const body = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      emailOrPhone: e.target.emailorphone.value,
      password: e.target.password.value,
      birthday: date,
      gender: e.target.gender.value,
    };
    try {
      const newUser = await axios.post(baseURL + "/users/register", body);
      e.target.reset();
      window.location.replace("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const body = {
      emailOrPhone: e.target.emailOrPhone.value,
      password: e.target.password.value,
    };

    try {
      const { data: user } = await axios.post(baseURL + "/users/login", body);
      localStorage.setItem("token", user.token);
      console.log("set token", user)
      e.target.reset();
      window.location.replace("/");

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSetRegister = () => {
    setRegister(!register);
    console.log(register);
  };

  return (
    <UserContext.Provider
      value={{
        handleSignIn,
        handleRegistration,
        handleSetRegister,
        setRegister,
        register,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
