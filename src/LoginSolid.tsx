import React, { FunctionComponent, useCallback, useContext, useEffect, useState } from 'react';
import { useAuth } from "./businessLogic/authGlobalHook";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { login } from '@inrupt/solid-client-authn-browser';

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


const LoginSolid: FunctionComponent<{}> = ({}) => {

  const { login } = useAuth();

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
      <Row>
        <Col md={6}>
          <h1>Store your hardware projects on your Solid Pod, not with a company</h1>
        </Col>
        <Col md={6}>
          <h2 className='mb-4'>Log in with a Solid Pod</h2>

          {providerData.map((provider) => (
            <Row className='' key={provider.issuer}>
              <Col>
                <h4>Use {provider.name}</h4>
                <Row>
                  <Col>
                  <a href={provider.registerLink} target="_blank" rel="noreferrer" className='btn btn-sm btn-outline-primary rounded w-100'>Get a Pod</a>
                  </Col>
                  <Col>
                    <Button 
                      variant="primary" className='btn-sm rounded w-100' 
                      onClick={() => loginCallBack(provider.issuer)}>
                        Log In
                    </Button>
                  </Col>
                  <hr className='mt-4' />
                </Row>
              </Col>
            </Row>
          ))}

          {/* <Row className='mb-3'>
            <Col>
              <h4>Use inrupt.net</h4>
              <Row>
                <Col>
                  <a href="https://inrupt.net/register" target="_blank" rel="noreferrer" className='btn btn-sm btn-outline-primary rounded w-100'>Get a Pod</a>
                </Col>
                <Col>
                  <a href="/#" className='btn btn-sm btn-primary rounded w-100'>Log In</a>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>
              <h4>Use solidcommunity.net</h4>
              <Row>
                <Col>
                <a href="https://solidcommunity.net/register" target="_blank" rel="noreferrer" className='btn btn-sm btn-outline-primary rounded w-100'>Get a Pod</a>
                </Col>
                <Col>
                  <a href="/#" className='btn btn-sm btn-primary rounded w-100'>Log In</a>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>
              <h4>Use solidweb.me</h4>
              <Row>
                <Col>
                <a href="https://solidweb.me/idp/register/" target="_blank" rel="noreferrer" className='btn btn-sm btn-outline-primary rounded w-100'>Get a Pod</a>
                </Col>
                <Col>
                  <a href="/#" className='btn btn-sm btn-primary rounded w-100'>Log In</a>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Use solidweb.org</h4>
              <Row>
                <Col>
                  <a href="https://solidweb.org/register" target="_blank" rel="noreferrer" className='btn btn-sm btn-outline-primary rounded w-100'>Get a Pod</a>
                </Col>
                <Col>
                  <a href="/#" className='btn btn-sm btn-primary rounded w-100'>Log In</a>
                </Col>
              </Row>
            </Col>
          </Row> */}
        </Col>
      </Row>
    </>
  )
};

export default LoginSolid;
