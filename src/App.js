
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';


function App() {
  const [count, setCount] = useState(0);
  const addToCartButton = () =>{
    setCount(count + 1)
  }
  return (
    <div className="App">
     <Navbar count={count}></Navbar>
     <Products addToCartButton={addToCartButton}></Products>
    </div>
  );
}

export default App;
