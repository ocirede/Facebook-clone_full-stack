import React from "react";
import Feed from "./pages/Feed";
import { useUserContext } from "./context/User-context";
import SignIn from "./pages/Sign-in";
function App() {
  const { user } = useUserContext();
  return (
    <div>
      {user ? (
        <>
          <Feed />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
export default App;












