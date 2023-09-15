export const generateCurlCommandRequestEmailCode = (authEndpoint, emailAddress) => {
  const requestBody = {
    email: emailAddress
  };

  return `curl -X POST '${authEndpoint}/auth/email/code' \\
  --header 'Content-Type: application/json' \\
  --header 'Accept: application/json' \\
  --data '${JSON.stringify(requestBody)}'`;
};


export const generateCurlCommandPhoneLogin = (apiEndpoint, phone, code) => {
  const requestBody = {
    query: `mutation login($input: UserLoginInput!) { userLogin(input: $input) { authToken } }`,
    variables: {
      "input": {
        "phone": phone,
        "code": code
      }
    }
  };

  return `curl '${apiEndpoint}' \\
  --header 'Content-Type: application/json' \\
  --header 'Accept: application/json' \\
  --data-binary '${JSON.stringify(requestBody)}'`;
}

export const generateCurlCommandEmailLogin = (authEndpoint, emailLoginId, emailCode) => {
  const url = `${authEndpoint}/auth/email/login`;

  // Convert the body object to a string for the cURL command
  const body = JSON.stringify({
    code: emailCode,
    emailLoginId: emailLoginId
  });

  return `curl -X POST '${url}' \\
  --header 'Content-Type: application/json' \\
  --header 'Accept: application/json' \\
  --data '${body}'`;
}
