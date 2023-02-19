import React from 'react'
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Container,
  Box,
  Textarea,
  Button
} from '@chakra-ui/react'


const Cart = () => {
  return (
    <div>
      <Container className="cartContainer">
      <FormControl>
        
          <FormLabel>First name</FormLabel>
          <Input type="text" />
          <FormLabel>Last name</FormLabel>
          <Input type="text" />
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        
        <FormLabel>What do you want to tell us?</FormLabel>
        <Textarea></Textarea>
        <Box className="btnSend">
          <Button colorScheme="teal" variant="outline">
            Send information
          </Button>
        </Box>
      </FormControl>
    </Container>
    </div>
  )
}

export default Cart