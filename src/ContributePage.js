import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { Typography } from "@material-tailwind/react";

function Contribute() {
  const { theme } = useContext(ThemeContext); 
    return (   

        <body className={`w-full h-full font-sans antialiased leading-normal tracking-wider bg-slate-100 text-center  lg:px-20 lg:py-20 Theme ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
        <div className="md:my-6 ">
          <div className={`grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl ${theme === 'light' ? 'bg-white' : 'bg-black'} md:shadow-[5px_5px_50px_5px_rgba(60,60,60,0.3)] rounded-md text-${theme === 'light' ? 'gray' : 'white'} font-[sans-serif]`}>
            <div>
              <h1 className="text-3xl font-extrabold">Contribute</h1>
              
              
              <Typography variant="h6" className="mb-1">
          Upgrade to PRO
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          Upgrade to Converter PRO and get even more components, plugins, advanced features and premium.
        </Typography>

          <p className="text-sm text-gray-400 mt-3">Support</p>
            </div>

          </div>
        </div>
      </body>
     );
 }
 
 export default Contribute;


 