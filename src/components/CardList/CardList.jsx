import React, { useState } from 'react'
import Card from './Card'
import { useEffect } from 'react';

const CardList = () => {

  const [food, setFood] = useState([])

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
	  .then(response => response.json())
	  .then((data) => setFood(data))
	  .catch(err => console.error(err));
  }, [])



  return (
    <div className='containerCards' >
      {console.log(food)}
        {food.map((user) => {
                return <Card key={user.id} info={user} />;
            })}
    </div>
  )
}

export default CardList 