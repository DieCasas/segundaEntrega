import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (  
    <div>
      <div className='carrito'>
        <CartWidget />
      </div>
      <div className='navBar'>
        <button>Home</button>
        <button>Tradicionales</button>
        <button>Veggie</button>
      </div>
    </div>
  )
}

export default NavBar