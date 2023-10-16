/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProduct } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";


const ProductsPage = () => {
const [products, setProducts] = useState([]);
const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
useLogin();


useEffect(() => {
  getProduct((data) => {
    setProducts(data);
  });
}, []);





// const handleAddToCart = (id) => {
//  if(cart.find(item => item.id === id)) {
//   setCart(
//     cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)
//   )
//  } else {
//   setCart (
//     [
//       ...cart, {id, qty: 1}
//     ]
//     );
//  }
// };

// useRef
// const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

// const handleAddToCartRef = (id) => {
//   cartRef.current = [...cartRef.current, {id, qty: 1}];
//   localStorage.setItem("cart", JSON.stringify(cartRef.current));
// }


    return (
      <Fragment>
        <Navbar />
        <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-800 text-white"}`}>
          <div className="w-4/6 flex flex-wrap">
            {products.length > 0 && products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} id={product.id} />
                    <CardProduct.Body name={product.title}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer 
                    price={product.price} 
                    id={product.id}
                    // handleAddToCart = {handleAddToCart} 
                    />
                </CardProduct>
            ))}
            {/* <Counter /> */}
          </div>
          <div className="w-2/6">
            <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
            
            <TableCart products={products}></TableCart>
            
          </div>
        </div>       

        </Fragment>
    );
};

export default ProductsPage;