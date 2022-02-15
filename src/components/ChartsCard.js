import react from "react";
import { PureComponent } from "react";

import { OrderProvider, useOrders } from "../contexts/OrderContext";
import OrderCard from "./OrderCard";
import { currencyFormatter } from "../utils";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  Cell,
} from "recharts";
const ChartsCard = () => {
  const { orders } = useOrders();
  const amount = orders.reduce((total, order) => total + order.price, 0);
  const gain = orders
    .filter((or) => or.paid === true)
    .reduce((total, order) => total + order.price, 0);
  return (
    <div className="charts">
      <div className="parametri">
        <div className="ukupno">
          <h1>Ukupno {currencyFormatter.format(amount)}</h1>
        </div>
        <div className="ukupno">
          <h1>Dobit {currencyFormatter.format(gain)}</h1>
        </div>
      </div>
      <div className="dijagram" width="100%" height="100%">
        <h2>Prikaz prodaje</h2>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="price"
            isAnimationActive={false}
            data={orders}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />

          <Tooltip />
        </PieChart>
      </div>
      <div className="dijagrami">
        <div>
          <BarChart
            width={500}
            height={300}
            data={orders}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="customer" fill="#8884d8" />
            <Bar dataKey="price" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default ChartsCard;
