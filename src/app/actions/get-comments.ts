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

export async function getComments(post_id: number): Promise<CommentType[]> {
    const baseUrl = "http://64.227.175.162";
    const token = localStorage.getItem('authToken');
    const response = await fetch(`${baseUrl}/api/comment/${post_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token || ''
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch comments');
    }
    return response.json();
}