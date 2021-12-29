import { Login } from './Components/Login';
import { BasicMenu } from './Components/BasicMenu';
import { useAuth0 } from '@auth0/auth0-react';
import './Components/App.css';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <BasicMenu/>) : (
        <Login/>
      )}
    </div>
  );
}

export default App;
