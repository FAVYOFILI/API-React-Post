import { useTheme, useUser } from "../context/AppContext";
import UseState from "../NewTailwindFile/UseState";
import LoginForm from "./Auth";
import Card, { type CardProps } from "./Card";

const MainContent: React.FC = () => {
  const {theme} = useTheme();
   const { login } = useUser();
   const { user } = useUser();
  const cardData: CardProps[] = [
    { title: 'Dashboard Stats', content: 'View your analytics and metrics here' },
    { title: 'Recent Activity', content: 'Check your latest actions and updates' },
    { title: 'Settings', content: 'Customize your experience and preferences' }
  ];
  
  return (
    <main className={`flex-1 p-8 transition-colors 
    ${
       theme === 'dark' 
        ? 'bg-gray-800 text-white border-gray-600' 
        : 'bg-white text-gray-800 border-gray-200'
     }
    `}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

    
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
   
      </div>
    </main>
  );
};

export default MainContent;