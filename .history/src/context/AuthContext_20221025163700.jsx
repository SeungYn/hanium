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
import Header from '../components/Header/Header';
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
        tokenStorage.setUser({
          memberId: data.memberId,
          nickname: data.nickname,
        });
        setUser({ memberId: data.memberId, nickname: data.nickname });
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = useCallback(
    async () =>
      authService.logout().then(() => {
        setUser(undefined);
        setUserNickName(undefined);
      }),
    [authService]
  );

  return (
    <AuthContext.Provider value={context}>
      {user ? (
        children
      ) : (
        <>
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
