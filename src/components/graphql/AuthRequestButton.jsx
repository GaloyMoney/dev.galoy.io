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

  const [paymentRequest, setPaymentRequest] = useState('');
  const [errorMessageFetchFeeProbe, setErrorMessageFetchFeeProbe] = useState(null);
  const [curlCommandFeeProbe, setCurlCommandFeeProbe] = useState('');
  const [feeProbeData, setFeeProbeData] = useState(null);

  const [lnInvoicePaymentData, setLnInvoicePaymentData] = useState(null);
  const [errorMessageLnInvoicePayment, setErrorMessageLnInvoicePayment] = useState(null);
  const [curlCommandLnInvoicePayment, setCurlCommandLnInvoicePayment] = useState('');

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

  const getFeeProbeQuery = (paymentRequest, walletId) => `
  mutation lnInvoiceFeeProbe($input: LnInvoiceFeeProbeInput!) {\
    lnInvoiceFeeProbe(input: $input) {\
    errors {\
    message\
    }\
    amount\
    }}`;

  const getInvoiceSendQuery = (paymentRequest, walletId) => `
  mutation LnInvoicePaymentSend($input: LnInvoicePaymentInput!) {\
    lnInvoicePaymentSend(input: $input) {\
    status\
    errors {\
    message\
    path\
    code\
    }}}`;

  const generateCurlCommand = (query, type, paymentRequest = '', walletId = '') => {
    let requestBody = {
      query: query.trim(),
      variables: {}
    };

    const authHeader = authToken
      ? `--header 'Authorization: Bearer ${authToken}'`
      : "--header 'Authorization: Bearer <YOUR_AUTH_TOKEN_HERE>'";

    if (type === 'invoice') {
      requestBody.variables.input = {
        amount: amount.toString(),
        memo: memo,
        walletId: defaultWalletId,
      };
    } else if (type === 'feeProbe') {
      requestBody.variables.input = {
        paymentRequest: paymentRequest,
        walletId: defaultWalletId,   // You should use walletId argument passed to the function
      };
    } else if (type === 'lnInvoicePaymentSend') {
      requestBody.variables.input = {
        paymentRequest: paymentRequest,
        walletId: walletId
      };
    }

    let queryData = JSON.stringify(requestBody).replace(/\n/g, '');

    const command = `curl --request POST --header 'content-type: application/json' \\
    ${authHeader} \\
    --url '${apiEndpoint}' \\
    --data '${queryData}'`;

    if (type === 'wallet') {
      setCurlCommandWallet(command);
    } else if (type === 'invoice') {
      setCurlCommandInvoice(command);
    } else if (type === 'feeProbe') {
      setCurlCommandFeeProbe(command);
    } else if (type === 'lnInvoicePaymentSend') {
      setCurlCommandLnInvoicePayment(command);
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

  const fetchLnInvoicePaymentData = async () => {
    const query = getInvoiceSendQuery(paymentRequest, defaultWalletId);
    const variables = {
      input: {
        paymentRequest: paymentRequest,
        walletId: defaultWalletId
      }
    };

    try {
      const data = await handleAuthenticatedRequest(authToken, apiEndpoint, query, variables);
      setLnInvoicePaymentData(data);
      generateCurlCommand(query, 'lnInvoicePaymentSend', paymentRequest, defaultWalletId);
    } catch (error) {
      setErrorMessageLnInvoicePayment(error.message);
    }
  };

  const fetchFeeProbeData = async () => {
    const query = getFeeProbeQuery(paymentRequest, defaultWalletId);
    const variables = {
      input: {
        paymentRequest: paymentRequest,
        walletId: defaultWalletId,
      }
    };

    try {
      const data = await handleAuthenticatedRequest(authToken, apiEndpoint, query, variables);
      setFeeProbeData(data);  // <-- Set the feeProbeData with the response
      generateCurlCommand(query, 'feeProbe', paymentRequest, defaultWalletId);
    } catch (error) {
      setErrorMessageFetchFeeProbe(error.message);
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

  useEffect(() => {
    // This will be triggered whenever authToken, apiEndpoint, paymentRequest, or defaultWalletId changes
    const query = getFeeProbeQuery(paymentRequest, defaultWalletId);
    generateCurlCommand(query, 'feeProbe', paymentRequest, defaultWalletId);
  }, [authToken, apiEndpoint, paymentRequest, defaultWalletId]);

  useEffect(() => {
    const query = getInvoiceSendQuery(paymentRequest, defaultWalletId);
    generateCurlCommand(query, 'lnInvoicePaymentSend', paymentRequest, defaultWalletId);
  }, [authToken, apiEndpoint, paymentRequest, defaultWalletId]);

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

      {/* Display for FeeProbe */}
      <h2>Probe invoice fee</h2>
      <div>
        <label>
          Payment Request:
          <input
            type="text"
            value={paymentRequest}
            onChange={e => setPaymentRequest(e.target.value)}
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
      <button onClick={fetchFeeProbeData}>Probe Fee</button>
      {errorMessageFetchFeeProbe && <div style={{ color: 'red' }}>Error: {errorMessageFetchFeeProbe}</div>}
      {feeProbeData && <div><strong>Fee Probe Data:</strong> <pre>{JSON.stringify(feeProbeData, null, 2)}</pre></div>}

      <div style={{ marginTop: '20px' }}>
        <h3>cURL command to probe invoice fee:</h3>
        <pre style={{
          backgroundColor: 'auto',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap'
        }}>
          {curlCommandFeeProbe}
        </pre>
      </div>

      {/* Display for invoiceSend */}
      <h2>Pay an invoice</h2>
      <div>
        <label>
          Payment Request:
          <input
            type="text"
            value={paymentRequest}
            onChange={e => setPaymentRequest(e.target.value)}
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
      <button onClick={fetchLnInvoicePaymentData}>Send Payment</button>
      {errorMessageLnInvoicePayment && <div style={{ color: 'red' }}>Error: {errorMessageLnInvoicePayment}</div>}
      {lnInvoicePaymentData && <div><strong>Payment Data:</strong> <pre>{JSON.stringify(lnInvoicePaymentData, null, 2)}</pre></div>}

      <div style={{ marginTop: '20px' }}>
        <h3>cURL command to pay an invoice:</h3>
        <pre style={{
          backgroundColor: 'auto',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap'
        }}>
          {curlCommandLnInvoicePayment}
        </pre>
      </div>

    </div>
  );
}

export default AuthRequestButton;
