import { useEffect, useState } from 'react';
import './App.css';

function Shop() {
  useEffect(()=>{
    fetchItems()
  },[]);
 
  const [item,setItem]=useState([]);
  
  const fetchItems = async()=>{
  const data = await fetch('https://fakestoreapi.com/products');
  
  const items = await data.json();
  console.log(items);
  setItem(items);
};

  return (
    <div>
      {item.map(item =>(
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </div>
  );
}

export default Shop;
