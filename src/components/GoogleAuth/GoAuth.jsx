// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// // import { useGoogleOneTapLogin } from '@react-oauth/google';

// import { useStore } from '../hooks/useStore';
// import * as dotenv from 'dotenv'
// dotenv.config()


// const GoAuth = () => {
//     const  { authData }  = useStore();

//   const setAuthData = useStore((state) => state.setAuthData);
//   return (
//     <div className='App'>
//       <GoogleOAuthProvider clientId= {import.meta.env.VITE_APP_CLIENT_ID}>
//         <div>
//             <GoogleLogin
//               useOneTap
//               onSuccess={async (credentialResponse) => {
//                 const response = await axios.post(
//                     'http://localhost:3000/auth/google/callback',
//                   {
//                     token: credentialResponse.credential,
//                   }
//                 );
//                 const data = response.data;

//                 localStorage.setItem('authData', JSON.stringify(data));
//                 setAuthData(data);
//               }}
//               onError={() => {
//                 console.log('Login Failed');
//               }}
//             />
//        </div>

//       </GoogleOAuthProvider>
//     </div>
//   );
// }
  

// export default GoAuth