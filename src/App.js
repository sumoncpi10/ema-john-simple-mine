
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Order from './Components/Orders/Order';
import Shop from './Components/Shop/Shop';
import app from './firabase.init';
import { getAuth } from "firebase/app";
const auth = getAuth(app);

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Order />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>

    </div>
  );
}

export default App;
