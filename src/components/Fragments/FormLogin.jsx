import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
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
          <Button ClassName="bg-blue-600 w-full ">Login</Button>
        </form>
    )
}

export default FormLogin;