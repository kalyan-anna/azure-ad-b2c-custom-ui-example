import { RootLayout } from '@/components/RootLayout';
import '@/styles/globals.css';
import { authHelper } from '@/utils/auth.helper';
import { EventType, PublicClientApplication } from '@azure/msal-browser';
import type { AppProps } from 'next/app';
import { MsalProvider } from '@azure/msal-react';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const msalInstance = new PublicClientApplication(authHelper.getAuthConfig());

msalInstance.initialize().then(() => {
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }

  msalInstance.addEventCallback((event: any) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event?.payload?.account) {
      const account = event.payload.account;
      msalInstance.setActiveAccount(account);
    }
  });

  msalInstance.handleRedirectPromise().catch((error) => {
    console.log(error);
  });
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MsalProvider instance={msalInstance}>
      <div className={robotoMono.className}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </div>
    </MsalProvider>
  );
}
