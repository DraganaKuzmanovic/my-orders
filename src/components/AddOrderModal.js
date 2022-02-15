import { Form, Modal, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import { useOrders } from "../contexts/OrderContext";

export default function AddOrderModal({
  show,
  handleClose,
  value,
  handleToggle,
}) {
  //data from the DOM
  const customerRef = useRef();
  const priceRef = useRef();
  const dateRef = useRef();

  //data from the contexts
  const { addOrder } = useOrders();

  //what to do when submit
  function handleSubmit(e) {
    e.preventDefault();
    addOrder({
      customer: customerRef.current.value,
      price: parseFloat(priceRef.current.value),
      date: dateRef.current.value,
      paid: value,
    });
    //close when insert all data
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Nova narudžba</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="customer">
            <Form.Label>Naziv kupca</Form.Label>
            <Form.Control ref={customerRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Cijena proizvoda</Form.Label>
            <Form.Control ref={priceRef} type="number" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Rok za isporuku narudžbe</Form.Label>
            <Form.Control ref={dateRef} type="date" required />
          </Form.Group>
          <Form.Check
            type="switch"
            controlId="paid"
            label="Plaćeno"
            onChange={handleToggle}
          />

          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Dodaj
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
