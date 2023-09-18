import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => 
  {
    event.preventDefault();
    console.log(event.target.gemail.value);
    console.log("Login");
  }
    return (
        <form onSubmit={handleLogin}>
          <InputForm 
          label="Email" 
          type="email" 
          placeholder="example@gmail.com"
          name="email" 
          />
          <InputForm  
          label="Password" 
          type="password" 
          placeholder="*****"
          name="password" 
          />
          <Button ClassName="bg-blue-600 w-full" type="submit"
          >Login</Button>
        </form>
    )
}

export default FormLogin;