import React, { useState } from 'react';
import { Account } from "@aptos-labs/ts-sdk";
import { validateMnemonic } from 'bip39';
import './ImportFromMnemonicButton.css';
import '../App.css';

export function ImportFromMnemonicButton() {
  const [mnemonic, setMnemonic] = useState("");
  const [accountAddress, setAccountAddress] = useState("");

  const handleMnemonicChange = (event) => {
    setMnemonic(event.target.value);
  }

  const restoreWallet = async (event) => {
    event.preventDefault();

    if (!validateMnemonic(mnemonic)) {
      alert('Invalid mnemonic');
      return;
    }

    const wallet: Account = Account.fromDerivationPath({ path: "m/44'/637'/0'/0'/0", mnemonic });
    setAccountAddress(wallet.accountAddress.toString());
  };

  return (
    <div className="center-button">
      <form onSubmit={restoreWallet}>
      <div>
        <label>
          Mnemonic:
          <input type="text" value={mnemonic} onChange={handleMnemonicChange} />
        </label>
      </div>
      <button className="import-from-mnemonic-button" type="submit" disabled={!mnemonic.trim()}>Import mnemonic</button>
      </form>
      {accountAddress && (
        <div>
          <p>Account address: {accountAddress}</p>
        </div>
      )}
    </div>
  );
};