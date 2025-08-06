interface PostType{
    id: number
    title: string
    description: string
    category_id: number
    image: string
}

const PostCard = ({post}: {post: PostType}) => {
    return (
        <div className="border border-white/20 rounded-md p-5">
            <img
                src={post.image}
                className="w-full h-[200px] object-cover rounded-md"
                alt=""
            />
            <h2 className="mt-2 text-xl font-semibold">
                {post.title}
            </h2>

            <p className="mt-2 line-clamp-3">
                {post.description}
            </p>

            <div className="text-right mt-2">
                <a
                    href=""
                    className="px-7 py-2 text-sm bg-white text-black rounded-md">
                    View Full
                </a>
            </div>
        </div>
    );
}
 
export default PostCard;