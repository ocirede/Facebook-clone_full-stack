import { Link } from "react-router-dom";
import { useUserContext } from "../context/User-context";
import SignUp from "./Sign-up";

const SignIn = () => {
  const { handleSignIn } = useUserContext();

  return (
    <div className="flex justify-center items-center gap-32 h-screen bg-gray-100">
      <div className=" w-1/5 h-96 ">
        <div className="flex-1 flex flex-col justify-center ml-2 ">
          <img
            className=""
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            alt="Facebook"
          />
          <div>
            <p className=" ml-12  mb-6 text-2xl text-black">
              Connect with friends and the world around on Facebook.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md flex items-center w-1/5 h-96">
        <div className="flex-1">
          <form className="flex flex-col items-center">
            <input
              type="text"
              className="border border-gray-300 px-4 py-2 mb-4 rounded-md w-full"
              placeholder="Email or Phone Number"
            />
            <input
              type="password"
              className="border border-gray-300 px-4 py-2 mb-4 rounded-md w-full"
              placeholder="Password"
            />
            <button
              onClick={handleSignIn}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
            >
              Log In
            </button>
            <div className="mt-4 text-gray-600 text-sm flex justify-center">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>
          <br />
          <hr />
          <br />
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md w-1/2"
            >
              Create new account
            </button>
          </div>
        </div>
      </div>
      <div>
        <SignUp />
      </div>
    </div>
  );
};

export default SignIn;
