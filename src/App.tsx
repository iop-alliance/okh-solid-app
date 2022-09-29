import Header from './Header';
import { AuthProvider } from "./businessLogic/authGlobalHook";

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <Header />
      </div>
    </AuthProvider>
  );
}

export default App;
