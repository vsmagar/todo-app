import React from "react";
import { Badge, Button, Stack } from "react-bootstrap";

export default function CategoryCount({ getData }) {
  return (
    <Stack className="justify-content-between mt-4 mb-4" direction="horizontal">
      <Button variant="info">
        study
        <Badge bg="light" text="dark" className="ms-2">
          {getData.filter((item) => item.category == "study").length}
        </Badge>
      </Button>
      <Button variant="danger">
        persnal
        <Badge bg="light" text="dark" className="ms-2">
          {getData.filter((item) => item.category == "persnal").length}
        </Badge>
      </Button>
      <Button variant="warning">
        office
        <Badge bg="light" text="dark" className="ms-2">
          {getData.filter((item) => item.category == "office").length}
        </Badge>
      </Button>
      <Button variant="success">
        college
        <Badge bg="light" text="dark" className="ms-2">
          {getData.filter((item) => item.category == "college").length}
        </Badge>
      </Button>
    </Stack>
  );
}
