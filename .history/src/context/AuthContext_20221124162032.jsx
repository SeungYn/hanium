import {
  createContext,
  createRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import ReadPopup from '../components/ReadPopup/ReadPopup';

import Login from '../pages/login/Login';

const AuthContext = createContext({});

const contextRef = createRef();

export function AuthProvider({
  authService,
  authErrorEventBus,
  children,
  tokenStorage,
}) {
  const [user, setUser] = useState(1);
  const [error, setError] = useState(null);

  const onLogin = async ({ loginId, password }) => {
    await authService
      .headerTokenLogin(loginId, password)
      .then((data) => {
        console.log(data);
        tokenStorage.saveUser({
          memberId: data.memberId,
          nickname: data.nickname,
        });
        setUser({ memberId: data.memberId, nickname: data.nickname });
        console.log(tokenStorage.getUser());
        return;
      })
      .catch((error) => {
        setError(error);
      });
  };

  const logout = useCallback(
    async () =>
      await authService.logout().then(() => {
        setUser(undefined);
      }),
    [authService]
  );

  useEffect(() => {
    authErrorEventBus.listen((err) => {
      setUser(undefined);
      authService.logout();
    });
  }, [authErrorEventBus]);

  useEffect(() => {
    if (tokenStorage.getUser()) {
      setUser({ ...tokenStorage.getUser() });

      //nav('/');
    }

    //setUser({ token: localStorage.getItem('TOKEN') });
  }, []);

  const context = useMemo(
    () => ({ error, setError, user, logout }),
    [user, error, setError, logout]
  );

  return (
    <AuthContext.Provider value={context}>
      {user ? (
        children
      ) : (
        <>
          {error && (
            <ReadPopup content={error} onHandler={setError} type={'error'} />
          )}
          <Login
            authService={authService}
            onLogin={onLogin}
            setError={setError}
          />
        </>
      )}
    </AuthContext.Provider>
  );
}

export class AuthErrorEventBus {
  listen(callback) {
    this.callback = callback;
  }
  notify(error) {
    this.callback(error);
  }
}

export default AuthContext;
export const fetchToken = () => contextRef.current;
export const useAuth = () => useContext(AuthContext);
