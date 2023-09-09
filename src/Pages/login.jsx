import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
            <div className="flex justify-center flex-col items-center">
                <p className="mt-3 ">Anda belum punya akun?</p>
                <p className="mt-3 text-blue-700">
                  <a href="register">
                  Daftar
                  </a> 
                </p>
            </div>            
        </AuthLayout>
    )
}

export default LoginPage;