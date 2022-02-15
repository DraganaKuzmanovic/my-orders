import { Form, Modal, Button, Stack } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useOrders } from "../contexts/OrderContext";
import { faPrayingHands } from "@fortawesome/free-solid-svg-icons";

export default function ViewOrderModal({ orderId, handleClose }) {
  const { orders, deleteOrder, addOrder, setOrders, handleChange } =
    useOrders();

  const order = orders.find((or) => or.id === orderId);
  //clicked order
  return (
    <Modal show={orderId != null} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Račun broj #{order?.id.substring(1, 6)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack direction="horizontal" gap="2">
          <div>{order?.customer}</div>
        </Stack>
        <Stack direction="horizontal" gap="2">
          <div>{order?.date}</div>
          <div>{order?.price}</div>
        </Stack>

        <Form.Check
          type="switch"
          id="paid"
          label="Plaćeno"
          checked={order?.paid || ""}
          onChange={() => {
            handleChange(orderId);
          }}
        />

        <div className="d-flex justify-content-end">
          <Button
            variant="outline-danger"
            onClick={() => {
              deleteOrder(order);
              handleClose();
            }}
          >
            Izbriši
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
