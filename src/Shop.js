import { useEffect, useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
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
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.title}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
