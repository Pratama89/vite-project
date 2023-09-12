import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="py-5 flex justify-center ">    
        <CardProduct>
            <CardProduct.Header image="/img/Vacuum.png"></CardProduct.Header>
            <CardProduct.Body title="Vacuum Retainer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum quae voluptates, pariatur soluta ipsa facere! Iusto eveniet quo repellendus laborum, saepe alias aspernatur repudiandae.
            </CardProduct.Body>
            <CardProduct.Footer price="1.850.000"></CardProduct.Footer> 
        </CardProduct>
        <CardProduct>
            <CardProduct.Header image="/img/Vacuum.png"></CardProduct.Header>
            <CardProduct.Body title="Vacuum Retainer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum quae voluptates, pariatur soluta ipsa facere! Iusto eveniet quo repellendus laborum, saepe alias aspernatur repudiandae.
            </CardProduct.Body>
            <CardProduct.Footer price="1.850.000"></CardProduct.Footer> 
        </CardProduct>
    </div>
    );
};

export default ProductsPage;