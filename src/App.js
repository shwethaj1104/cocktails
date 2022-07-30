import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route, } from 'react-router-dom';
import Home from './Home';
import Cocktails from './Cocktails';
import Navbar from './Navbar';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path='/' >
          <Route index element={<Navbar />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='cocktail' element={<Cocktails />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
