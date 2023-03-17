import { useContext, useState } from "react";
import { Button } from "@chakra-ui/react";
import { CartContext } from "../context/ContextoCarrito";
import Swal from "sweetalert2";

const Count = ({ stock, id, price, name, img }) => {
  const [prueba, setPrueba] = useContext(CartContext);
  const [counter, setCounter] = useState(0);

  const up = () => {
    counter <= stock
      ? setCounter(counter + 1)
      : Swal.fire({
          icon: "error",
          title: "No hay stock",
          text: "No poseemos stock suficiente para agregar al carrito",
        });
  };

  const down = () => {
    counter >= 1
      ? setCounter(counter - 1)
      : Swal.fire({
          icon: "error",
          title: "No se pueden mostrar numeros negativos",
        });
  };

  const addToCart = () => {
    setPrueba((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + counter };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: counter, price, name, img }];
      }
    });
  };

  return (
    <>
      <div className="containerButton">
        <Button onClick={down}>-</Button>
        <div className="boton">
          <p>{counter}</p>
        </div>
        <Button onClick={up}>+</Button>
        <Button onClick={addToCart}> Add to cart</Button>
      </div>
    </>
  );
};

export default Count;
