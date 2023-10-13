/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

function CardProduct(props) {
  const { children } = props;
  return (
    <div className="border text-center w-full max-w-xs mt-2 rounded-md shadow-md mx-2 flex flex-col justify-between ">

      {children}

    </div>
  );
}


const Header = (props) => {
  const { image, id } = props
  return (
    <div className="mt-3">
        <h1 className="font-bold">Produk</h1>
        <div className="max-w-sm  mt-5 mx-2 mb-5 ">
            <Link to={`/products/${id}`}>
            <img src={image} alt="product" className="rounded-md bg-white h-60 w-full object-contain" />
            </Link>
          </div>
      </div>
  )
}

const Body = (props) => {
  const {children, name} = props;
  return (
    <div className="mt-2 mb-2 text-sm px-2 h-full">
      <h2 className="text-xl font-semibold">{name.substring(0, 30)} ...</h2>
      <p className="mt-2">
        {children.substring(0, 100)} ...
      </p>
    </div>
  )
}

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <>
    <div className="flex items-center justify-center">
      <span className="text-3xl font-bold mb-2">Rp{" "}  {price.toLocaleString('id-ID', {styles: "currency", currency: "IDR"})}</span>
    </div>
      <Button 
      ClassName="bg-blue-500 hover:bg-blue-600 mb-4 p-2" 
      onClick={() => dispatch(addToCart({id, qty: 1})) }>
        Masuk ke Keranjang
      </Button>
    </>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;



export default CardProduct;