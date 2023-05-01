import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            Todo
          </Link>
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
         
            <Link className="nav-link" to="/register">
              Register
            </Link>
            <Link className="nav-link" to="/account">
              Account
            </Link>
            <Link className="nav-link" to="/addtodo">
              AddTodo
            </Link>
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
