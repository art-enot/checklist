import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SpeechForm from './SpeechForm';
import EntriesList from './EntriesList';
import About from './About';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><FontAwesomeIcon icon="fa-solid fa-list-check" /> ЧЕКЛИСТ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Направление" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Проверка объекта</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Проверка ТС
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Проверка оборудования</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">О сервисе</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
    <Route path="/" element={
        <div>
          <Container className="my-5">
          <h2 className="mb-5">Проверка объекта</h2>
          <SpeechForm />
          <EntriesList />
          </Container>
        </div>
        } />
        
        <Route path="/about" element={<About />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
library.add(fab, fas, far)