/* eslint-disable react/jsx-key */
import { Fragment } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const products = [
    {
        id: 1,
        name: "Vacuum Retainer",
        price: "Rp. 1.380.000",
        image: "/img/Vacuum.png",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum quae voluptates, pariatur soluta ipsa facere! Iusto eveniet quo repellendus laborum, saepe alias aspernatur repudiandae.`
    },
    {
        id: 2,
        name: "Hygedent",
        price: "Rp. 57.000",
        image: "/img/Vacuum.png",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum quae voluptates`
    },
    {
        id: 3,
        name: "Stone Biru 11 Menit",
        price: "Rp. 35.000",
        image: "/img/Vacuum.png",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum quae voluptates`
    },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {

const handleLogout = () => {
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  window.location.href = "/login";
}

    return (
      <Fragment>

        <div className="flex justify-end items-center  h-14">
          {email}
          <div className="px-5">          
            <Button ClassName="bg-blue-500" onClick={handleLogout}>Logout</Button>
          </div>        
        </div>

        <div className=" flex justify-center py-5 flex-wrap">
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))}
        </div>

        <div className="flex justify-center">
          <Counter></Counter>
        </div>

        </Fragment>
    );
};

export default ProductsPage;