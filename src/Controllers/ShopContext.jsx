import { createContext, useState } from "react";
export const CreateContext = createContext();

const MyContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [ids, setIds] = useState();
  const [category,setCategory ] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]); 
  };

  const handleRemove = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredItems);
  };
  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return total;
  };

  const contextValues = {
    ids, setIds,
    setCategory,
    category,
    cartItems,
    setCartItems,
    addToCart,
    handleRemove,
    calculateTotal,
  };

  return (
    <CreateContext.Provider value={contextValues}>
      {children}
    </CreateContext.Provider>
  );
};

export default MyContext;
