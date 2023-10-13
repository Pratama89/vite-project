import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button"
import { useEffect, useState } from "react";


const Navbar = () => {
    const { username } = useLogin()
    const [totalcart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [ cart ]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('password');
        window.location.href = "/login";
      };

    return (
        <div className="flex justify-end items-center bg-blue-600 text-white h-14 px-10">
          <p className="text-xl font-bold capitalize">{username}</p>                   
            <Button ClassName="bg-blue-500 ml-5" onClick={handleLogout}>
                Logout
            </Button>
            <div className="flex items-center bg-green-500 p-2 rounded-md ml-5">
                {totalcart}            
          </div>        
        </div>
    )
}

export default Navbar;