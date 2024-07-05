import React, { useState } from 'react';
import { Account } from "@aptos-labs/ts-sdk";
import { generateMnemonic } from 'bip39';
import './CreateAccountButton.css';
import '../App.css';

export function CreateAccountButton() {
  const [mnemonic, setMnemonic] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const handleClick = () => {
    const mnemonic = generateMnemonic();
    setMnemonic(mnemonic);
    const wallet: Account = Account.fromDerivationPath({ path: "m/44'/637'/0'/0'/0", mnemonic });
  };

  return (
    <div className="center-button">
      <button className="create-account-button" onClick={handleClick}>Create Account</button>
      <div>{mnemonic && <div>{mnemonic}</div>}</div>
    </div>
  );
};