import { useUserContext } from "../context/User-context";

const SignUp = () => {
  const { handleRegistration } = useUserContext();
  return (
    <form
      onSubmit={handleRegistration}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4 flex">
        <div className="mr-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            name="firstname"
            placeholder="First Name"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Surname{" "}
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="emailOrPhone"
        >
          Email or Phone Number
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="emailOrPhone"
          type="text"
          name="emailorphone"
          placeholder="Email or Phone Number"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          New Password
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"

          placeholder="New Password"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="birthday"
        >
          Birthday
        </label>
        <div className="flex">
          <select
            className="appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            id="day"
            name="day"
          >
            <option>Day</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option> <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option> <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>{" "}
          </select>
          <select
            className="appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            id="month"
            name="month"
          >
            <option>Month</option>
            <option value="1">1</option> <option value="2">2</option>{" "}
            <option value="3">3</option> <option value="4">4</option>{" "}
            <option value="5">5</option> <option value="6">6</option>{" "}
            <option value="7">7</option> <option value="8">8</option>{" "}
            <option value="9">9</option> <option value="10">10</option>{" "}
            <option value="11">11</option> <option value="12">12</option>{" "}
          </select>
          <select
            className="appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="year"
            name="year"
          >
            <option>Year</option>
            <option value="2006">2006</option>{" "}
            <option value="2005">2005</option>{" "}
            <option value="2004">2004</option>{" "}
            <option value="2003">2003</option>{" "}
            <option value="2002">2002</option>{" "}
            <option value="2001">2001</option>{" "}
            <option value="2000">2000</option>{" "}
            <option value="1999">1999</option>{" "}
            <option value="1998">1998</option>{" "}
            <option value="1997">1997</option>{" "}
            <option value="1996">1996</option>{" "}
            <option value="1995">1995</option>{" "}
            <option value="1994">1994</option>{" "}
            <option value="1993">1993</option>{" "}
            <option value="1992">1992</option>{" "}
            <option value="1991">1991</option>{" "}
            <option value="1990">1990</option>{" "}
            <option value="1989">1989</option>{" "}
            <option value="1988">1988</option>{" "}
            <option value="1987">1987</option>{" "}
            <option value="1986">1986</option>{" "}
            <option value="1985">1985</option>{" "}
            <option value="1984">1984</option>{" "}
            <option value="1983">1983</option>{" "}
            <option value="1982">1982</option>{" "}
            <option value="1981">1981</option>{" "}
            <option value="1980">1980</option>{" "}
            <option value="1979">1979</option>{" "}
            <option value="1978">1978</option>{" "}

          </select>
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="gender"
        >
          Gender
        </label>
        <div className="flex">
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              className="form-radio"
              name="gender"
              value="male"
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="gender"
              value="female"
            />
            <span className="ml-2">Female</span>
          </label>
        </div>
      </div>

      <div className="flex justify-center items-center  ">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
