import { Image, Text, ButtonGroup } from "@chakra-ui/react";
import Count from "./Count";

const ItemDetail = ({ foods, id }) => {
  return (
    <div className="containerCardDetail">
      <div className="card">
        <div className="coverCard">
          <Image
            src={foods.img}
            maxW={{ md: "270px" }}
            boxSize="300px"
            objectFit="cover"
            alt="Green double couch with wooden legs"
          />
        </div>
        <div className="descriptionCard">
          <Text as="b">{foods.name}</Text>
          <p>{foods.details}</p>
        </div>
        <div className="footerCard">
          <Text color="red.700" fontSize="xl">
            ${foods.price}
          </Text>
          <Text>Stock: {foods.stock + 1}</Text>
          <hr />
          <ButtonGroup spacing="1" className="footer">
            <Count
              name={foods.name}
              price={foods.price}
              id={id}
              stock={foods.stock}
              img={foods.img}
            />
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
