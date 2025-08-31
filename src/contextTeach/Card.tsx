import { useTheme } from "../context/AppContext";


export interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {

  const {theme} = useTheme()
  return (
    <div className={`p-4 rounded transition-colors 
    ${
       theme === 'dark' 
        ? 'bg-gray-500 text-white border-gray-600' 
        : 'bg-gray-50 text-gray-800 border-gray-200'
     }
    `}>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm opacity-75">{content}</p>
    </div>
  );
};

export default Card;