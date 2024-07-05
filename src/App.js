import { TonConnectButton } from '@tonconnect/ui-react';
import './App.css';
import { Profile } from './components/Profile.tsx';
import { CreateAccountButton } from './components/CreateAccountButton.tsx';
import { ImportFromMnemonicButton } from './components/ImportFromMnemonicButton.tsx';
import { ImportFromPrivateKeyButton } from './components/ImportFromPrivateKeyButton.tsx';

function App() {
  return (
    <div className='container'>
      <div>
        <p>TON:</p>
        <TonConnectButton className='center-button' />
        <Profile />
      </div>
      <div>
        <p>APTOS:</p>
        <CreateAccountButton />
        <ImportFromMnemonicButton />
        <ImportFromPrivateKeyButton />
      </div>
    </div>
  );
}

export default App;
