import { useUserContext } from "../context/User-context";
import SignUp from "./Sign-up";

const SignIn = () => {
  const { handleSignIn, handleSetRegister, setRegister, register } =
    useUserContext();

  return (
    <>
      {register ? (
        <SignUp />
      ) : (
        <div className="xl:w-full xl:flex xl:justify-center xl:items-center xl:gap-32 xl:h-screen xl:bg-gray-100">
  <div className="w-full lg:w-1/2 xl:w-1/5 h-96 flex flex-col justify-center ml-2">
    <img
      src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
      alt="Facebook"
      className="mx-auto"
    />
    <div>
      <p className="ml-12 mb-6 text-2xl text-black text-center">
        Connect with friends and the world around on Facebook.
      </p>
    </div>
  </div>
  <div className="bg-white p-8 rounded-lg shadow-md flex items-center w-full lg:w-1/2 xl:w-1/5 h-96">
    <div className="flex-1">
    <form
                onSubmit={handleSignIn}
                className="flex flex-col items-center"
              >
                <input
                  type="text"
                  name="emailOrPhone"
                  className="border border-gray-300 px-4 py-2 mb-4 rounded-md w-full"
                  placeholder="Email or Phone Number"
                />
                <input
                  type="password"
                  name="password"
                  className="border border-gray-300 px-4 py-2 mb-4 rounded-md w-full"
                  placeholder="Password"
                />
                <button
                  type="submit"
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
          onClick={() => handleSetRegister()}
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white px-4 py-4 rounded-md w-3/5 font-bold"
        >
          Create new account
        </button>
      </div>
    </div>
  </div>
</div>

      )}
    </>
  );
};

export default SignIn;
