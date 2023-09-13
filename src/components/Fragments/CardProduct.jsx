/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props
    return (
      <div className="border text-center w-full max-w-xs mt-2 rounded-md shadow-md mx-2 flex flex-col justify-between ">
      
        {children}
            
      </div>
    );
};


const Header = (props) => {
  const { image } = props
  return (
    <div className="mt-3">
        <h1 className="font-bold">Produk</h1>
        <div className="max-w-sm  mt-5 mx-2 mb-5 ">
            <a href="https://www.tokopedia.com/pharmadent/dental-lab-vacuum-former-forming-molding-machine-equipment">
            <img src={image} alt="product" className="rounded-md bg-blue-300" />
            </a>
          </div>
      </div>
  )
}

const Body = (props) => {
  const {children, name} = props;
  return (
    <div className="mt-2 mb-2 text-sm px-2 h-full">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="mt-2">
        {children}
      </p>
    </div>
  )
}

const Footer = (props) => {
  const { price } = props;
  return (
    <>
    <div className="flex items-center justify-center">
      <span className="text-3xl font-bold ">{price}</span>
    </div>
      <Button ClassName="bg-blue-500 hover:bg-blue-600 mb-4 p-2" >Masuk ke Keranjang</Button>
    </>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;



export default CardProduct;