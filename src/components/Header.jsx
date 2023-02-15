import React from 'react'
import { Heading } from '@chakra-ui/react'

const Header = () => {
  return (
    <div className='header'>
      <h6 > CASA DE COMIDAS </h6>
      <Heading size='lg' fontSize='70px' color='brown ' className='tituloPresentacion'>
           COMIDITAS
      </Heading>
    </div>
  )
}

export default Header