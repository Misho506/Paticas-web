import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { PathObject } from '../utils/types';

interface RouteContextType {
  path: PathObject[];
  setPath: (path: PathObject[]) => void;
}

const RouteContext = createContext<RouteContextType | undefined>(undefined);

export const RouteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state with data from localStorage or default values

  // Booking
  const [path, setPath] = useState<PathObject[]>(() => {
    const routeStoreData = localStorage.getItem('RouteStoreData');
    if (routeStoreData) {
      const parsedData: { path: PathObject[] } = JSON.parse(routeStoreData);
      return parsedData.path || [];
    } else {
      return [];
    }
  });

  // Update localStorage whenever selected values change
  useEffect(() => {
    const routeStoreData = {
      setPath
    };
    localStorage.setItem('RouteStoreData', JSON.stringify(routeStoreData));
  }, [setPath]);

  return (
    <RouteContext.Provider
      value={{
        path,
        setPath
      }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => {
  const context = useContext(RouteContext);
  if (context === undefined) {
    throw new Error('useRoute must be used within a RouteProvider');
  }
  return context;
};
