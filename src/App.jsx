import React from "react";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import Navigation from "./components/Navigation";
import { useUserContext } from "./context/User-context";
import SignIn from "./pages/Sign-in";
function App() {
  const { user } = useUserContext();

  return (
    <div>
      {user ? (
        <>
          <Navigation />
          <Feed />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default App;
