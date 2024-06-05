import { TonConnectButton } from '@tonconnect/ui-react';
import './App.css';
import { Profile } from './components/Profile.tsx';

function App() {
  return (
    <div className='container'>
      <TonConnectButton className='center-button'/>
      <Profile />
    </div>
  );
}

export default App;
