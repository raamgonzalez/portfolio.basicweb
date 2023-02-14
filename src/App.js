import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import GlobalContextProvider from './context/GlobalContext';
import Rutas from './routes/Rutas';

function App() {


  return (
    <>
    
      <Router>
        <GlobalContextProvider>
          <Rutas/>
        </GlobalContextProvider>
      </Router>

    </>
  );
}

export default App;
