import React, { useState, useEffect } from 'react';
import { requestEmailCode, emailLogin } from './authUtilities';
import { useAuth } from './AuthContext';
import { generateCurlCommandRequestEmailCode, generateCurlCommandEmailLogin } from './curlCommandGenerators';

function EmailLoginButton() {
  const { authToken, setAuthToken } = useAuth();
  const [authEndpoint, setAuthEndpoint] = useState('https://api.staging.galoy.io');
  const [emailAddress, setEmailAddress] = useState('');
  const [emailCode, setEmailCode] = useState('');
  const [successMessageEmailCode, setSuccessMessageEmailCode] = useState(null);
  const [errorMessageEmailCode, setErrorMessageEmailCode] = useState(null);
  const [emailLoginIdInput, setEmailLoginIdInput] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [successMessageEmailLogin, setSuccessMessageEmailLogin] = useState(null);
  const [errorMessageEmailLogin, setErrorMessageEmailLogin] = useState(null);
  const [curlCommandRequestEmailCode, setCurlCommandRequestEmailCode] = useState('');
  const [curlCommandEmailLogin, setCurlCommandEmailLogin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);  // Start loading state

    try {
      const obtainedAuthToken = await emailLogin(authEndpoint, emailLoginIdInput, emailCode);
      setAuthToken(obtainedAuthToken);  // Directly set the obtained authToken
      setSuccessMessageEmailLogin("Logged in successfully!");
    } catch (error) {
      setErrorMessageEmailLogin(error.message);
    } finally {
      setIsLoading(false);  // End loading state, whether the request was successful or not
    }
  };

  const toggleShowToken = () => {
    setShowToken(prevState => !prevState);
  };

  return (
    <div>
      <div>
        <input type="text" value={authEndpoint} onChange={e => setAuthEndpoint(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} />
        <input type="email" placeholder="Email" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
        <button onClick={handleRequestEmailCode}>Request code</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>cURL command to request an email code:</h3>
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
          <h3>Enter the email code to log in</h3>
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
          <button onClick={handleEmailLogin} disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </button>
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

      {authToken && (
        <div>
          <button onClick={toggleShowToken}>Toggle Token Visibility</button>
          {showToken && <div><strong>Token:</strong> {authToken}</div>}
        </div>
      )}
    </div>
  );
}

export default EmailLoginButton;
