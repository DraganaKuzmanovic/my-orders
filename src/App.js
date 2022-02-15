import "./styles/app.scss";
import { useEffect, useState, useMemo } from "react";
import { useOrders } from "./contexts/OrderContext";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";
import Sales from "./Sales";
import ChartsCard from "./components/ChartsCard";
function App() {
  return (
    <div className="all">
      <Nav />
      <div>
        <Switch>
          <Route path="/" exact>
            <Sales />
          </Route>
          <Route path="/charts">
            <ChartsCard />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
