import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
    return (
        <form action="">
          <InputForm 
          label="Full Name" 
          type="text" 
          placeholder="masukkan nama anda"
          name="fullname" 
          />
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
          <InputForm  
          label="Confirm Password" 
          type="password" 
          placeholder="*****"
          name="confirmPassword" 
          />
          <Button ClassName="bg-blue-600 w-full ">Register</Button>
        </form>
    )
}

export default FormRegister;