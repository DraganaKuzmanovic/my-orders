import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function OrderCard({
  customer,
  price,
  date,
  paid,
  gray,
  onViewOrderClick,
}) {
  const classNames = [];
  let newDate = new Date();
  let todaysDate = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  //if today's date is added make it red, so that I know that it needs to be shipped today
  if (
    date ===
    `${year}-${month < 10 ? `0${month}` : `${month}`}-${
      todaysDate < 10 ? `0${todaysDate}` : `${todaysDate}`
    }`
  ) {
    classNames.push("bg-danger", "bg-opacity-10");
  } else if (gray) {
    classNames.push("bg-light");
  }

  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex" direction="horizontal" gap={3}>
          <FontAwesomeIcon icon={faUser} />
          <div className="me-2">{customer}</div>
          <div className="d-flex align-items-baseline ms-auto">
            {currencyFormatter.format(price)}
          </div>
        </Card.Title>
        <Stack className="d-flex" direction="horizontal">
          <div className="me-2">{date}</div>
          <div className="me-2 ms-auto">{paid}</div>
        </Stack>

        <Stack direction="horizontal" gap="1" className="mt-4">
          <Button onClick={onViewOrderClick} variant="outline-secondary">
            Vidi narudžbu
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
