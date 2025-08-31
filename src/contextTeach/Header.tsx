import { useTheme, useUser } from "../context/AppContext";

const Header: React.FC = () => { 
  const { theme, toggleTheme } = useTheme();
  const { logout , user} = useUser()
  return (
    <header className={`p-4 border-b-2 ${
       theme === 'dark' 
        ? 'bg-gray-800 text-white border-gray-600' 
        : 'bg-white text-gray-800 border-gray-200'
     }`}>
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">My TypeScript App</h1>
        
        <div className="flex items-center gap-4">
          <span>Welcome,{user.name}!</span>
          
          <button
           onClick={toggleTheme}
            className={`px-3 py-1 rounded transition-colors  ${
            theme === 'dark' 
            ? 'bg-gray-800 text-white border-gray-600' 
             : 'bg-white text-gray-800 border-gray-200'
           } `}
            
          >
             {theme === 'light' ? '🌙' : '☀'}
          </button>
            <button
          onClick={logout}
              className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
        
        </div>
      </div>
    </header>
  );
};

export default Header