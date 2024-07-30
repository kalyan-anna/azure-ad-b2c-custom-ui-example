import { Configuration } from '@azure/msal-browser';

const CLIENT_ID = 'f686da54-7b3f-4030-b450-2d8720f38cb5 offline_access openid';
export const API_SCOPE = 'https://contoso.com/.default';

function getAuthConfig() {
  return {
    auth: {
      clientId: CLIENT_ID,
      authority: 'https://login.microsoftonline.com/6c746cb8-8900-4bfe-8511-3a97f021f957',
      redirectUri: '/',
      postLogoutRedirectUri: '/',
      knownAuthorities: [],
      navigateToLoginRequestUrl: true,
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
