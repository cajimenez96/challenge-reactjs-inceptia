export interface IAuthContext {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
}