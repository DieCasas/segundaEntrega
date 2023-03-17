import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const { id } = useParams();

  const [food, setFood] = useState([]);

  useEffect(() => {
    const dataBase = getFirestore();

    const item = doc(dataBase, "Burgers", id);
    getDoc(item).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setFood(docs);
      }
    });
  }, []);

  return <ItemDetail foods={food} id={id} />;
};

export default ItemDetailContainer;
