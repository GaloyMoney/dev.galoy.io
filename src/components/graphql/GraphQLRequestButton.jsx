import React, { useState } from 'react';
import { loginUser } from './authUtilities';
import { handleAuthenticatedRequest } from './authRequests';

function GraphQLRequestButton() {
  const [apiEndpoint, setApiEndpoint] = useState('https://api.staging.galoy.io/graphql');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [token, setToken] = useState(null);
  const [showToken, setShowToken] = useState(false);
  const [successMessageLogin, setSuccessMessageLogin] = useState(null);
  const [errorMessageLogin, setErrorMessageLogin] = useState(null);
  const [userData, setUserData] = useState(null);
  const [errorMessageFetchData, setErrorMessageFetchData] = useState(null);

  const handleLogin = async () => {
    if (phone.length < 10 || code.length < 6) {
      setErrorMessageLogin("Invalid input");
      return;
    }

    try {
      const tokenFromLogin = await loginUser(apiEndpoint, phone, code);
      setToken(tokenFromLogin);
      setSuccessMessageLogin("Got the auth token!");
    } catch (error) {
      setErrorMessageLogin(error.message);
    }
  }

  const fetchData = async () => {
    try {
      const data = await handleAuthenticatedRequest(token, apiEndpoint);
      setUserData(data);
    } catch (error) {
      setErrorMessageFetchData(error.message);
    }
  }

  const toggleShowToken = () => {
    setShowToken(!showToken);
  }

  return (
    <div>
      <div>
        <h2>Log in with phone and code</h2>
        <input type="text" value={apiEndpoint} onChange={e => setApiEndpoint(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
        <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
        <input type="text" placeholder="Code" value={code} onChange={e => setCode(e.target.value)} />
        <button onClick={handleLogin}>Log in</button>
      </div>

      {successMessageLogin && <div style={{ color: 'green' }}>{successMessageLogin}</div>}
      {errorMessageLogin && <div style={{ color: 'red' }}>Error: {errorMessageLogin}</div>}

      {token && (
        <div>
          <button onClick={toggleShowToken}>Toggle Token Visibility</button>
          {showToken && <div><strong>Token:</strong> {token}</div>}
        </div>
      )}

      <div style={{ margin: '20px 0' }}></div>

      {(
        <div>
          <h2>Execute an authenticated request</h2>
          <button onClick={fetchData}>Fetch User Data</button>
        </div>
      )}

      {errorMessageFetchData && <div style={{ color: 'red' }}>Error: {errorMessageFetchData}</div>}

      {userData && <div><strong>User Phone:</strong> {userData.phone}</div>}
    </div>
  );
}

export default GraphQLRequestButton;
