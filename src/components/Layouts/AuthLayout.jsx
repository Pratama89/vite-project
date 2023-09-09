/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Link} from "react-router-dom"

const AuthLayout = (props) => {
    const { children, title, type } = props;
    return (
      <div className='flex justify-center min-h-screen items-center  '>
          <div className='w-full max-w-md border p-10 shadow-md rounded-lg  '>
          <h1 className='text-3xl font-bold mb-2 text-blue-600 '>{title}</h1>
          <p className='font-medium text-slate-500 mb-8'>Selamat Datang, Silahkan isi Data</p>

          { children }
          <Navigation type={type} />
          {/* <p className="mt-3 text-center">
            {type === "login" 
            ? "Anda tidak punya akun? " 
            : "Anda punya akun? "}
          
             {type === "login" && (
                <Link to="/register" className="mt-3 text-blue-700 text-center font-bold"> Daftar</Link>
             )}
             {type === "register" && (
                <Link to="/login" className="mt-3 text-blue-700 text-center font-bold"> Login</Link>
             )}
          </p> */}

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
                <Link to="/login" className="mt-3 text-blue-700 text-center font-bold"> Daftar</Link>
            </p>
        );
    }
}

export default AuthLayout;