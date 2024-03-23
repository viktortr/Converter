import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { Link } from 'react-router-dom';
//import DarkModeToggle from './darkModeToggle';
import coins from './images/coins.svg';
import home from './images/home.svg';
import user from './images/user.svg';
import info from './images/info.svg';
import envelope from './images/envelope.svg';
import usd from './images/usd-circle.svg';
import settings from './images/settings.svg';
// import Registration from './RegistrationUser';

function Header() {
  const { theme } = useContext(ThemeContext); 
  return (
    <header className={`w-full Theme ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <nav className=" h-15 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap md:flex-row justify-between items-center mx-auto max-w-screen-xl">
          
          <div className="flex items-center">
            <button data-collapse-toggle="mobile-menu-2" type="button" className="dropdown dropdown-bottom inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <div tabIndex={0} role="button" className="sr-only btn m-1">Click</div>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>                        
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a  className={`block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 text-${theme === 'light' ? 'gray' : 'white'} `} aria-current="page"><Link to="/">Home</Link></a>
              </li>
              <li>
                <a  className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-${theme === 'light' ? 'gray' : 'white'} `}><Link to="/RegistrationUser">User</Link></a>              
              </li>
              <li>
                <a  className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-${theme === 'light' ? 'gray' : 'white'} `}><Link to="/AboutPage">About Us</Link></a>
              </li>
              <li>
                <a  className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-${theme === 'light' ? 'gray' : 'white'} `}><Link to="/ContactPage">Contact Us</Link></a>
              </li>
              <li>
                <a  className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-${theme === 'light' ? 'gray' : 'white'} `}><Link to="/ContributePage">Contribute</Link></a>
              </li>
              <li>
                <a  className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-${theme === 'light' ? 'gray' : 'white'} `}><Link to="/SettingsPage">Settings</Link></a>
              </li>
              </ul>            
            </button>
          </div>

          <div className="hidden lg:order-2 md:order-2 justify-between items-center w-full md:flex lg:w-auto" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium md:flex-row lg:space-x-8 lg:mt-0">

              <li className='flex flex-row py-2 px-2'>
                <Link to="/">
                <img className="md:flex h-6 w-6 mx-2 opacity-65 " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" src={home} alt="Home" />
                </Link>
                <a  className={`hidden lg:flex py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 text-${theme === 'light' ? 'gray' : 'white'} `} aria-current="page"><Link to="/">Home</Link></a>              
              </li>

              <li className='flex flex-row py-2 px-2'>
                <Link to="/RegistrationUser">
                <img className="md:flex h-6 w-6 mx-2 opacity-65" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" src={user} alt="User" />
                </Link>
                <a  className={`hidden lg:flex py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-${theme === 'light' ? 'gray' : 'white'} `}><Link to="/RegistrationUser">User</Link></a>  
              </li>

              <li className='flex flex-row py-2 px-2'>
                <Link to="/AboutPage">
                <img className="md:flex h-6 w-6 mx-2 opacity-65" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" src={info} alt="Home" />
                </Link>
                <a  className={`hidden lg:flex py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-${theme === 'light' ? 'gray' : 'white'} `}><Link to="/AboutPage">About Us</Link></a>  
              </li>

              <li className='flex flex-row py-2 px-2'>
                <Link to="/ContactPage">
                <img className="md:flex h-6 w-6 mx-2 opacity-65" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" src={envelope} alt="Envelope" />
                </Link>
                <a  className={`hidden lg:flex py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-${theme === 'light' ? 'gray' : 'white'} `}><Link to="/ContactPage">Contact Us</Link></a>  
              </li>

              <li className='flex flex-row py-2 px-2'>
                <Link to="/ContributePage">
                <img className="md:flex h-6 w-6 mx-2 opacity-65" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" src={usd} alt="usd" />
                </Link>
                <a  className={`hidden lg:flex py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-${theme === 'light' ? 'gray' : 'white'} `}><Link to="/ContributePage">Contribute</Link></a>
              </li>

              <li className='flex flex-row py-2 px-2'>
                <Link to="/SettingsPage">
                <img className="md:flex h-6 w-6 mx-2 opacity-65" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" src={settings} alt="Settings" />
                </Link>
                <a  className={`hidden lg:flex py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-${theme === 'light' ? 'gray' : 'white'} `}><Link to="/SettingsPage">Settings</Link></a>
              </li>
            </ul>
          </div>

          <a  className="flex md:order-2 lg:order-1 items-center">
            <img className="h-6 w-6 mx-2 opacity-65" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" src={coins} alt="Coins" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><Link to="/">Currency Converter</Link></span>
          </a>

        </div>

      </nav>

    </header>
  );
}

export default Header;


