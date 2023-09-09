import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister/>
            <div className="flex justify-center flex-col items-center">
                <p className="mt-3 ">Anda sudah punya akun?</p>
                <p className="mt-3 text-blue-700">
                  <a href="login">
                  Masuk
                  </a> 
                </p>
            </div>      
        </AuthLayout>
    )
}

export default RegisterPage;