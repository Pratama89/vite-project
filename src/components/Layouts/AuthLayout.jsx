import FormLogin from "../Fragments/FormLogin";

const AuthLayout = (props) => {
    return (
        <div className='w-full max-w-md border p-10 shadow-md rounded-lg  '>
        <h1 className='text-3xl font-bold mb-2 text-blue-600 '>Login</h1>
        <p className='font-medium text-slate-500 mb-8'>Selamat Datang, Silahkan isi Data</p>

        <FormLogin />
      </div>
    )
}

export default AuthLayout;