import React from 'react'
import { usePostContext } from '../context/Post-context';

export default function PostForm() {
    const {createPost} = usePostContext()
    return (
        <form onSubmit={createPost} className="flex flex-col items-center justify-center gap-8 w-full p-8 bg-white shadow-md rounded-lg">
            <input
                className="border p-2 w-full"
                type="text"
                name="title"
                placeholder="Title"
            />
            <textarea
                className="border p-2 w-full h-32 resize-none"
                placeholder="Content"
                name="content"
            ></textarea>
            <input
                type="file"
                name="postImage"
                className="border p-2"
            />
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
                type="submit"
            >
                Add Post
            </button>
        </form>
    );
}
