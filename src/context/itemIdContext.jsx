import React, { createContext, useContext, useState } from "react";

const ItemIdContext = createContext();

export const ItemIdProvider = ({ children }) => {
  const [itemId, setItemId] = useState(null);

  const setItem = (id) => {
    setItemId(id);
  };

  return (
    <ItemIdContext.Provider value={{ itemId, setItem }}>
      {children}
    </ItemIdContext.Provider>
  );
};

export const useItemId = () => {
  return useContext(ItemIdContext);
};
