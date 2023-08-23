export const generateCurlCommandRequestEmailCode = (authEndpoint, emailAddress) => {
  const requestBody = {
    email: emailAddress
  };

  return `curl -X POST '${authEndpoint}/auth/email/code' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
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

  return `curl -ksS '${apiEndpoint}' -H 'Content-Type: application/json' -H 'Accept: application/json' --data-binary '${JSON.stringify(requestBody)}'`;
}
