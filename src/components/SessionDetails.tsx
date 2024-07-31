import { msalInstance } from '@/pages/_app';
import { useAccount, useIsAuthenticated } from '@azure/msal-react';
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const SessionDetails = () => {
  const accountInfo = useAccount();
  const isAuthenticated = useIsAuthenticated();
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    async function fetchAccessToken() {
      const account = msalInstance.getActiveAccount();
      if (!account) {
        throw 'account not found';
      }
      const response = await msalInstance.acquireTokenSilent({
        account: account,
        scopes: [
          'https://examplecustomuiauthorg.onmicrosoft.com/9df3026b-7479-45b9-a626-b327220a3722/task.read https://examplecustomuiauthorg.onmicrosoft.com/9df3026b-7479-45b9-a626-b327220a3722/tasks.write offline_access openid',
        ],
      });
      setAccessToken(response.accessToken);
    }
    fetchAccessToken();
  }, [isAuthenticated]);

  const result = JSON.stringify(
    {
      isAuthenticated: isAuthenticated,
      name: accountInfo?.name,
      username: accountInfo?.username,
      accessToken: accessToken,
      idToken: accountInfo?.idToken,
      idTokenClaims: accountInfo?.idTokenClaims,
    },
    null,
    2
  );

  return (
    <section className='mt-16 bg-zinc-300 rounded p-4'>
      <h4 className='mb-2 text-2xl font-bold'>Session Details:</h4>
      {typeof window !== 'undefined' && (
        <SyntaxHighlighter language='json' wrapLines={true} wrapLongLines={true}>
          {result}
        </SyntaxHighlighter>
      )}
    </section>
  );
};
