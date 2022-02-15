import React, { useContext, useState, useMemo, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/UseLocalStorage";

const OrderContext = React.createContext();
export function useOrders() {
  return useContext(OrderContext);
}

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useLocalStorage("orders", []);
  const [menuItems, setMenuItems] = useState(orders);
  const [filters, setFilters] = useState("");

  //filtering data when searching
  const filteredDatak = useMemo(() => {
    if (filters == "") return menuItems;
    return menuItems.filter((item) =>
      item.customer.toLowerCase().includes(filters)
    );
  }, [menuItems, filters]);

  //function for adding new orders
  function addOrder({ customer, price, date, paid }) {
    const classNames = [];
    let newDate = new Date();
    let todaysDate = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    setOrders((prevOrders) => {
      if (
        date ===
        `${year}-${month < 10 ? `0${month}` : `${month}`}-${todaysDate}`
      ) {
        return [{ id: uuidV4(), customer, price, date, paid }, ...prevOrders];
      }
      return [...prevOrders, { id: uuidV4(), customer, price, date, paid }];
    });
    //setMenuItems need to be changed too
    setMenuItems((prevOrders) => {
      if (
        date ===
        `${year}-${month < 10 ? `0${month}` : `${month}`}-${todaysDate}`
      ) {
        return [{ id: uuidV4(), customer, price, date, paid }, ...prevOrders];
      }
      return [...prevOrders, { id: uuidV4(), customer, price, date, paid }];
    });
  }
  //deleting orders
  function deleteOrder({ id }) {
    setOrders((prevOrders) => {
      return prevOrders.filter((order) => order.id !== id);
    });
    setMenuItems((prevOrders) => {
      return prevOrders.filter((order) => order.id !== id);
    });
  }

  //update switch
  const handleChange = (id) => {
    setOrders((prevState) =>
      prevState.map((order) => {
        if (order.id === id) {
          return {
            ...order,
            paid: !order.paid,
          };
        }
        return order;
      })
    );
    setMenuItems((prevState) =>
      prevState.map((order) => {
        if (order.id === id) {
          return {
            ...order,
            paid: !order.paid,
          };
        }
        return order;
      })
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        deleteOrder,
        setMenuItems,
        menuItems,
        filteredDatak,
        filters,
        setFilters,
        handleChange,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
