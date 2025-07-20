import React from 'react'
import productBakery from './data/productBakery.json'


function Sweets() {

    
      const showProductgrocery = productBakery.map (
    (item) =>(
<div className='ProductCard'>
                <img src={item.images[0]}></img>
                <div className='productName'>
                  <h2>{item.title} </h2>
                   {/* <p>{item.quantity}kg</p> */}
                </div>
          
                 <p className='productPrice'>₹ {item.price}</p>
                
                 <p className='productDiscount'> {item.brand}</p>
                 {/* <div className='rating'>
                      <i class="fa-solid fa-star"></i><p> 4.5(125)</p>
                 </div> */}
                 <div className='addSection'>
                  
                  <i class="fa-regular fa-bookmark"></i>
                  <button className='add_button'>Add</button>
                 </div>
                  
               </div>
    )
  )


  return (
    <div className='bannerSection'>
 
      {/* Fruits and vegetables section below---------*/}
      <div className='displayProduct'>
        <div className='productRow'>
            <div className='productTitle'>
              <h2>Fruits and vegetables</h2>
              <a> See More</a>
            </div>
            <div className='productList'>

              {showProductgrocery}
            </div>
           
        </div> {/*Row end*/}

      </div>

    </div>
  )
}

export default Sweets