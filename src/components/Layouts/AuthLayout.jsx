/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import {Link} from "react-router-dom"
import {DarkMode} from "../../context/DarkMode";

const AuthLayout = (props) => {
    const { children, title, type } = props;
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
    {
        console.log(isDarkMode);
    }


    return (
      <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-800"}`}>
          <div className='w-full max-w-md border p-10 shadow-md rounded-lg  '>
            <button className="absolute top-3 right-3 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "Light" : "Dark"}
            </button>
          <h1 className='text-3xl font-bold mb-2 text-blue-600 '>{title}</h1>
          <p className='font-medium text-slate-500 mb-8'>Selamat Datang, Silahkan isi Data</p>

          { children }
          <Navigation type={type} />
          

          </div>
      </div>
    );
};

const Navigation = ({type}) => {
    if (type === "login") {
        return (
            <p className="text-sm mt-3 text-center">
                Anda tidak punya akun?{" "} 
                <Link to="/register" className="mt-3 text-blue-700 text-center font-bold"> Daftar</Link>
            </p>
        );
    } else {
        return (
            <p className="text-sm mt-3 text-center">
                Anda punya akun?{" "} 
                <Link to="/login" className="mt-3 text-blue-700 text-center font-bold"> Login</Link>
            </p>
        );
    }
}

export default AuthLayout;