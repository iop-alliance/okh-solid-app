import { useEffect, useState } from 'react';
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginHeader from './LoginHeader';
import Loading from './Loading';
import { POST_LOGIN_REDIRECT, useAuth } from "./businessLogic/authGlobalHook";

function Layout() {
  const navigate = useNavigate();
  const { session } = useAuth();

  useEffect(() => {
    const postLoginRedirect = window.localStorage.getItem(POST_LOGIN_REDIRECT);
    if (postLoginRedirect && session.isLoggedIn) {
      const url = new URL(postLoginRedirect);
      navigate(`${url.pathname}${url.search}${url.hash}`);
      window.localStorage.removeItem(POST_LOGIN_REDIRECT);
    }
  }, [navigate, session]);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
                alt=""
                src="/okh-solid-logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            OKH Solid App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav className="me-auto">
              <NavLink to="/" className='nav-link'>Home</NavLink>
            </Nav>
            <Nav>
              <LoginHeader />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className='my-3'>
        <Outlet />
      </Container>
    </div>
  );
}

export default Layout;
