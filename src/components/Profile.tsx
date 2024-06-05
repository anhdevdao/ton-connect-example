import { useTonAddress } from '@tonconnect/ui-react';
import React from 'react';

export function Profile() {
  const userFriendlyAddress = useTonAddress();

  return (
      userFriendlyAddress && (
          <div>
              <div>User-friendly address: {userFriendlyAddress}</div>
          </div>
      )
  );
};