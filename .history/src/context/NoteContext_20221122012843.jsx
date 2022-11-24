import { createContext } from 'react';

const NoteMakerContext = createContext({});

export function NoteMakerProvider({ tradeService, children }) {
  return <NoteMakerContext.Provider>{children}</NoteMakerContext.Provider>;
}
