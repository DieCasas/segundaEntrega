import Data from '../../data.json';
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { category } = useParams();

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  const catFilter = Data.filter((food) => food.category === category);
  return (
    <div>
      {category ? <ItemList food={catFilter} /> : <ItemList food={Data} />}
    </div>
  );
};

export default ItemListContainer;
