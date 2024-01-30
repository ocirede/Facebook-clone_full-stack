import React from 'react'
import { usePostContext } from '../context/Post-context';

export default function PostForm() {
    const {createPost} = usePostContext()
    return (
        <div className=' flex justify-center w-full'>
        <form onSubmit={createPost} className="fixed xl:flex xl:flex-col xl:items-center xl:justify-center xl:gap-8 xl:min-w-1/4 xl:p-8 xl:bg-white xl:shadow-md xl:rounded-lg lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-8 lg:w-1/4 lg:p-8 lg:bg-white lg:shadow-md lg:rounded-lg sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-8 sm:w-1/2 sm:p-8 sm:bg-white sm:shadow-md sm:rounded-lg xs:flex xs:flex-col xs:items-center xs:justify-center xs:gap-8 xs:w-1/2 xs:p-8 xs:bg-white xs:shadow-md xs:rounded-lg md:flex md:flex-col md:items-center md:justify-center md:gap-8 md:w-1/3 md:p-8 md:bg-white md:shadow-md md:rounded-lg">
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
        </div>
    );
}
