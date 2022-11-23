import './styles/App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Presentation from './pages/Presentation';
import Routage from './pages/Routage';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Static from './pages/Static';
import State from './pages/State';
import Props from './pages/Props';
import { BackBtn } from './components/Buttons';

function App() {
  
  //JSX
  return (
    <div className="App">
      
      <BrowserRouter>
        {/*
          Tous les composants ou le JSX passé dans BrowerRouter, en dehors de la balise Routes, est du contenu static : commun à toutes les pages
          Plus précisément, il ne se rechargera pas quanf on clique le lien
        
        */}
        <Logo />
        <Navigation />
        <Routes> {/*C'est à l'interieur de cette balise que Reacrt va changer les routes */}
          <Route path='/' element={<Presentation />}></Route>
          <Route path="/routing" element={<Routage/>} ></Route>
          <Route path="/static" element={<Static/>} ></Route>
          <Route path="/hooks" element={<State/>} ></Route>
          <Route path='/props' element={<Props/>}></Route>

        </Routes>

          <BackBtn />
      </BrowserRouter>

    </div>
  );

}

export default App;
