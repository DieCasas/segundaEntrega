import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Button } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div>
        <Button color='black' colorScheme='brown'><FontAwesomeIcon icon= {faCartShopping} className="img"/><span>4</span></Button>
    </div>
  )
}

export default CartWidget