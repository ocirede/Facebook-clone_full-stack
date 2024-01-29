import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from './layouts/homeLayout';
import MainLayout from "./layouts/mainLayout";
import App from "./App";
import Navigation from "./components/Navigation";
import UserProvider from "./context/User-context";
import SignIn from "./pages/Sign-in";
export default function routes() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route element={<HomeLayout />}>
            <Route path="/" element={<App />} />
            </Route>
            <Route path="/*" element={<MainLayout />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}
