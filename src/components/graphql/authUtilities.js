const loginUser = async (apiEndpoint, phone, code) => {
    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query: `
            mutation login($input: UserLoginInput!) {
              userLogin(input: $input) {
                authToken
              }
            }
          `,
                variables: {
                    "input": {
                        "phone": phone,
                        "code": code
                    }
                }
            })
        });

        const jsonData = await response.json();

        // Check for GraphQL errors
        if (jsonData.errors && jsonData.errors.length > 0) {
            throw new Error(jsonData.errors[0].message);
        }

        // Check if the response returned a 200 status code
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return jsonData.data.userLogin.authToken;

    } catch (error) {
        console.error("There was an error making the request:", error);
        throw error;
    }
}

export { loginUser };
