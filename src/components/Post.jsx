import { baseURL } from "../config/api.js";

function Post({ post }) {
  return (
    <>
    {post ? (
      
      <div className="bg-white p-4 w-96 rounded-md shadow-md">
      <div className="flex items-center mb-4">
        <div>
          <p>Author: {post.author?.firstname}</p>
          <p className="font-bold">Title: {post.title}</p>
          <p className="text-gray-500 text-sm">{post.createdAt}</p>
        </div>
      </div>
      <p className="mb-4">{post.content}</p>
      <img src={baseURL + "/posts/" + post.image} alt="Post Pic" className="w-full rounded-md mb-4" />
     
      <div>
       
      </div>
    </div>
    ) : (<p>loading...</p>)}
    </>
  );
}

export default Post;
