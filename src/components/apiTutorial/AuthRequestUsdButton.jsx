// AuthRequestButton.jsx
import React, { useState, useEffect } from 'react';
import { handleAuthenticatedRequest } from './authRequests';
import { useAuth } from './AuthContext';

function AuthRequestButton() {
  const { authToken, setAuthToken } = useAuth();
  const [apiEndpoint, setApiEndpoint] = useState('https://api.staging.galoy.io/graphql');
  const [manualAuthToken, setManualAuthToken] = useState('');
  const [amount, setAmount] = useState(100);
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

  const getWalletQuery = `\
  query Me {
    me {
      defaultAccount {
        wallets {
          id
          walletCurrency
          balance
        }
      }
    }
  }`;

  const getInvoiceQueryText = `\
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
    }
  }
}`;
  const getInvoiceQuery = (amount, walletId) => getInvoiceQueryText

  const getFeeProbeQueryText = `\
mutation lnUsdInvoiceFeeProbe($input: LnUsdInvoiceFeeProbeInput!) {
  lnUsdInvoiceFeeProbe(input: $input) {
    errors {
      message
    }
    amount
  }
}`;
  const getFeeProbeQuery = (paymentRequest, walletId) => getFeeProbeQueryText

  const getInvoiceSendQueryText = `\
mutation LnInvoicePaymentSend($input: LnInvoicePaymentInput!) {
  lnInvoicePaymentSend(input: $input) {
    status
    errors {
      message
      path
      code
    }
  }
}`;
  const getInvoiceSendQuery = (paymentRequest, walletId) => getInvoiceSendQueryText

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

  const handleWalletIdChange = (e) => {
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
      <h3>Get the wallet IDs and check the balances</h3>
      <div>Can run this query at any stage to confirm the change in the balances.</div>
      <div>The "BTC" wallet balance is denominated in satoshis.</div>
      <div>The "USD" wallet balance is in cents.</div>
      <div style={{ marginTop: '20px' }}></div>

      <div style={{ fontWeight: 'bold' }}>The body of the GraphQL request:</div>
      <pre style={{ marginLeft: '10px' }}>{getWalletQuery}</pre>
      <button onClick={fetchWalletData}>Send the request</button>
      {errorMessageFetchWallet && <div style={{ color: 'red' }}>Error: {errorMessageFetchWallet}</div>}
      {walletData && <div><strong>Response:</strong> <pre style={{ marginLeft: '10px' }}>{JSON.stringify(walletData, null, 2)}</pre></div>}

      <div style={{ marginTop: '20px', marginBottom: '40px' }}>
        <div style={{ fontWeight: 'bold' }}>curl command to get the USD wallet ID:</div>
        <pre style={{
          backgroundColor: 'auto',
          padding: '10px',
          marginLeft: '10px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap'
        }}>
          {curlCommandWallet}
        </pre>
      </div>

      {/* Display for InvoiceData */}
      <h3>Generate a Stablesats invoice</h3>
      <div>Using Stablesats a merchant can generate invoices denominated in USD cents.</div>
      <div>The satoshi amount of the invoice will reflect the current USD/BTC exchange rate and the balance will be kept at the dollar value.</div>
      <div style={{ marginTop: '20px' }}></div>
      <div>
        <div>
          <div style={{ fontWeight: 'bold' }}>Set the variables</div>
          <label>
            <div>Amount (USD cents):</div>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              style={{ marginLeft: '10px', width: '50%' }}
            />
          </label>
        </div>
        <label>
          <div>USD wallet ID:</div>
          <input
            type="text"
            value={accountWalletId}
            onChange={handleWalletIdChange}
            style={{ marginLeft: '10px', width: '50%' }}
            placeholder="Paste the USD wallet ID from the response above"
          />
        </label>
      </div>
      <div style={{ marginTop: '20px' }}></div>
      <div style={{ fontWeight: 'bold' }}>The body of the GraphQL request:</div>
      <pre style={{ marginLeft: '10px' }}>{getInvoiceQueryText}</pre>
      <button onClick={fetchInvoiceData}>Create a Stablesats invoice</button>
      {errorMessageFetchInvoice && <div style={{ color: 'red' }}>Error: {errorMessageFetchInvoice}</div>}
      {invoiceData && <div><strong>Response:</strong> <pre style={{ marginLeft: '10px' }}>{JSON.stringify(invoiceData, null, 2)}</pre></div>}

      <div style={{ marginTop: '20px', marginBottom: '40px' }}>
        <div style={{ fontWeight: 'bold' }}>curl command to generate a Stablesats invoice:</div>
        <pre style={{
          backgroundColor: 'auto',
          padding: '10px',
          marginLeft: '10px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap'
        }}>
          {curlCommandInvoice}
        </pre>
      </div>

      {/* Display for FeeProbe */}
      <h3>Probe invoice fee</h3>
      <div>Estimate the cost of paying a lightning invoice.</div>
      <div>Payments to an other Blink user and to nodes with a direct channel are free.</div>
      <div style={{ marginTop: '20px' }}></div>
      <div>
        <div style={{ fontWeight: 'bold' }}>Set the variables</div>
        <div>
          <label>
            <div>Invoice</div>
            <input
              type="text"
              value={paymentRequest}
              onChange={e => setPaymentRequest(e.target.value)}
              style={{ marginLeft: '10px', width: '50%' }}
              placeholder="Paste a lightning invoice"
            />
          </label>
        </div>
        <label>
          <div>USD wallet ID:</div>
          <input
            type="text"
            value={accountWalletId}
            onChange={handleWalletIdChange}
            style={{ marginLeft: '10px', width: '50%' }}
            placeholder="Paste the USD wallet ID from the response above"
          />
        </label>
      </div>
      <div style={{ marginTop: '20px' }}></div>
      <div style={{ fontWeight: 'bold' }}>The body of the GraphQL request:</div>
      <pre style={{ marginLeft: '10px' }}>{getFeeProbeQueryText}</pre>
      <button onClick={fetchFeeProbeData}>Probe fee</button>
      {errorMessageFetchFeeProbe && <div style={{ color: 'red' }}>Error: {errorMessageFetchFeeProbe}</div>}
      {feeProbeData && <div><strong>Response:</strong> <pre style={{ marginLeft: '10px' }}>{JSON.stringify(feeProbeData, null, 2)}</pre></div>}

      <div style={{ marginTop: '20px', marginBottom: '40px' }}>
        <h4>cURL command to probe invoice fee:</h4>
        <pre style={{
          backgroundColor: 'auto',
          padding: '10px',
          marginLeft: '10px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap'
        }}>
          {curlCommandFeeProbe}
        </pre>
      </div>

      {/* Display for invoiceSend */}
      <h3>Pay an invoice</h3>
      <div>Pay a BOLT11 invoice from your Stablesats balance</div>
      <div style={{ marginTop: '20px' }}></div>
      <div>
        <div style={{ fontWeight: 'bold' }}>Set the variables</div>
        <div>
          <label>
            <div>Invoice</div>
            <input
              type="text"
              value={paymentRequest}
              onChange={e => setPaymentRequest(e.target.value)}
              style={{ marginLeft: '10px', width: '50%' }}
              placeholder="Paste a lightning invoice"
            />
          </label>
        </div>
        <label>
          <div>USD wallet ID:</div>
          <input
            type="text"
            value={accountWalletId}
            onChange={handleWalletIdChange}
            style={{ marginLeft: '10px', width: '50%' }}
            placeholder="Paste the USD wallet ID from the response above"
          />
        </label>
      </div>
      <div style={{ marginTop: '20px' }}></div>
      <div style={{ fontWeight: 'bold' }}>The body of the GraphQL request:</div>
      <pre style={{ marginLeft: '10px' }}>{getInvoiceSendQueryText}</pre>
      <button onClick={fetchLnInvoicePaymentData}>Send payment</button>
      {errorMessageLnInvoicePayment && <div style={{ color: 'red' }}>Error: {errorMessageLnInvoicePayment}</div>}
      {lnInvoicePaymentData && <div><strong>Response:</strong> <pre style={{ marginLeft: '10px' }}>{JSON.stringify(lnInvoicePaymentData, null, 2)}</pre></div>}

      <div style={{ marginTop: '20px', marginBottom: '40px' }}>
        <div style={{ fontWeight: 'bold' }}>curl command to pay an invoice:</div>
        <pre style={{
          backgroundColor: 'auto',
          padding: '10px',
          marginLeft: '10px',
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
