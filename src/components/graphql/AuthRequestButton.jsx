// AuthRequestButton.jsx
import React, { useState } from 'react';
import { handleAuthenticatedRequest } from './authRequests';
import { useAuth } from './AuthContext';

function AuthRequestButton() {
  const { authToken, setAuthToken } = useAuth();
  const [apiEndpoint, setApiEndpoint] = useState('https://api.staging.galoy.io/graphql');
  const [userData, setUserData] = useState(null);
  const [errorMessageFetchData, setErrorMessageFetchData] = useState(null);
  const [manualAuthToken, setManualAuthToken] = useState(''); // State for manual authToken input

  const handleApiEndpointChange = (e) => {
    setApiEndpoint(e.target.value);
  }

  const handleAuthTokenChange = (e) => {
    setManualAuthToken(e.target.value);
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
      const data = await handleAuthenticatedRequest(authToken, apiEndpoint);
      setUserData(data);
    } catch (error) {
      setErrorMessageFetchData(error.message);
    }
  }

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

      <input
        type="text"
        value={apiEndpoint}
        onChange={handleApiEndpointChange}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={fetchData}>Check phone number</button>
      {errorMessageFetchData && <div style={{ color: 'red' }}>Error: {errorMessageFetchData}</div>}
      {userData && <div><strong>User Phone:</strong> {userData.phone}</div>}
    </div>
  );
}

export default AuthRequestButton;
