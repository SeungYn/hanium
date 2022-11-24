import { useContext, useState } from 'react';
import { createContext } from 'react';

const NoteMakerContext = createContext({});

export function NoteMakerProvider({ tradeService, children }) {
  const [makeActive, setMakeActive] = useState(false);
  const handleActive = () => {
    console.log('click');
    setMakeActive((t) => !t);
  };

  const handleSend = async (text) => console.log(1);
  const handleNoteListget = async () => tradeService.getNoteList();
  const handleNoteget = async (id) => tradeService.getNoteById(id);

  return (
    <NoteMakerContext.Provider
      value={{
        makeActive,
        setMakeActive,
        handleActive,
        handleNoteget,
        handleNoteListget,
      }}
    >
      {children}
    </NoteMakerContext.Provider>
  );
}

export const useNoteContext = () => useContext(NoteMakerContext);
