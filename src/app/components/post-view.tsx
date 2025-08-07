"use client";

import { useEffect, useState } from "react";
import { getPostData } from "../actions/post-view";

interface PostViewType{
    id: number
    title: string
    content: string
    image: string
    category_id: number
    category: {
        id: number
        title: string
    }
}

const PostView = ({postId}: {postId: number}) => {

    const [post, setPost] = useState<PostViewType>();
    
    useEffect(() => {
    const fetchPost = async () => {
        try {
        const data = await getPostData(postId); // Call the function
        setPost(data);
        } catch (error) {
        console.error("Error fetching post:", error);
        }
    };

    fetchPost();
    },);

    return (
        <div className="flex flex-col gap-5">
            <img
                src={post?.image}
                className="w-full h-[400px] object-cover rounded-md"
                alt="" />

            <div className="text-2xl font-semibold">
                {post?.title}
            </div>

            <div className="text-justify">
                {post?.content}
            </div>
        </div>
    );
}
 
export default PostView;