import React from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
import { useUserContext } from "./context/User-context";
import SignIn from "./pages/Sign-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRss,
  faUsers,
  faShoppingBasket,
  faVideo,
  faEllipsisH,
  faClock,
  faStar,
  faEnvelope,
  faSuitcase,
  faBell,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

import PostForm from "./components/PostForm";

function App() {
  const { user } = useUserContext();
  const chatHeadNames = [
   
    "John Doe",
    "Jane Smith",
    "Bob Johnson",
    "Alice Williams",
    "Charlie Brown",
    "Eva Johnson",
  "Michael Davis",
  "Sophia Wilson",
  "Daniel Miller",
  "Olivia Jackson",
  "Matthew Thomas",
  "Ava Harris",
  ];
  return (
    <div>
      {user ? (
        <>
          <div className="flex h-screen">
            <div className="hidden xl:block w-1/6 p-4 bg-gray-200">
              <div className="h-1/3 mb-24">
                <h2 className="text-lg font-semibold mb-4">Navigation</h2>
                <ul className="space-y-2 flex flex-col justify-between h-full">
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon icon={faUser} size="xl" />
                    <span>Friends</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon icon={faRss} size="xl" />
                    <span>Feeds</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon icon={faUsers} size="xl" />
                    <span>Groups</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon icon={faShoppingBasket} size="xl" />
                    <span>Marketplace</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon icon={faVideo} size="xl" />
                    <span>Video</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon icon={faEllipsisH} size="xl" />
                    <span>See more</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 h-1/3">
                <h2 className="text-lg font-semibold mb-4">Your Shortcuts</h2>
                <ul className="space-y-2 flex flex-col justify-between h-full">
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon icon={faClock} size="xl" />
                    <span>Recent</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon icon={faStar} size="xl" />
                    <span>Favorites</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    <span>Messages</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon icon={faSuitcase} size="xl" />
                    <span>Jobs</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon icon={faBell} size="xl" />
                    <span>Notifications</span>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <FontAwesomeIcon icon={faCog} size="xl" />
                    <span>Settings</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 p-4">
              <PostForm/>
              <Feed />
            </div>
            <div className="hidden xl:block w-1/6 p-4 bg-gray-200 -z-10">
            <h2 className="text-lg font-semibold mb-4">Online</h2>
            <ul >
              {chatHeadNames.map((name, index) => (
                <li key={index} className="flex items-center space-x-2 mb-2 ">
                  <div className="p-2 rounded-full border-2 border-gray-400 hover:text-sky-600 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out hover:border-sky-600  ">
                    <button>
                      <FontAwesomeIcon icon={faUser} size="2xl" />
                    </button>
                  </div>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
          </div>

        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
export default App;
