import Button from "../components/Elements/Button";

const ProductsPage = () => {
  return (
    <div className="border text-center w-64 h-full mx-auto mt-2 rounded-md shadow-md ">
      <div className="mt-3">
        <h1 className="font-bold">Produk</h1>
        <div className="max-w-sm  mt-5 mx-2 mb-5 ">
            <a href="https://www.tokopedia.com/pharmadent/dental-lab-vacuum-former-forming-molding-machine-equipment">
            <img src="/img/Vacuum.png" alt="product" className="rounded-md bg-blue-300" />
            </a>
            <div className="mt-2 text-sm">
              <h2 className="text-xl font-semibold">Vacuum</h2>
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus cupiditate earum eum, tenetur laudantium.</p>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-3xl font-bold ">1.825.000</span>
            </div>
              <Button ClassName="bg-blue-500 hover:bg-blue-600" >Masuk ke Keranjang</Button>
            </div>
        </div>
    </div>
    // return (
    // <CardProduct>
    //     <CardProduct.Header></CardProduct.Header>
    //     <CardProduct.Body></CardProduct.Body>
    //     <CardProduct.Footer></CardProduct.Footer>
    // </CardProduct>
        
    )
}

export default ProductsPage;