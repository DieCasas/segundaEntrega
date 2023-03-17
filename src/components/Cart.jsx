import { useContext } from "react";
import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Container,
  Button,
  Center,
  CardHeader,
} from "@chakra-ui/react";
import { CartContext } from "../context/ContextoCarrito";
import { Link } from "react-router-dom";
import Order from "./Order";

const Cart = () => {
  const [prueba, setPrueba] = useContext(CartContext);

  const deleteItemCart = (idABorrar) => {
    setPrueba(prueba.filter((item) => item.id != idABorrar));
  };

  const deleteAll = () => {
    setPrueba(prueba.filter((item) => item.id === prueba.id));
  };

  return (
    <div>
      <div className="containerCardCart">
        {prueba.map((user) => {
          return (
            <div className="cardCart" key={user.name}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={user.img}
                  alt="Caffe Latte"
                  className="imgCart"
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">{user.name}</Heading>

                    <Text py="2">Quantity: {user.quantity}</Text>
                    <Text>Total: ${user.price * user.quantity}</Text>
                  </CardBody>

                  <CardFooter>
                    <Button variant="solid" colorScheme="blue">
                      Buy Latte
                    </Button>
                  </CardFooter>
                  <Button onClick={() => deleteItemCart(user.id)}>Del</Button>
                </Stack>
              </Card>
            </div>
          );
        })}
      </div>
      {prueba.length === 0 ? (
        <Container className="cartContainer">
          <div className="cartEmpty">
            <Card align="center" minW="md">
              <CardHeader>
                <Heading size="md"> Cart Empty </Heading>
              </CardHeader>
              <CardBody>
                <Text>return to catalogue and continue buying</Text>
              </CardBody>
              <CardFooter>
                <Link to={"/"}>
                  <Button colorScheme="blue">Return to catalogue</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </Container>
      ) : (
        <>
          <Center>
            <Button onClick={() => deleteAll()} className="deleteAll">
              Delete All
            </Button>
          </Center>
          <Order />
        </>
      )}
    </div>
  );
};

export default Cart;
