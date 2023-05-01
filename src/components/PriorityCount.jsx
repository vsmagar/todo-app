import React from "react";
import { Badge, Button, Stack } from "react-bootstrap";

export default function PriorityCount({ getData, filterTodos }) {
  return (
    <>
      <Stack
        className="justify-content-between mt-4 mb-4"
        direction="horizontal"
      >
        <Button onClick={(e) => filterTodos("all")} variant="info">
          Total
          <Badge bg="light" text="dark" className="ms-2">
            {getData.filter((item) => item.pariority).length}
          </Badge>
        </Button>
        <Button onClick={(e) => filterTodos("High")} variant="danger">
          High
          <Badge bg="light" text="dark" className="ms-2">
            {getData.filter((item) => item.pariority == "High").length}
          </Badge>
        </Button>
        <Button onClick={(e) => filterTodos("Med")} variant="warning">
          Med
          <Badge bg="light" text="dark" className="ms-2">
            {getData.filter((item) => item.pariority == "Med").length}
          </Badge>
        </Button>
        <Button onClick={(e) => filterTodos("Low")} variant="success">
          Low
          <Badge bg="light" text="dark" className="ms-2">
            {getData.filter((item) => item.pariority == "Low").length}
          </Badge>
        </Button>
      </Stack>
    </>
  );
}
