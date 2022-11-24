import { useState } from 'react';
import { createContext } from 'react';

const NoteMakerContext = createContext({});

export function NoteMakerProvider({ tradeService, children }) {
  const [makeActive, setMakeActive] = useState(false);
  const handleActive = () => {
    setMakeActive((t) => !t);
  };

  const handleSend = () => {};

  return (
    <NoteMakerContext.Provider
      value={{ makeActive, setMakeActive, handleActive }}
    >
      {children}
    </NoteMakerContext.Provider>
  );
}
