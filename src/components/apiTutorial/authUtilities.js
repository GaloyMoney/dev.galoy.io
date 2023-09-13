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

    // Displaying the raw response in console
    const rawTextResponse = await response.text();
    console.log('Raw Response:', rawTextResponse);

    // Convert raw response text to JSON for further processing
    const jsonData = JSON.parse(rawTextResponse);

    // Check if the response returned a 200 status code
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // Check for GraphQL errors
    if (jsonData.errors && jsonData.errors.length > 0) {
      throw new Error(jsonData.errors[0].message);
    }

    // Check if authToken is null
    if (!jsonData.data?.userLogin?.authToken) {
      throw new Error('Expected authToken not found in the response.');
    }

    return jsonData.data.userLogin.authToken;

  } catch (error) {
    console.error("There was an error making the request:", error);
    throw error;
  }
}

const requestEmailCode = async (authEndpoint, emailAddress) => {
  try {
    const response = await fetch(`${authEndpoint}/email/code`, {
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
    const response = await fetch(`${authEndpoint}/email/login`, {
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

    if (jsonData.error) {
      if (jsonData.error === "too many requests") {
        throw new Error("You've made too many requests. Please wait and try again later.");
      }
      throw new Error(jsonData.error); // This line can be expanded to handle other error types
    }

    if (!jsonData.result?.authToken) {
      throw new Error("Expected authToken not found in the response.");
    }

    return jsonData.result.authToken;

  } catch (error) {
    console.error("There was an error making the request:", error);
    throw error;
  }
}

export { phoneLogin, requestEmailCode, emailLogin };
