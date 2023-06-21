import React, { useState } from 'react';
import './App.css';
import ProdForm from './Component/ProdForm';
import ProdList from './Component/ProdList';



function App() {

  const[items, setItems]=useState([]);

  const addProd = (product)=> {
    setItems((prevItems) => {
      return [...prevItems, product];
    });
  };
  // console.log(items)
  let total = 0
  items.forEach(element => {
      total += parseInt(element.prodSp);
  });

  const onDeleteProd = (id) => {
    const updatedItems = items.filter((element) => element.id !== id);
    setItems(updatedItems);
  };


  return (
    <div>
      <ProdForm onAddProd={addProd}/>
      <ProdList itemList = {items} totalValue={total} onDlt={onDeleteProd} />
      <div style={{display: 'flex'}}>
        <h3>Total Value worth of Products:</h3><h4> Rs.{total}</h4>
      </div>
      
    </div>
  );
}

export default App;
