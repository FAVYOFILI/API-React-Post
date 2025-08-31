import { useState } from "react";
import { useTheme, useUser } from "../context/AppContext";

const LoginForm: React.FC = () => {
   const { login } = useUser();
  const { theme } = useTheme();
const [name, setName] = useState<string>('');
  
  const handleSubmit = (e: React.MouseEvent | React.KeyboardEvent): void => {
    e.preventDefault();
    if (name.trim()) {
      login(name);
      setName('');
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  
  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter your name"
        className={`px-3 py-2 rounded border transition-colors ${
        theme === 'dark'
           ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'            : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'        }`}
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      >
        Login
      </button>
    </div>
  );
};


export default LoginForm