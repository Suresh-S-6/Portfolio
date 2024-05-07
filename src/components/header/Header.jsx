"use client";
import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image src="/Hero/Logo.svg" width={188} height={37} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Me</Nav.Link>
            <Nav.Link href="#action3">projects</Nav.Link>
          </Nav>
          <button href="/" className="c-btn">
            Contact Me
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
