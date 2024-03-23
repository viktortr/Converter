import React, { useContext } from "react";
import ThemeContext from './ThemeContext';


    
const Account = () => {
  const { theme } = useContext(ThemeContext); 
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Проверяем наличие JWT-токена в localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      // Если токен отсутствует, можно перенаправить пользователя на страницу входа или выполнить другие действия
      console.log('No token found. Redirect user to login page.');
      return;
    }

    // Если токен есть, делаем запрос на сервер для получения данных пользователя
    axios.get('http://localhost:3001/api/user', {
      headers: {
        Authorization: `Bearer ${token}` // Передаем токен в заголовке запроса
      }
    })
    .then(response => {
      setUserData(response.data); // Сохраняем данные пользователя
      setLoading(false); // Устанавливаем флаг загрузки в false
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
      // В случае ошибки можно перенаправить пользователя на страницу входа или выполнить другие действия
    });
  }, []); // Пустой массив зависимостей, чтобы useEffect выполнялся только один раз после загрузки компонента

  if (loading) {
    return <div>Loading...</div>; // Отображаем сообщение о загрузке, пока данные загружаются
  }

  if (!userData) {
    return <div>Error: Unable to fetch user data.</div>; // Отображаем сообщение об ошибке, если данные пользователя не получены
  }

  const { first_name, last_name, email } = userData;

  return (



<div class={`min-h-screen flex items-center justify-center w-full bg-slate-100 Theme ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
	<div class={`grid bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md md:shadow-[5px_5px_50px_5px_rgba(60,60,60,0.3)] ${theme === 'light' ? 'bg-white' : 'bg-black'} text-${theme === 'light' ? 'gray' : 'white'} font-[sans-serif]`}>
<div class="h-full">
 {/* <div class="border-b-2 block md:flex"> */}
   {/* <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
     <div class="flex justify-between">
       <span class="text-xl font-semibold block">User Profile</span>
       <a href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
     </div>
     {/* <span class="text-gray-600">This information is secret so be careful</span> */}
     {/* <div class="w-full p-8 mx-2 flex justify-center">
       <img id="showImage" class="max-w-xs w-32 items-center border" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" alt=""/>                          
       </div>
   </div> */} 
      <div class="flex  pb-6">
      <h1 className="text-xl font-semibold block">User Profile</h1>
      <a href="/EditProfile" class="-mt-2 text-md font-bold text-white bg-blue-400 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
      </div>

       <div class="pb-6">
         <label for="name" class="font-semibold text-gray-700 block pb-1">First name</label>
         <div class="flex">
           {/* <input disabled id="username" class="border-1  rounded-r px-4 py-2 w-full" type="text" value="Jane Name" /> */}
           {first_name}
         </div>
         
       </div>

       <div class="pb-6">
         <label for="name" class="font-semibold text-gray-700 block pb-1">Last name</label>
         <div class="flex">
           {/* <input disabled id="username" class="border-1  rounded-r px-4 py-2 w-full" type="text" value="Jane Name" /> */}
           {last_name}
         </div>
       </div>

       <div class="pb-4">
         <label for="about" class="font-semibold text-gray-700 block pb-1">Email</label>
         {/* <input disabled id="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" value="example@example.com" /> */}
         {email}
         <span class="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
       </div>
     </div>

     {/* <button onClick={() => setIsLoggedIn(false)}>Logout</button> */}

     <div class="pb-6 ">
     <a href="/ChangePassword" class="-mt-2 text-md font-bold text-white bg-blue-400 rounded-full px-5 py-2 hover:bg-gray-800">Change Password</a>
     <a href="#" class="-mt-2 text-md font-bold text-white bg-blue-400 rounded-full px-5 py-2 hover:bg-gray-800">Delete Account</a>
     </div>
 </div>
</div>
// </div>

  );
};

export default Account;



// const Account = (person) => {
//   const [user, setUser] = useState(null);
//   console.log(person)
//   useEffect(() => {
//     // Выполняем запрос к вашему серверу для получения данных о пользователе
//     // const fetchUserData = async () => {
//     //   try {
//     //     // Здесь ваш URL, по которому обрабатывается запрос на получение данных о пользователе
//     //     // const response = await axios.get('http://localhost:3001/api/user'); // Пример URL /api/user, это может быть ваш конечный путь на сервере
//     //     // После успешного запроса устанавливаем данные о пользователе в состояние
//     //     // setUser(response.data);
//     //     console.log('PERSON',person)
//     //     setUser({person})
//     //     console.log('USER',user)
//     //   } catch (error) {
//     //     console.error('Failed to fetch user data:', error);
//     //   }
//     // };
    

//     const fetchUserData = async () => {
//       try {
        
//         const response = await axios.get('http://localhost:3001/api/user');   
//         setUser(response.data);

//         console.log(data)
//         // setUser({person})
//         // console.log('USER',user)
//       } catch (error) {
//         console.error('Failed to fetch user data:', error);
//       }
//     };


    
//     fetchUserData(); // Вызываем функцию получения данных о пользователе при монтировании компонента
//   }, []);

//   // Если данные о пользователе еще не загружены, отобразим загрузочное состояние
//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   // После получения данных о пользователе отображаем их на странице аккаунта
//   return (
//     <div>
//       <h1>Account Page</h1>
//       <p>First Name: {user.first_name}</p>
//       <p>Last Name: {user.last_name}</p>
//       <p>Email: {user.email}</p>
//       {/* Другая информация об аккаунте */}
//     </div>
//   );
// };


// export default Account;





