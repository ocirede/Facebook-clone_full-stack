import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";

import Navigation from "./components/Navigation";
import UserProvider from "./context/User-context";
import SignIn from "./pages/Sign-in";

export default function routes() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <UserProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}
