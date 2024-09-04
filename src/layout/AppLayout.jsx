import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import "./AppLayout.css";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyWord = (event) => {
    event.preventDefault();
    //url을 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };

  return (
    <div className="nav-background">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              width={93}
              height={25.125}
              src="https://noona-netflix-react-query.vercel.app/netflixLogoSvg.svg"
              alt="Netflix Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" style={{ color: "white" }}>
                홈
              </Nav.Link>
              <Nav.Link href="/movies" style={{ color: "white" }}>
                영화
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyWord}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button
                className="custom-red-button"
                variant="outline-success"
                type="submit"
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
