/* eslint-disable no-unused-vars */
import React from 'react';
import FormLogin from './components/Fragments/FormLogin';
import LoginPage from './Pages/login';
import RegisterPage from './Pages/register';


function App() {
  return (
    <div className='flex justify-center min-h-screen items-center  '>
      {/* <LoginPage></LoginPage> */}
      <RegisterPage></RegisterPage>
    </div>
  );
}

export default App;
