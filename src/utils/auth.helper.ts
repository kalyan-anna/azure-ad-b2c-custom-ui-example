import { Configuration } from '@azure/msal-browser';

const CLIENT_ID = 'f686da54-7b3f-4030-b450-2d8720f38cb5';
export const API_SCOPE = 'https://contoso.com/.default';

function getAuthConfig() {
  return {
    auth: {
      clientId: CLIENT_ID,
      authority:
        'https://examplecustomuiauthorg.b2clogin.com/examplecustomuiauthorg.onmicrosoft.com/B2C_1_sign-in-default-user-flow',
      redirectUri: '/authorize',
      postLogoutRedirectUri: '/',
      knownAuthorities: ['examplecustomuiauthorg.b2clogin.com'],
      navigateToLoginRequestUrl: false,
    },
    cache: {
      // Optional
      cacheLocation: 'localStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
  } as Configuration;
}

export const authHelper = {
  getAuthConfig,
};
