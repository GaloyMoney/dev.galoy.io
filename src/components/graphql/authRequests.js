const handleAuthenticatedRequest = async (token, apiEndpoint, graphqlQuery, variables = {}) => {
  if (!token) {
    throw new Error("Not authenticated");
  }

  if (!graphqlQuery) {
    throw new Error("No GraphQL query provided");
  }

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `bearer ${token}`
      },
      body: JSON.stringify({
        query: graphqlQuery,
        variables // Include variables in the body
      })
    });

    // Check if the response was successful
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error response from server: ${errorText}`);
    }

    // Check for JSON content type
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const jsonData = await response.json();
      return jsonData; // Return the full JSON data
    } else {
      throw new Error(`Unexpected content type: ${contentType}`);
    }

  } catch (error) {
    console.error("There was an error making the authenticated request:", error);
    throw error; // Re-throw the error so it can be caught in the calling function/component
  }
}

export { handleAuthenticatedRequest };
