import Item from './Item'

const ItemList= ({food}) => {

  return (
    <div className='containerCards' >
        {food.map((user) => {
                return <Item key={user.id} info={user} />;
            })}
    </div>
  )
}

export default ItemList