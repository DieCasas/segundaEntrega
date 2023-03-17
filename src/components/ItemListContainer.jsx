import Data from "../../data.json";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataBase = getFirestore();

    const Collection = collection(dataBase, "Burgers");

    getDocs(Collection).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    });
  }, []);

  const categoryFilter = products.filter((food) => food.category === category);
  return (
    <div>
      {category ? (
        <ItemList food={categoryFilter} />
      ) : (
        <ItemList food={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
