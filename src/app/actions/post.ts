interface PostType{
    id: number
    title: string
    content: string
    image: string
    category_id: number
}

export async function getPosts(): Promise<PostType[]> {
    const baseUrl = "http://64.227.175.162";
    const response = await fetch(`${baseUrl}/api/posts`);
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
}