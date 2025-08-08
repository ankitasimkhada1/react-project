interface LoginType {
    token: string
}

export async function login(email: string, password: string): Promise<LoginType> {
    const baseUrl = "http://64.227.175.162";
    const response = await fetch(`${baseUrl}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
    
    if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
    }
    
    const data = await response.json();
    
    // Store token in local storage
    localStorage.setItem('authToken', 'Bearer '+data.token);
    
    return data;
}