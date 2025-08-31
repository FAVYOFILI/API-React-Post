// import { useState } from "react";
// import { Dashboard, SignupForm } from "./api/Post";


// interface User {
//   id: string;
//   name: string;
//   email: string;
// }
// const App: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);

//   const handleSignupSuccess = (userData: User) => {
//     setUser(userData);
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };

//   return (
//     <div>
//       {user ? (
//         <Dashboard user={user} onLogout={handleLogout} />
//       ) : (
//         <SignupForm onSuccess={handleSignupSuccess} />
//       )}
//     </div>
//   );
// };

// export default App;

import React from 'react'
import SignupForm from './api/Context1'
// import SignupForm from './api/teachpost'
// import AppWithAuth from './api/PostContext'

const App = () => {
  return (
    <div>
      {/* <SignupForm /> */}
      {/* <AppWithAuth/> */}
      <SignupForm/>

    </div>
  )
}

export default App
