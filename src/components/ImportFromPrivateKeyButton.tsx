import React, { useState } from 'react';
import { Account, Ed25519PrivateKey } from "@aptos-labs/ts-sdk";
import './ImportFromPrivateKeyButton.css';
import '../App.css';

export function ImportFromPrivateKeyButton() {
  const [privateKey, setPrivateKey] = useState("");
  const [accountAddress, setAccountAddress] = useState("");

  const handlePrivateKeyChange = (event) => {
    setPrivateKey(event.target.value);
  }

  const restoreWallet = async (event) => {
    event.preventDefault();

    const privKey = new Ed25519PrivateKey(privateKey);
    const wallet: Account = Account.fromPrivateKey({ privateKey: privKey });
    setAccountAddress(wallet.accountAddress.toString());
  };

  return (
    <div className="center-button">
      <form onSubmit={restoreWallet}>
      <div>
        <label>
          Private Key:
          <input type="text" value={privateKey} onChange={handlePrivateKeyChange} />
        </label>
      </div>
      <button disabled={!privateKey} className="import-from-private-key-button">Import private key</button>
      </form>
      {accountAddress && (
        <div>
          <p>Account address: {accountAddress}</p>
        </div>
      )}
    </div>
  );
};