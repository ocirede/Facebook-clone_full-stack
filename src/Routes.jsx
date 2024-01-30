import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/homeLayout";
import MainLayout from "./layouts/mainLayout";
import App from "./App";
import Navigation from "./components/Navigation";
import UserProvider from "./context/User-context";
import SignIn from "./pages/Sign-in";
import PostProvider from "./context/Post-context";
export default function routes() {
  return (
    <>
      <BrowserRouter>
      <UserProvider>

        <PostProvider>
            <Routes>
              <Route element={<HomeLayout />}>
                <Route path="/home" element={<App />} />
              </Route>
              <Route element={<MainLayout />}>
                <Route path="/" element={<SignIn />} />
              </Route>
            </Routes>
        </PostProvider>
        </UserProvider>

      </BrowserRouter>
    </>
  );
}
