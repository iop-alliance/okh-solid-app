import React, { FormEventHandler, FunctionComponent, useCallback, useState } from 'react';
import { useAuth } from "../businessLogic/authGlobalHook";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

interface IProviderData {
  name: string;
  issuer: string;
  registerLink: string;
}

const providerData: IProviderData[] = [
  // {
  //   name: 'solidweb.me',
  //   issuer: 'https://solidweb.me',
  //   registerLink: 'https://solidweb.me/idp/register/',
  // },
  {
    name: 'inrupt.net',
    issuer: 'https://inrupt.net',
    registerLink: 'https://inrupt.net/register',
  },
  {
    name: 'solidcommunity.net',
    issuer: 'https://solidcommunity.net',
    registerLink: 'https://solidcommunity.net/register',
  },
  {
    name: 'solidweb.org',
    issuer: 'https://solidweb.org',
    registerLink: 'https://solidweb.org/register',
  },
];


const LoginSolid: FunctionComponent<{}> = () => {

  const { login } = useAuth();

  const [oidcIssuer, setOidcIssuer] = useState('');
  const [showAuthorizationConfirm, setShowAuthorizationConfirm] = useState(false)

  const handleCloseAuthorizationConfirm = () => setShowAuthorizationConfirm(false);
  const handleShowAuthorizationConfirm = () => setShowAuthorizationConfirm(true);

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(async (e) => {
    e.preventDefault();
      login(oidcIssuer);
  }, [oidcIssuer, login]);


  const loginCallBack = useCallback(async (issuer: string) => {
    if (!issuer) {
    //     alert("Please provide an issuer.");
      return;
    }
    login(issuer);
    // if (oidcIssuer) {
    //     login(oidcIssuer);
    // } else {
    //     alert("Please provide an issuer.")
    // }
  }, [login]);

  return (
    <>
      <Row className='pt-3'>
        <Col md={6} className='pe-md-3'>
          <h1>Store your hardware project data and files on your Solid Pod, not with a company</h1>
          <h4 className='mt-4'>
            Visit the <Link to="/about">About</Link> page to learn more about this app.
          </h4>
        </Col>
        <Col md={6} className='ps-md-3'>
          <hr className='d-sm-block d-md-none' />
          <h2 className='mb-4'>Log in with a Solid Pod</h2>

          {providerData.map((provider) => (
            <Row className='' key={provider.issuer}>
              <Col>
                <h4>Use {provider.name}</h4>
                <Row>
                  <Col md={6}>
                    <a href={provider.registerLink} target="_blank" rel="noreferrer" 
                        className='btn btn-outline-primary rounded w-100 mb-3 mb-md-0'>
                      Get a Pod
                    </a>
                  </Col>
                  <Col md={6}>
                    <Button 
                      variant="primary" className='rounded w-100' 
                      onClick={() => {
                        setOidcIssuer(provider.issuer);
                        handleShowAuthorizationConfirm();
                      }}>
                        Log In
                    </Button>
                  </Col>
                  <hr className='mt-4' />
                </Row>
              </Col>
            </Row>
          ))}

          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formUrl">
              <h4>Use a custom Solid issuer</h4>
              <Form.Control 
                  type="text" 
                  placeholder="Solid Issuer (e.g. https://solidcommunity.net)"
                  onChange={e =>
                    setOidcIssuer(e.target.value)
                  }
                  value={oidcIssuer}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className='rounded w-100'>
              Log In with Custom Issuer
            </Button>
          </Form>
        </Col>
      </Row>

      <Modal show={showAuthorizationConfirm} onHide={handleCloseAuthorizationConfirm} size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          If you see the screen below, make sure that the default permissions as shown in the screenshot 
          below are selected. This will allow the OKH Solid app to add and manage the data and files 
          related to the projects you want to store in your Pod.
          <Image src="/images/solid-authorize.png" fluid className='border mt-3' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseAuthorizationConfirm} className="me-auto">
            Back to Issuer Selection
          </Button>
          <Button variant="primary" onClick={() => loginCallBack(oidcIssuer)}>
            OK, Continue to Login
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
};

export default LoginSolid;
