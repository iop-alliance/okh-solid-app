import LoginHeader from './LoginHeader';
import { AuthProvider } from "./businessLogic/authGlobalHook";

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <h2>OKH Solid App</h2>
        <LoginHeader />
      </div>
    </AuthProvider>
  );
}

export default App;
