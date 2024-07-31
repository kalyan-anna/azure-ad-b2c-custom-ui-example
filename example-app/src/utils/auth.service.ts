import { InteractionRequiredAuthError, IPublicClientApplication, SilentRequest } from '@azure/msal-browser';

class AuthService {
  private instance: IPublicClientApplication | undefined;

  setInstance(instance: IPublicClientApplication | undefined) {
    this.instance = instance;
  }

  async acquireAccessToken(): Promise<{
    accessToken: string;
  }> {
    const activeAccount = useAuthState.getState().activeAccount;

    if (this.instance === undefined || activeAccount === undefined) {
      throw new Error('Auth service not ready');
    }

    const accessRequest: SilentRequest = {
      scopes: [config.AUTH_SCOPE],
      account: activeAccount,
    };

    try {
      const { accessToken } = await this.instance.acquireTokenSilent(accessRequest);
      return { accessToken };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      if (error instanceof InteractionRequiredAuthError) {
        await this.instance.acquireTokenRedirect(accessRequest);
        return { accessToken: '' };
      } else {
        throw error;
      }
    }
  }
}

const authService = new AuthService();
export { authService };
