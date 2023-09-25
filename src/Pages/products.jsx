/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Fragment, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
    {
        id: 1,
        name: "Vacuum Retainer",
        price: 1380000,
        image: "/img/Vacuum.png",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum quae voluptates, pariatur soluta ipsa facere! Iusto eveniet quo repellendus laborum, saepe alias aspernatur repudiandae.`
    },
    {
        id: 2,
        name: "Hygedent",
        price: 57000,
        image: "/img/Vacuum.png",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum quae voluptates`
    },
    {
        id: 3,
        name: "Stone Biru 11 Menit",
        price: 35000,
        image: "/img/Vacuum.png",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum quae voluptates`
    },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {

const [cart, setCart] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);

const handleLogout = () => {
  localStorage.removeItem('email');
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
}

    return (
      <Fragment>

        <div className="flex justify-end items-center  h-14">
          {email}
          <div className="px-5">          
            <Button ClassName="bg-blue-500" onClick={handleLogout}>Logout</Button>
          </div>        
        </div>

        <div className=" flex justify-center py-5">
          <div className="w-4/6 flex flex-wrap">
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer 
                    price={product.price} 
                    id={product.id}
                    handleAddToCart = {handleAddToCart} 
                    />
                </CardProduct>
            ))}
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
                {cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.name}</td>
                      <td>Rp{" "}  
                      {product.price.toLocaleString('id-ID', 
                        {
                          styles: "currency", 
                          currency: "IDR"
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>Rp  {(item.qty * product.price).toLocaleString('id-ID', 
                        {
                          styles: "currency", 
                          currency: "IDR"
                        })}</td>
                    </tr>                    
                  )
                })}
                <tr>
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