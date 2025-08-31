// import React, { createContext, useContext, useState, type ReactNode } from 'react';

// // 1. Define types for context values
// interface User {
//   name: string;
//   isLoggedIn: boolean;
// }

// interface ThemeContextType {
//   theme: 'light' | 'dark';
//   toggleTheme: () => void;
// }

// interface UserContextType {
//   user: User;
//   login: (name: string) => void;
//   logout: () => void;
// }
// interface AppContextType {
//   themes: ThemeContextType;
//   users: UserContextType;
// }

// interface ProviderProps {
//   children: ReactNode;
// }

// const AppContext = createContext<AppContextType | undefined>(undefined);

// export const AppProvider: React.FC<ProviderProps> = ({ children }) => {
//   const [theme, setTheme] = useState<'light' | 'dark'>('light');
//   const [user, setUser] = useState<User>({ name: 'Guest', isLoggedIn: false });
  
//   const toggleTheme = (): void => {
//     setTheme(prev => prev === 'light' ? 'dark' : 'light');
//   };
  
//   const login = (name: string): void => {
//     setUser({ name, isLoggedIn: true });
//   };
  
//   const logout = (): void => {
//     setUser({ name: 'Guest', isLoggedIn: false });
//   };
  
//   const value: AppContextType = {
//     themes: { theme, toggleTheme },
//     users: { user, login, logout }
//   };
  
//   return (
//     <AppContext.Provider value={value}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = (): AppContextType => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error('useAppContext must be used within AppProvider');
//   }
//   return context;
// };

// export const useTheme = () => useAppContext().themes;
// export const useUser = () => useAppContext().users;

// // 5. Typed component props interfaces
// interface CardProps {
//   title: string;
//   content: string;
// }

// // 6. Components that consume context
// const Header: React.FC = () => {
//   const { theme, toggleTheme } = useTheme();
//   const { user, logout } = useUser();
  
//   return (
//     <header className={`p-4 border-b-2 ${
//       theme === 'dark' 
//         ? 'bg-gray-800 text-white border-gray-600' 
//         : 'bg-white text-gray-800 border-gray-200'
//     }`}>
//       <div className="flex justify-between items-center max-w-4xl mx-auto">
//         <h1 className="text-2xl font-bold">My TypeScript App</h1>
        
//         <div className="flex items-center gap-4">
//           <span>Welcome, {user.name}!</span>
          
//           <button
//             onClick={toggleTheme}
//             className={`px-3 py-1 rounded transition-colors ${
//               theme === 'dark'
//                 ? 'bg-gray-600 hover:bg-gray-500'
//                 : 'bg-gray-200 hover:bg-gray-300'
//             }`}
//             aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
//           >
//             {theme === 'light' ? '🌙' : '☀'}
//           </button>
          
//           {user.isLoggedIn && (
//             <button
//               onClick={logout}
//               className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// const LoginForm: React.FC = () => {
//   const { login } = useUser();
//   const { theme } = useTheme();
//   const [name, setName] = useState<string>('');
  
//   const handleSubmit = (e: React.MouseEvent | React.KeyboardEvent): void => {
//     e.preventDefault();
//     if (name.trim()) {
//       login(name);
//       setName('');
//     }
//   };
  
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
//     if (e.key === 'Enter') {
//       handleSubmit(e);
//     }
//   };
  
//   return (
//     <div className="flex gap-2 items-center">
//       <input
//         type="text"
//         value={name}
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
//         onKeyDown={handleKeyDown}
//         placeholder="Enter your name"
//         className={`px-3 py-2 rounded border transition-colors ${
//           theme === 'dark'
//             ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
//             : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
//         }`}
//       />
//       <button
//         onClick={handleSubmit}
//         className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
//       >
//         Login
//       </button>
//     </div>
//   );
// };

// const Card: React.FC<CardProps> = ({ title, content }) => {
//   const { theme } = useTheme();
  
//   return (
//     <div className={`p-4 rounded transition-colors ${
//       theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
//     }`}>
//       <h4 className="font-semibold mb-2">{title}</h4>
//       <p className="text-sm opacity-75">{content}</p>
//     </div>
//   );
// };

// const MainContent: React.FC = () => {
//   const { theme } = useTheme();
//   const { user } = useUser();
  
//   const cardData: CardProps[] = [
//     { title: 'Dashboard Stats', content: 'View your analytics and metrics here' },
//     { title: 'Recent Activity', content: 'Check your latest actions and updates' },
//     { title: 'Settings', content: 'Customize your experience and preferences' }
//   ];
  
//   return (
//     <main className={`flex-1 p-8 transition-colors ${
//       theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'
//     }`}>
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
        
        {!user.isLoggedIn ? (
          <div className={`p-6 rounded-lg shadow-sm transition-colors ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className="text-xl mb-4">Please log in to continue</h3>
            <LoginForm />
          </div>
        ) : (
          <div className={`p-6 rounded-lg shadow-sm transition-colors ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className="text-xl mb-4">Hello, {user.name}!</h3>
            <p className="mb-6 opacity-75">
              You are logged in and can see this protected content.
              Current theme: <strong className="capitalize">{theme}</strong>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cardData.map((card, index) => (
                <Card 
                  key={index}
                  title={card.title}
                  content={card.content}
                />
              ))}
            </div>
          </div>
        )}
//       </div>
//     </main>
//   );
// };

// // 7. Main App component with combined providers
// const App: React.FC = () => {
//   return (
//   <AppProvider>
//       <div className="min-h-screen flex flex-col transition-colors">
//         <Header />
//         <MainContent />
//       </div>
//     </AppProvider>
//   );
// };

// export default App;

