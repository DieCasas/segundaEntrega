import ItemDetail from "./ItemDetail";
import { useState } from "react";
import data from '../../data.json'
import { useParams } from "react-router";
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [foods, setFoods] = useState([]);
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        const foodFilter = data.filter((food) => food.id == id);
        resolve(foodFilter);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      setFoods(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();
  return <ItemDetail foods={data} />;
};

export default ItemDetailContainer;
