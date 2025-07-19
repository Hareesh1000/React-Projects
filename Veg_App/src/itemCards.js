import React from 'react';
import './App.css'; 

function ItemCards({ vegItems }) {

  const allItems = vegItems.map(
    (item)=>(
  <div className="card" key={item.id} >
          <img src={item.image}></img>
          <h3>{item.name}</h3>
          <p> Price: ₹{item.price}</p>
          <button className="add-button">ADD</button>
      </div>
    )
  )

// const productCards = vegItems.map((item) => 
// (
//     <div className="card" key={item.id}>
//       <img src={item.image} alt={item.name} />
//       <h3>{item.name}</h3>
//       <p>Price: ₹{item.price}</p>
//       <button className="add-button">ADD</button>
//     </div>
// )
// );

  

  return (

      <div className='cards_container'>{allItems}</div>

  );

}

export default ItemCards