import Header from './Header';
import Dashboard from './Dashboard';
import { AuthProvider } from "./businessLogic/authGlobalHook";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    </AuthProvider>
  );
}

export default App;
