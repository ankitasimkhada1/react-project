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

export async function getPostData(id: number): Promise<PostViewType> {
    const baseUrl = "http://64.227.175.162";
    const response = await fetch(`${baseUrl}/api/post/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }
    return response.json();
}