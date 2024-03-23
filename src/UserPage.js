// import React, { useState, useContext } from 'react';
// import Registration from './RegistrationUser';
// import Login from './LoginUser';
// import ThemeContext from './ThemeContext';

// const User = () => {
//   const { theme } = useContext(ThemeContext); 
//   const [isRegistering, setIsRegistering] = useState(true);

//   const toggleForm = () => {
//     setIsRegistering(!isRegistering);
//   };

//   return (
//     <div className={`w-full h-full font-sans antialiased leading-normal tracking-wider bg-slate-100 text-center  lg:px-20 lg:py-20 Theme ${theme === 'light' ? 'light-theme' : 'dark-theme'} text-${theme === 'light' ? 'gray' : 'white'} `}>
      
//       {isRegistering ? (
//         <Registration toggleForm={toggleForm} />
//       ) : (
//         <Login toggleForm={toggleForm} />
//       )}
//       <button onClick={toggleForm}>
//         {/* {isRegistering ? "Already have an account? Login" : "Don't have an account? Registration"} */}
//       </button>
//     </div>
//   );
// };

// export default User;