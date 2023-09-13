// AuthRequestButton.jsx
import React, { useState, useEffect } from 'react';
import { handleAuthenticatedRequest } from './authRequests';
import { useAuth } from './AuthContext';

function AuthRequestButton() {
  const { authToken, setAuthToken } = useAuth();
  const [apiEndpoint, setApiEndpoint] = useState('https://api.staging.galoy.io/graphql');
  const [manualAuthToken, setManualAuthToken] = useState('');
  const [amount, setAmount] = useState(0);
  const [accountWalletId, setAccountWalletId] = useState('');
  const [paymentRequest, setPaymentRequest] = useState('');

  const [curlCommandWallet, setCurlCommandWallet] = useState('');
  const [curlCommandInvoice, setCurlCommandInvoice] = useState('');
  const [curlCommandFeeProbe, setCurlCommandFeeProbe] = useState('');
  const [curlCommandLnInvoicePayment, setCurlCommandLnInvoicePayment] = useState('');

  const [walletData, setWalletData] = useState(null);
  const [invoiceData, setInvoiceData] = useState(null);
  const [feeProbeData, setFeeProbeData] = useState(null);
  const [lnInvoicePaymentData, setLnInvoicePaymentData] = useState(null);

  const [errorMessageFetchWallet, setErrorMessageFetchWallet] = useState(null);
  const [errorMessageFetchInvoice, setErrorMessageFetchInvoice] = useState(null);
  const [errorMessageFetchFeeProbe, setErrorMessageFetchFeeProbe] = useState(null);
  const [errorMessageLnInvoicePayment, setErrorMessageLnInvoicePayment] = useState(null);

  const getWalletQuery = `
  query Me {
    me {
      defaultAccount {
        wallets {
          id
          walletCurrency
          balance
        }}}}`;

  const getInvoiceQuery = (amount, walletId) => `
mutation lnUsdInvoiceCreate($input: LnUsdInvoiceCreateInput!) {
  lnUsdInvoiceCreate(input: $input) {
    invoice {
      paymentRequest
      paymentHash
      paymentSecret
      satoshis
    }
    errors {
      message
    }}}`;

  const getFeeProbeQuery = (paymentRequest, walletId) => `
  mutation lnUsdInvoiceFeeProbe($input: LnUsdInvoiceFeeProbeInput!) {
    lnUsdInvoiceFeeProbe(input: $input) {
      errors {
        message
      }
      amount
    }}`;

  const getInvoiceSendQuery = (paymentRequest, walletId) => `
  mutation LnInvoicePaymentSend($input: LnInvoicePaymentInput!) {
    lnInvoicePaymentSend(input: $input) {
    status
    errors {
      message
      path
      code
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
        walletId: accountWalletId,
      };
    } else if (type === 'feeProbe') {
      requestBody.variables.input = {
        paymentRequest: paymentRequest,
        walletId: accountWalletId,
      };
    } else if (type === 'lnInvoicePaymentSend') {
      requestBody.variables.input = {
        paymentRequest: paymentRequest,
        walletId: walletId
      };
    }

    let queryData = JSON.stringify(requestBody).replace(/\n/g, '');

    const walletCommand = `curl -sS --request POST --header 'content-type: application/json' \\
    ${authHeader} \\
    --url '${apiEndpoint}' \\
    --data '{"query":"query me { me { defaultAccount { wallets { id walletCurrency }}}}", "variables":{}}' \\
 | jq '.data.me.defaultAccount.wallets[] | select(.walletCurrency == "USD") .id'`;

    const command = `curl --request POST --header 'content-type: application/json' \\
    ${authHeader} \\
    --url '${apiEndpoint}' \\
    --data '${queryData}'`;

    if (type === 'wallet') {
      setCurlCommandWallet(walletCommand);
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
      setWalletData(data);

      const btcWallet = data?.me?.defaultAccount?.wallets?.find(wallet => wallet.walletCurrency === "BTC");
      if (btcWallet?.id) {
        setAccountWalletId(btcWallet.id);
      }
      generateCurlCommand(getWalletQuery, 'wallet');
    } catch (error) {
      setErrorMessageFetchWallet(error.message);
    }
  };

  const fetchInvoiceData = async () => {
    const query = getInvoiceQuery(amount, accountWalletId);
    const variables = {
      input: {
        amount: amount.toString(),
        walletId: accountWalletId,
      }
    };

    try {
      const data = await handleAuthenticatedRequest(authToken, apiEndpoint, query, variables);
      setInvoiceData(data);
      generateCurlCommand(query, 'invoice');
    } catch (error) {
      setErrorMessageFetchInvoice(error.message);
    }
  };

  const fetchLnInvoicePaymentData = async () => {
    const query = getInvoiceSendQuery(paymentRequest, accountWalletId);
    const variables = {
      input: {
        paymentRequest: paymentRequest,
        walletId: accountWalletId
      }
    };

    try {
      const data = await handleAuthenticatedRequest(authToken, apiEndpoint, query, variables);
      setLnInvoicePaymentData(data);
      generateCurlCommand(query, 'lnInvoicePaymentSend', paymentRequest, accountWalletId);
    } catch (error) {
      setErrorMessageLnInvoicePayment(error.message);
    }
  };

  const fetchFeeProbeData = async () => {
    const query = getFeeProbeQuery(paymentRequest, accountWalletId);
    const variables = {
      input: {
        paymentRequest: paymentRequest,
        walletId: accountWalletId,
      }
    };

    try {
      const data = await handleAuthenticatedRequest(authToken, apiEndpoint, query, variables);
      setFeeProbeData(data);
      generateCurlCommand(query, 'feeProbe', paymentRequest, accountWalletId);
    } catch (error) {
      setErrorMessageFetchFeeProbe(error.message);
    }
  };

  useEffect(() => {
    // This will be triggered whenever authToken or apiEndpoint changes
    generateCurlCommand(getWalletQuery, 'wallet');
  }, [authToken, apiEndpoint]); // Listening to authToken and apiEndpoint changes

  useEffect(() => {
    // This will be triggered whenever authToken, apiEndpoint, amount or accountWalletId changes
    const query = getInvoiceQuery(amount, accountWalletId);
    generateCurlCommand(query, 'invoice');
  }, [authToken, apiEndpoint, amount, accountWalletId]); // Listening to these states changes

  useEffect(() => {
    // This will be triggered whenever authToken, apiEndpoint, paymentRequest, or accountWalletId changes
    const query = getFeeProbeQuery(paymentRequest, accountWalletId);
    generateCurlCommand(query, 'feeProbe', paymentRequest, accountWalletId);
  }, [authToken, apiEndpoint, paymentRequest, accountWalletId]);

  useEffect(() => {
    const query = getInvoiceSendQuery(paymentRequest, accountWalletId);
    generateCurlCommand(query, 'lnInvoicePaymentSend', paymentRequest, accountWalletId);
  }, [authToken, apiEndpoint, paymentRequest, accountWalletId]);

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

  const handleBtcWalletIdChange = (e) => {
    setAccountWalletId(e.target.value);
  };

  function AuthTokenInput({ value, onChange, onSet }) {
    return (
      <div>
        <input
          type="text"
          placeholder="Paste and set the authentication token"
          value={value}
          onChange={onChange}
          style={{ width: '50%', marginBottom: '10px' }}
        />
        <div><button onClick={onSet}>Set token</button></div>
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
      <div>The GraphQL endpoint to connect to:</div>
      <input
        type="text"
        value={apiEndpoint}
        onChange={handleApiEndpointChange}
        style={{ width: '50%', marginBottom: '10px' }}
      />
      <div>The following methods require a valid auth token set in the header as a bearer token:</div>
      {authTokenSection}

      {/* Display for WalletData */}
      <div style={{ marginTop: '40px' }}></div>
      <h3>Get the wallet IDs and balances</h3>
      <button onClick={fetchWalletData}>Get the wallet IDs</button>
      {errorMessageFetchWallet && <div style={{ color: 'red' }}>Error: {errorMessageFetchWallet}</div>}
      {walletData && <div><strong>Wallet Data:</strong> <pre>{JSON.stringify(walletData, null, 2)}</pre></div>}

      <div style={{ marginTop: '20px', marginBottom: '40px' }}>
        <h4>cURL command to get the USD wallet ID:</h4>
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
      <h3>Generate a Stablesats invoice</h3>
      <div>
        <div>
          <div> Set the variables:</div>
          <label>
            Amount (USD cents):
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              style={{ marginLeft: '10px', marginRight: '20px' }}
            />
          </label>
        </div>
        <label>
          USD wallet ID:
          <input
            type="text"
            value={accountWalletId}
            onChange={handleBtcWalletIdChange}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <button onClick={fetchInvoiceData}>Create a Stablesats invoice</button>
      {errorMessageFetchInvoice && <div style={{ color: 'red' }}>Error: {errorMessageFetchInvoice}</div>}
      {invoiceData && <div><strong>Invoice Data:</strong> <pre>{JSON.stringify(invoiceData, null, 2)}</pre></div>}

      <div style={{ marginTop: '20px', marginBottom: '40px' }}>
        <h4>cURL command to generate a Stablesats invoice:</h4>
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
      <h3>Probe invoice fee</h3>
      <div>
        <div> Set the variables:</div>
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
        </div>
        <label>
          USD wallet ID:
          <input
            type="text"
            value={accountWalletId}
            onChange={handleBtcWalletIdChange}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <button onClick={fetchFeeProbeData}>Probe fee</button>
      {errorMessageFetchFeeProbe && <div style={{ color: 'red' }}>Error: {errorMessageFetchFeeProbe}</div>}
      {feeProbeData && <div><strong>Fee Probe Data:</strong> <pre>{JSON.stringify(feeProbeData, null, 2)}</pre></div>}

      <div style={{ marginTop: '20px', marginBottom: '40px' }}>
        <h4>cURL command to probe invoice fee:</h4>
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
      <h3>Pay an invoice</h3>
      <div>
      <div> Set the variables:</div>
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
        </div>
        <label>
          USD wallet ID:
          <input
            type="text"
            value={accountWalletId}
            onChange={handleBtcWalletIdChange}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <button onClick={fetchLnInvoicePaymentData}>Send payment</button>
      {errorMessageLnInvoicePayment && <div style={{ color: 'red' }}>Error: {errorMessageLnInvoicePayment}</div>}
      {lnInvoicePaymentData && <div><strong>Payment Data:</strong> <pre>{JSON.stringify(lnInvoicePaymentData, null, 2)}</pre></div>}

      <div style={{ marginTop: '20px', marginBottom: '40px' }}>
        <h4>cURL command to pay an invoice:</h4>
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
