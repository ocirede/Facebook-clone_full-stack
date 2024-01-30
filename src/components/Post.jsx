import { baseURL } from "../config/api.js";

function Post({ post }) {
  return (
    <div className="bg-white p-4 w-96 rounded-md shadow-md">
      <div className="flex items-center mb-4">
        <div>
          <p className="font-bold">{post.title}</p>
          <p className="text-gray-500 text-sm">{post.createdAt}</p>
        </div>
      </div>
      <p className="mb-4">{post.content}</p>
      <img src={baseURL + "/posts/" + post.image} alt="Post Pic" className="w-full rounded-md mb-4" />
      {/* <div className="flex items-center space-x-4 mb-4">
        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div> */}
      <div>
       
      </div>
    </div>
  );
}

export default Post;
