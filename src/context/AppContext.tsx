import React, { createContext, useContext, useState, type ReactNode } from 'react';


interface User {
  name: string;
  isLoggedIn: boolean;
}

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

interface UserContextType {
  user: User;
  login: (name: string) => void;
  logout: () => void;
}
interface AppContextType {
  themes: ThemeContextType;
  users: UserContextType;
}

interface ProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [user, setUser] = useState<User>({ name: 'Guest', isLoggedIn: false });
  
  const toggleTheme = (): void => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
    
  };
  
  const login = (name: string): void => {
    setUser({ name, isLoggedIn: true });
  };
  
  const logout = (): void => {
    setUser({ name: 'Guest', isLoggedIn: false });
  };
  
  const value: AppContextType = {
    themes: { theme, toggleTheme },
    users: { user, login, logout }
  };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const useTheme = () => useAppContext().themes;
export const useUser = () => useAppContext().users;
