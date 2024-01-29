import axios from "axios";
import {baseURL} from "../config/api.js";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({children}) => {
const [user, setUser] = useState(null)

};


return(
    <UserContext.Provider value={}>
        {children}
    </UserContext.Provider>
)
