import Item from "./Item";
import React from "react";

const ItemList = ({ food }) => {
  return (
    <div className="containerCards">
      {food.map((user) => {
        return <Item key={user.id} info={user} />;
      })}
    </div>
  );
};

export default React.memo(ItemList);
