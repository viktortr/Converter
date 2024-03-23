// import { BrowserRouter as  Route, Redirect } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//     const token = localStorage.getItem('token');
  
//     return (
//       <Route
//         {...rest}
//         render={(props) => (
//           token ? <Component {...props} /> : <Redirect to="/LoginUser" />
//         )}
//       />
//     );
//   };

// export default ProtectedRoute;