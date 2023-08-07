import './App.css';
import About from './Component/About';
import User from './Component/User';
import Technology from './Component/Technology';
import {Routes , Route} from 'react-router-dom';
import Contact from './Component/Contact';
import Head from './Component/Head';
import Projectt from './Component/Projectt';

function App() {
  return (
    <>
      <User/>
      <Routes>
        <Route path='/' element={<Head/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/technology' element={<Technology/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/project' element={<Projectt/>}></Route>
      </Routes> 
    </>
  );
}

export default App;
