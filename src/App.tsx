import React, { useEffect, useState } from 'react';
import {
  handleIncomingRedirect,
  ISessionInfo
} from '@inrupt/solid-client-authn-browser';
import LoginHeader from './LoginHeader';

function App() {
  const [sessionInfo, setSessionInfo] = useState<ISessionInfo | undefined>();
  useEffect(() => {
    handleIncomingRedirect().then((sessionInfo) => {
      setSessionInfo(sessionInfo);
    })
  }, []);

  return (
    <div className="App">
      <h2>OKH Solid App</h2>
      <LoginHeader sessionInfo={sessionInfo} />
    </div>
  );
}

export default App;
