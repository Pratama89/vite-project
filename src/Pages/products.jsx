/* eslint-disable react/jsx-key */
import CardProduct from "../components/Fragments/CardProduct";

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

const ProductsPage = () => {
    return (
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
    );
};

export default ProductsPage;