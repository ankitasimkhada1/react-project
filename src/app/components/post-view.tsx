"use client";

import { FormEvent, useEffect, useState } from "react";
import { getPostData } from "../actions/post-view";
import { getComments } from "../actions/get-comments";
import { useRouter } from "next/navigation";
import { postComment } from "../actions/post-comment";

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

interface CommentType{
    id: number
    user_id: number
    post_id: number
    content: string
    user: {
        id: number
        name: string
        email: string
    }
}

const PostView = ({postId}: {postId: number}) => {

    const [post, setPost] = useState<PostViewType>();

    const [comments, setComments] = useState<CommentType[]>([]);
    
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
    
    useEffect(() => {
    const fetchComments = async () => {
        try {
        const data = await getComments(postId); // Call the function
        setComments(data);
        } catch (error) {
        console.error("Error fetching post:", error);
        }
    };

    fetchComments();
    }, []);

    const router = useRouter();
        
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const content = formData.get("content")?.toString() || "";

        try {
            const data = await postComment(content, postId);
            console.log(data)
        } catch (error: any) {
            console.log("Login failed:", error.message);
        }
    }

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

            <div>
                <form
                    onSubmit={onSubmit}>
                    <textarea
                        name="content"
                        className="w-full h-20 border border-white text-white rounded-md p-2"
                        placeholder="Enter Comment"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-white text-black px-7 py-2 text-sm rounded-md">
                        Comment
                    </button>
                </form>
            </div>

            <div className="flex flex-col gap-5">
                {comments.map(comment => (
                    <div key={comment.id} className="flex flex-col gap-3 bg-white/10 p-5 rounded-md">
                        <div className="font-semibold text-xl">
                            {comment.user.name}
                        </div>
                        <div>
                            {comment.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default PostView;