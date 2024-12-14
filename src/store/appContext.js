import React, { createContext, useState, useContext } from "react";
import data from "../data";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState(data);
  const [filters, setFilters] = useState({
    category: "",
    scoreRange: [0, 10000],
  });
  const [sort, setSort] = useState({ key: "", order: "asc" });
  const updateFilter = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };
  const updateSort = (key, order) => {
    setSort({ key, order });
  };

  const [modalItem, setModalItem] = useState(null);

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        filters,
        setFilters,
        sort,
        setSort,
        modalItem,
        setModalItem,
        updateFilter,
        updateSort,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useDashboardData = () => {
  return useContext(AppContext);
};
