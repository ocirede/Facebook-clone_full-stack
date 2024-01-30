import { baseURL } from "../config/api.js";
import { useUserContext } from "../context/User-context.jsx";

function Post({ post }) {
  const { user } = useUserContext();

  return (
    <div className="bg-white p-4 w-96 rounded-md shadow-md">
      <div className="flex items-center mb-4">
        <div>
          <p>Author: {user.firstname}</p>
          <p className="font-bold">Post: {post.title}</p>
          <p className="text-gray-500 text-sm">{post.createdAt}</p>
        </div>
      </div>
      <p className="mb-4">{post.content}</p>
      <img src={baseURL + "/posts/" + post.image} alt="Post Pic" className="w-full rounded-md mb-4" />
     
      <div>
       
      </div>
    </div>
  );
}

export default Post;
