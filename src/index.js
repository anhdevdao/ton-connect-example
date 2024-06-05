import React from 'react';
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const manifestUrl = "https://ton-connect-example.vercel.app/tonconnect-manifest.json";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <App />
    </TonConnectUIProvider>
  </div>
);
