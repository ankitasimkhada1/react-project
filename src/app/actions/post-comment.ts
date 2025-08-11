interface PostCommentType {
    message: string
}

export async function postComment(content: string, post_id: number): Promise<PostCommentType> {
    const baseUrl = "http://64.227.175.162";
    const token = localStorage.getItem('authToken')
    const response = await fetch(`${baseUrl}/api/comment/store/${post_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token || ''
        },
        body: JSON.stringify({
            content: content
        })
    });
    
    if (!response.ok) {
        throw new Error('Comment failed.');
    }
    
    const data = await response.json();
    
    return data;
}