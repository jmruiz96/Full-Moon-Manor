import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Auth from '../../utils/auth';
import './header.css';

const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container fluid id='container'>
            <Navbar.Brand as={Link} to='/' id='container'>
              Haunted House
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar' />
            <Navbar.Collapse id='navbar' className='justify-content-end'>
              <Nav className='ml-auto'>
                {Auth.loggedIn() ? (
                  <>
                    <Nav.Link as={Link} to='/me'>
                      See Your Past Adventures
                    </Nav.Link>
                    <Nav.Link onClick={() => {
                      navigate('/');
                      Auth.logout()
                    }}
                    >Logout</Nav.Link>
                  </>
                ) : (
                  <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Modal
          size='lg'
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby='signup-modal'>
          <Tab.Container defaultActiveKey='login'>
            <Modal.Header closeButton>
              <Modal.Title id='signup-modal'>
                <Nav variant='pills'>
                  <Nav.Item>
                    <Nav.Link eventKey='login' className='darkbgd'>Login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='signup'className='darkbgd'>Sign Up</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Tab.Content>
                <Tab.Pane eventKey='login'>
                  <Login handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
                <Tab.Pane eventKey='signup'>
                  <Signup handleModalClose={() => setShowModal(false)} />
                </Tab.Pane>
              </Tab.Content>
            </Modal.Body>
          </Tab.Container>
        </Modal>
      </>
      );
};

      export default AppNavbar;
