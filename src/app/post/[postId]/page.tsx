import PostView from "@/app/components/post-view";

async function PostViewPage ({params}: {params: Promise<{postId: number}>}) {

    const postId = (await params).postId;

    return (
        <div className="px-10 py-5">
            <PostView postId={postId} />
        </div>
    );
}
 
export default PostViewPage;