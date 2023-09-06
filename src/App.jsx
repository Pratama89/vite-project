/* eslint-disable no-unused-vars */
import React from 'react';
import Button from './components/Elements/Input/input';
import InputForm from './components/Elements/Input';

function App() {
  return (
    <div className='flex justify-center min-h-screen items-center  '>
      <div className='w-full max-w-md border p-10 shadow-md rounded-lg  '>
        <h1 className='text-3xl font-bold mb-2 text-blue-600 '>Login</h1>
        <p className='font-medium text-slate-500 mb-8'>Selamat Datang, Silahkan isi Data</p>
        <form action="">
          <InputForm 
          label="Email" 
          type="email" 
          placeholder="example@gmail.com"
          name="ëmail" 
          />  

          <InputForm 
          label="Password" 
          type="password" 
          placeholder="*****"
          name="password" 
          />          
                     
          
          <Button variant="bg-blue-500 w-full ">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
