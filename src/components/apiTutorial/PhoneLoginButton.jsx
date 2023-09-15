import React, { useState, useEffect } from 'react';
import { phoneLogin } from './authUtilities';
import { useAuth } from './AuthContext';
import { generateCurlCommandPhoneLogin } from './curlCommandGenerators';

function PhoneLoginButton() {
  const { authToken, setAuthToken } = useAuth();
  const [apiEndpoint, setApiEndpoint] = useState('https://api.staging.galoy.io/graphql');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [successMessageLogin, setSuccessMessageLogin] = useState(null);
  const [errorMessageLogin, setErrorMessageLogin] = useState(null);
  const [curlCommand, setCurlCommand] = useState('');

  useEffect(() => {
    setCurlCommand(generateCurlCommandPhoneLogin(apiEndpoint, phone, code));
  }, [phone, code, apiEndpoint]);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  }

  const handleApiEndpointChange = (e) => {
    setApiEndpoint(e.target.value);
  }

  const handleLogin = async () => {
    if (phone.length < 10 || code.length < 6) {
      setErrorMessageLogin("Invalid input");
      return;
    }

    try {
      const tokenFromLogin = await phoneLogin(apiEndpoint, phone, code);
      setAuthToken(tokenFromLogin);
      setSuccessMessageLogin("Got the auth token!");
      setCurlCommand(generateCurlCommandPhoneLogin(apiEndpoint, phone, code));
    } catch (error) {
      setErrorMessageLogin(error.message);
    }
  }

  const toggleShowToken = () => {
    setShowToken(prevState => !prevState);
  }

  return (
    <div>
      <div>
        <h2>Log in with phone and code</h2>
        <input type="text" value={apiEndpoint} onChange={handleApiEndpointChange} style={{ width: '100%', marginBottom: '10px' }} />
        <input type="text" placeholder="Phone" value={phone} onChange={handlePhoneChange} />
        <input type="text" placeholder="Code" value={code} onChange={handleCodeChange} />


        <button onClick={handleLogin}>Log in</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>cURL command for phone login:</h3>
        <pre style={{
          backgroundColor: 'auto',
          padding: '10px',
          marginLeft: '10px' ,
          overflowX: 'auto',
          whiteSpace: 'pre-wrap'
        }}>
          {curlCommand}
        </pre>
      </div>

      {successMessageLogin && <div style={{ color: 'green' }}>{successMessageLogin}</div>}
      {errorMessageLogin && <div style={{ color: 'red' }}>Error: {errorMessageLogin}</div>}

      {authToken && (
        <div>
          <button onClick={toggleShowToken}>Toggle Token Visibility</button>
          {showToken && <div><strong>Token:</strong> {authToken}</div>}
        </div>
      )}
    </div>
  );
}

export default PhoneLoginButton;
