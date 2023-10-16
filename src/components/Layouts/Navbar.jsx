import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button"
import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";


const Navbar = () => {
    const  username = useLogin()
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
    const [totalcart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const { total } = useTotalPrice();

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
        <div className="flex justify-between items-center bg-blue-600 text-white h-20  px-10">
            
            
            <button className=" bg-green-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "Light" : "Dark"}
            </button>

            <div className="flex justify-end items-center">
                <p className="text-xl font-bold capitalize ">
                    Selamat Datang, {username}
                </p>

                <Button ClassName="bg-blue-500 ml-5 mr-5" onClick={handleLogout}>
                        Logout
                </Button>
                <div className=" bg-green-500 text-white px-2 py-2 rounded-md  ">
                      Item: {totalcart} | Price: {total}                         
                </div>
            </div>
        </div>
    )
}

export default Navbar;