
import { useEffect } from 'react';
import './App.css';
import StockRow from './StockRow.js';
import { getStocks } from './Api/Api.js';
import { useState } from 'react';
function App() {
  const [stock, setStock] = useState([]);
  useEffect(() => { 
    getStocks().then((response) => {
      setStock(response.data);
    });
  }
  , []);

  return (
    <div className="App">
    <h1>WELCOME TO STOCK</h1>
     <StockRow stock={stock} />
    </div>
  );
}

export default App;
