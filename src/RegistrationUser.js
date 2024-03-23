import React, { useContext, useState } from "react";
import ThemeContext from './ThemeContext';
import axios from 'axios';
import Account from './AccountPage';
const uuid = require('uuid');
const secretKey = uuid.v4();


console.log(secretKey);

function Registration() {
    const { theme } = useContext(ThemeContext); 

    // const [formData, setFormData] = useState({
    //   first_name: '',
    //   last_name: '',
    //   email: '',
    //   password: ''
    // });

    const [registrationSuccess, setRegistrationSuccess] = useState(false); // Состояние для отслеживания успешной регистрации
    // const [activeUser, setActiveUser] = useState({});
    // const handleChange = (e) => {
    //   setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value
    //   });
    // };     

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // const response = await axios.post('http://localhost:3001/api/register', formData);
        const response = await axios.post('http://localhost:3001/api/register');
        console.log('Registration successful:', response.data);
        // Handle success: show message or redirect to another page\

        const token = jwt.sign({ user: response.data }, secretKey);

        // Обновляем заголовок запроса, чтобы передать токен
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;    

        setRegistrationSuccess(true);
        // setActiveUser({ first_name:response.data.first_name, last_name:response.data.last_name, email:response.data.email})
      } catch (error) {
        console.error('Registration failed:', error.response.data.message);
        // Handle error: show message to the user
      }
    };
    if (registrationSuccess) {
      return <Account/>;
    }

    return (
    
      <div className={`w-full h-full font-sans antialiased leading-normal tracking-wider bg-slate-100 text-center  lg:px-20 lg:py-20 flex items-center justify-center Theme ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
         <div className={` p-8 rounded-lg md:shadow-[5px_5px_50px_5px_rgba(60,60,60,0.3)] max-w-sm w-full ${theme === 'light' ? 'bg-white' : 'bg-black'} text-${theme === 'light' ? 'gray' : 'white'} font-[sans-serif]`}>

           <div className="flex justify-center mb-6">
             <span className="inline-block bg-gray-200 rounded-full p-3">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
             </span>
           </div>
         <h2 className="text-2xl font-semibold text-center mb-4">Create a new account</h2>
         <p className="text-gray-600 text-center mb-6">Enter your details to register.</p>
         <form onSubmit={handleSubmit}>
           <div className="mb-4">
            <label htmlfor="first_name" className="block text-gray-700 text-sm font-semibold mb-2">First Name *</label>
              <input 
                type="text" 
                id="first_name" 
                name="first_name"  
                value={formData.first_name}
                onChange={handleChange}
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" 
                required placeholder="James"
              />
          </div>


          <div className="mb-4">
            <label htmlfor="last_name" className="block text-gray-700 text-sm font-semibold mb-2">Last Name *</label>
              <input 
                type="text" 
                id="last_name" 
                name="last_name" 
                value={formData.last_name}
                onChange={handleChange}
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" 
                required placeholder="Brown"
              />
          </div>

          <div className="mb-4">
            <label htmlfor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" 
                required placeholder="hello@gmail.com"
              />
          </div>
          <div className="mb-6">
            <label htmlfor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
              <input 
                type="password" 
                id="password" 
                name="password"  
                value={formData.password}
                onChange={handleChange}
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" 
                required placeholder="••••••••"
              />
            <p className="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
          </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Register</button>
              {/* <p className="text-gray-600 text-xs text-center mt-4">
                By clicking Register, you agree to accept Apex Financial's
                <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>.
              </p> */}
              {/* <button onClick={toggleForm}>Already have an account? Login</button> */}
              <a href="/LoginUser" class="text-indigo-600 font-medium inline-flex py-2 items-center">Already have an account? Login</a>
        </form>
        </div>
      </div>
     );
 }
 
 export default Registration;

