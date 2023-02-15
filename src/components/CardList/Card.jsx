import React from 'react'
import { Card, CardBody, CardFooter, Stack, Image, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import Contador from '../Contador'


const card = ({ info }) => {
  return (
  <Card maxW='lg'>
      <CardBody>
        <Image
          src={info.image}
          boxSize='500px'
          objectFit='no repeat'
          alt='Green double couch with wooden legs'
          borderRadius='sm'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{info.title}</Heading>
          <Text>
            {info.apodo}
          </Text>
          <Text color='blue.600' fontSize='2x1'>
            ${info.price}
          </Text>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Contador />
        <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default card