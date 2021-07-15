import { useEffect, useState } from 'react';
import './App.css';

function ItemDetail({match}) {
    useEffect(()=>{
        fetchItem();
    },[]);
     
    const [item, setItem]=useState({});
      
    const fetchItem = async()=>{
      const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);

      setItem(await data.json())
   };
  console.log(item);

    return (
    <div>
        {/*
        {Object.keys(item).map(key => (
        <h3 key={key}>{item[key]}</h3>
      ))}
      */}
    {item.title && <h3>{item.title}</h3>}
    {item.image && <img src={item.image}/>}
    </div>
  );
}

export default ItemDetail;