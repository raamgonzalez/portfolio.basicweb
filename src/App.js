import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Rutas from './routes/Rutas';

function App() {
  return (
    <>
    
      <Router>
        <Rutas/>
      </Router>

    </>
  );
}

export default App;
