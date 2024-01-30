import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/User-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHouse,
  faCog,
  faCheese,
  faMoon,
  faTv,
  faShop,
  faUserGroup,
  faGamepad,
  faCubesStacked,
  faMessage,
  faBell,
  faEdit,
  faComment,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

 const Navigation = () => {
 const { user} = useUserContext();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };
  const getTabStyle = (index) => {
    return index === selectedTab
      ? "border-b-2 border-sky-600 h-full flex items-center cursor-pointer text-sky-600"
      : " border-gray-300	h-full flex items-center cursor-pointer";
  };

  return (
    <>
      

      <nav
        id="header"
        className=" w-full top-0 text-gray-400 flex justify-between	"
      >
        <div className="w-1/4 container  flex  items-center gap-2 mt-0 py-4 border-b border-gray-300 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
            className="h-12 pl-3 md:pl-2 sm:pl-2"
            alt=""
          />
          <div>
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6M3 9a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search Facebook"
                className="w-full border border-gray-300 rounded-full pl-10 px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="w-2/4 flex items-center justify-between  border-b border-gray-300">
          <div className={getTabStyle(0)} onClick={() => handleTabClick(0)}>
            <FontAwesomeIcon icon={faHouse} size="xl" />
          </div>
          <div className={getTabStyle(1)} onClick={() => handleTabClick(1)}>
            <FontAwesomeIcon icon={faTv} size="xl" />
          </div>
          <div className={getTabStyle(2)} onClick={() => handleTabClick(2)}>
            <FontAwesomeIcon icon={faShop} size="xl" />
          </div>
          <div className={getTabStyle(3)} onClick={() => handleTabClick(3)}>
            <FontAwesomeIcon icon={faUserGroup} size="xl" />
          </div>
          <div className={getTabStyle(4)} onClick={() => handleTabClick(4)}>
            <FontAwesomeIcon icon={faGamepad} size="xl" />
          </div>
        </div>

        <div className="w-1/4 flex items-center border-b border-gray-300 justify-end gap-6 pr-4">
          <div className={getTabStyle(5)} onClick={() => handleTabClick(5)}>
            <FontAwesomeIcon icon={faCubesStacked} size="xl" />
          </div>
          <div className={getTabStyle(6)} onClick={() => handleTabClick(6)}>
            <FontAwesomeIcon icon={faMessage} size="xl" />
          </div>
          <div className={getTabStyle(7)} onClick={() => handleTabClick(7)}>
            <FontAwesomeIcon icon={faBell} size="xl" />
          </div>
          <div
            className={`${getTabStyle(8)} `}
            onClick={() => handleTabClick(8)}
          >
            <div className="p-2 rounded-full border-2 border-gray-400 hover:text-sky-600 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out hover:border-sky-600">
              <button id="nav-toggle" onClick={handleButtonClick}>
                <FontAwesomeIcon icon={faUser} size="2xl" />
              </button>
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-10 right-0 bg-white border-2 border-white rounded-md shadow-md w-64 p-2"
                >
                  <button className="block w-full text-left py-4 px-4 hover:bg-gray-200">
                    <div className="w-full h-full flex items-center justify-center font-bold">
                  {user ? <p>Welcome {user.firstname} !</p> : <p>malakia</p>}
                  </div>
                  </button>
                  <button className="block w-full text-left py-4 px-4 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faCheese} className="mr-2" /> Meta
                    Business Suite
                  </button>
                  <button className="block w-full text-left py-4 px-4 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faCog} className="mr-2" /> Settings &
                    privacy
                  </button>
                  <button className="block w-full text-left py-4 px-4 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faEdit} className="mr-2" /> Help &
                    support
                  </button>
                  <button className="block w-full text-left py-4 px-4 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faMoon} className="mr-2" /> Display &
                    accessibility
                  </button>
                  <button className="block w-full text-left py-4 px-4 hover:bg-gray-200">
                    <FontAwesomeIcon icon={faComment} className="mr-2" /> Give
                    feedback
                  </button>
                  <button
                    className="block w-full text-left py-4 px-4 hover:bg-gray-200"
                    onClick={handleLogout}
                  >
                    <FontAwesomeIcon icon={faDoorOpen} className="mr-2" /> Log
                    out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
