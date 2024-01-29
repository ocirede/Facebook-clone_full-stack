// src/components/Feed.jsx
import React from "react";
import Post from "../components/Post";

function Feed() {
  const posts = [
    {
      username: "Ibrahim",
      content: "Cozeilla for ever.",
      image: "https://placekitten.com/600/300",
      likes: 10,
      comments: [
        { username: "Kostas", content: "Very cute cat from Codezilla team!" },
        { username: "Federico", content: "bellissimo!" },
      ],
    },
  ];

  return (
    <div className="flex justify-center mt-4 space-x-4">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}

export default Feed;
