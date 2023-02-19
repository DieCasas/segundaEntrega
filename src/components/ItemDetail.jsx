import {
  Image,
  Text,
  ButtonGroup, Button
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import Count from "./Count";

const ItemDetail = ({ foods }) => {
  const { id } = useParams();

  const foodFilter = foods.filter((food) => food.id == id);
  return (
    <>
      {foodFilter.map((food) => (
        <div key={food.id} className='containerCardDetail'>
          <div className="card">
            <div className="coverCard">
                <Image src={food.img} maxW={{ md: '270px' }}
                      boxSize='300px'
                      objectFit='cover'
                      alt='Green double couch with wooden legs'/>
            </div>
            <div className='descriptionCard'>
                <Text as='b'>{food.name}</Text>
                <p>{food.details}</p>
            </div>
            <div className="footerCard">
                <Text color="red.700" fontSize="xl">
                      {food.price}
                </Text>
                <hr />
                <ButtonGroup spacing='1' className='footer'>
                  <Count />
                  <Button> Add to cart </Button>
                </ButtonGroup>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
