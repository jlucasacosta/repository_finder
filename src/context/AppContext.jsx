import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [userUrl, setUserUrl] = useState('');
  const [repos, setRepos] = useState([]);
  const [repoUrl, setRepoUrl] = useState([]);

  return (
    <AppContext.Provider value={{ userUrl, setUserUrl, repos, setRepos, repoUrl, setRepoUrl }}>
      {children}
    </AppContext.Provider>
  );
}
