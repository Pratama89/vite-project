import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = (props) => {
    const { products} = props;
    const cart = useSelector((state) => state.cart.data);
    // const [totalPrice, setTotalPrice] = useState(0);
    const {isDarkMode} = useContext(DarkMode);
    const dispatch = useTotalPriceDispatch();
    const { total } = useTotalPrice();

    useEffect (() => {
        if(products.length > 0 && cart.length > 0) {
          const sum = cart.reduce((acc, item) => {
            const product = products.find((product) => product.id === item.id);
            return acc + product.price * item.qty;
          }, 0);
          dispatch({
            type: "UPDATE", 
            payload: {total: sum}
          });
          // setTotalPrice(sum);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }, [cart, products]);

      const totalPriceRef = useRef(null);
    useEffect(() => {
        if(cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
        }, [cart]);

    return (
        <div>
            <table className={`text-left table-auto border-separate border-spacing-5 ${isDarkMode && "text-white"}`}>
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
                    {total.toLocaleString('id-ID', 
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
    )
}

export default TableCart;