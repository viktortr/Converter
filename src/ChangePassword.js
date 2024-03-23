
import React, { useContext, useState } from "react";
import ThemeContext from './ThemeContext';
import axios from 'axios';

const ChangePassword = () => {
  const { theme } = useContext(ThemeContext); 
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    // Обновляем соответствующее состояние при изменении полей ввода
    const { name, value } = e.target;
    if (name === 'currentPassword') {
        setCurrentPassword(value);
    } else if (name === 'newPassword') {
        setNewPassword(value);
    } else if (name === 'confirmPassword') {
        setConfirmPassword(value);
    }
};

  const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Отправляем запрос на сервер для сравнения текущего пароля и изменения пароля
      try {
        const response = await axios.post('http://localhost:3001/api/changepassword', {
            currentPassword,
            newPassword,
            confirmPassword
        });
        // Обработка успешного ответа от сервера (например, перенаправление или отображение сообщения об успехе)
    } catch (error) {
        console.error('Error changing password:', error);
        setError('Error changing password. Please try again.');
    }
};

  return (


<div class={`min-h-screen flex items-center justify-center w-full bg-slate-100 Theme ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
	<div class={`grid bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md md:shadow-[5px_5px_50px_5px_rgba(60,60,60,0.3)] ${theme === 'light' ? 'bg-white' : 'bg-black'} text-${theme === 'light' ? 'gray' : 'white'} font-[sans-serif]`}>
        <div class="flex items-center space-x-2 mb-6">
            <img src="https://unsplash.it/40/40?image=883" alt="Lock Icon" class="rounded-full"/>
            <h1 class="text-xl font-semibold">Change Password</h1>
        </div>
        <p class="text-sm text-gray-600 mb-6">Update password for enhanced account security.</p>
        <form onSubmit={handleSubmit} id="changePasswordForm" class="space-y-6">
            <div>
                <label for="currentPassword" class="text-sm font-medium text-gray-700 block mb-2">Current Password *</label>
                <input 
                  type="password" 
                  id="currentPassword" 
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}  
                  class="password-input form-input block w-full border border-gray-300 rounded-md shadow-sm" required/>
            </div>
            <div>
                <label for="newPassword" class="text-sm font-medium text-gray-700 block mb-2">New Password *</label>
                <input 
                  type="password" 
                  id="newPassword" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}  
                  class="password-input form-input block w-full border border-gray-300 rounded-md shadow-sm" required/>
            </div>
            <div>
                <label for="confirmPassword" class="text-sm font-medium text-gray-700 block mb-2">Confirm New Password *</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}  
                  class="password-input form-input block border w-full border-gray-300 rounded-md shadow-sm" required/>
                {/* <button type="button" onclick="clearConfirmPassword()" class="text-xs text-blue-600 hover:underline mt-1">Clear</button> */}
            </div>
            {/* <div id="passwordCriteria" class="text-sm space-y-2">
                <p class="text-red-500">Weak password. Must contain:</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>At least 1 uppercase</li>
                    <li>At least 1 number</li>
                    <li>At least 8 characters</li>
                </ul>
            </div> */}
            <div class="flex justify-between">
                <button type="button" href="/AccountPage"   class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-300">Discard</button>
                <button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">Apply Changes</button>
            </div>

            {error && <div className="text-red-500">{error}</div>}

        </form>
    </div>

    
</div>

);
}

export default ChangePassword;