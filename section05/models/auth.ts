interface IAuthentication {
  email: string;
  password: string;
}
interface IUser {
  email: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: string;
  kind: string;
  localId: string;
  displayName: string;
}
interface IAuthReducer {
  user: IUser;
  status: 'loading' | 'idle';
  error: string | null;
}

export { IAuthentication, IUser, IAuthReducer };
