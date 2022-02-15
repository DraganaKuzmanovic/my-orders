import { Button } from "react-bootstrap";
import OrderCard from "./components/OrderCard";
import "./styles/app.scss";
import AddOrderModal from "./components/AddOrderModal";
import { useEffect, useState, useMemo } from "react";
import { useOrders } from "./contexts/OrderContext";
import ViewOrderModal from "./components/ViewOrderModal";
import Category from "./components/Category";
import ChartsCard from "./components/ChartsCard";
import SearchBar from "./components/SearchBar";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";

const Sales = () => {
  const [showAddOrderModal, setShowAddOrderModal] = useState(false);
  const [viewOrderModalId, setViewOrderModalId] = useState();
  const [value, setValue] = useState(false);

  const {
    orders,
    setOrders,
    menuItems,
    setMenuItems,
    filteredDatak,
    filters,
    setFilters,
  } = useOrders();

  //filtering date for the categories
  const filter = (datum) => {
    const filteredData = orders.filter(
      (item) => item.date.substr(5, 2) === datum
    );
    setMenuItems(filteredData);
  };
  return (
    <>
      <div className="container">
        <div className="secondContainer">
          <div className="header">
            <h1>Sve moje narudžbe</h1>
            <Button
              variant="primary"
              onClick={() => setShowAddOrderModal(true)}
            >
              Dodaj narudžbu
            </Button>
          </div>
          <div className="kategorije">
            <Category filter={filter} />
          </div>
          <SearchBar onSearch={(searchTerm) => setFilters(searchTerm)} />

          <div className="kartice">
            {filteredDatak.map((order) => {
              return (
                <OrderCard
                  key={order.id}
                  customer={order.customer}
                  price={order.price}
                  date={order.date}
                  paid={order.paid === false ? "nije plaćeno" : "plaćeno"}
                  onViewOrderClick={() => setViewOrderModalId(order.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <AddOrderModal
        show={showAddOrderModal}
        handleClose={() => setShowAddOrderModal(false)}
        value={value}
        handleToggle={() => setValue(!value)}
      />
      <ViewOrderModal
        orderId={viewOrderModalId}
        handleClose={() => setViewOrderModalId()}
      />
    </>
  );
};
export default Sales;
