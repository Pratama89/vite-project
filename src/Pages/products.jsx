/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";
import { getProduct } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";



// const email = localStorage.getItem("email");


const ProductsPage = () => {

const [cart, setCart] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);
const [products, setProducts] = useState([]);
const username = useLogin();

useEffect(() => {
  setCart(JSON.parse(localStorage.getItem("cart")) || []);
}, []);



useEffect(() => {
  getProduct((data) => {
    setProducts(data);
  });
}, []);

useEffect (() => {
  if(products.length > 0 && cart.length > 0) {
    const sum = cart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id);
      return acc + product.price * item.qty;
    }, 0)
    setTotalPrice(sum);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}, [cart, products]);


const handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('password');
  window.location.href = "/login";
};

const handleAddToCart = (id) => {
 if(cart.find(item => item.id === id)) {
  setCart(
    cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)
  )
 } else {
  setCart (
    [
      ...cart, {id, qty: 1}
    ]
    );
 }
};

// useRef
const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

const handleAddToCartRef = (id) => {
  cartRef.current = [...cartRef.current, {id, qty: 1}];
  localStorage.setItem("cart", JSON.stringify(cartRef.current));
}

const totalPriceRef = useRef(null);
useEffect(() => {
  if(cart.length > 0) {
    totalPriceRef.current.style.display = "table-row";
  } else {
    totalPriceRef.current.style.display = "none";
  }
}, [cart]);



    return (
      <Fragment>

        <div className="flex justify-end items-center  h-14">
          <p className="text-xl font-bold capitalize">{username}</p>
          <div className="px-5">          
            <Button ClassName="bg-blue-500" onClick={handleLogout}>Logout</Button>
          </div>        
        </div>

        <div className=" flex justify-center py-5">
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
                    handleAddToCart = {handleAddToCart} 
                    />
                </CardProduct>
            ))}
            {/* <Counter /> */}
          </div>
          <div className="w-2/6">
            <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
            
            <table className="text-left table-auto border-separate border-spacing-5">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 && cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 20)}</td>
                      <td className="text-right">Rp{" "}  
                      {product.price.toLocaleString('id-ID', 
                        {
                          styles: "currency", 
                          currency: "IDR"
                        })}
                      </td>
                      <td className="text-center">{item.qty}</td>
                      <td className="text-right">Rp  {(item.qty * product.price).toLocaleString('id-ID', 
                        {
                          styles: "currency", 
                          currency: "IDR"
                        })}</td>
                    </tr>                    
                  )
                })}
                <tr ref={totalPriceRef}>
                  <td colSpan={3}><b>Total Price</b></td>
                  <td>
                    <b>
                    Rp {" "}
                    {totalPrice.toLocaleString('id-ID', 
                        {
                          styles: "currency", 
                          currency: "IDR",
                        })
                    }
                    </b>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>       

        </Fragment>
    );
};

export default ProductsPage;