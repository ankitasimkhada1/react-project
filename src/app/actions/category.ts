interface CategoryType{
    id: number
    title: string
}

export async function getCategories(): Promise<CategoryType[]> {
    const baseUrl = "http://64.227.175.162";
    const response = await fetch(`${baseUrl}/api/categories`);
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    return response.json();
}