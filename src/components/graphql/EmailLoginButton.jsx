import React, { useState, useEffect } from 'react';
import { requestEmailCode, emailLogin } from './authUtilities';
import { useAuth } from './AuthContext';
import { generateCurlCommandRequestEmailCode, generateCurlCommandEmailLogin } from './curlCommandGenerators';

function EmailLoginButton() {
  const { authToken, setAuthToken } = useAuth();
  const [authEndpoint, setAuthEndpoint] = useState('https://api.staging.galoy.io');
  const [emailAddress, setEmailAddress] = useState('');
  const [emailLoginId, setEmailLoginId] = useState(null);
  const [emailCode, setEmailCode] = useState('');
  const [successMessageEmailCode, setSuccessMessageEmailCode] = useState(null);
  const [errorMessageEmailCode, setErrorMessageEmailCode] = useState(null);
  const [emailLoginIdInput, setEmailLoginIdInput] = useState('');
  const [token, setToken] = useState(null);
  const [showToken, setShowToken] = useState(false);
  const [successMessageEmailLogin, setSuccessMessageEmailLogin] = useState(null);
  const [errorMessageEmailLogin, setErrorMessageEmailLogin] = useState(null);
  const [curlCommandRequestEmailCode, setCurlCommandRequestEmailCode] = useState('');
  const [curlCommandEmailLogin, setCurlCommandEmailLogin] = useState('');

  useEffect(() => {
    // Generate and set the cURL command whenever authEndpoint or emailAddress changes
    const newCurlCommand = generateCurlCommandRequestEmailCode(authEndpoint, emailAddress);
    setCurlCommandRequestEmailCode(newCurlCommand);
  }, [authEndpoint, emailAddress]);

  useEffect(() => {
    // Generate and set the cURL command for email login whenever authEndpoint, emailLoginIdInput or emailCode changes
    const newCurlCommand = generateCurlCommandEmailLogin(authEndpoint, emailLoginIdInput, emailCode);
    setCurlCommandEmailLogin(newCurlCommand);
  }, [authEndpoint, emailLoginIdInput, emailCode]);

  const handleRequestEmailCode = async () => {
    try {
      const obtainedEmailLoginId = await requestEmailCode(authEndpoint, emailAddress);
      setEmailLoginId(obtainedEmailLoginId);
      setEmailLoginIdInput(obtainedEmailLoginId); // Autofill the input
      setSuccessMessageEmailCode(`The emailLoginId: ${obtainedEmailLoginId} was obtained successfully!`);
    } catch (error) {
      setErrorMessageEmailCode(error.message);
    }
  }

  const handleEmailLogin = async () => {
    if (!emailLoginIdInput || emailCode.length < 6) {
      setErrorMessageEmailLogin("Invalid input");
      return;
    }

    try {
      const tokenResponse = await emailLogin(authEndpoint, emailLoginIdInput, emailCode);
      setAuthToken(tokenResponse.result.authToken);
      setSuccessMessageEmailLogin("Logged in successfully!");
    } catch (error) {
      setErrorMessageEmailLogin(error.message);
    }
  };

  const toggleShowToken = () => {
    setShowToken(prevState => !prevState);
  };

  return (
    <div>
      <div>
        <h2>Log in with Email</h2>
        <input type="text" value={authEndpoint} onChange={e => setAuthEndpoint(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
        <input type="email" placeholder="Email" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
        <button onClick={handleRequestEmailCode}>Request Email Code</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>cURL command for email code:</h3>
        <pre style={{
          backgroundColor: 'auto',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap'
        }}>
          {curlCommandRequestEmailCode}
        </pre>
      </div>
      {errorMessageEmailCode && <div style={{ color: 'red' }}>Error: {errorMessageEmailCode}</div>}
      {successMessageEmailCode && <div style={{ color: 'green' }}>{successMessageEmailCode}</div>}
      <div style={{ margin: '20px 0' }}></div>
      {(
        <div>
          <h3>Enter Email Code</h3>
          {(
            <div>
              <input
                type="text"
                placeholder="Email Login ID"
                value={emailLoginIdInput}
                onChange={e => setEmailLoginIdInput(e.target.value)}
              />
            </div>
          )}
          <input type="text" placeholder="Email Code" value={emailCode} onChange={e => setEmailCode(e.target.value)} />
          <button onClick={handleEmailLogin}>Log in</button>
        </div>
      )}
      <div style={{ marginTop: '20px' }}>
        <h3>cURL command for email login:</h3>
        <pre style={{
          backgroundColor: 'auto',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap'
        }}>
          {curlCommandEmailLogin}
        </pre>
      </div>
      {errorMessageEmailLogin && <div style={{ color: 'red' }}>Error: {errorMessageEmailLogin}</div>}
      {successMessageEmailLogin && <div style={{ color: 'green' }}>{successMessageEmailLogin}</div>}

      {authToken && showToken && <div><strong>Token:</strong> {authToken}</div>}

      {token && (
        <div>
          <button onClick={toggleShowToken}>Toggle Token Visibility</button>
          {showToken && <div><strong>Token:</strong> {token}</div>}
        </div>
      )}
    </div>
  );
}

export default EmailLoginButton;
