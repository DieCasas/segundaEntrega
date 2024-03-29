import React from "react";
import { Image, Text, ButtonGroup, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <div className="containerCards">
      <div className="card">
        <div className="coverCard">
          <Image
            src={info.img}
            maxW={{ md: "270px" }}
            boxSize="300px"
            objectFit="cover"
            alt="Green double couch with wooden legs"
          />
        </div>
        <div className="descriptionCard">
          <Text as="b">{info.name}</Text>
          <p>{info.details}</p>
        </div>
        <div className="footerCard">
          <Text color="red.700" fontSize="xl">
            ${info.price}
          </Text>
          <hr />
          <ButtonGroup spacing="1" className="footer">
            <Link to={`/item/${info.id}`}>
              <Button variant="solid" colorScheme="blackAlpha">
                Details
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Item;
