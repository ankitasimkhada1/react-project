"use client";

import Image from "next/image";
import NavBar from "./components/nav-bar";
import Banner from "./components/banner";
import TabButton from "./components/tab-btn";
import PostCard from "./components/post-card";
import { useEffect, useState } from "react";
import { getCategories } from "./actions/category";
import { getPosts } from "./actions/post";

interface CategoryType{
    id: number
    title: string
}

interface PostType{
    id: number
    title: string
    content: string
    image: string
    category_id: number
}

export default function Home() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories(); // Call the function
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts(); // Call the function
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="px-10 py-5 flex flex-col gap-10">
      <div className="flex flex-row justify-between">
        {/* Tab Group */}
        <div className="flex flex-row gap-10 justify-center">
          <TabButton key={0} title="All"/>

          {categories.map(category => (
            <TabButton key={category.id} title={category.title}/>
          ))}
        </div>

        <div>
          <a
            href="/login"
            className="px-7 py-2 text-sm bg-white text-black rounded-md">
            Login
          </a>
        </div>
      </div>

      {/* Posts */}
      <div className="grid grid-cols-3 gap-10">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
