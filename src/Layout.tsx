import { useEffect } from 'react';
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProfileDropdown from './components/ProfileDropdown';
import { POST_LOGIN_REDIRECT, useAuth } from "./businessLogic/authGlobalHook";

function Layout() {
  const navigate = useNavigate();
  const { session, ranInitialAuthCheck } = useAuth();

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
      <Navbar bg="light" variant="light" expand="lg" style={{ borderLeft: "8px solid #f4cd54", borderBottom: "1px solid rgb(224 226 228)" }}>
        <Container>
          <Link to="/" className='navbar-brand'>
            <img
                alt=""
                src="/images/okh-solid-logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            OKH Solid App
            <sub style={{fontSize: "50%"}}>(beta)</sub>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav className="me-auto">
              <NavLink to="/" className='nav-link'>Home</NavLink>
              <NavLink to="/about" className='nav-link'>About</NavLink>
            </Nav>
            <Nav>
              <ProfileDropdown />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className='mt-3 mb-5'>
        {ranInitialAuthCheck && <Outlet />}
      </Container>
    </div>
  );
}

export default Layout;
