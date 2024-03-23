import React, { useContext } from "react";

import ThemeContext from './ThemeContext';
// import './styles.css' 

function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);  
  return (
    
    <div className={`w-full h-full font-sans antialiased leading-normal tracking-wider bg-slate-100 text-center  lg:px-20 lg:py-20 Theme ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      {/* <body className=""> */}
      <div className="md:my-6 ">
        {/* <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white md:shadow-[5px_5px_50px_5px_rgba(60,60,60,0.3)] rounded-md text-[#333] font-[sans-serif]"> */}
        <div className={`grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl ${theme === 'light' ? 'bg-white' : 'bg-black'} md:shadow-[5px_5px_50px_5px_rgba(60,60,60,0.3)] rounded-md text-${theme === 'light' ? 'gray' : 'white'} font-[sans-serif]`}>
          <div>
            <h1 className="text-3xl font-extrabold">Settings</h1>
            <p className="text-sm text-gray-400 mt-3">Выбор базовой валюты</p>
            <p className="text-sm text-gray-400 mt-3">Пользовательские курсы обмена</p>
            <p className="text-sm text-gray-400 mt-3">Избранные валюты</p>
            <p className="text-sm text-gray-400 mt-3">История конвертаций</p>
            <p className="text-sm text-gray-400 mt-3"> Различные форматы вывода</p>
            <p className="text-sm text-gray-400 mt-3">Тема конвертера</p>
            {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
            <input type="checkbox" value="synthwave" className="toggle theme-controller" onClick={toggleTheme}/>

            <p className="text-sm text-gray-400 mt-3">Локализация и язык интерфейса</p>
            <p className="text-sm text-gray-400 mt-3">Поддержка различных режимов работы(Онлайн/офлайн)</p>
 
          </div>

        </div>
      </div>
    {/* </body> */}
  </div>
     );
 }
 
 export default Settings;
