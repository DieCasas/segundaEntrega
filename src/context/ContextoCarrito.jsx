import { createContext, useState } from "react";

export const CartContext = createContext(null);

const ContextoCarritoProvider = ({ children }) => {
  const [prueba, setPrueba] = useState([]);

  return (
    <CartContext.Provider value={[prueba, setPrueba]}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextoCarritoProvider;
