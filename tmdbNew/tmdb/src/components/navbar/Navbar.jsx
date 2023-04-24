import React, { useContext } from "react";
import logoDark from "../../assets/img/logoTMDB.svg";
import logoLight from '../../assets/img/logoTMDBlight.png'
import { BsMoonFill, BsSun } from "react-icons/bs";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ThemeContext } from "../../context/themeContext";

import "../../assets/css/navbar.css";

const Navbarr = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <Navbar className={darkMode ? "darkNav" : "lightNav"} variant={ "dark"} expand="lg">
      <Container>
        <Navbar.Brand href="/">
           <img
            alt=""
            src={logoDark}
            width="100"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">


          <NavDropdown title="Peliculas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Peliculas">
                Populares
              </NavDropdown.Item>
              <NavDropdown.Item href="/peliculas/topRated">
                Top rated
              </NavDropdown.Item>
              <NavDropdown.Item href="/peliculas/enCartelera">
                En cartelera
              </NavDropdown.Item>
            </NavDropdown>



            <NavDropdown title="Series" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/seriesPopulares">
                Populares
              </NavDropdown.Item>
              <NavDropdown.Item href="/seriesTopRated">
                Top rated
              </NavDropdown.Item>
            </NavDropdown>

            {/* <Nav.Link href="/series">Series de TV</Nav.Link> */}
          </Nav>

          <Nav className=" justify-content-end">
            <Nav.Link href="/login" className="color:'greenyellow' ">
              Login
            </Nav.Link>
          </Nav>
          <Navbar.Text>
            <div>
              <button
                onClick={toggleDarkMode}
                className={darkMode ? "DarModeBtn dark" : "DarModeBtn light "}
              >
                {darkMode ? (
                  <BsSun className="sun" />
                ) : (
                  <BsMoonFill className="moon" />
                )}
              </button>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
