import { createContext, useContext, useState } from 'react';

const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [urlData, setUrlData] = useState([]);

  return (
    <UrlContext.Provider value={{ urlData, setUrlData }}>
      {children}
    </UrlContext.Provider>
  );
};

export const useUrl = () => useContext(UrlContext);
