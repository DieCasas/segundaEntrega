import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/ContextoCarrito";

const CartWidget = () => {
  const [prueba] = useContext(CartContext);

  const quantity = prueba.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <div>
      <Button color="black" colorScheme="brown">
        <FontAwesomeIcon icon={faCartShopping} className="img" />
        <span> {quantity} </span>
      </Button>
    </div>
  );
};

export default CartWidget;
