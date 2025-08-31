import { createContext, useContext, useState, type ReactNode } from "react";

interface Users {
  name: string;
  email: string;
  password: string;
  isSignUp: boolean;
}

interface UserContextType {
  user: Users;
  signUp: (name: string, email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logOut: () => void;
}

interface AppContextType {
  users: UserContextType;
}

interface ProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Users>({
    name: "Guest",
    email: "",
    password: "",
    isSignUp: false,
  });

  const signUp = (name: string, email: string, password: string): void => {
    setUser({ name, email, password, isSignUp: true });
  };

  const login = (email: string, password: string): void => {
    if (email === user.email && password === user.password) {
      setUser({ ...user, isSignUp: true });
    } else {
      alert("invalid credentials");
    }
  };

  const logOut = () => {
    setUser({ name: "Guest", email: "", password: "", isSignUp: false });
  };
  const value: AppContextType = {
    users: { user, signUp, login, logOut },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};

export const useUser = () => useAppContext().users;
