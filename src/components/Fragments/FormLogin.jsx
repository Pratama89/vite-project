import { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const handleLogin = (event) => 
  {
    event.preventDefault();

    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data);
  };
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
    return (
        <form onSubmit={handleLogin}>
          <InputForm 
          label="Username" 
          type="text" 
          placeholder="Nama Pengguna"
          name="username" 
          ref = {usernameRef}
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