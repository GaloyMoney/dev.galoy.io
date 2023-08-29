// AuthRequestButton.jsx
import React, { useState, useEffect } from 'react';
import { handleAuthenticatedRequest } from './authRequests';
import { useAuth } from './AuthContext';

function AuthRequestButton() {
  const { authToken, setAuthToken } = useAuth();
  const [apiEndpoint, setApiEndpoint] = useState('https://api.staging.galoy.io/graphql');
  const [errorMessageFetchWallet, setErrorMessageFetchWallet] = useState(null);
  const [errorMessageFetchInvoice, setErrorMessageFetchInvoice] = useState(null);
  const [manualAuthToken, setManualAuthToken] = useState('');
  const [amount, setAmount] = useState(0);
  const [memo, setMemo] = useState('');
  const [defaultWalletId, setDefaultWalletId] = useState('');
  const [curlCommandWallet, setCurlCommandWallet] = useState('');
  const [curlCommandInvoice, setCurlCommandInvoice] = useState('');

  const [walletData, setWalletData] = useState(null);   // <-- for the wallet query
  const [invoiceData, setInvoiceData] = useState(null); // <-- for the invoice query

  const getWalletQuery = `
    query Me { me { defaultAccount { ... on ConsumerAccount { defaultWalletId }}}}`;

  const getInvoiceQuery = (amount, memo, walletId) => `
mutation LnInvoiceCreate($input: LnInvoiceCreateInput!) {\
  lnInvoiceCreate(input: $input) {\
  errors {\
  message\
  path\
  }\
  invoice {\
  paymentRequest\
  paymentHash\
  paymentSecret\
  satoshis\
  }}}`;

  const generateCurlCommand = (query, type) => {
    const requestBody = {
      query: query.trim(),
      variables: {}
    };
    if (type === 'invoice') {
      requestBody.variables.input = {
        amount: amount.toString(),
        memo: memo,
        walletId: defaultWalletId,
      };
    }
    const queryData = JSON.stringify(requestBody).replace(/\n/g, '');

    // Choose the Authorization header based on authToken availability
    const authHeader = authToken
      ? `--header 'Authorization: Bearer ${authToken}'`
      : "--header 'Authorization: Bearer <YOUR_AUTH_TOKEN_HERE>'";

    const command = `curl --request POST --header 'content-type: application/json' \\
  ${authHeader} \\
  --url '${apiEndpoint}' \\
  --data '${queryData}'`;

    if (type === 'wallet') {
      setCurlCommandWallet(command);
    } else if (type === 'invoice') {
      setCurlCommandInvoice(command);
    }
  };

  const fetchWalletData = async () => {
    try {
      const data = await handleAuthenticatedRequest(authToken, apiEndpoint, getWalletQuery);
      setWalletData(data);  // <-- Set the walletData with the response
      if (data && data.me && data.me.defaultAccount && data.me.defaultAccount.defaultWalletId) {
        setDefaultWalletId(data.me.defaultAccount.defaultWalletId);
      }
      generateCurlCommand(getWalletQuery, 'wallet');
    } catch (error) {
      setErrorMessageFetchWallet(error.message);
    }
  };

  const fetchInvoiceData = async () => {
    const query = getInvoiceQuery(amount, memo, defaultWalletId);
    const variables = {
      input: {
        amount: amount.toString(),
        memo: memo,
        walletId: defaultWalletId,
      }
    };

    try {
      const data = await handleAuthenticatedRequest(authToken, apiEndpoint, query, variables);
      setInvoiceData(data);  // <-- Set the invoiceData with the response
      generateCurlCommand(query, 'invoice');
    } catch (error) {
      setErrorMessageFetchInvoice(error.message);
    }
  };


  useEffect(() => {
    // This will be triggered whenever authToken or apiEndpoint changes
    generateCurlCommand(getWalletQuery, 'wallet');
  }, [authToken, apiEndpoint]); // Listening to authToken and apiEndpoint changes

  useEffect(() => {
    // This will be triggered whenever authToken, apiEndpoint, amount, memo, or defaultWalletId changes
    const query = getInvoiceQuery(amount, memo, defaultWalletId);
    generateCurlCommand(query, 'invoice');
  }, [authToken, apiEndpoint, amount, memo, defaultWalletId]); // Listening to these states changes

  function AuthTokenInput({ value, onChange, onSet }) {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter authToken"
          value={value}
          onChange={onChange}
        />
        <button onClick={onSet}>Set Token</button>
      </div>
    );
  }

  const handleAuthTokenChange = (e) => {
    setManualAuthToken(e.target.value);
  };

  const handleSetManualToken = () => {
    setAuthToken(manualAuthToken);
  };

  const handleApiEndpointChange = (e) => {
    setApiEndpoint(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  };

  const handleDefaultWalletIdChange = (e) => {
    setDefaultWalletId(e.target.value);
  };

  const authTokenSection = (
    <AuthTokenInput
      value={manualAuthToken}
      onChange={handleAuthTokenChange}
      onSet={handleSetManualToken}
    />
  );

  return (
    <div>
      {authTokenSection}
      <input
        type="text"
        value={apiEndpoint}
        onChange={handleApiEndpointChange}
        style={{ width: '100%', marginBottom: '10px' }}
      />

      {/* Display for WalletData */}
      <div style={{ marginTop: '20px' }}></div>
      <h2>Get the default wallet ID</h2>
      <button onClick={fetchWalletData}>Get Wallet ID</button>
      {errorMessageFetchWallet && <div style={{ color: 'red' }}>Error: {errorMessageFetchWallet}</div>}
      {walletData && <div><strong>Wallet Data:</strong> <pre>{JSON.stringify(walletData, null, 2)}</pre></div>}

      <div style={{ marginTop: '20px' }}>
        <h3>cURL command to get the walletId:</h3>
        <pre style={{
          backgroundColor: 'auto',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap'
        }}>
          {curlCommandWallet}
        </pre>
      </div>

      {/* Display for InvoiceData */}
      <h2>Generate an invoice</h2>
      <div>
        <label>
          Amount (sats):
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            style={{ marginLeft: '10px', marginRight: '20px' }}
          />
        </label>
        <label>
          Memo:
          <input
            type="text"
            value={memo}
            onChange={handleMemoChange}
            style={{ marginLeft: '10px', marginRight: '20px' }}
          />
        </label>
        <label>
          Wallet ID:
          <input
            type="text"
            value={defaultWalletId}
            onChange={handleDefaultWalletIdChange}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <button onClick={fetchInvoiceData}>Create Invoice</button>
      {errorMessageFetchInvoice && <div style={{ color: 'red' }}>Error: {errorMessageFetchInvoice}</div>}
      {invoiceData && <div><strong>Invoice Data:</strong> <pre>{JSON.stringify(invoiceData, null, 2)}</pre></div>}

      <div style={{ marginTop: '20px' }}>
        <h3>cURL command to generate an invoice:</h3>
        <pre style={{
          backgroundColor: 'auto',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap'
        }}>
          {curlCommandInvoice}
        </pre>
      </div>
    </div>
  );
}

export default AuthRequestButton;
