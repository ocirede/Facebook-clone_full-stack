// src/components/Feed.jsx
import React from "react";
import Post from "./Post";
import { usePostContext } from "../context/Post-context";

function Feed() {
  
  const {posts} = usePostContext()

  return (
    <div className="flex justify-center mt-4 space-x-4">
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
