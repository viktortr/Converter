import React, { useContext, useState } from "react";
import ThemeContext from './ThemeContext';
import Account from './AccountPage';
import axios from 'axios';
// import ResetPassword from "./ResetPassword";

function Login() {
    const { theme } = useContext(ThemeContext); 


    const [isLoggedIn, setIsLoggedIn] = useState(false); // Состояние для отслеживания успешного входа
    const [loginError, setLoginError] = useState(''); // Состояние для отслеживания ошибки входа
    const [activeUser, setActiveUser] = useState({}); // Состояние для отслеживания ошибки входа

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
      
        try {
            const response = await axios.post('http://localhost:3001/api/login', { email, password });
            if (response.data.success) {
                // Вход успешен
                localStorage.setItem('token', response.data.token);
                setIsLoggedIn(true);
                setActiveUser({ first_name:response.data.first_name, last_name:response.data.last_name, email:response.data.email})
            } else {
                // Вход неуспешен, устанавливаем сообщение об ошибке
                setLoginError(response.data.message);
            }
        } catch (error) {
            console.error('Login failed:', error);
            setLoginError('Login failed. Please try again.');
        }
    };



    if (isLoggedIn) {
        return <Account person = {activeUser}/>;
    }

    return (
<div class={`min-h-screen flex items-center justify-center w-full bg-slate-100 Theme ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
	<div class={`grid bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md md:shadow-[5px_5px_50px_5px_rgba(60,60,60,0.3)] ${theme === 'light' ? 'bg-white' : 'bg-black'} text-${theme === 'light' ? 'gray' : 'white'} font-[sans-serif]`}>
		<h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
        {loginError && <div className="text-red-500 mb-4">{loginError}</div>}
		<form onSubmit={handleLogin}>
			<div class="mb-4">
				<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
				<input type="email" id="email" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required/>
			</div>
			<div class="mb-4">
				<label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
				<input type="password" id="password" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required/>
				{/* <a href="#"
					class="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
					Password?</a> */}
			</div>
			{/* <div class="flex items-center justify-between mb-4">
				<div class="flex items-center">
					<input type="checkbox" id="remember" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked/>
					<label for="remember" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
				</div>
				<a href="#"
					class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create
					Account</a>
			</div> */}
            <div class="flex flex-row justify-between px-2 py-2">
                    {/* <div>
                        <label for="remember" class="">
                            <input type="checkbox" id="remember" class="w-4 h-4 border-slate-200 focus:bg-indigo-600"/>
                            Remember me
                        </label>
                    </div> */}
                    <div>
                         <a href="/ResetPassword" class="text-indigo-600 font-medium inline-flex py-2 pr-2 pl-3 space-x-1 items-center">Forgot Password?</a>    
                    </div>
                </div>
			<button onclick="alert('hello')" type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
            <a href="/RegistrationUser" class="text-indigo-600 font-medium inline-flex space-x-1 items-center py-2">Don't have an account? Registration</a>
        </form>
	</div>
</div>

);
}

export default Login;