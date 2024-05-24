export interface IAuthContext {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
  isLoading: boolean;
  setIsLoading: (newState: boolean) => void;
}