import React from 'react'
import { useState } from 'react'
import { Button } from '@chakra-ui/react';
import Swal from 'sweetalert2';


const Count = () => {

  const [counter, setCounter] = useState(0);

  const up = () =>{
    counter <= 5 ? setCounter (counter + 1) : Swal.fire({
      icon: 'error',
      title: 'No hay stock',
      text: 'No poseemos stock suficiente para agregar al carrito'
    })
  }

  const down = () => {
    counter >= 1 ? setCounter (counter - 1) : Swal.fire({
      icon: 'error',
      title: 'No se pueden mostrar numeros negativos',
    })
  }

  return(

      <div className='containerButton'>
          <Button onClick={down} >-</Button>
          <div className='boton'>
              <p>
                  {counter}
              </p>
          </div>
          <Button onClick={up} >+</Button>
          
      </div>
      


  )
}

export default Count