const phoneLogin = async (apiEndpoint, phone, code) => {
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

    // Check if the response returned a 200 status code
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const jsonData = await response.json();

    // Check for GraphQL errors
    if (jsonData.errors && jsonData.errors.length > 0) {
      throw new Error(jsonData.errors[0].message);
    }

    return jsonData.data.userLogin.authToken;

  } catch (error) {
    console.error("There was an error making the request:", error);
    throw error;
  }
}

const requestEmailCode = async (authEndpoint, emailAddress) => {
  try {
    const response = await fetch(`${authEndpoint}/auth/email/code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: emailAddress
      })
    });

    const jsonData = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const emailLoginId = jsonData.result;  // Extract emailLoginId from the "result" field
    return emailLoginId;

  } catch (error) {
    console.error("There was an error making the request:", error);
    throw error;
  }
}

const emailLogin = async (authEndpoint, emailLoginId, emailCode) => {
  try {
    const response = await fetch(`${authEndpoint}/auth/email/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        code: emailCode,
        emailLoginId: emailLoginId
      })
    });

    const jsonData = await response.json();
    const authToken = jsonData?.result?.authToken;

    if (jsonData.error && jsonData.error === "too many requests") {
      throw new Error("You've made too many requests. Please wait and try again later.");
    }

    if (!jsonData || !jsonData.result || !jsonData.result.authToken) {
      throw new Error("Expected authToken not found in the response.");
    }

    // if nothing from the above check if the response returned a 200 status code
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return authToken;

  } catch (error) {
    console.error("There was an error making the request:", error);
    throw error;
  }
}

export { phoneLogin, requestEmailCode, emailLogin };
