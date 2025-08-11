interface RegisterType {
    message: string
}

export async function register(name: string, email: string, password: string, password_confirmation: string): Promise<RegisterType> {
    const baseUrl = "http://64.227.175.162";
    const response = await fetch(`${baseUrl}/api/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        })
    });
    
    if (!response.ok) {
        throw new Error('Register failed.');
    }

    const data = await response.json();

    return data
}