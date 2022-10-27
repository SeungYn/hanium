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

const AuthContext = createContext({});

const contextRef = createRef();

export function AuthProvider({ authService, authErrorEventBus, children }) {
  const [user, setUser] = useState('');
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState('');
  const [userNickName, setUserNickName] = useState(undefined);

  const context = useMemo(() => ({}), []);

  const onError = (error) => setError();
  return (
    <AuthContext.Provider value={context}>
      {user ? children : <></>}
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
