import './styles/App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Presentation from './pages/Presentation';
import Routage from './pages/Routage';

function App() {
  
  //JSX
  return (
    <div className="App">
      
      <BrowserRouter>

        <Routes> {/*C'est à l'interieur de cette balise que Reacrt va changer les routes */}
          <Route path='/' element={<Presentation />}></Route>
          <Route path="/routing" element={<Routage/>} ></Route>
        </Routes>

      
      </BrowserRouter>

    </div>
  );

}

export default App;
