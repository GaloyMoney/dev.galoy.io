// AuthRequestButton.jsx
import React, { useState, useEffect } from 'react';
import { handleAuthenticatedRequest } from './authRequests';
import { useAuth } from './AuthContext';

function AuthRequestButton() {
  const { authToken, setAuthToken } = useAuth();
  const [apiEndpoint, setApiEndpoint] = useState('https://api.staging.galoy.io/graphql');
  const [graphqlQuery, setGraphqlQuery] = useState(`{ me { phone } }`);
  const [userData, setUserData] = useState(null);
  const [errorMessageFetchData, setErrorMessageFetchData] = useState(null);
  const [manualAuthToken, setManualAuthToken] = useState('');
  const [curlCommand, setCurlCommand] = useState('');

  const handleApiEndpointChange = (e) => {
    setApiEndpoint(e.target.value);
  }

  const handleAuthTokenChange = (e) => {
    setManualAuthToken(e.target.value);
  }

  const handleGraphqlQueryChange = (e) => {
    setGraphqlQuery(e.target.value);
  }

  const handleSetManualToken = () => {
    setAuthToken(manualAuthToken);
  }

  const fetchData = async () => {
    if (!authToken) {
      setErrorMessageFetchData("No auth token available. Please login first.");
      return;
    }

    try {
      const data = await handleAuthenticatedRequest(authToken, apiEndpoint, graphqlQuery);
      setUserData(data);
    } catch (error) {
      setErrorMessageFetchData(error.message);
    }
  }

  const generateCurlCommand = () => {
    if (authToken) {
      const command = `curl -X POST "${apiEndpoint}" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${authToken}" \\
  -d "${graphqlQuery}"`;
      setCurlCommand(command);
    } else {
      setCurlCommand('No auth token available for cURL command generation.');
    }
  };

  // useEffect hook to automatically update the cURL command whenever relevant fields change
  useEffect(() => {
    generateCurlCommand();
  }, [apiEndpoint, authToken, graphqlQuery]);


  return (
    <div>
      <h2>Check your phone number</h2>

      {!authToken ? (
        <div>
          <input
            type="text"
            placeholder="Enter authToken"
            value={manualAuthToken}
            onChange={handleAuthTokenChange}
          />
          <button onClick={handleSetManualToken}>Set Token</button>
        </div>
      ) : (
        <div>
          <strong>Current Auth Token:</strong> {authToken}
        </div>
      )}

      <textarea // Added this textbox for GraphQL query input
        rows="5"
        value={graphqlQuery}
        onChange={handleGraphqlQueryChange}
        style={{ width: '100%', marginBottom: '10px' }}
      ></textarea>

      <input
        type="text"
        value={apiEndpoint}
        onChange={handleApiEndpointChange}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={fetchData}>Check phone number</button>
      {errorMessageFetchData && <div style={{ color: 'red' }}>Error: {errorMessageFetchData}</div>}
      {userData && <div><strong>User Phone:</strong> {userData.phone}</div>}
      <div style={{ marginTop: '20px' }}>
        <h3>cURL command:</h3>
        <pre style={{
          backgroundColor: 'auto',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap'
        }}>
          {curlCommand}
        </pre>
      </div>
    </div>
  );
}

export default AuthRequestButton;
