import React from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
import { useUserContext } from "./context/User-context";
import SignIn from "./pages/Sign-in";
import PostForm from "./components/PostForm";
function App() {
  const { user } = useUserContext();
  return (
    <div>
      {user ? (
        <>
        <PostForm/>
          <Feed />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
export default App;












