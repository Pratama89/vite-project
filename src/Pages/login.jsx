import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin />
            <div className="flex justify-center flex-col items-center">
                
            </div>            
        </AuthLayout>
    )
}

export default LoginPage;