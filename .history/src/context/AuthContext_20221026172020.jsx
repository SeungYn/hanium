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
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const context = useMemo(() => ({}), []);

  const onLogin = async ({ loginId, password }) => {
    await authService
      .headerTokenLogin(loginId, password)
      .then((data) => {
        console.log(data);
        tokenStorage.saveUser({
          memberId: data.memberId,
          nickname: data.nickname,
        });
        setUser({ memberId: data.memberId, nickName: data.nickname });
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
      console.log('err');
      console.log(err);
      setError(err);
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

  return (
    <AuthContext.Provider value={context}>
      {user ? (
        children
      ) : (
        <>
          {error && <CustomError error={error} onError={setError} />}
          <Login authService={authService} onLogin={onLogin} />
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
